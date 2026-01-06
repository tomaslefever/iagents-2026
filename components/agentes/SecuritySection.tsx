'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { ShieldCheck, Lock, Server, FileKey } from 'lucide-react'

export default function SecuritySection() {
    return (
        <ScrollReveal>
            <section className="py-24 relative">
                <div className="absolute inset-0 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <ShieldCheck className="w-3 h-3 text-emerald-400" />
                            <span className="text-[10px] font-semibold text-emerald-400 tracking-widest uppercase">Control & Gobernanza</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                            Autonomía, pero con <br />
                            <span className="text-zinc-500">límites estrictos.</span>
                        </h2>
                        <p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                            Darle herramientas a un agente requiere confianza. Por eso construimos un sistema de permisos granulares donde tú defines qué puede (y qué no puede) hacer.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10">
                                <Lock className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-3">Encriptación Total</h3>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Datos en tránsito (TLS 1.3) y en reposo (AES-256) encriptados. Llaves rotadas automáticamente.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10">
                                <Server className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-3">Despliegue Privado</h3>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Opción de despliegue en tu propia VPC (AWS/Google Cloud/Azure) para que los datos nunca salgan de tu infraestructura.
                            </p>
                        </div>

                        <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:border-emerald-500/50 group-hover:bg-emerald-500/10">
                                <FileKey className="w-6 h-6 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-3">Auditoría y Compliance</h3>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Logs detallados de cada interacción. Cumplimiento SOC2 Type II, HIPAA y GDPR ready.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    )
}
