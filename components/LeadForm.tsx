'use client'

import { useState, useEffect, useRef } from 'react'
import NextImage from 'next/image'
import { X, MessageSquare, Mic, ArrowRight, CheckCircle, User, Phone, Mail } from 'lucide-react'
import intlTelInput from 'intl-tel-input'
import 'intl-tel-input/build/css/intlTelInput.css'

const WEBHOOK_URL = process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || ''
const AGENT_ID = process.env.NEXT_PUBLIC_AGENT_ID || ''

export default function LeadForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedMode, setSelectedMode] = useState<'chat' | 'voice'>('chat')
  const [view, setView] = useState<'login' | 'confirmation'>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<{ name: string; phone: string; type: string } | null>(null)
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const itiRef = useRef<any>(null)

  useEffect(() => {
    // Initialize IntlTelInput
    if (phoneInputRef.current && !itiRef.current) {
      itiRef.current = intlTelInput(phoneInputRef.current, {
        initialCountry: 'auto',
        separateDialCode: true,
        geoIpLookup: (callback) => {
          fetch('https://ipapi.co/json')
            .then((res) => res.json())
            .then((data) => callback(data.country_code))
            .catch(() => callback('us'))
        },
      })
    }

    // Check for saved user
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('iagents_user_data')
      if (savedUser) {
        const parsed = JSON.parse(savedUser)
        setUser(parsed)
        setView('confirmation')
      }
    }

    // Expose global function
    if (typeof window !== 'undefined') {
      ; (window as any).openChatModal = (mode: 'chat' | 'voice' = 'chat') => {
        setSelectedMode(mode)
        setIsOpen(true)
      }
    }

    // Listen for open-chat clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-action="open-chat"]')) {
        e.preventDefault()
        setIsOpen(true)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const handleStart = async () => {
    if (!name.trim()) {
      setError('Por favor completa tu nombre.')
      return
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor ingresa un email válido.')
      return
    }

    const fullPhoneNumber = itiRef.current?.getNumber() || phoneInputRef.current?.value || ''
    const isValid = fullPhoneNumber.replace(/\D/g, '').length > 6

    if (!isValid) {
      setError('Por favor ingresa un teléfono válido.')
      return
    }

    setError('')
    setLoading(true)

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone: fullPhoneNumber,
            source: typeof window !== 'undefined' ? window.location.pathname : '',
            type: 'chat',
            agent_id: AGENT_ID,
            timestamp: new Date().toISOString(),
          }),
        })
      }

      const userData = { name, phone: fullPhoneNumber, type: 'chat' }
      setUser(userData)
      if (typeof window !== 'undefined') {
        localStorage.setItem('iagents_user_data', JSON.stringify(userData))
      }
      setView('confirmation')
    } catch (err) {
      console.error('Error sending lead:', err)
      setError('Error al enviar. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    // Reset inputs manually
    if (phoneInputRef.current) phoneInputRef.current.value = ''
    if (itiRef.current) {
      itiRef.current.setNumber('')
    }
    setUser(null)
    if (typeof window !== 'undefined') {
      localStorage.removeItem('iagents_user_data')
    }
    setView('login')
    setError('')
  }

  const confirmationTitle = user?.type === 'voice' ? '¡Preparando llamada!' : '¡Todo listo!'
  const confirmationMessage =
    user?.type === 'voice'
      ? 'Ten a mano tu teléfono, te llamaremos en seguida.'
      : 'Revisa tu WhatsApp, te enviamos un mensaje.'

  return (
    <>
      <style jsx global>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          z-index: 9998;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .modal-backdrop.active {
          opacity: 1;
          pointer-events: auto;
        }
        .modal-window {
          width: 400px;
          height: 450px;
          max-height: 90vh;
          background: #18181b;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          transform: scale(0.95);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .modal-backdrop.active .modal-window {
          transform: scale(1);
        }
        .iti {
          width: 100%;
        }
        .iti__dropdown-content {
          background-color: #18181b !important;
          border: 1px solid #27272a !important;
          color: white !important;
        }
        .iti__country:hover,
        .iti__country--highlight {
          background-color: #27272a !important;
        }
        .iti__selected-dial-code {
          color: #a1a1aa !important;
        }
        #input-phone {
          background-color: rgba(24, 24, 27, 0.5) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: white !important;
          border-radius: 0.75rem !important;
        }
      `}</style>

      <div
        id="modal-backdrop"
        className={`modal-backdrop ${isOpen ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal()
        }}
      >
        <div id="widget-window" className="modal-window bg-zinc-900/95 backdrop-blur-xl">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-50 text-zinc-500 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full p-1.5"
          >
            <X className="w-5 h-5" />
          </button>

          {view === 'login' ? (
            <div className="flex flex-col h-full p-8">
              <div className="flex flex-col items-center text-center mb-6 mt-4">
                <div className="flex items-center gap-2 mb-4">
                  <NextImage src="/logo.png" alt="iAgents" width={24} height={24} />
                  <span className="text-white font-semibold text-lg">iAgents</span>
                </div>
                <p className="text-zinc-400 text-sm mt-1">Ingresa tus datos para probar la demo</p>
              </div>

              <div className="space-y-4 flex-1 overflow-y-auto custom-scroll px-1">
                <div className="space-y-1.5">
                  {/* <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider pl-1">Nombre</label> */}
                  <div className="relative group">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      placeholder="Tu nombre"
                    />
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-600 group-focus-within:text-emerald-500 transition-colors pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  {/* <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider pl-1">Email</label> */}
                  <div className="relative group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
                      placeholder="tu@email.com"
                    />
                    <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-zinc-600 group-focus-within:text-emerald-500 transition-colors pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-zinc-500 hidden font-bold uppercase tracking-wider pl-1">Teléfono</label>
                  <div className="relative group text-black">
                    <input
                      ref={phoneInputRef}
                      type="tel"
                      id="input-phone"
                      className="w-full px-4 py-3 text-sm transition-all"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-400 text-xs font-medium text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                    {error}
                  </p>
                )}
              </div>

              <button
                onClick={handleStart}
                disabled={loading}
                className="group w-full z-10 flex gap-2 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_-5px_#a855f7] active:scale-[0.98] text-sm font-semibold text-white bg-black h-12 ring-white/20 ring-1 rounded-xl px-5 relative shadow-[0_0_15px_-5px_#a855f7] items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none mt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_50%)] mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.2),transparent_50%)] mix-blend-overlay"></div>
                <div className="transition-all duration-300 group-hover:border-white/70 group-hover:shadow-[inset_0_0_20px_rgba(255,255,255,0.7)] border-white/50 border rounded-xl absolute top-0 right-0 bottom-0 left-0 shadow-[inset_0_0_15px_rgba(255,255,255,0.5)]"></div>

                <div className="relative z-10 flex items-center gap-2 drop-shadow-md leading-none">
                  {loading ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Comenzar Demo</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </div>
              </button>
              <p className="text-[9px] text-zinc-600 text-center mt-3">
                Tus datos son seguros. Al continuar aceptas nuestra política de privacidad.
              </p>
            </div>
          ) : (
            <div className="flex flex-col h-full items-center justify-center p-8 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">{confirmationTitle}</h3>
              <p className="text-zinc-400 text-sm mb-8">{confirmationMessage}</p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={handleReset}
                  className="flex-1 py-3.5 rounded-xl border border-white/10 text-zinc-300 text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  Probar de nuevo
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 bg-white text-zinc-950 font-bold py-3.5 rounded-xl hover:bg-zinc-200 transition-all text-sm flex items-center justify-center gap-2 shadow-lg shadow-white/5"
                >
                  Entendido
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}



