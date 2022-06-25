import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as S from './tooltip.styles'

type tooltipProps = any

export function Tooltip({ children, content, icon, ...props }: tooltipProps) {
  return (
    <TooltipPrimitive.Root delayDuration={icon ? 0 : 200}>
      <S.StyledTrigger>{children}</S.StyledTrigger>
      <S.StyledContent
        sideOffset={icon ? 8 : 14}
        side={icon ? 'right' : 'top'}
        align="center"
        {...props}
      >
        {content}
        <TooltipPrimitive.Arrow width={18} height={8} />
      </S.StyledContent>
    </TooltipPrimitive.Root>
  )
}
