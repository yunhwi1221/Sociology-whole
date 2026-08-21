import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  href?: string
}

export default function Card({ children, className = '', href }: CardProps) {
  const baseClasses = `bg-white border border-border rounded-card shadow-card p-4 ${className}`

  if (href) {
    return (
      <a href={href} className={`${baseClasses} block hover:shadow-md transition-shadow`}>
        {children}
      </a>
    )
  }

  return <div className={baseClasses}>{children}</div>
}
