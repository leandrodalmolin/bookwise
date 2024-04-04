import { ReactNode } from 'react'

export type TextFieldProps = React.ComponentProps<'input'> & {
  icon?: ReactNode
}
