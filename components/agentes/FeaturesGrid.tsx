'use client'

import React from 'react'
import { Network, Mic2, CalendarCheck, BookOpen, ShieldCheck, Lock, Server, FileText, Globe, Brain, User, RefreshCw } from 'lucide-react'

export default function FeaturesGrid() {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

                {/* Feature 1: MCP Core (Large) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-8 hover:bg-zinc-900/50 transition-colors">
                    <div className="shimmer"></div>
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                            <Network className="w-5 h-5 text-indigo-400" />
                        </div>
                        <h3 className="text-xl font-medium text-white mb-2">MCP Ready: Conectividad Universal</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mb-6">
                            Implementamos el <strong>Model Context Protocol</strong> para que tus agentes se conecten de forma estandarizada a cualquier dato local o remoto.
                        </p>

                        {/* Code Snippet Visual */}
                        <div className="mt-auto bg-[#0d0d0d] border border-white/10 rounded-lg p-4 font-mono text-[10px] text-zinc-400 overflow-hidden shadow-inner">
                            <div className="flex gap-1.5 mb-3 border-b border-white/5 pb-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                <span className="ml-auto text-zinc-600">agent_config.json</span>
                            </div>
                            <div className="text-blue-400">"mcp_servers"</div>: {'{'}
                            <br />
                            &nbsp;&nbsp;<div className="text-green-400 inline">"filesystem"</div>: {'{'} <div className="text-orange-400 inline">"command"</div>: <div className="text-yellow-300 inline">"npx"</div>, <div className="text-orange-400 inline">"args"</div>: [<div className="text-yellow-300 inline">"-y"</div>, <div className="text-yellow-300 inline">"@modelcontextprotocol/server-filesystem"</div>] {'}'},
                            <br />
                            &nbsp;&nbsp;<div className="text-green-400 inline">"postgres"</div>: {'{'} <div className="text-orange-400 inline">"url"</div>: <div className="text-yellow-300 inline">"env:DB_URL"</div> {'}'}
                            <br />
                            {'}'}
                        </div>
                    </div>
                </div>

                {/* Feature 2: Voice Capabilities */}
                <div className="col-span-1 md:col-span-1 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-6 hover:border-purple-500/30 transition-all">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                            <Mic2 className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="px-2 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-300 font-medium">Latencia &lt;500ms</div>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Voz Humana en Tiempo Real</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                        Interrupciones naturales, control de tono y respuestas instantáneas para atención al cliente y ventas.
                    </p>
                </div>

                {/* Feature 3: Scheduling */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-6 hover:bg-zinc-900/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400">
                            <CalendarCheck className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-medium text-white">Agendamiento</h3>
                    </div>
                    <p className="text-xs text-zinc-500 mb-4">
                        Negociación autónoma de horarios y envío de invitaciones.
                    </p>
                    {/* Calendar visual */}
                    <div className="bg-zinc-800/50 rounded p-2 border border-white/5">
                        <div className="flex gap-1 mb-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-zinc-600"></div>
                            <div className="h-1.5 w-full bg-zinc-700 rounded-full"></div>
                        </div>
                        <div className="flex gap-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                            <div className="h-1.5 w-2/3 bg-orange-500/20 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Feature 4: Knowledge Base */}
                <div className="col-span-1 md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-6 hover:bg-zinc-900/50 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                            <BookOpen className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-medium text-white">RAG Knowledge</h3>
                    </div>
                    <p className="text-xs text-zinc-500 mb-2">
                        Entrena a tu agente con PDFs, Notion o Webs.
                    </p>
                    <div className="flex -space-x-2 mt-auto">
                        <div className="w-6 h-6 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center text-[8px] text-zinc-400"><FileText className="w-3 h-3" /></div>
                        <div className="w-6 h-6 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center text-[8px] text-zinc-400"><Globe className="w-3 h-3" /></div>
                        <div className="w-6 h-6 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center text-[8px] text-zinc-400">+5</div>
                    </div>
                </div>

                {/* Feature 5: Security (Wide) */}
                <div className="col-span-1 md:col-span-3 lg:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-6 flex flex-col justify-center">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <div className="relative z-10 flex items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                <h3 className="text-lg font-medium text-white">Seguridad Empresarial</h3>
                            </div>
                            <p className="text-xs text-zinc-400 max-w-xs">
                                SOC2 Type II, Encriptación AES-256, y despliegue en VPC privada. Tus datos nunca entrenan modelos públicos.
                            </p>
                        </div>
                        <div className="hidden sm:flex flex-col gap-2">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/5 text-[10px] text-zinc-300">
                                <Lock className="w-3 h-3" /> End-to-End Encryption
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/5 text-[10px] text-zinc-300">
                                <Server className="w-3 h-3" /> Private Cloud
                            </div>
                        </div>
                    </div>
                </div>



                {/* Feature 6: Auto Training (Wide) */}
                <div className="col-span-1 md:col-span-3 lg:col-span-2 group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/30 p-6 flex flex-col justify-center hover:bg-zinc-900/50 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 flex items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <Brain className="w-5 h-5 text-indigo-400" />
                                <h3 className="text-lg font-medium text-white">Auto-Entrenamiento</h3>
                            </div>
                            <p className="text-xs text-zinc-400 max-w-xs">
                                Tus agentes practican escenarios con "User Personas" simulados para afinar respuestas antes de salir a producción.
                            </p>
                        </div>
                        <div className="hidden sm:flex flex-col gap-2 min-w-[140px]">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/5 text-[10px] text-zinc-300">
                                <User className="w-3 h-3 text-zinc-500" /> Simulación Activa
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-300">
                                <RefreshCw className="w-3 h-3 animate-spin" /> Training Mode
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
