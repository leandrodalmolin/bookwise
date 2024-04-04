import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  body: {
    bg: 'brand.gray.800',
    lineHeight: 'md',
  },
  ':focus-visible': {
    outline: '1px solid token(colors.brand.purple.100)',
  },
})
