import { references } from 'data/references'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Code } from 'src/components/code'
import { styled } from 'stitches.config'

const H1 = styled('h1', {
  color: '#ffffff',
  fontFamily: 'IBM Plex Sans',
  fontSize: '48px',
  lineHeight: '48px',
  fontWeight: '700',
  marginBottom: '24px',
})

const H2 = styled('h2', {
  color: '#fafafa',
  fontFamily: 'IBM Plex Sans',
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: '700',
  marginBottom: '8px',
})

const H3 = styled('h3', {
  color: '#EAEAEA',
  fontFamily: 'IBM Plex Sans',
  fontSize: '16px',
  lineHeight: '28px',
  fontWeight: '400',
  marginBottom: '8px',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  '& + &': {
    marginTop: 48,
  },
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

      <H1>Comandos</H1>
      {references.map(reference => (
        <Wrapper key={reference.title}>
          <H2>{reference.title}</H2>
          {reference.commands.map((command, index) => (
            <div key={index}>
              <H3>{command.title}</H3>
              <Code>{command.code}</Code>
            </div>
          ))}
        </Wrapper>
      ))}
    </Section>
  )
}

export default Home
