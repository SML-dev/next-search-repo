import Head from 'next/head'
import fetch from 'node-fetch'
import Main from '../../components/layouts/main'
import UsersView from '../../components/elements/usersView'
import { ResultRes } from '../../types/results'

interface Props {
  title: string
  results: ResultRes[]
}

interface Context {
  params: {
    query: string
  }
}

export default function ResultsPage({ title, results }: Props) {
  return (
    <Main>
      <Head>
        <title>Results page for {title} </title>
      </Head>
      <div className="w-2/3 mx-auto ">
        <UsersView results={results} />
      </div>
    </Main>
  )
}

export async function getServerSideProps(context: Context) {
  return fetch(
    `https://api.github.com/search/repositories?q=${context.params.query}`,
  )
    .then((res) => res.json())
    .then((results: any) => {
      return {
        props: {
          title: context.params.query,
          results: results.items,
        },
      }
    })
    .catch((error) => {
      return {
        props: {
          error: `Cannot find Elements with this query ${error}`,
        },
      }
    })
}
