'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { CalendarCheck, Clock, MessageSquare, CheckCircle2 } from 'lucide-react'

export default function SchedulingSection() {
    return (
        <ScrollReveal>
            <section className="py-24 relative bg-zinc-900/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">

                        {/* Visual Content: Calendar/Chat Interaction */}
                        <div className="relative order-2 lg:order-1">
                            {/* Abstract Calendar UI */}
                            <div className="relative z-10 bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl max-w-md mx-auto transform rotate-[-2deg]">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-white font-medium">Noviembre 2024</h3>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                        <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-2 mb-4 text-center text-xs text-zinc-500">
                                    <div>L</div><div>M</div><div>X</div><div>J</div><div>V</div><div>S</div><div>D</div>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-sm">
                                    {/* Mock days */}
                                    {[...Array(30)].map((_, i) => (
                                        <div key={i} className={`
                                            aspect-square flex items-center justify-center rounded-lg relative
                                            ${i === 15 ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-zinc-400 hover:bg-white/5'}
                                        `}>
                                            {i + 1}
                                            {i === 15 && <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full"></div>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Chat Message */}
                            <div className="absolute -right-4 bottom-12 bg-zinc-900 border border-white/10 p-4 rounded-xl shadow-xl max-w-[240px] z-20 animate-bounce-slow transform rotate-[2deg]">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                                        <Clock className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white leading-relaxed">
                                            "He agendado tu reunión para el <strong>16 de Nov a las 10:00 AM</strong>. Te envié la invitación."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
                                <CalendarCheck className="w-3 h-3 text-orange-400" />
                                <span className="text-[10px] font-semibold text-orange-400 tracking-widest uppercase">Agendamiento Negociado</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">
                                No solo comparte link. <br className="hidden md:block" /> Negocia la reunión.
                            </h2>
                            <p className="text-sm md:text-base text-zinc-400 mb-8 leading-relaxed max-w-lg">
                                Tirar un link de Calendly es frío. Nuestros agentes conversan: "¿Te queda bien el martes? ¿O prefieres el jueves por la mañana?" Ofrecen opciones lógicas basadas en tu disponibilidad real y cierran el trato en el chat.
                            </p>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                        <CheckCircle2 className="w-3 h-3 text-orange-400" />
                                    </div>
                                    <span className="text-sm text-zinc-300">Evita el "ping-pong" de correos eterno</span>
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                        <CheckCircle2 className="w-3 h-3 text-orange-400" />
                                    </div>
                                    <span className="text-sm text-zinc-300">Maneja reagendamientos y cancelaciones solo</span>
                                </li>
                                <li className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                                        <CheckCircle2 className="w-3 h-3 text-orange-400" />
                                    </div>
                                    <span className="text-sm text-zinc-300">Detecta intención de compra antes de bloquear tu tiempo</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </ScrollReveal>
    )
}
