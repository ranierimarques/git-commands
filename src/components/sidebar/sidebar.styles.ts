import { styled } from 'stitches.config'

export const Container = styled('div', {
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

export const IconContainer = styled('div', {
  padding: '20px',
})

export const NavGroup = styled('ul', {
  '& + ul': {
    marginTop: 20,
  },
})

export const Title = styled('h4', {
  color: '#FFFFFF',
  fontFamily: 'IBM Plex Sans',
  fontSize: '15px',
  lineHeight: '15px',
  fontWeight: '500',
  padding: '10px 25px',
})

export const Link = styled('a', {
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
