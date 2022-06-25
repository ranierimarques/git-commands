import { styled } from 'stitches.config'

export const H3 = styled('h3', {
  color: '#EAEAEA',
  fontFamily: 'IBM Plex Sans',
  fontSize: '16px',
  lineHeight: '28px',
  fontWeight: '400',
})

export const CodeWrapper = styled('div', {
  display: 'flex',
  gap: '16px',
})

export const Description = styled('span', {
  display: 'block',
  fontFamily: 'JetBrains Mono',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: '600',
  color: '#8F95A9',
})

export const InfoList = styled('li', {
  fontFamily: 'JetBrains Mono',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: '500',
  color: '#ffffff',
  listStyle: 'inside',
  marginLeft: '4px',
})

export const HintList = styled('li', {
  fontFamily: 'JetBrains Mono',
  fontSize: '12px',
  lineHeight: '18px',
  fontWeight: '500',
  color: '#ffffff',
})

export const Codes = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
})
