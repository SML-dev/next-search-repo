import { ReactNode } from 'react'
import Header from '../sections/header'
import Footer from '../sections/footer'

interface Props {
  children: ReactNode
}

export default function Main({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
