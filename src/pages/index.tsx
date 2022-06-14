import type { NextPage } from 'next'
import Head from 'next/head'
import { Code } from 'src/components/code'
import { commands } from 'src/mocks/title-code'
import { styled } from 'stitches.config'

const Title = styled('h2', {
  color: '#EAEAEA',
  fontFamily: 'IBM Plex Sans',
  fontSize: '16px',
  lineHeight: '28px',
  fontWeight: '400',
  marginBottom: '10px',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
})

const Section = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '80px 0',
  width: '100%',
})

const Home: NextPage = () => {
  return (
    <Section>
      <Head>
        <title>Comandos Git</title>
      </Head>

      <Wrapper>
        {commands.map((command, index) => (
          <div key={index}>
            <Title>{command.title}</Title>
            <Code>{command.code}</Code>
          </div>
        ))}
      </Wrapper>
    </Section>
  )
}

export default Home
