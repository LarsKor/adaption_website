export default function Hero(){
  return (
    <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">IT-oplossingen die echte verandering brengen</h1>
        <p className="text-gray-300 max-w-2xl mb-8">Adaption helpt organisaties moderniseren met pragmatische, schaalbare en veilige oplossingen — van cloud-architectuur tot maatwerksoftware en security audits.</p>
        <div className="flex gap-4">
          <a href="/#diensten" className="bg-gradient-to-r from-brand-500 to-indigo-600 text-slate-900 px-5 py-3 rounded-md font-semibold">Onze diensten</a>
          <a href="/contact" className="border border-white/10 px-5 py-3 rounded-md text-white">Plan een gesprek</a>
        </div>
      </div>
    </section>
  )
}
