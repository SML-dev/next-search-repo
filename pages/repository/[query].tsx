import Head from 'next/head'
import fetch from 'node-fetch'
import Main from '../../components/layouts/main'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  repo: any
}

export default function RepositoryPage({ repo }: Props) {
  console.log(repo)
  return (
    <Main>
      <Head>
        <title>Results repository for </title>
      </Head>
    </Main>
  )
}

export async function getServerSideProps(context: any) {
  const [owner, repo] = context.params.query.split('-')
  console.log({ owner, repo })
  return fetch(`https://api.github.com/repos/${owner}/${repo}`)
    .then((res) => res.json())
    .then((results) => {
      console.log(results)
      return {
        props: {
          repo: results,
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
