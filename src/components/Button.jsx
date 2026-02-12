import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  ...props
}) {
  const baseStyles = 'px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2'

  const variants = {
    primary: 'bg-tcrufc-red text-white hover:bg-opacity-90 hover:shadow-lg',
    secondary: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-tcrufc-red',
    gold: 'bg-tcrufc-gold text-tcrufc-blue hover:bg-opacity-90 hover:shadow-lg'
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={combinedClassName} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
