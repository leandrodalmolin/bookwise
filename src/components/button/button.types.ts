import { ReactNode } from 'react'
import { RecipeVariantProps } from '@styles/types'
import { buttonStyles } from './button.styles'

type ButtonVariants = RecipeVariantProps<typeof buttonStyles>

export type ButtonProps = React.ComponentProps<'button'> &
  ButtonVariants & {
    asChild?: boolean
    children: ReactNode
    icon?: ReactNode
  }
