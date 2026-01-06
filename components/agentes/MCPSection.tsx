'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { Network, Database, Terminal, Globe } from 'lucide-react'

export default function MCPSection() {
    return (
        <ScrollReveal>
            <section className="py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Text Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
                                <Network className="w-3 h-3 text-indigo-400" />
                                <span className="text-[10px] font-semibold text-indigo-400 tracking-widest uppercase">Capacidad de Ejecución</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                                Pasan de chatear <br className="hidden md:block" /> a hacer cosas reales.
                            </h2>
                            <p className="text-sm md:text-base text-zinc-400 mb-8 leading-relaxed max-w-lg">
                                A diferencia de un chatbot tradicional, nuestros agentes utilizan el estándar <strong>MCP (Model Context Protocol)</strong> para tener "manos". Pueden leer bases de datos, enviar emails, y operar tu software interno.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                                        <Terminal className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-sm mb-1">Uso de Herramientas</h4>
                                        <p className="text-xs text-zinc-400 leading-relaxed">El agente decide cuándo usar una herramienta: "Necesito consultar el stock antes de responder".</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                                        <Database className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium text-sm mb-1">Lectura y Escritura</h4>
                                        <p className="text-xs text-zinc-400 leading-relaxed">No solo leen información; pueden actualizar el estado de un ticket o crear una nueva entrada en el CRM.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Content: Code/Architecture */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-500/20 blur-[100px] rounded-full opacity-50"></div>

                            <div className="relative rounded-xl border border-white/10 bg-[#0d0d0d] shadow-2xl overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                                    <div className="ml-4 text-xs text-zinc-500 font-mono">mcp_server_config.json</div>
                                </div>

                                <div className="p-6 overflow-x-auto">
                                    <pre className="font-mono text-sm leading-relaxed">
                                        <code className="block text-zinc-400">
                                            <span className="text-purple-400">"mcp_servers"</span>: {'{'}<br />
                                            &nbsp;&nbsp;<span className="text-blue-400">"postgres_db"</span>: {'{'}<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">"command"</span>: <span className="text-green-400">"npx"</span>,<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">"args"</span>: [<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"-y"</span>,<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"@modelcontextprotocol/server-postgres"</span>,<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"postgresql://user:pass@db:5432/crm"</span><br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;]<br />
                                            &nbsp;&nbsp;{'}'},<br />
                                            &nbsp;&nbsp;<span className="text-blue-400">"filesystem"</span>: {'{'}<br />
                                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">"args"</span>: [<span className="text-green-400">"/var/docs/knowledge-base"</span>]<br />
                                            &nbsp;&nbsp;{'}'}<br />
                                            {'}'}
                                        </code>
                                    </pre>
                                </div>

                                <div className="border-t border-white/5 bg-white/5 p-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                        <span className="text-xs text-emerald-400 font-mono">Connected: 3 servers</span>
                                    </div>
                                    <Globe className="w-4 h-4 text-zinc-500" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </ScrollReveal>
    )
}
