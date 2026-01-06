'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { BookOpen, FileText, Globe, Database, Search } from 'lucide-react'

export default function KnowledgeSection() {
    return (
        <ScrollReveal>
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Text Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                                <BookOpen className="w-3 h-3 text-blue-400" />
                                <span className="text-[10px] font-semibold text-blue-400 tracking-widest uppercase">Memoria y Contexto</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                                Razonan sobre tu negocio, <br className="hidden md:block" /> no solo buscan palabras clave.
                            </h2>
                            <p className="text-sm md:text-base text-zinc-400 mb-8 leading-relaxed max-w-lg">
                                Ingestamos tus manuales y políticas para crear una "memoria semántica". El agente entiende el <strong>por qué</strong> de tus reglas de negocio y las aplica caso a caso, resolviendo ambigüedades sin escalar al supervisor.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col gap-3 group hover:border-blue-500/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-colors">
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white">Manuales Operativos</h4>
                                        <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Entienden procedimientos complejos</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col gap-3 group hover:border-blue-500/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-colors">
                                        <Globe className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white">Knowledge Base Viva</h4>
                                        <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Se actualiza si cambias la web</p>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col gap-3 group hover:border-blue-500/30 transition-colors">
                                    <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-colors">
                                        <Database className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-white">Historial de Cliente</h4>
                                        <p className="text-xs text-zinc-500 mt-1 leading-relaxed">Hiper-personalización real</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Content: Vector Search Visualization */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full opacity-30"></div>

                            <div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] p-8 min-h-[300px] flex flex-col items-center justify-center gap-8">

                                {/* Search Bar Effect */}
                                <div className="w-full bg-zinc-900/80 rounded-full border border-white/10 px-4 py-3 flex items-center gap-3 shadow-lg">
                                    <Search className="w-4 h-4 text-zinc-400" />
                                    <div className="text-sm text-zinc-500 typing-effect">
                                        "¿Cuál es la política de devoluciones?"
                                    </div>
                                </div>

                                {/* Connecting Nodes */}
                                <div className="flex gap-4 relative">
                                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                                    <div className="relative z-10 w-16 h-20 rounded border border-blue-500/30 bg-blue-900/20 flex flex-col items-center justify-center gap-2 backdrop-blur-sm animate-pulse">
                                        <FileText className="w-6 h-6 text-blue-400" />
                                        <span className="text-[10px] text-blue-300">Policy.pdf</span>
                                    </div>

                                    <div className="relative z-10 w-16 h-20 rounded border border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center gap-2 text-zinc-600 grayscale opacity-50">
                                        <Globe className="w-6 h-6" />
                                        <span className="text-[10px]">Web</span>
                                    </div>

                                    <div className="relative z-10 w-16 h-20 rounded border border-zinc-800 bg-zinc-900/50 flex flex-col items-center justify-center gap-2 text-zinc-600 grayscale opacity-50">
                                        <Database className="w-6 h-6" />
                                        <span className="text-[10px]">DB</span>
                                    </div>
                                </div>

                                {/* Result Mockup */}
                                <div className="w-full bg-zinc-800/50 rounded p-4 text-xs text-zinc-400 border border-white/5">
                                    Context retrieved: <span className="text-emerald-400">92% relevance</span>
                                    <div className="mt-2 h-1.5 w-3/4 bg-zinc-700 rounded-full"></div>
                                    <div className="mt-1 h-1.5 w-1/2 bg-zinc-700 rounded-full"></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </ScrollReveal>
    )
}
