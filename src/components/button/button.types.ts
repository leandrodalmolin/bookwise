import { ReactNode } from 'react'
import { RecipeVariantProps } from '@styles/types'
import { buttonStyles } from './button.styles'

type ButtonVariants = RecipeVariantProps<typeof buttonStyles>

export type ButtonProps = {
  asChild?: boolean
  children: ReactNode
  icon?: ReactNode
} & ButtonVariants
