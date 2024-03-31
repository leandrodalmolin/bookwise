import { defineConfig } from '@pandacss/dev'
import { globalCss, textStyles, tokens } from '@/styles/theme'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens,
      textStyles,
    },
  },

  globalCss,

  // The output directory for your css system
  outdir: 'styled-system',
})
