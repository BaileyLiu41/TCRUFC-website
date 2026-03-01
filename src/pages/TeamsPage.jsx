import { useNavigate } from 'react-router-dom'
import TeamsViewer from '../components/TeamsViewer'

export default function TeamsPage() {
  const navigate = useNavigate()

  return (
    <div style={{ position: 'relative' }}>
      {/* Back button — fixed top-right, styled to match the dark viewer */}
      <button
        onClick={() => navigate(-1)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '24px',
          zIndex: 300,
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid #555',
          color: '#ccc',
          fontFamily: 'Georgia, serif',
          fontSize: '14px',
          padding: '8px 18px',
          borderRadius: '4px',
          cursor: 'pointer',
          letterSpacing: '0.03em',
          transition: 'background 0.15s, color 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#333'; e.currentTarget.style.color = '#fff' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#ccc' }}
      >
        ← Back
      </button>

      <TeamsViewer />
    </div>
  )
}
