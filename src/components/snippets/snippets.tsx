import { Code, CodeComposer, Icons } from '@components'
import { useState } from 'react'
import * as S from './snippets.styles'

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
  const [isVisible, setIsVisible] = useState({
    examples: false,
    information: false,
    hints: false,
  })

  return (
    <S.Codes>
      <S.H3>{command.description}</S.H3>
      <S.CodeWrapper>
        <Code>
          <CodeComposer compose={command.code} />
        </Code>
        <Icons command={command} isVisible={isVisible} setIsVisible={setIsVisible} />
      </S.CodeWrapper>
      {isVisible.examples && (
        <Code example>
          {command.examples?.map((example, index) => (
            <div key={index}>
              <S.Description>{example.description}</S.Description>
              <CodeComposer compose={example.code} />
            </div>
          ))}
        </Code>
      )}
      {isVisible.information && (
        <Code as="ul" info>
          {command.information?.map((information, index) => (
            <S.InfoList key={index}>{information}</S.InfoList>
          ))}
        </Code>
      )}
      {isVisible.hints && (
        <Code as="ul" info>
          {command.hints?.map((hint, index) => (
            <S.HintList key={index}>{hint}</S.HintList>
          ))}
        </Code>
      )}
    </S.Codes>
  )
}
