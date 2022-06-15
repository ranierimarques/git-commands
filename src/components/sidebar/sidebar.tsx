import Link from 'next/link'
import { useRouter } from 'next/router'
import { styled } from 'stitches.config'
import { GitIcon } from './svgs'

const Container = styled('div', {
  position: 'sticky',
  top: 0,
  color: '#EAEAEA',
  minWidth: 250,
  height: '100vh',
  borderRight: '1px solid #313538',
  overflow: 'scroll',
  overscrollBehavior: 'contain',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
})

const IconContainer = styled('div', {
  padding: '20px',
})

const NavGroup = styled('ul', {
  '& + ul': {
    marginTop: 20,
  },
})

const Title = styled('h4', {
  color: '#FFFFFF',
  fontFamily: 'IBM Plex Sans',
  fontSize: '15px',
  lineHeight: '15px',
  fontWeight: '500',
  padding: '10px 25px',
})

const StyledLink = styled('a', {
  display: 'inline-block',
  color: '#ECEDEE',
  fontFamily: 'IBM Plex Sans',
  fontSize: '13px',
  lineHeight: '15px',
  fontWeight: '400',
  padding: '10px 25px',
  width: '100%',
  transition: 'all .15s cubic-bezier(.4,0,.2,1)',

  variants: {
    active: {
      true: {
        background: '#3E1E18',
      },
      false: {
        '&:hover': {
          background: '#271714',
        },
      },
    },
  },
})

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
    <Container>
      <IconContainer>
        <GitIcon />
      </IconContainer>
      {routesGroup.map(group => (
        <NavGroup key={group.title}>
          <Title>{group.title}</Title>
          {group.routes.map(route => (
            <li key={route.name}>
              <Link href={route.href} passHref>
                <StyledLink active={pathname === route.href}>{route.name}</StyledLink>
              </Link>
            </li>
          ))}
        </NavGroup>
      ))}
    </Container>
  )
}
