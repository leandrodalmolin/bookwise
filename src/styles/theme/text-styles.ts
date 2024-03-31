import { defineTextStyles } from '@pandacss/dev'

export const textStyles = defineTextStyles({
  heading: {
    xs: { value: { fontSize: 'md', lineHeight: 'sm' } }, // 16/140
    sm: { value: { fontSize: 'lg', lineHeight: 'sm' } }, // 18/140
    md: { value: { fontSize: 'xl', lineHeight: 'sm' } }, // 20/140
    lg: { value: { fontSize: '2xl', lineHeight: 'sm' } }, // 24/140
  },
  body: {
    sm: { value: { fontSize: 'sm', lineHeight: 'md' } }, // 14/160
    md: { value: { fontSize: 'md', lineHeight: 'md' } }, // 16/160
    lg: { value: { fontSize: 'xl', lineHeight: 'md' } }, // 20/160
  },
  // Buttons and links
  cta: {
    sm: { value: { fontSize: 'sm', lineHeight: 'md', fontWeight: 'bold' } }, // 14/160
    md: { value: { fontSize: 'md', lineHeight: 'md', fontWeight: 'bold' } }, // 16/160
    lg: { value: { fontSize: 'lg', lineHeight: 'md', fontWeight: 'bold' } }, // 18/160
  },
})
