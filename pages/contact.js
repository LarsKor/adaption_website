import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Adaption</title>
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold mb-4">Contact</h1>
        <p className="text-gray-600 mb-6">Vul onderstaand formulier in en we nemen snel contact op.</p>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
