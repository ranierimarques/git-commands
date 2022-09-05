import { globalCss } from 'stitches.config'

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: 'IBM Plex Sans',
      fontStyle: 'normal',
      fontWeight: '100 700',
      fontDisplay: 'fallback',
      src: 'local("IBM Plex Serif"), url("/fonts/ibm-plex-sans-var.woff2") format("woff2")',
    },
    {
      fontFamily: 'JetBrains Mono',
      fontStyle: 'normal',
      fontWeight: '100 800',
      fontDisplay: 'fallback',
      src: 'local("IBM Plex Serif"), url("/fonts/jet-brains-mono-var.woff2") format("woff2")',
    },
  ],
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
    scrollBehavior: 'smooth'
  },
})
