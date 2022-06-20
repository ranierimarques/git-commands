import { references } from 'data/references'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Code } from 'src/components/code'
import { ExampleIcon } from 'src/svgs'
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

const CodeWrapper = styled('div', {
  display: 'flex',
  gap: '16px',
})

const IconsWrapper = styled('div', {
  display: 'flex',
  gap: '4px',
})

const Icon = styled('div', {
  padding: '6px',
  lineHeight: '0',
  borderRadius: '4px',
  transition: 'background, opacity .15s cubic-bezier(.4,0,.2,1)',
  cursor: 'pointer',
  variants: {
    active: {
      true: {
        background: '#3E1E18',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',
        '&:hover': {
          opacity: '0.8',
        },
        '&:active': {
          opacity: '0.6',
        },
      },
      false: {
        '&:hover': {
          background: '#2E3338',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',
        },
        '&:active': {
          opacity: '0.8',
        },
      },
    },
  },
  defaultVariants: {
    active: 'false',
  },
})

const Description = styled('span', {
  display: 'block',
  fontFamily: 'JetBrains Mono',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: '600',
  color: '#8F95A9',
})

const Codes = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
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
          {reference.commands.map((command, referenceIndex) => (
            <Codes key={referenceIndex}>
              <H3>{command.title}</H3>
              <CodeWrapper>
                <Code>{command.code.map(code => code)}</Code>
                <IconsWrapper>
                  {command.examples && (
                    <Icon active={false}>
                      <ExampleIcon />
                    </Icon>
                  )}
                </IconsWrapper>
              </CodeWrapper>
              {command.examples && (
                <Code example>
                  {command.examples.map((example, commandIndex) => (
                    <div key={commandIndex}>
                      <Description>
                        {example.description.map(description => description)}
                      </Description>
                      {example.code.map(code => code)}
                    </div>
                  ))}
                </Code>
              )}
            </Codes>
          ))}
        </Wrapper>
      ))}
    </Section>
  )
}

export default Home
