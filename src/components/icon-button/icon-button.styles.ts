import { cva } from '@styles/css'

export const iconButtonStyles = cva({
  base: {
    borderRadius: 'sm',
    p: '2',
    color: 'brand.purple.100',
    bg: 'brand.gray.600',
    cursor: 'pointer',
    transition: 'colors',
    _hover: {
      bg: 'brand.gray.500',
    },
  },
})
