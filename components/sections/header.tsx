import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-600  p-3 text-white text-center">
      <Link href="/">GitHub Searcher</Link>
    </header>
  )
}
