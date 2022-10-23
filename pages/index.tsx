import type { NextPage } from 'next'
import Head from 'next/head'
import Main from '../components/layouts/main'
import React, { ChangeEvent, useState, MouseEvent } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const router = useRouter()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (inputValue.length <= 3) return alert('Za mało znaków')
    router.push(`/results/${inputValue}`)
  }

  return (
    <Main>
      <Head>
        <title>Index page</title>
      </Head>
      <div className="border-2 border-gray-500 p-2">
        <input
          className="w-full border-2 border-gray-300 rounded px-2"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="my-2 bg-red-800 w-full text-white rounded"
          type="button"
          onClick={handleButtonClick}
        >
          Send
        </button>
      </div>
    </Main>
  )
}

export default Home
