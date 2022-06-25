import { Commands } from '@components'
import * as S from '@styles/index'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <S.Section>
      <Head>
        <title>Comandos Git</title>
      </Head>

      <S.Title>Comandos</S.Title>
      <Commands />
    </S.Section>
  )
}

export default Home
