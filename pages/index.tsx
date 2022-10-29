import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/layouts/main'
import React, { ChangeEvent, useState, MouseEvent } from 'react'
import { useRouter } from 'next/router'
import SearchBar from '../components/elements/searchBar'

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const router = useRouter()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (inputValue.length <= 3)
      return alert('You have to enter at least 4 characters')
    router.push(`/results/${inputValue}`)
  }

  return (
    <Main>
      <Head>
        <title>Index page</title>
      </Head>
      <SearchBar changeInput={handleInputChange} onClick={handleButtonClick} />
    </Main>
  )
}

export default Home
