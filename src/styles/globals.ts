import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    textDecoration: 'none',
  },
  body: {
    background: '#111111',
  },
  html: {
    colorScheme: 'dark',
  },
})
