import { useEffect, useRef, useState, useCallback } from 'react'
import { loadPdfJs } from '../utils/loadPdfJs'

const PDF_FILE = '/teams-down-the-years.pdf'

function simplifyYear(text) {
  return text.replace(/(\b\d{4})\s*[-\/]\s*\d{2,4}\b/g, '$1')
}

function NavButton({ onClick, disabled, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered && !disabled ? '#333' : 'none',
        border: '1px solid #444',
        color: hovered && !disabled ? '#fff' : '#aaa',
        fontSize: '22px',
        width: '44px',
        height: '44px',
        borderRadius: '4px',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.2 : 1,
        lineHeight: 1,
        transition: 'background 0.15s, color 0.15s',
      }}
    >
      {children}
    </button>
  )
}

export default function TeamsViewer() {
  const mainCanvasRef = useRef(null)
  const lightboxCanvasRef = useRef(null)
  const pdfDocRef = useRef(null)
  const renderingRef = useRef(false)
  const outlineMapRef = useRef({})
  const pageNumRef = useRef(1)

  const [pageLabel, setPageLabel] = useState('')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateButtons = useCallback(() => {
    setCanPrev(pageNumRef.current > 1)
    setCanNext(!!pdfDocRef.current && pageNumRef.current < pdfDocRef.current.numPages)
  }, [])

  const updateLabel = useCallback(() => {
    const map = outlineMapRef.current
    const num = pageNumRef.current
    setPageLabel(map[num] !== undefined ? simplifyYear(map[num]) : String(num))
  }, [])

  const getMainScale = useCallback((page) => {
    const vp = page.getViewport({ scale: 1 })
    const maxW = window.innerWidth - 48
    const maxH = window.innerHeight - 90
    return Math.min(maxW / vp.width, maxH / vp.height) * 0.75
  }, [])

  const renderPage = useCallback((num, canvas, ctx, scale) => {
    return pdfDocRef.current.getPage(num).then(page => {
      const s = scale || getMainScale(page)
      const vp = page.getViewport({ scale: s })
      canvas.width = vp.width
      canvas.height = vp.height
      return page.render({ canvasContext: ctx, viewport: vp }).promise
    })
  }, [getMainScale])

  const openLightbox = useCallback(() => {
    setLightboxOpen(true)
    pdfDocRef.current.getPage(pageNumRef.current).then(page => {
      const vp = page.getViewport({ scale: 1 })
      const scale = Math.min(
        window.innerWidth * 0.96 / vp.width,
        window.innerHeight * 0.96 / vp.height
      )
      const canvas = lightboxCanvasRef.current
      renderPage(pageNumRef.current, canvas, canvas.getContext('2d'), scale)
    })
  }, [renderPage])

  const closeLightbox = useCallback(() => setLightboxOpen(false), [])

  const changePage = useCallback((delta) => {
    if (!pdfDocRef.current || renderingRef.current) return
    const next = pageNumRef.current + delta
    if (next < 1 || next > pdfDocRef.current.numPages) return
    pageNumRef.current = next
    renderingRef.current = true
    const canvas = mainCanvasRef.current
    renderPage(next, canvas, canvas.getContext('2d')).then(() => {
      renderingRef.current = false
      updateLabel()
      updateButtons()
      if (lightboxOpen) openLightbox()
    })
  }, [renderPage, updateLabel, updateButtons, lightboxOpen, openLightbox])

  // Load PDF.
  // The `cancelled` flag prevents React StrictMode's double-invocation from
  // firing two concurrent renders to the same canvas (which caused random flips).
  useEffect(() => {
    let cancelled = false
    let renderTask = null

    loadPdfJs().then(pdfjsLib => {
      if (cancelled) return
      pdfjsLib.getDocument(PDF_FILE).promise.then(async pdf => {
        if (cancelled) return
        pdfDocRef.current = pdf
        setLoading(false)

        // Build outline map (year labels from bookmarks)
        try {
          const outline = await pdf.getOutline()
          if (outline) {
            for (const item of outline) {
              if (cancelled) break
              if (item.dest) {
                const dest = typeof item.dest === 'string'
                  ? await pdf.getDestination(item.dest)
                  : item.dest
                if (dest) {
                  const ref = dest[0]
                  const index = await pdf.getPageIndex(ref)
                  outlineMapRef.current[index + 1] = item.title
                }
              }
            }
          }
        } catch (_) { /* no outline — silently ignore */ }

        if (cancelled) return
        const canvas = mainCanvasRef.current
        renderPage(1, canvas, canvas.getContext('2d')).then(() => {
          if (!cancelled) {
            updateLabel()
            updateButtons()
          }
        })
      }).catch(() => {
        if (!cancelled) {
          setLoading(false)
          setLoadError(true)
        }
      })
    })

    return () => { cancelled = true }
  }, [renderPage, updateLabel, updateButtons])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') changePage(-1)
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changePage(1)
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [changePage, closeLightbox])

  // Resize re-render
  useEffect(() => {
    let timer
    const onResize = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (pdfDocRef.current && mainCanvasRef.current) {
          const canvas = mainCanvasRef.current
          renderPage(pageNumRef.current, canvas, canvas.getContext('2d'))
        }
      }, 200)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [renderPage])

  return (
    <div style={{
      background: '#111',
      color: '#ccc',
      fontFamily: 'Georgia, serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
    }}>
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#555',
          fontSize: '15px',
        }}>
          Loading&hellip;
        </div>
      )}

      {loadError && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#555',
          fontSize: '15px',
        }}>
          Could not load PDF.
        </div>
      )}

      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '24px 24px 8px',
      }}>
        <canvas
          ref={mainCanvasRef}
          style={{
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 90px)',
            display: 'block',
            boxShadow: '0 8px 40px rgba(0,0,0,0.7)',
            cursor: 'zoom-in',
          }}
          onClick={openLightbox}
        />
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '28px',
        padding: '14px 0 18px',
      }}>
        <NavButton onClick={() => changePage(-1)} disabled={!canPrev}>&#8592;</NavButton>
        <span style={{
          fontSize: '15px',
          letterSpacing: '0.04em',
          minWidth: '80px',
          textAlign: 'center',
          color: '#888',
        }}>
          {pageLabel}
        </span>
        <NavButton onClick={() => changePage(1)} disabled={!canNext}>&#8594;</NavButton>
      </div>

      {/* Lightbox — always in DOM so ref is always available */}
      <div
        onClick={closeLightbox}
        style={{
          display: lightboxOpen ? 'flex' : 'none',
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.93)',
          zIndex: 200,
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'zoom-out',
        }}
      >
        <canvas
          ref={lightboxCanvasRef}
          style={{
            maxWidth: '96vw',
            maxHeight: '96vh',
            display: 'block',
            boxShadow: '0 12px 60px rgba(0,0,0,0.9)',
          }}
        />
        <div style={{
          position: 'fixed',
          bottom: '18px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '13px',
          color: '#555',
          pointerEvents: 'none',
        }}>
          Click anywhere to close &nbsp;&nbsp; &larr; &rarr; to navigate
        </div>
      </div>
    </div>
  )
}
