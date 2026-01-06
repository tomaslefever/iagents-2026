'use client'

import { useRef, useEffect, useState } from 'react'
import { MoreHorizontal } from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import HomeBackground from './HomeBackground'

export default function HeroSection() {
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Real Chat State
  const [messages, setMessages] = useState<any[]>([
    { id: 'welcome', sender: 'agent', text: 'Hola, soy Sofía de iAgents, estoy para asistirte en la implementación de IA en tu negocio. Primero dime cómo te llamas y de qué se trata tu empresa o negocio?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState('')

  useEffect(() => {
    // Generate simple session ID on mount
    setSessionId(Math.random().toString(36).substring(7))
  }, [])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages, isLoading])

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMsg = {
      id: Date.now().toString(),
      sender: 'lead',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMsg])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('https://iagents-n8n.98uxik.easypanel.host/webhook/9dc47195-d9fa-4e4d-b1f7-a265f0f091d1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMsg.text,
          sessionId: sessionId
        })
      })

      const data = await response.json()

      const agentMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: data.output || 'Lo siento, hubo un error al procesar tu mensaje.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages(prev => [...prev, agentMsg])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        text: 'Lo siento, no pude conectar con el servidor. Por favor intenta de nuevo.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, errorMsg])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <main className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center lg:pt-40 py-32 lg:py-32 relative z-10">
      {/* Background - Full screen width breakout */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full -z-10 overflow-hidden pointer-events-none">
        <HomeBackground />
        <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
      </div>

      {/* Hero Copy */}
      <div className="lg:col-span-5 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 self-start px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] mb-6 uppercase tracking-widest font-semibold">
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

        <div className="flex items-center gap-3">
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
      <div className="lg:col-span-7 relative">
        {/* Decorative BG glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 rounded-3xl blur-2xl"></div>

        <div className="backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl relative animate-float flex flex-col max-h-[420px] h-[420px] border-zinc-800">
          {/* Main Chat Interface */}
          <div className="flex-1 flex flex-col bg-zinc-900/50 max-h-[420px] h-[420px]">
            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-zinc-900/80">
              <div className="flex items-center gap-3">
                <img src="/img/agent-profile.png" alt="Agente de Ventas" className="w-8 h-8 rounded-full" />
                <div>
                  <div className="text-xs text-white font-medium">Agente de Ventas</div>
                  <div className="text-[10px] text-green-500 flex items-center gap-1">
                    <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                    En línea
                  </div>
                </div>
              </div>
              <MoreHorizontal className="text-zinc-500 w-4 h-4" />
            </div>

            {/* Chat Area */}
            <div
              id="hero-chat-messages"
              ref={chatContainerRef}
              className="flex-1 p-4 flex flex-col gap-4 overflow-y-scroll h-[300px] custom-scroll bg-zinc-950/30"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`hero-chat-msg max-w-[85%] flex flex-col ${msg.sender === 'agent' ? 'self-end items-end' : 'self-start items-start'}`}
                >
                  <div className={`${msg.sender === 'agent'
                    ? 'bg-indigo-600 text-white px-3 py-2 rounded-2xl rounded-tr-none text-xs leading-relaxed shadow-lg shadow-indigo-900/20'
                    : 'bg-zinc-800 text-zinc-200 px-3 py-2 rounded-2xl rounded-tl-none text-xs leading-relaxed border border-white/5'
                    }`}>
                    {msg.text}
                  </div>
                  <span className={`text-[9px] text-zinc-600 mt-1 ${msg.sender === 'agent' ? 'mr-1' : 'ml-1'}`}>
                    {msg.time}
                  </span>
                </div>
              ))}

              {isLoading && (
                <div className="self-end max-w-[85%]">
                  <div className="flex gap-1 items-center bg-indigo-600/10 border border-indigo-500/20 px-3 py-2 rounded-2xl rounded-tr-none">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input area */}
            <div className="p-3 border-t border-white/5 bg-zinc-900 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-zinc-800/50 border border-white/5 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder-zinc-600"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
