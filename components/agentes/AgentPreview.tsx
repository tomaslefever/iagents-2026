'use client'

import React from 'react'
import { Bot, Mic, Loader2, Database, Calendar, BrainCircuit } from 'lucide-react'
import AudioVisualizer from './AudioVisualizer'

export default function AgentPreview() {
    return (
        <div className="w-full max-w-4xl relative z-10">
            <div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent rounded-2xl blur-xl opacity-50"></div>
            <div className="relative bg-zinc-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[400px]">

                {/* Left: Chat Interface */}
                <div className="w-full md:w-2/3 border-b md:border-b-0 md:border-r border-white/5 bg-zinc-900/50 flex flex-col p-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-white">Agente de Operaciones</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    <span className="text-[10px] text-zinc-500">Online • Voice Active</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-mono">model: gpt-4o</span>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-4 overflow-hidden relative">
                        {/* User Message */}
                        <div className="flex justify-end">
                            <div className="bg-zinc-800 text-zinc-200 text-xs px-4 py-2.5 rounded-2xl rounded-tr-none max-w-[80%] leading-relaxed">
                                Necesito agendar una reunión con el equipo de Marketing para revisar los Q3 metrics. Verifica disponibilidad.
                            </div>
                        </div>

                        {/* Agent Processing */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono pl-2">
                                <Loader2 className="w-3 h-3 animate-spin" />
                                <span>Consultando MCP: Google Calendar...</span>
                            </div>
                            <div className="bg-indigo-600/10 border border-indigo-500/20 text-indigo-200 text-xs px-4 py-2.5 rounded-2xl rounded-tl-none max-w-[80%] leading-relaxed">
                                He encontrado huecos disponibles el Martes a las 10:00 AM y el Jueves a las 2:00 PM. ¿Cuál prefieres que reserve?
                            </div>
                        </div>

                        {/* Voice Visualizer Overlay */}
                        <div className="mt-auto bg-zinc-950/80 border border-white/5 rounded-lg p-3 flex items-center gap-4 backdrop-blur-md">
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                <Mic className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1 h-8 mx-2 overflow-hidden flex items-end opacity-80">
                                <AudioVisualizer />
                            </div>
                            <span className="text-[10px] font-mono text-zinc-400">00:04 / Listening</span>
                        </div>
                    </div>
                </div>

                {/* Right: Capability Config */}
                <div className="w-full md:w-1/3 bg-zinc-950/50 p-6 flex flex-col gap-4">
                    <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">Capacidades Activas</h4>

                    <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors group cursor-default">
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <Database className="w-3.5 h-3.5 text-blue-400" />
                                <span className="text-xs font-medium text-white">MCP: PostgreSQL</span>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500 overflow-hidden text-ellipsis whitespace-nowrap">
                            read_metrics, update_status
                        </div>
                    </div>

                    <div className="p-3 rounded-lg bg-zinc-900 border border-white/5 hover:border-white/10 transition-colors group cursor-default">
                        <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5 text-orange-400" />
                                <span className="text-xs font-medium text-white">Calendar API</span>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-[10px] font-mono text-zinc-500">
                            schedule_event, check_availability
                        </div>
                    </div>

                    <div className="mt-auto p-4 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-900 border border-zinc-800">
                        <div className="flex items-center gap-2 mb-2">
                            <BrainCircuit className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-medium text-white">Base de Conocimiento</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden mb-1">
                            <div className="h-full bg-purple-500 w-[85%] rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-zinc-500">
                            <span>RAG Indexing</span>
                            <span>85% Ready</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
