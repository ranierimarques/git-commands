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

const routes = [
  { href: '/', name: 'Começando agora' },
  { href: '/first-commands', name: 'Primeiros comandos' },
  { href: '/understand-git', name: 'Compreendendo o git' },
]

export function Sidebar() {
  const { pathname } = useRouter()

  return (
    <Container>
      <IconContainer>
        <GitIcon />
      </IconContainer>
      <ul>
        <Title>Inicio</Title>
        {routes.map(route => (
          <li key={route.name}>
            <Link href={route.href} passHref>
              <StyledLink active={pathname === route.href}>{route.name}</StyledLink>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  )
}
