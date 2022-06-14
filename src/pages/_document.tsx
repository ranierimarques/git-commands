import { Head, Html, Main, NextScript } from 'next/document'
import { getCssText } from 'stitches.config'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face {font-family: 'IBM Plex Sans';font-style: normal;font-weight: 100 700;font-display: fallback;src: url(/fonts/ibm-plex-sans-var.woff2) format('woff2');}@font-face {font-family: 'Jet Brains Mono';font-style: normal;font-weight: 100 800;font-display: fallback;src: url('/fonts/jet-brains-mono-var.woff2') format('woff2');}`,
          }}
        />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
