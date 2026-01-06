'use client'

import { useState, FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

interface ContactFormProps {
  formId: string
  source: string
}

export default function ContactForm({ formId, source }: ContactFormProps) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    data.source = source
    data.url = typeof window !== 'undefined' ? window.location.href : ''
    data.timestamp = new Date().toISOString()

    try {
      const response = await fetch('https://iagents-n8n.98uxik.easypanel.host/webhook/send-lead-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSuccess(true)
        e.currentTarget.reset()
        setTimeout(() => {
          setSuccess(false)
          setLoading(false)
        }, 3000)
      } else {
        throw new Error('Server returned ' + response.status)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setLoading(false)
    }
  }

  return (
    <form id={formId} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Nombre</label>
          <input
            name="name"
            type="text"
            required
            className="bg-zinc-900/50 border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Tu nombre"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Empresa</label>
          <input
            name="company"
            type="text"
            className="bg-zinc-900/50 border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Nombre empresa"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Teléfono</label>
          <input
            name="phone"
            type="tel"
            className="bg-zinc-900/50 border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="Tu teléfono"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Email Corporativo</label>
          <input
            name="email"
            type="email"
            required
            className="bg-zinc-900/50 border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors"
            placeholder="juan@empresa.com"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Mensaje</label>
        <textarea
          name="message"
          rows={3}
          className="bg-zinc-900/50 border border-white/10 rounded px-3 py-2.5 text-xs text-white placeholder-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          placeholder="¿Cómo podemos ayudarte?"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={loading || success}
        className="mt-2 bg-white text-zinc-950 hover:bg-zinc-200 text-xs font-bold py-3 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 disabled:opacity-50 group"
      >
        {success ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>¡Enviado!</span>
          </>
        ) : loading ? (
          <span>Enviando...</span>
        ) : (
          <>
            <span>Solicitar Demo</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </form>
  )
}



