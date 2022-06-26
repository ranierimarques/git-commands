import { Additional, Code, CodeComposer, Icons } from '@components'
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
      <S.Wrapper>
        <Code>
          <CodeComposer compose={command.code} />
        </Code>
        <Icons command={command} isVisible={isVisible} setIsVisible={setIsVisible} />
      </S.Wrapper>
      <Additional command={command} isVisible={isVisible} />
    </S.Codes>
  )
}
