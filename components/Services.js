export default function Services(){
  const items = [
    {title: 'Cloud & Infrastructuur', desc: 'Architectuur, migratie en beheer — schaalbaar en kostenefficiënt.'},
    {title: 'Software Development', desc: 'Webapps, API\'s en maatwerksoftware met moderne stacks.'},
    {title: 'Consultancy', desc: 'Strategie, security reviews en procesoptimalisatie.'}
  ]
  return (
    <section id="diensten" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-semibold mb-6">Onze diensten</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it)=> (
          <div key={it.title} className="p-6 bg-white/3 rounded-lg border border-white/5">
            <h3 className="font-bold mb-2">{it.title}</h3>
            <p className="text-gray-300">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
