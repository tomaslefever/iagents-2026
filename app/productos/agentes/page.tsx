'use client'

import AgentPreview from '@/components/agentes/AgentPreview'
import VoiceSection from '@/components/home/VoiceSection'
import MCPSection from '@/components/agentes/MCPSection'
import KnowledgeSection from '@/components/agentes/KnowledgeSection'
import SchedulingSection from '@/components/agentes/SchedulingSection'
import HomeBackground from '@/components/home/HomeBackground'
import SecuritySection from '@/components/agentes/SecuritySection'
import AutoTrainingSection from '@/components/home/AutoTrainingSection'
import EngineeringSection from '@/components/agentes/EngineeringSection'
import { Mic, Terminal, ArrowRight } from 'lucide-react'
import LeadGeneration from '@/components/LeadGeneration'

export default function AgentesPage() {
  return (
    <div className="flex flex-col gap-12 pb-8">

      {/* Hero Section */}
      <section className="text-center flex flex-col items-center pt-32 pb-12 lg:pt-40 relative animate-fade-in">
        {/* Background - Full screen width breakout */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full -z-10 overflow-hidden pointer-events-none">
          <HomeBackground />
          <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] font-medium text-indigo-400 tracking-wide uppercase">MCP Ready Protocol</span>
        </div>

        <h1 className="font-medium text-4xl md:text-6xl text-white tracking-tight mb-6 max-w-3xl leading-[1.1]">
          Agentes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Voz y Texto</span> que ejecutan, no solo chatean.
        </h1>

        <p className="text-sm md:text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
          Despliega agentes multimodales capaces de agendar reuniones, realizar seguimientos y conectarse a cualquier API o base de datos mediante MCP.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <button className="bg-white text-zinc-950 text-sm px-6 py-3 rounded-lg font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
            <Mic className="w-4 h-4" />
            Demo de Voz
          </button>
          <button className="text-sm font-medium text-zinc-300 hover:text-white px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
            <Terminal className="w-4 h-4 text-zinc-500" />
            Documentación API
          </button>
        </div>

        <AgentPreview />
      </section>

      <section>
        <VoiceSection />
      </section>

      <MCPSection />
      <SchedulingSection />
      <KnowledgeSection />
      <AutoTrainingSection />
      <EngineeringSection />
      <SecuritySection />

      {/* CTA Section */}
      <LeadGeneration
        backgroundImage="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
        title="Construye tu primer agente hoy"
        subtitle="Acceso inmediato a modelos SOTA, infraestructura de voz de baja latencia y conectores MCP."
      />
    </div>
  )
}
