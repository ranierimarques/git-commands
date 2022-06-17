import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    background: 'none',
    border: 0,
    outline: 'none',
    listStyle: 'none',
    textDecoration: 'none',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-webkit-tap-highlight-color': 'transparent',
  },
  body: {
    background: '#111111',
  },
  html: {
    colorScheme: 'dark',
  },
})
