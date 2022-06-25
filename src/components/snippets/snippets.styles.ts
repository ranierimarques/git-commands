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

export const IconsWrapper = styled('div', {
  display: 'flex',
  gap: '4px',
})

export const Icon = styled('div', {
  padding: '6px',
  lineHeight: '0',
  borderRadius: '4px',
  transition: 'background, opacity .15s cubic-bezier(.4,0,.2,1)',
  cursor: 'pointer',
  userSelect: 'none',
  variants: {
    active: {
      true: {
        background: '#3E1E18',
        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',
        '&:hover': {
          opacity: '0.8',
        },
        '&:active': {
          opacity: '0.6',
        },
      },
      false: {
        '&:hover': {
          background: '#2E3338',
          boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.15)',
        },
        '&:active': {
          opacity: '0.8',
        },
      },
    },
  },
  defaultVariants: {
    active: 'false',
  },
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
