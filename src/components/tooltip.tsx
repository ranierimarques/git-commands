import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { keyframes, styled } from 'stitches.config'

type tooltipProps = any

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
})

const StyledContent = styled(TooltipPrimitive.Content, {
  background: 'hsl(0, 0%, 15%)',
  fill: 'hsl(0, 0%, 15%)',
  transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
  animation: `${scaleIn} 0.2s ease-out forwards`,

  fontFamily: 'IBM Plex Sans',
  fontSize: '16px',
  lineHeight: '16px',
  fontWeight: '400',
  color: 'white',

  padding: '12px 14px',
  borderRadius: '4px',
})

const StyledTrigger = styled(TooltipPrimitive.Trigger, {
  fontFamily: 'JetBrains Mono',
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '400',
  color: 'white',
  '&:focus': {
    outline: '1px dashed #4465DB',
    outlineOffset: '1.5px',
  },
})

export function Tooltip({ children, content, ...props }: tooltipProps) {
  return (
    <TooltipPrimitive.Root delayDuration={200}>
      <StyledTrigger>{children}</StyledTrigger>
      <StyledContent sideOffset={14} side="top" align="center" {...props}>
        {content}
        <TooltipPrimitive.Arrow width={18} height={8} />
      </StyledContent>
    </TooltipPrimitive.Root>
  )
}