import { ReactNode } from 'react'
import Header from '../sections/header'
import Footer from '../sections/footer'

interface Props {
  children: ReactNode
}

export default function Main({ children }: Props) {
  return (
    <div className="container mx-auto">
      <Header />
      <main className="my-24 w-2/6 mx-auto">{children}</main>
      <Footer />
    </div>
  )
}
