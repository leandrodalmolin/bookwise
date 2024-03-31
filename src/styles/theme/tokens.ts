import { Tokens } from '@pandacss/dev'

export const tokens: Tokens = {
  colors: {
    brand: {
      green: {
        100: { value: '#50B2C0' },
        200: { value: '#255D6A' },
        300: { value: '#0A313C' },
      },
      purple: {
        100: { value: '#8381D9' },
        200: { value: '#2A2879' },
      },
      gray: {
        100: { value: '#F8F9FC' },
        200: { value: '#E6E8F2' },
        300: { value: '#D1D6E4' },
        400: { value: '#8D95AF' },
        500: { value: '#303F73' },
        600: { value: '#252D4A' },
        700: { value: '#181C2A' },
        800: { value: '#0E1116' },
      },
      gradient: {
        vertical: {
          value: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
        },
        horizontal: {
          value: 'linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)',
        },
      },
    },
  },
  lineHeights: {
    sm: { value: 1.4 },
    md: { value: 1.6 },
  },
}
