import Link from 'next/link'
import { useRouter } from 'next/router'
import * as S from './sidebar.styles'
import { GitIcon } from './svgs'

const routesGroup = [
  {
    title: 'Git',
    routes: [{ href: '/', name: 'Comandos' }],
  },
  // {
  //   title: 'GitHub',
  //   routes: [{ href: '/github', name: 'Dicas' }],
  // },
  // {
  //   title: 'Conventional Commits',
  //   routes: [{ href: '/conventional-commits', name: 'Tipos de commits' }],
  // },
]

export function Sidebar() {
  const { pathname } = useRouter()

  return (
    <S.Container>
      <S.IconContainer>
        <GitIcon />
      </S.IconContainer>
      {routesGroup.map(group => (
        <S.NavGroup key={group.title}>
          <S.Title>{group.title}</S.Title>
          {group.routes.map(route => (
            <li key={route.name}>
              <Link href={route.href} passHref>
                <S.Link active={pathname === route.href}>{route.name}</S.Link>
              </Link>
            </li>
          ))}
        </S.NavGroup>
      ))}
    </S.Container>
  )
}
