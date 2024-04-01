import { css } from '@styles/css'
import { iconButtonStyles } from './icon-button.styles'
import { IconButtonProps } from './icon-button.types'

export function IconButton({ icon, label, ...rest }: IconButtonProps) {
  return (
    <button className={iconButtonStyles()} {...rest}>
      {icon}
      <span className={css({ srOnly: true })}>{label}</span>
    </button>
  )
}
