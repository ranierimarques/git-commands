import { styled } from 'stitches.config'

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
