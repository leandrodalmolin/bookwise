import { sva } from '@styles/css'

export const textFieldStyles = sva({
  slots: ['wrapper', 'input', 'icon'],
  base: {
    wrapper: {
      display: 'flex',
      alignItems: 'stretch',
      borderRadius: 'sm',
      borderWidth: '1px',
      borderColor: 'brand.gray.500',
      overflow: 'hidden',
      '&:focus-within': {
        borderColor: 'brand.green.200',
        '& svg': {
          color: 'brand.green.200',
        },
      },
    },
    input: {
      width: '100%',
      px: '5',
      py: '3',
      color: 'brand.gray.200',
      bg: 'brand.gray.800',
      textStyle: 'body.sm',
      outline: 'none',
      '&::placeholder': {
        color: 'brand.gray.400',
      },
    },
    icon: {
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pr: '4',
      cursor: 'text',
      '& svg': {
        color: 'brand.gray.500',
      },
    },
  },
})
