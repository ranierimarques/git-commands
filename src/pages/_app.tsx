import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Sidebar } from 'src/components'
import { globalStyles } from 'src/styles/globals'
import { styled } from 'stitches.config'

const Wrapper = styled('div', {
  display: 'flex',
})

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/jet-brains-mono-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#da532c" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#da532c" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Wrapper>
        <Sidebar />
        <Component {...pageProps} />
      </Wrapper>
    </>
  )
}

export default MyApp
