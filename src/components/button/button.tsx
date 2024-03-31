import { Slot, Slottable } from '@radix-ui/react-slot'
import { buttonStyles } from './button.styles'
import { ButtonProps } from './button.types'

export function Button({
  asChild,
  children,
  color,
  icon,
  iconPosition,
  size,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={buttonStyles({ color, size, iconPosition })} {...rest}>
      {icon}
      <Slottable>{children}</Slottable>
    </Comp>
  )
}
