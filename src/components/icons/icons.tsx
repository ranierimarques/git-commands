import { Tooltip } from '@components'
import * as S from './icons.styles'
import { ExampleIcon, InfoIcon, LampIcon } from './svgs'

type iconsProps = {
  command: any
  setIsVisible: any
  isVisible: any
}

const iconsConfig = [
  { conditional: 'examples', content: 'Exemplos', icon: <ExampleIcon /> },
  { conditional: 'information', content: 'Informações adicionais', icon: <InfoIcon /> },
  { conditional: 'hints', content: 'Dicas', icon: <LampIcon /> },
]

export function Icons({ setIsVisible, isVisible, command }: iconsProps) {
  return (
    <S.IconsWrapper>
      {iconsConfig.map(icon => {
        const conditional = icon.conditional
        const visibility = isVisible[icon.conditional]

        function changeVisibility() {
          setIsVisible({ ...isVisible, [conditional]: !visibility })
        }

        return (
          command[conditional] && (
            <Tooltip key={conditional} content={icon.content} icon>
              <S.Icon active={visibility} onClick={changeVisibility}>
                {icon.icon}
              </S.Icon>
            </Tooltip>
          )
        )
      })}
    </S.IconsWrapper>
  )
}
