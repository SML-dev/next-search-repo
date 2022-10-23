import Head from 'next/head'
import fetch from 'node-fetch'
import Main from '../../components/layouts/main'

interface Props {
  title: string
  results: any
}

export default function ResultsPage({ title, results }: Props) {
  console.log(results)
  return (
    <Main>
      <Head>
        <title>Results page for {title} </title>
      </Head>
      <div className="w-2/3 mx-auto ">
        <h1 className="text-center">
          Search for: <span className="font-bold"> {title}</span>
        </h1>
        <ul className="mt-8">
          <li className=" rounded border-2 border-gray-200 p-2 m-2">
            <h2 className="text-xl mb-2">tekst</h2>
            <p>description</p>
          </li>
        </ul>
      </div>
    </Main>
  )
}

export async function getServerSideProps(context: any) {
  return fetch(
    `https://api.github.com/search/repositories?q=${context.params.query}`,
  )
    .then((res) => res.json())
    .then((results) => {
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
