import { styled } from 'stitches.config'

type codeProps = {
  children: string
}

const Wrapper = styled('div', {
  background: '#1A1A1A',
  borderRadius: '4px',
  padding: '8px 12px',
  width: 'fit-content',

  fontFamily: 'JetBrains Mono',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
  color: '#ffffff',
})

export function Code({ children }: codeProps) {
  return <Wrapper>{children}</Wrapper>
}
