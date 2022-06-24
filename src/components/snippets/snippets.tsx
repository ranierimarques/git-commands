import { useState } from 'react'
import { styled } from 'stitches.config'
import { Code } from '../code'
import { Tooltip } from '../tooltip'
import { ExampleIcon, InfoIcon, LampIcon } from './svgs'

type snippetsProps = {
  command: {
    description: string
    code: JSX.Element
    examples?: {
      description: (string | JSX.Element)[]
      code: (string | JSX.Element)[]
    }[]
    information?: (string | JSX.Element)[][]
    hints?: (string | JSX.Element)[][]
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

const InfoList = styled('li', {
  fontFamily: 'JetBrains Mono',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: '500',
  color: '#ffffff',
  listStyle: 'inside',
  marginLeft: '4px',
})

const HintList = styled('li', {
  fontFamily: 'JetBrains Mono',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: '500',
  color: '#ffffff',
})

const Codes = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})

export function Snippets({ command }: snippetsProps) {
  const [isExampleVisible, setIsExampleVisible] = useState(false)
  const [isInformationVisible, setIsInformationVisible] = useState(false)
  const [isHintsVisible, setIsHintsVisible] = useState(false)

  return (
    <Codes key={command.description}>
      <H3>{command.description}</H3>
      <CodeWrapper>
        <Code>{command.code}</Code>
        <IconsWrapper>
          {command.examples && (
            <Tooltip content="Exemplos" icon>
              <Icon
                active={isExampleVisible}
                onClick={() => setIsExampleVisible(!isExampleVisible)}
              >
                <ExampleIcon />
              </Icon>
            </Tooltip>
          )}
          {command.information && (
            <Tooltip content="Informações adicionais" icon>
              <Icon
                active={isInformationVisible}
                onClick={() => setIsInformationVisible(!isInformationVisible)}
              >
                <InfoIcon />
              </Icon>
            </Tooltip>
          )}
          {command.hints && (
            <Tooltip content="Dicas" icon>
              <Icon
                active={isHintsVisible}
                onClick={() => setIsHintsVisible(!isHintsVisible)}
              >
                <LampIcon />
              </Icon>
            </Tooltip>
          )}
        </IconsWrapper>
      </CodeWrapper>
      {isExampleVisible && (
        <Code example>
          {command.examples?.map((example, index) => (
            <div key={index}>
              <Description>{example.description}</Description>
              {example.code}
            </div>
          ))}
        </Code>
      )}
      {isInformationVisible && (
        <Code as="ul" info>
          {command.information?.map((information, index) => (
            <InfoList key={index}>{information}</InfoList>
          ))}
        </Code>
      )}
      {isHintsVisible && (
        <Code as="ul" info>
          {command.hints?.map((hint, index) => (
            <HintList key={index}>{hint}</HintList>
          ))}
        </Code>
      )}
    </Codes>
  )
}
