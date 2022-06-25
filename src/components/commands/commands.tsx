import { references } from 'data/references'
import { Snippets } from 'src/components'
import { styled } from 'stitches.config'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '48px',
})

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

const Title = styled('h2', {
  color: '#fafafa',
  fontFamily: 'IBM Plex Sans',
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: '700',
  marginBottom: '8px',
})

export function Commands() {
  return (
    <Container>
      {references.map(reference => (
        <Wrapper key={reference.title}>
          <Title>{reference.title}</Title>
          {reference.commands.map((command, index) => (
            <Snippets key={index} command={command} />
          ))}
        </Wrapper>
      ))}
    </Container>
  )
}
