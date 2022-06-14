import type { NextPage } from 'next'
import { styled } from 'stitches.config'

const Text = styled('h1', {
  color: 'purple',
})

const Home: NextPage = () => {
  return <Text>Hello world!</Text>
}

export default Home
