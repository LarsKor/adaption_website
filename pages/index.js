import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adaption — IT & Digitale Transformatie</title>
        <meta name="description" content="Pragmatische, veilige IT-oplossingen voor groeibedrijven." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <section className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-semibold mb-4">Waarom Adaption?</h2>
          <p className="text-gray-600 mb-6">Wij combineren technische diepgang met pragmatische implementatie. Van cloud-migraties tot maatwerksoftware — we zorgen dat techniek echte waarde levert.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Ervaring</h3>
              <p className="text-gray-600">Senior engineers met bewezen track record in complexe projecten.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Security</h3>
              <p className="text-gray-600">Security-by-design en praktische audits, geen buzzwords.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="font-bold mb-2">Kostenbewust</h3>
              <p className="text-gray-600">Architectuur die schaalbaar is zonder onnodige kosten.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
