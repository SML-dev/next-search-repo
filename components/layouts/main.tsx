import { ReactNode } from 'react'
import Header from '../sections/header'
import Footer from '../sections/footer'

interface Props {
  children: ReactNode
}

export default function Main({ children }: Props) {
  return (
    <div className="container mx-auto min-h-screen">
      <Header />
      <main className={` h-max flex mx-auto  `}>{children}</main>
      <Footer />
    </div>
  )
}
