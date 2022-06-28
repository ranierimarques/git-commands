import { styled } from 'stitches.config'

export const Wrapper = styled('div', {
  background: '#1f1f1f',
  borderRadius: '4px',
  padding: '8px 12px',
  width: 'fit-content',

  fontFamily: 'JetBrains Mono',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '400',
  color: '#ffffff',
  boxShadow: '0 8px 15px rgb(0 0 0 / 15%)',

  variants: {
    example: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        padding: '12px',
      },
    },
    info: {
      true: {
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '12px',
        paddingRight: '18px',
      },
    },
  },
})
