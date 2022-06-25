import * as S from './code.styles'

type codeProps = {
  children: any
  example?: boolean
  info?: boolean
  as?: string
}

export function Code({ children, ...props }: codeProps) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>
}
