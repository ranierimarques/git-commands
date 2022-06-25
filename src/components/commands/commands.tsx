import { references } from 'data/references'
import { Snippets } from 'src/components'
import * as S from './commands.styles'

export function Commands() {
  return (
    <S.Container>
      {references.map(reference => (
        <S.Wrapper key={reference.title}>
          <S.Title>{reference.title}</S.Title>
          {reference.commands.map((command, index) => (
            <Snippets key={index} command={command} />
          ))}
        </S.Wrapper>
      ))}
    </S.Container>
  )
}
