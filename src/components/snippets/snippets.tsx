import { useState } from 'react'
import { styled } from 'stitches.config'
import { Code } from '../code'
import { ExampleIcon } from '../commands/svgs'

type snippetsProps = {
  command: {
    title: string
    code: (string | JSX.Element)[]
    examples: {
      description: (string | JSX.Element)[]
      code: (string | JSX.Element)[]
    }[]
  }
}

const H3 = styled('h3', {
  color: '#EAEAEA',
  fontFamily: 'IBM Plex Sans',
  fontSize: '16px',
  lineHeight: '28px',
  fontWeight: '400',
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
  userSelect: 'none',
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

export function Snippets({ command }: snippetsProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Codes key={command.title}>
      <H3>{command.title}</H3>
      <CodeWrapper>
        <Code>{command.code.map(code => code)}</Code>
        <IconsWrapper>
          {command.examples && (
            <Icon active={isVisible} onClick={() => setIsVisible(!isVisible)}>
              <ExampleIcon />
            </Icon>
          )}
        </IconsWrapper>
      </CodeWrapper>
      {command.examples && (
        <Code example visible={isVisible}>
          {command.examples.map((example, index) => (
            <div key={index}>
              <Description>
                {example.description.map(description => description)}
              </Description>
              {example.code.map(code => code)}
            </div>
          ))}
        </Code>
      )}
    </Codes>
  )
}
