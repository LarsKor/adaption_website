import { useState } from 'react'

export default function ContactForm(){
  const [status, setStatus] = useState('')

  return (
    <form
      action="https://formspree.io/f/your-form-id"
      method="POST"
      className="grid gap-4"
      onSubmit={() => setStatus('sending')}
    >
      <label className="block">
        <span className="text-sm text-gray-600">Naam</span>
        <input name="name" required className="mt-1 block w-full rounded-md bg-white/5 border border-white/5 px-3 py-2 text-white" />
      </label>
      <label className="block">
        <span className="text-sm text-gray-600">E-mail</span>
        <input name="email" type="email" required className="mt-1 block w-full rounded-md bg-white/5 border border-white/5 px-3 py-2 text-white" />
      </label>
      <label className="block">
        <span className="text-sm text-gray-600">Bericht</span>
        <textarea name="message" rows="6" required className="mt-1 block w-full rounded-md bg-white/5 border border-white/5 px-3 py-2 text-white" />
      </label>
      <div>
        <button type="submit" className="bg-brand-500 hover:brightness-95 text-slate-900 px-4 py-2 rounded-md font-semibold">Verstuur</button>
        {status === 'sending' && <span className="ml-3 text-gray-400">Versturen...</span>}
      </div>
      <p className="text-xs text-gray-500 mt-2">Tip: vervang de Formspree URL door je eigen formulier-ID in <code>components/ContactForm.js</code>.</p>
    </form>
  )
}
