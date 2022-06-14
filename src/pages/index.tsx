import type { NextPage } from 'next'
import Head from 'next/head'
import { styled } from 'stitches.config'

const Text = styled('h1', {
  color: 'purple',
  fontFamily: 'IBM Plex Sans',
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Comandos Git</title>
      </Head>

      <Text>Hello world!</Text>
    </>
  )
}

export default Home
