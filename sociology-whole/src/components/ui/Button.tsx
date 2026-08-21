import { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'accent'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-light',
  secondary: 'border border-primary text-primary hover:bg-primary hover:text-white',
  accent: 'bg-accent text-white hover:opacity-90',
}

export default function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-card text-[15px] font-medium transition-colors disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
