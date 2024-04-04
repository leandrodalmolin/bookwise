'use client'

import { useRef } from 'react'
import { textFieldStyles } from './text-field.styles'
import { TextFieldProps } from './text-field.types'

export function TextField({ icon, ...rest }: TextFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const classes = textFieldStyles()

  const handleIconClick = () => {
    const input = inputRef.current
    if (!input) return
    input.focus()
  }

  return (
    <div className={classes.wrapper}>
      <input ref={inputRef} className={classes.input} {...rest} />
      {icon && (
        <div className={classes.icon} onClick={handleIconClick}>
          {icon}
        </div>
      )}
    </div>
  )
}
