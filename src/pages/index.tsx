import type { NextPage } from 'next'
import Head from 'next/head'
import { Commands } from 'src/components/commands/commands'
import { styled } from 'stitches.config'

const Title = styled('h1', {
  color: '#ffffff',
  fontFamily: 'IBM Plex Sans',
  fontSize: '48px',
  lineHeight: '48px',
  fontWeight: '700',
  marginBottom: '24px',
})

const Section = styled('section', {
  margin: '65px 0 80px 60px',
})

const Home: NextPage = () => {
  return (
    <Section>
      <Head>
        <title>Comandos Git</title>
      </Head>

      <Title>Comandos</Title>
      <Commands />
    </Section>
  )
}

export default Home
