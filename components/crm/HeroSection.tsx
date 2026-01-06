'use client'

import { ArrowRight, PlayCircle } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center pt-32 pb-20 relative z-10 text-center px-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-[10px] mb-8 animate-fade-in backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>Nuevo: Agentes de Voz Inteligentes</span>
                <ArrowRight className="w-3 h-3 ml-1" />
            </div>

            {/* Headline */}
            <h1 className="font-medium text-4xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Crea Agentes IA que trabajan
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 via-indigo-400 to-indigo-600">
                    conectados a tu negocio.
                </span>
            </h1>

            <p className="text-sm text-zinc-400 leading-relaxed mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Configura agentes de texto y voz en minutos. Conéctalos a Gmail,
                HubSpot, WhatsApp y Calendar para automatizar ventas y soporte sin
                supervisión.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <button className="flex items-center justify-center gap-2 bg-white text-zinc-950 px-6 py-3 rounded-md text-xs font-semibold hover:bg-zinc-200 transition-all w-full sm:w-auto shadow-lg shadow-white/5">
                    <span>Ver Demo Interactiva</span>
                    <kbd className="hidden md:inline-block ml-2 px-1.5 py-0.5 bg-zinc-300 text-zinc-600 rounded text-[9px] font-sans">
                        K
                    </kbd>
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-md text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all border border-transparent hover:border-zinc-800 w-full sm:w-auto">
                    <PlayCircle className="w-4 h-4" />
                    Ver Video (2 min)
                </button>
            </div>
        </section>
    )
}
