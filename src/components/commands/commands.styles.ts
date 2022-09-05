import { styled } from 'stitches.config'
import { PermaLink as PermaLinkSvg } from './svgs'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const PermaLinkWrapper = styled('span', {
  opacity: '0',
})

export const Title = styled('h2', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',

  scrollMarginTop: 32,
})

export const Link = styled('a', {
  display: 'inline-block',

  color: '#fafafa',
  fontFamily: 'IBM Plex Sans',
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: '700',

  '&:hover': {
    borderBottom: '1px dashed #787f85',
    marginBottom: '-1px',

    [`& ~ ${PermaLinkWrapper}`]: {
      opacity: '1',
    },
  },
})

export const PermaLink = styled(PermaLinkSvg, {
  display: 'block',
  verticalAlign: 'middle',
  marginLeft: '10px',
  color: '#787f85',
})
