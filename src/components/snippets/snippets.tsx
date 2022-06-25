import { Code, CodeComposer, Tooltip } from '@components'
import { useState } from 'react'
import * as S from './snippets.styles'
import { ExampleIcon, InfoIcon, LampIcon } from './svgs'

type snippetsProps = {
  command: {
    description: string
    code: string[][]
    examples?: {
      description: (string | JSX.Element)[]
      code: string[][]
    }[]
    information?: (string | JSX.Element)[][]
    hints?: (string | JSX.Element)[][]
  }
}

export function Snippets({ command }: snippetsProps) {
  const [isExampleVisible, setIsExampleVisible] = useState(false)
  const [isInformationVisible, setIsInformationVisible] = useState(false)
  const [isHintsVisible, setIsHintsVisible] = useState(false)

  return (
    <S.Codes>
      <S.H3>{command.description}</S.H3>
      <S.CodeWrapper>
        <Code>
          <CodeComposer compose={command.code} />
        </Code>
        <S.IconsWrapper>
          {command.examples && (
            <Tooltip content="Exemplos" icon>
              <S.Icon
                active={isExampleVisible}
                onClick={() => setIsExampleVisible(!isExampleVisible)}
              >
                <ExampleIcon />
              </S.Icon>
            </Tooltip>
          )}
          {command.information && (
            <Tooltip content="Informações adicionais" icon>
              <S.Icon
                active={isInformationVisible}
                onClick={() => setIsInformationVisible(!isInformationVisible)}
              >
                <InfoIcon />
              </S.Icon>
            </Tooltip>
          )}
          {command.hints && (
            <Tooltip content="Dicas" icon>
              <S.Icon
                active={isHintsVisible}
                onClick={() => setIsHintsVisible(!isHintsVisible)}
              >
                <LampIcon />
              </S.Icon>
            </Tooltip>
          )}
        </S.IconsWrapper>
      </S.CodeWrapper>
      {isExampleVisible && (
        <Code example>
          {command.examples?.map((example, index) => (
            <div key={index}>
              <S.Description>{example.description}</S.Description>
              <CodeComposer compose={example.code} />
            </div>
          ))}
        </Code>
      )}
      {isInformationVisible && (
        <Code as="ul" info>
          {command.information?.map((information, index) => (
            <S.InfoList key={index}>{information}</S.InfoList>
          ))}
        </Code>
      )}
      {isHintsVisible && (
        <Code as="ul" info>
          {command.hints?.map((hint, index) => (
            <S.HintList key={index}>{hint}</S.HintList>
          ))}
        </Code>
      )}
    </S.Codes>
  )
}
