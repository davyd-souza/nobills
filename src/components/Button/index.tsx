// DEPENDENCY
import { ButtonHTMLAttributes, forwardRef } from 'react'

// STYLE
import { button, ButtonVariants } from './style.css'

// TYPE
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants & {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ children, variant = 'fill', ...props }: ButtonProps, ref) {
    return (
      <button {...props} className={button({ variant })} ref={ref}>
        {children}
      </button>
    )
  },
)
