export default function Footer(){
  return (
    <footer className="border-t border-white/5 mt-12 py-8 text-center text-gray-500">
      <div className="max-w-6xl mx-auto px-6">
        <p>© {new Date().getFullYear()} Adaption — Alle rechten voorbehouden</p>
        <p className="text-sm mt-2">Ontwikkeld door het Adaption-team — aangepaste content en design</p>
      </div>
    </footer>
  )
}
