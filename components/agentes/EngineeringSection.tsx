'use client'

import React from 'react'
import { Code, Webhook, Settings, Activity, Lock, Terminal, Wrench } from 'lucide-react'

export default function EngineeringSection() {
    return (
        <section className="py-24 relative">
            {/* Background Details */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4">

                {/* Left: Content */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 w-fit">
                        <Wrench className="w-3 h-3 text-indigo-400" />
                        <span className="text-[10px] font-medium text-indigo-400 uppercase tracking-wider">Servicio "Done-For-You"</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6 leading-tight">
                        Ingeniería y Adaptación <br />
                        <span className="text-zinc-400">a la medida de tu empresa.</span>
                    </h2>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
                        Sabemos que cada negocio es único. Por eso, el equipo de iAgents se encarga de programar, integrar y desplegar las herramientas personalizadas que tu operación necesita.
                    </p>

                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="flex gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-indigo-500/30 transition-colors">
                                <Code className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1 group-hover:text-indigo-300 transition-colors">Desarrollo de Herramientas</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
                                    Creamos funciones específicas en código (TypeScript/Python) para que el agente ejecute lógica de negocio compleja.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-purple-500/30 transition-colors">
                                <Webhook className="w-5 h-5 text-purple-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1 group-hover:text-purple-300 transition-colors">Integración API Segura</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
                                    Conectamos nuestros agentes a tus sistemas legacy, ERPs o bases de datos mediante túneles seguros y autenticación robusta.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex gap-4 group">
                            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-emerald-500/30 transition-colors">
                                <Settings className="w-5 h-5 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1 group-hover:text-emerald-300 transition-colors">Configuración de Modelo</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
                                    Ajustamos a mano los system prompts, temperatura y ventanas de contexto para garantizar la precisión que tu industria exige.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Code Visual */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 blur-xl rounded-3xl"></div>

                    {/* IDE Window */}
                    <div className="relative bg-[#0F1117] rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
                            </div>
                            <div className="text-zinc-500 text-[10px]">iagents_internal_logic.ts</div>
                            <div className="w-4"></div>
                        </div>

                        {/* Code Content */}
                        <div className="p-6 text-zinc-300 leading- relaxed overflow-x-auto">
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">1</span>
                                <div><span className="text-zinc-500">// iAgents Implementation Team</span></div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">2</span>
                                <div><span className="text-zinc-500">// Custom logic for Client: {`{YourCompany}`}</span></div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">3</span>
                                <div>&nbsp;</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">4</span>
                                <div><span className="text-blue-400">interface</span> <span className="text-yellow-200">InventoryParams</span> {'{'}</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">5</span>
                                <div>&nbsp;&nbsp;<span className="text-sky-300">sku</span>: <span className="text-text-200">string</span>;</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">6</span>
                                <div>&nbsp;&nbsp;<span className="text-sky-300">locationId</span>: <span className="text-text-200">string</span>;</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">7</span>
                                <div>{'}'}</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">8</span>
                                <div>&nbsp;</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">9</span>
                                <div><span className="text-blue-400">export async function</span> <span className="text-yellow-200">checkRealTimeStock</span>(params: <span className="text-yellow-200">InventoryParams</span>) {'{'}</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">10</span>
                                <div>&nbsp;&nbsp;<span className="text-zinc-500">// Secure connection to client's SAP instance</span></div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">11</span>
                                <div>&nbsp;&nbsp;<span className="text-purple-400">const</span> connection = <span className="text-purple-400">await</span> SapConnector.<span className="text-yellow-200">connect</span>(env.<span className="text-orange-300">SAP_CREDENTIALS</span>);</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">12</span>
                                <div>&nbsp;&nbsp;</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">13</span>
                                <div>&nbsp;&nbsp;<span className="text-purple-400">const</span> stock = <span className="text-purple-400">await</span> connection.<span className="text-yellow-200">queryMaterial</span>({'{'}</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">14</span>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">matId</span>: params.<span className="text-orange-300">sku</span>,</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">15</span>
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-sky-300">plant</span>: params.<span className="text-orange-300">locationId</span></div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">16</span>
                                <div>&nbsp;&nbsp;{'}'});</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">17</span>
                                <div>&nbsp;&nbsp;</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">18</span>
                                <div>&nbsp;&nbsp;<span className="text-purple-400">return</span> stock.<span className="text-orange-300">quantity</span>;</div>
                            </div>
                            <div className="flex">
                                <span className="text-zinc-600 select-none mr-4 text-right w-4">19</span>
                                <div>{'}'}</div>
                            </div>
                        </div>

                        {/* Status Bar */}
                        <div className="bg-white/5 border-t border-white/5 px-4 py-1.5 flex items-center justify-between text-[10px] text-zinc-500">
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <Lock className="w-2.5 h-2.5" />
                                    <span>Encrypted Tunnel</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Deployed by iAgents</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Label */}
                    <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-white/10 p-4 rounded-xl shadow-xl animate-float hidden md:block">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                <Terminal className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-xs font-medium text-white">Full Managed</div>
                                <div className="text-[10px] text-zinc-500">Nosotros codificamos, tú escalas.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
