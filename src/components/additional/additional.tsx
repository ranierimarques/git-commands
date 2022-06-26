import { Code, CodeComposer } from '@components'
import * as S from './additional.styles'

type additionalProps = {
  command: any
  isVisible: any
}

export function Additional({ isVisible, command }: additionalProps) {
  return (
    <>
      {isVisible.examples && (
        <Code example>
          {command.examples?.map((example: any, index: any) => (
            <div key={index}>
              <S.Description>{example.description}</S.Description>
              <CodeComposer compose={example.code} />
            </div>
          ))}
        </Code>
      )}
      {isVisible.information && (
        <Code as="ul" info>
          {command.information?.map((information: any, index: any) => (
            <S.InfoList key={index}>{information}</S.InfoList>
          ))}
        </Code>
      )}
      {isVisible.hints && (
        <Code as="ul" info>
          {command.hints?.map((hint: any, index: any) => (
            <S.HintList key={index}>{hint}</S.HintList>
          ))}
        </Code>
      )}
    </>
  )
}
