'use client'

import React, { useState, useEffect } from 'react'
import { Mail, Zap, CheckCircle2, Phone, Database } from 'lucide-react'

export default function ProcessSection() {
    const [activeStep, setActiveStep] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev >= 3 ? 1 : prev + 1))
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="order-2 md:order-1 relative">
                {/* Abstract visual representation of a process */}
                <div className="relative rounded-xl border border-white/10 bg-zinc-900/50 p-8 overflow-hidden h-[480px]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>

                    {/* Step 1: Llamada */}
                    <div className={`flex gap-4 mb-8 transition-opacity duration-500 ${activeStep === 1 ? 'opacity-100' : 'opacity-40'}`}>
                        <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-all duration-500 ${activeStep === 1 ? 'border-indigo-500 bg-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'border-zinc-700 bg-zinc-800 text-zinc-400'}`}>
                                <Phone className="w-3.5 h-3.5" />
                            </div>
                            <div className={`w-px h-12 my-2 transition-colors duration-500 ${activeStep === 1 ? 'bg-indigo-500/50' : 'bg-zinc-800'}`}></div>
                        </div>
                        <div className="pt-1">
                            <h4 className={`text-sm font-medium transition-colors duration-300 ${activeStep === 1 ? 'text-white' : 'text-zinc-400'}`}>Llamada entrante</h4>
                            <p className="text-xs text-zinc-500">Cliente interesado en demo.</p>
                        </div>
                    </div>

                    {/* Step 2: Seguimiento (Active) */}
                    <div className={`flex gap-4 mb-8 transition-opacity duration-500 ${activeStep === 2 ? 'opacity-100' : 'opacity-40'}`}>
                        <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-all duration-500 ${activeStep === 2 ? 'border-indigo-500 bg-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'border-zinc-700 bg-zinc-800 text-zinc-400'}`}>
                                2
                            </div>
                            <div className={`w-px h-full my-2 transition-colors duration-500 ${activeStep === 2 ? 'bg-indigo-500/50' : 'bg-zinc-800'}`}></div>
                        </div>
                        <div className="pt-1 w-full">
                            <h4 className={`text-sm font-medium transition-colors duration-300 ${activeStep === 2 ? 'text-white' : 'text-zinc-400'}`}>Seguimiento Automático</h4>

                            {/* Animated Email Card */}
                            <div className={`mt-3 bg-zinc-950 border border-white/5 p-4 rounded-lg max-w-xs transition-all duration-500 ${activeStep === 2 ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-50 blur-sm'}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Mail className="w-3 h-3 text-indigo-400" />
                                    <span className="text-[10px] text-zinc-500">Email enviado • Ahora mismo</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1.5 w-full bg-zinc-800 rounded-full"></div>
                                    <div className="h-1.5 w-3/4 bg-zinc-800 rounded-full"></div>
                                    <div className="h-1.5 w-1/2 bg-zinc-800 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: CRM */}
                    <div className={`flex gap-4 transition-opacity duration-500 ${activeStep === 3 ? 'opacity-100' : 'opacity-40'}`}>
                        <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs transition-all duration-500 ${activeStep === 3 ? 'border-indigo-500 bg-indigo-500/20 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'border-zinc-700 bg-zinc-800 text-zinc-400'}`}>
                                <Database className="w-3.5 h-3.5" />
                            </div>
                        </div>
                        <div className="pt-1">
                            <h4 className={`text-sm font-medium transition-colors duration-300 ${activeStep === 3 ? 'text-white' : 'text-zinc-400'}`}>Tarea en CRM</h4>
                            <p className="text-xs text-zinc-500">Deal actualizado a "Negotiation".</p>
                            <div className={`mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 text-[10px] text-emerald-400 border border-emerald-500/20 transition-all duration-500 ${activeStep === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                                <CheckCircle2 className="w-3 h-3" /> Updated
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-1 md:order-2 px-4">
                <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-[10px] text-orange-400 font-medium mb-4">
                    <Zap className="w-3 h-3" />
                    <span>Acciones Post-Interacción</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
                    Seguimientos que <br />
                    <span className="text-zinc-400">sí ocurren.</span>
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    El trabajo del agente no termina cuando cuelga. Agentia estructura la data de la conversación, actualiza tu CRM, envía correos de resumen y programa los siguientes pasos automáticamente.
                </p>

                <ul className="flex flex-col gap-4">
                    <li className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-500/20 transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                        </div>
                        <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Extracción de datos estructurados (JSON) de cada llamada.</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-500/20 transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                        </div>
                        <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Disparo de webhooks a Slack, HubSpot o Salesforce.</span>
                    </li>
                    <li className="flex items-start gap-3 group">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-500/20 transition-colors">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                        </div>
                        <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">Análisis de sentimiento y calidad de lead.</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
