// DEPENDENCY
import { ButtonHTMLAttributes } from 'react'

// STYLE
import { button, ButtonVariants } from './style.css'

// TYPE
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {}

export function Button({ children, variant = 'fill', ...props }: ButtonProps) {
  return (
    <button {...props} className={button({ variant })}>
      {children}
    </button>
  )
}
