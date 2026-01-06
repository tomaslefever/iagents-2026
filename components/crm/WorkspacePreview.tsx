'use client'

import { LayoutGrid, CheckCircle2 } from 'lucide-react'

export default function WorkspacePreview() {
    return (
        <section className="py-16 border-y border-white/5 px-6">
            <div className="flex flex-col md:flex-row gap-12 items-center max-w-[1100px] mx-auto">
                <div className="md:w-1/2">
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-semibold mb-4">
                        <LayoutGrid className="w-3 h-3" />
                        Smart Workspace
                    </div>
                    <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">
                        Workspace centralizado
                        <br />
                        <span className="text-zinc-500">para tus agentes y datos.</span>
                    </h2>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                        Gestiona tus contactos en vistas de lista, calendario o funnel.
                        Tus agentes actualizan la información en tiempo real tras cada
                        interacción en WhatsApp, correo o llamada.
                    </p>

                    <ul className="space-y-3">
                        {[
                            'Vistas: Funnel, Calendario, Tabla',
                            'Edición masiva de parámetros de agentes',
                            'Logs de conversación y grabaciones'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-xs text-zinc-300">
                                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual Table Representation */}
                <div className="md:w-1/2 w-full">
                    <div className="glass-panel rounded-lg overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950/50">
                        {/* Fake Window Controls */}
                        <div className="bg-zinc-900/50 px-3 py-2 border-b border-white/5 flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
                        </div>

                        {/* Table Header */}
                        <div className="grid grid-cols-4 bg-zinc-900/30 border-b border-white/5 text-[10px] font-medium text-zinc-500 p-2 uppercase tracking-wide">
                            <div className="col-span-1">Name</div>
                            <div className="col-span-1">Company</div>
                            <div className="col-span-1">Status</div>
                            <div className="col-span-1 text-right">LTV</div>
                        </div>

                        {/* Rows */}
                        <div className="grid grid-cols-4 p-2 items-center hover:bg-zinc-800/30 transition-colors border-b border-white/5 group">
                            <div className="col-span-1 flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-[9px] font-bold">
                                    JD
                                </div>
                                <span className="text-xs text-zinc-200">John Doe</span>
                            </div>
                            <div className="col-span-1 flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-sm bg-white/10"></div>
                                <span className="text-xs text-zinc-400">Acme Inc</span>
                            </div>
                            <div className="col-span-1">
                                <span className="bg-emerald-500/10 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded border border-emerald-500/20">
                                    Active
                                </span>
                            </div>
                            <div className="col-span-1 text-right text-xs font-mono text-zinc-300">
                                $12k
                            </div>
                        </div>

                        <div className="grid grid-cols-4 p-2 items-center hover:bg-zinc-800/30 transition-colors border-b border-white/5 group">
                            <div className="col-span-1 flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-[9px] font-bold">
                                    SM
                                </div>
                                <span className="text-xs text-zinc-200">Sarah M.</span>
                            </div>
                            <div className="col-span-1 flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-sm bg-white/10"></div>
                                <span className="text-xs text-zinc-400">Stripe</span>
                            </div>
                            <div className="col-span-1">
                                <span className="bg-blue-500/10 text-blue-400 text-[9px] px-1.5 py-0.5 rounded border border-blue-500/20">
                                    New
                                </span>
                            </div>
                            <div className="col-span-1 text-right text-xs font-mono text-zinc-300">
                                $5k
                            </div>
                        </div>

                        <div className="grid grid-cols-4 p-2 items-center bg-indigo-500/5 border-l-2 border-indigo-500 border-b border-white/5">
                            <div className="col-span-1 flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-zinc-700 text-zinc-300 flex items-center justify-center text-[9px] font-bold">
                                    MR
                                </div>
                                <span className="text-xs text-white font-medium">Mike Ross</span>
                            </div>
                            <div className="col-span-1 flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-sm bg-white/10"></div>
                                <span className="text-xs text-zinc-300">LegalZoom</span>
                            </div>
                            <div className="col-span-1">
                                <span className="bg-zinc-800 text-zinc-400 text-[9px] px-1.5 py-0.5 rounded border border-zinc-700">
                                    Churned
                                </span>
                            </div>
                            <div className="col-span-1 text-right text-xs font-mono text-zinc-300">
                                $2k
                            </div>
                        </div>

                        <div className="grid grid-cols-4 p-2 items-center hover:bg-zinc-800/30 transition-colors group opacity-50">
                            <div className="col-span-1 flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-[9px] font-bold">
                                    AL
                                </div>
                                <span className="text-xs text-zinc-200">Ana Lopez</span>
                            </div>
                            <div className="col-span-1 flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-sm bg-white/10"></div>
                                <span className="text-xs text-zinc-400">Vercel</span>
                            </div>
                            <div className="col-span-1">
                                <span className="bg-emerald-500/10 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded border border-emerald-500/20">
                                    Active
                                </span>
                            </div>
                            <div className="col-span-1 text-right text-xs font-mono text-zinc-300">
                                $24k
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
