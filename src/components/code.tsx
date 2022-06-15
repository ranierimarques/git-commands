import { styled } from 'stitches.config'

type codeProps = {
  children: string
}

const Wrapper = styled('div', {
  background: 'hsl(0, 0%, 12%)',
  borderRadius: '4px',
  padding: '8px 12px',
  width: 'fit-content',

  fontFamily: 'JetBrains Mono',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '400',
  color: '#ffffff',
  boxShadow: '0 8px 15px rgb(0 0 0 / 15%)',
})

export function Code({ children }: codeProps) {
  return <Wrapper>{children}</Wrapper>
}
