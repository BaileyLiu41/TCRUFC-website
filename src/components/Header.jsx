import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-tcrufc-gold">
          TCRUFC
        </Link>

        <div className="flex gap-8">
          <Link
            to="/"
            className={`text-white font-medium hover:text-tcrufc-gold transition-colors ${
              isActive('/') ? 'border-b-2 border-tcrufc-gold' : ''
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-white font-medium hover:text-tcrufc-gold transition-colors ${
              isActive('/about') ? 'border-b-2 border-tcrufc-gold' : ''
            }`}
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className={`text-white font-medium hover:text-tcrufc-gold transition-colors ${
              isActive('/gallery') ? 'border-b-2 border-tcrufc-gold' : ''
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/alumni"
            className={`text-white font-medium hover:text-tcrufc-gold transition-colors ${
              isActive('/alumni') ? 'border-b-2 border-tcrufc-gold' : ''
            }`}
          >
            Alumni
          </Link>
          <Link
            to="/fixtures"
            className={`text-white font-medium hover:text-tcrufc-gold transition-colors ${
              isActive('/fixtures') ? 'border-b-2 border-tcrufc-gold' : ''
            }`}
          >
            Fixtures
          </Link>
          <Link
            to="/events"
            className={`text-white font-medium hover:text-tcrufc-gold transition-colors ${
              isActive('/events') ? 'border-b-2 border-tcrufc-gold' : ''
            }`}
          >
            Events
          </Link>
        </div>
      </nav>
    </header>
  )
}
