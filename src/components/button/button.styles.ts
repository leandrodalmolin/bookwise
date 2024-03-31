import { cva } from '@styles/css'

export const buttonStyles = cva({
  base: {
    borderRadius: 'sm',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '3',
    px: '3',
    py: '1.5',
    textStyle: 'cta.md',
    cursor: 'pointer',
  },
  variants: {
    color: {
      white: {
        color: 'brand.gray.200',
        _hover: {
          bg: 'brand.gray.200/4',
        },
      },
      purple: {
        color: 'brand.purple.100',
        _hover: {
          bg: 'brand.purple.100/6',
        },
      },
    },
    size: {
      small: {
        textStyle: 'cta.sm',
      },
      medium: {
        textStyle: 'cta.md',
      },
    },
    iconPosition: {
      left: {
        flexDirection: 'row',
      },
      right: {
        flexDirection: 'row-reverse',
      },
    },
  },
  defaultVariants: {
    color: 'white',
    size: 'medium',
  },
})
