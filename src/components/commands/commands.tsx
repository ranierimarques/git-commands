import { references } from 'data/references'
import { Snippets } from 'src/components'
import * as S from './commands.styles'

function convertToSlug(text: string) {
  return text
    .normalize('NFD')
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

export function Commands() {
  return (
    <S.Container>
      {references.map(({ title, commands }) => (
        <S.Wrapper key={title}>
          <S.Title id={convertToSlug(title)}>
            <S.Link href={'#' + convertToSlug(title)}>{title}</S.Link>
            <S.PermaLinkWrapper>
              <S.PermaLink />
            </S.PermaLinkWrapper>
          </S.Title>
          {commands.map((command, index) => (
            <Snippets key={index} command={command} />
          ))}
        </S.Wrapper>
      ))}
    </S.Container>
  )
}
