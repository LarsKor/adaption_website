import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white/5 backdrop-blur sticky top-0 z-40 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/"><a className="text-lg font-bold text-brand-500">Adaption</a></Link>
        <nav className="space-x-4 hidden md:block">
          <Link href="/"><a className="text-gray-300">Home</a></Link>
          <Link href="/#diensten"><a className="text-gray-300">Diensten</a></Link>
          <Link href="/contact"><a className="text-gray-300 font-semibold">Contact</a></Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu placeholder: can extend later */}
          <button className="text-gray-300">☰</button>
        </div>
      </div>
    </header>
  )
}
