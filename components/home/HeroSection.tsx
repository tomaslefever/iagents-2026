'use client'

import { useRef, useEffect, useState } from 'react'
import { MoreHorizontal, Wifi, Battery, Bot, Plus, Send, Check } from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import HomeBackground from './HomeBackground'

export default function HeroSection() {
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [interactionStep, setInteractionStep] = useState(0)

  // Sequence timer
  useEffect(() => {
    if (interactionStep < 5) {
      const timer = setTimeout(() => {
        setInteractionStep(prev => prev + 1)
      }, interactionStep === 0 ? 1000 : 2000)
      return () => clearTimeout(timer)
    }
  }, [interactionStep])

  // Auto-scroll on new messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [interactionStep])

  return (
    <main className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center lg:pt-40 py-32 lg:py-32 relative z-10">
      {/* Background - Full screen width breakout */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
      </div>

      {/* Hero Copy */}
      <div className="lg:col-span-5 lg:-mt-24 flex flex-col justify-center animate-fade-in items-center lg:items-start text-center lg:text-left">
        <div className="inline-flex items-center gap-2 self-center lg:self-start px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] mb-6 uppercase tracking-widest font-semibold">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
          </span>
          iAgents CRM v2.0
        </div>

        <h1 className="font-medium text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-6">
          Tus leads atendidos
          <br />
          <span className="text-zinc-500">automáticamente.</span>
        </h1>

        <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-md">
          Agentes inteligentes que califican leads, agendan citas y sincronizan datos con tu CRM 24/7. Reduce costos
          operativos y aumenta la conversión sin intervención humana.
        </p>

        <div className="flex items-center gap-3 justify-center lg:justify-start">
          <CTAButton text="Probar ahora" />
          <div className="flex items-center gap-2 px-4 py-2 text-xs text-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-zinc-600"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>Setup en 5 min</span>
          </div>
        </div>
      </div>

      {/* Hero Visual: Conversation & Logic */}
      <div className="lg:col-span-7 relative h-[600px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full scale-75 opacity-50 pointer-events-none"></div>

        {/* Phone Container */}
        <div className="relative w-[320px] bg-zinc-950 rounded-[2rem] border-4 border-zinc-900 shadow-2xl overflow-hidden animate-float">
          {/* Status Bar */}
          <div className="h-6 bg-zinc-950 w-full flex items-center justify-between px-6 pt-2">
            <span className="text-[10px] text-white font-medium">14:20</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 text-white">
                <Wifi className="w-3 h-3" />
              </div>
              <div className="w-3 h-3 text-white">
                <Battery className="w-3 h-3" />
              </div>
            </div>
          </div>

          {/* Chat Header */}
          <div className="bg-zinc-900/80 backdrop-blur p-4 flex items-center gap-3 border-b border-white/5">
            <img src="/img/agent-profile.png" alt="Sofía" className="w-8 h-8 rounded-full object-cover" />
            <div>
              <div className="text-xs font-medium text-white">
                Sofía
              </div>
              <div className="text-[9px] text-indigo-400">
                En línea • Soporte 24/7
              </div>
            </div>
            <MoreHorizontal className="ml-auto text-zinc-500 w-4 h-4" />
          </div>

          {/* Chat Body */}
          <div className="relative h-[400px] bg-zinc-950 overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}></div>
            <div ref={chatContainerRef} className="absolute inset-0 p-4 flex flex-col gap-3 overflow-y-auto custom-scroll">

              {/* Messages */}
              {interactionStep >= 1 && (
                <div className="self-end max-w-[85%] bg-indigo-600 rounded-2xl rounded-tr-sm p-3 shadow-sm z-10 chat-bubble animate-slide-in-right">
                  <p className="text-[11px] text-white leading-relaxed">
                    Hola, vi que ayudan a automatizar ventas. ¿Cómo funciona?
                  </p>
                </div>
              )}

              {interactionStep >= 2 && (
                <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 chat-bubble animate-slide-in-left">
                  <p className="text-[11px] text-zinc-200 leading-relaxed">
                    ¡Hola! 🚀 Exacto. Me conecto a tu WhatsApp, califico leads en segundos y agendo reuniones solo con clientes reales.
                  </p>
                </div>
              )}

              {interactionStep >= 3 && (
                <div className="self-end max-w-[85%] bg-indigo-600 rounded-2xl rounded-tr-sm p-3 shadow-sm z-10 chat-bubble animate-slide-in-right">
                  <p className="text-[11px] text-white leading-relaxed">
                    Suena bien. ¿Se integra con mi CRM?
                  </p>
                </div>
              )}

              {interactionStep >= 4 && (
                <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 chat-bubble animate-slide-in-left">
                  <p className="text-[11px] text-zinc-200 leading-relaxed">
                    Sí, nativamente. Envíame tu web y te muestro una demo ahora mismo. 👇
                  </p>
                  <div className="mt-2 flex gap-2">
                    <button className="bg-indigo-500/20 text-indigo-300 text-[10px] px-2 py-1 rounded border border-indigo-500/30">
                      Ver Demo
                    </button>
                    <button className="bg-zinc-700 text-zinc-300 text-[10px] px-2 py-1 rounded">
                      Precios
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-zinc-900 border-t border-white/5 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
              <Plus className="w-4 h-4" />
            </div>
            <div className="flex-1 h-8 bg-zinc-950 rounded-full border border-zinc-800 px-3 flex items-center text-[10px] text-zinc-500">
              Escribe un mensaje...
            </div>
            <div className="w-6 h-6 text-indigo-500">
              <Send className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Floating Notification */}
        {interactionStep >= 5 && (
          <div className="absolute bottom-24 -right-8 glass-card p-3 rounded-xl flex items-center gap-3 animate-slide-up shadow-xl max-w-[200px] z-20 bg-zinc-900/90 border border-white/10 backdrop-blur-md">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <div className="text-[11px] font-medium text-white">
                Integración Detectada
              </div>
              <div className="text-[9px] text-zinc-400">
                CRM sincronizado exitosamente
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
