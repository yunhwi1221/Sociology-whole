import { ReactNode } from 'react'

type Variant = 'default' | 'primary' | 'accent'

interface BadgeProps {
  children: ReactNode
  variant?: Variant
}

const variants: Record<Variant, string> = {
  default: 'bg-surface text-text-secondary border border-border',
  primary: 'bg-primary/10 text-primary',
  accent: 'bg-accent/10 text-accent',
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
