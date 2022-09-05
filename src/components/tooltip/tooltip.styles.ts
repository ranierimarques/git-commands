import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { keyframes, styled } from 'stitches.config'

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
})

export const StyledContent = styled(TooltipPrimitive.Content, {
  background: '#2E3338',
  fill: '#2E3338',
  transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
  animation: `${scaleIn} 0.2s ease-out forwards`,

  fontFamily: 'IBM Plex Sans',
  fontSize: '14px',
  lineHeight: '100%',
  fontWeight: '400',
  color: 'white',
  whiteSpace: 'pre-wrap',

  padding: '12px 14px',
  borderRadius: '4px',
  boxShadow:
    'rgba(0, 0, 0, 0.6) 0px 10px 38px -10px, rgba(0, 0, 0, 0.6) 0px 10px 20px -15px',
})

export const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  fontFamily: 'JetBrains Mono',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '400',
  color: 'white',
  // '&:focus': {
  //   outline: '1px dashed #4465DB',
  //   outlineOffset: '1.5px',
  // },
})
