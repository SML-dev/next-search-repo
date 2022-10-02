import Head from 'next/head'
import Main from './components/layouts/main'

interface Props {
  title: string
}

export default function ResultsPage({ title }: Props) {
  return (
    <Main>
      <Head>
        <title>Results page for {title} </title>
      </Head>
      <h1>Hello Results </h1>
    </Main>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {
      title: 'Bicycle',
    },
  }
}
