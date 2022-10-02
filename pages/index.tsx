import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Main from './components/layouts/main'

const Home: NextPage = () => {
  return (
    <Main>
      <Head>
        <title>Index page</title>
      </Head>
      <h1>Hello Index</h1>
    </Main>
  )
}

export default Home
