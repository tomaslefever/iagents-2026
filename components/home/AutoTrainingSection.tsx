'use client'

import React, { useState, useEffect } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { Brain, Play, RefreshCw, BarChart, Settings, User } from 'lucide-react'

export default function AutoTrainingSection() {
    const [isSimulating, setIsSimulating] = useState(false)
    const [messages, setMessages] = useState<any[]>([])
    const [selectedScenario, setSelectedScenario] = useState('ecommerce')

    const scenarios: Record<string, { label: string, risk: string, riskColor: string, steps: any[] }> = {
        ecommerce: {
            label: 'Comprador / Estado de Pedido',
            risk: 'E-commerce',
            riskColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
            steps: [
                { sender: 'user', text: 'Hola, ¿dónde está mi pedido? No ha llegado.', delay: 1000 },
                { sender: 'agent', text: 'Hola. Lamento la demora. ¿Me podrías indicar tu número de orden para revisarlo?', delay: 2500 },
                { sender: 'user', text: 'Es el #ORD-9921.', delay: 4000 },
                { sender: 'agent-thinking', text: 'Consultando API de logística en tiempo real...', delay: 4500 },
                { sender: 'agent', text: 'Veo que hubo un retraso en aduanas, pero ya fue liberado. Llegará mañana antes de las 18:00 hrs.', delay: 6000 },
            ]
        },
        automotive: {
            label: 'Interesado / Test Drive SUV',
            risk: 'Automotriz',
            riskColor: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
            steps: [
                { sender: 'user', text: 'Hola, vi el nuevo SUV 2024 y quiero probarlo.', delay: 1000 },
                { sender: 'agent', text: '¡Excelente elección! Es líder en seguridad. ¿Te gustaría agendar un Test Drive esta semana?', delay: 2500 },
                { sender: 'user', text: 'Sí, ¿tienen disponibilidad para el sábado?', delay: 4000 },
                { sender: 'agent-thinking', text: 'Verificando flota de demo disponible...', delay: 4500 },
                { sender: 'agent', text: 'Tengo el modelo Full Equipo disponible a las 11:00 AM. ¿Te reservo ese cupo?', delay: 6000 },
            ]
        },
        education: {
            label: 'Postulante / Información Diplomado',
            risk: 'Educación',
            riskColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
            steps: [
                { sender: 'user', text: 'Me interesa el Diplomado en Data Science.', delay: 1000 },
                { sender: 'agent', text: 'Es un programa intensivo de 6 meses. ¿Te gustaría recibir el plan de estudios y valores?', delay: 2500 },
                { sender: 'user', text: 'Sí, por favor envíamelo.', delay: 4000 },
                { sender: 'agent-thinking', text: 'Generando PDF personalizado y enviando correo...', delay: 4500 },
                { sender: 'agent', text: '¡Listo! Te he enviado el brochure completo a tu correo. ¿Tienes alguna duda sobre los requisitos de admisión?', delay: 6000 },
            ]
        },
        clinical: {
            label: 'Paciente / Agendamiento Clínico',
            risk: 'Salud',
            riskColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
            steps: [
                { sender: 'user', text: 'Hola, necesito hora con un dermatólogo.', delay: 1000 },
                { sender: 'agent', text: 'Hola, claro. Tengo disponibilidad para este jueves a las 11:00 o viernes a las 15:00. ¿Cuál prefieres?', delay: 2500 },
                { sender: 'user', text: 'El viernes me acomoda más.', delay: 4000 },
                { sender: 'agent-thinking', text: 'Verificando agenda y bloqueando horario...', delay: 4500 },
                { sender: 'agent', text: 'Perfecto. He reservado tu cita para el viernes a las 15:00 hrs. Recuerda llegar 15 minutos antes.', delay: 6000 },
            ]
        },
        realestate: {
            label: 'Interesado / Visita Departamento',
            risk: 'Inmobiliaria',
            riskColor: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
            steps: [
                { sender: 'user', text: 'Hola, vi el departamento en el centro y me gustaría visitarlo.', delay: 1000 },
                { sender: 'agent', text: 'Hola! Excelente elección. ¿Te gustaría agendar una visita para conocer los acabados?', delay: 2500 },
                { sender: 'user', text: 'Sí, ¿se puede el sábado?', delay: 4000 },
                { sender: 'agent-thinking', text: 'Consultando disponibilidad de agente en terreno...', delay: 4500 },
                { sender: 'agent', text: 'Tengo disponibilidad el sábado a las 10:00 o a las 12:00. ¿Cuál te queda mejor?', delay: 6000 },
            ]
        }
    }

    const startSimulation = () => {
        setIsSimulating(true)
        setMessages([])

        const currentScenario = scenarios[selectedScenario]
        let cumulativeDelay = 0

        currentScenario.steps.forEach((msg) => {
            cumulativeDelay = msg.delay
            setTimeout(() => {
                setMessages(prev => [...prev, msg])
            }, cumulativeDelay)
        })

        setTimeout(() => {
            setIsSimulating(false)
        }, 8000)
    }

    return (
        <ScrollReveal>
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none"></div>

                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] uppercase tracking-widest font-semibold mb-4">
                        <Brain className="w-3 h-3" />
                        Auto-Entrenamiento
                    </div>
                    <h2 className="text-3xl font-medium text-white tracking-tight mb-4">
                        Mejora continua, sin supervisión
                    </h2>
                    <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
                        Tus agentes practican escenarios complejos con "User Personas" simulados para afinar sus respuestas antes de hablar con clientes reales.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Simulation Config Panel */}
                    <div className="glass-panel p-6 rounded-xl border border-zinc-800 flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                            <Settings className="w-4 h-4 text-zinc-400" />
                            <span className="text-xs font-medium text-white uppercase tracking-wider">Configuración de Escenario</span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] text-zinc-500 font-medium uppercase">Perfil del Cliente Simulado</label>
                                <div className="p-3 bg-zinc-900 rounded border border-white/10 flex items-center justify-between relative">
                                    <select
                                        value={selectedScenario}
                                        onChange={(e) => setSelectedScenario(e.target.value)}
                                        disabled={isSimulating}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed bg-zinc-900 text-white"
                                        style={{ colorScheme: 'dark' }}
                                    >
                                        <option value="ecommerce" className="bg-zinc-900 text-white">Comprador / Estado de Pedido</option>
                                        <option value="automotive" className="bg-zinc-900 text-white">Interesado / Test Drive SUV</option>
                                        <option value="education" className="bg-zinc-900 text-white">Postulante / Información Diplomado</option>
                                        <option value="clinical" className="bg-zinc-900 text-white">Paciente / Agendamiento Clínico</option>
                                        <option value="realestate" className="bg-zinc-900 text-white">Interesado / Visita Departamento</option>
                                    </select>
                                    <div className="flex items-center justify-between w-full pointer-events-none">
                                        <span className={`text-xs ${isSimulating ? 'text-zinc-500' : 'text-zinc-300'}`}>
                                            {scenarios[selectedScenario].label}
                                        </span>
                                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${isSimulating ? 'opacity-50' : ''} ${scenarios[selectedScenario].riskColor}`}>
                                            {scenarios[selectedScenario].risk}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-white/5 my-2"></div>

                            <button
                                onClick={startSimulation}
                                disabled={isSimulating}
                                className={`w-full py-3 rounded flex items-center justify-center gap-2 text-xs font-medium transition-all ${isSimulating
                                    ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:scale-[1.02]'
                                    }`}
                            >
                                {isSimulating ? (
                                    <>
                                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                        Simulando Escenario...
                                    </>
                                ) : (
                                    <>
                                        <Play className="w-3.5 h-3.5 fill-current" />
                                        Iniciar Simulación
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Live Simulation View */}
                    <div className="glass-panel p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 flex flex-col relative overflow-hidden min-h-[400px]">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${isSimulating ? 'bg-green-500 animate-pulse' : 'bg-zinc-600'}`}></div>
                                <span className="text-xs font-mono text-zinc-400">LIVE_PREVIEW_MODE</span>
                            </div>
                            {isSimulating && <span className="text-[10px] text-indigo-400 font-mono animate-pulse">Training...</span>}
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
                            {!isSimulating && messages.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-zinc-600 opacity-50">
                                    <Brain className="w-12 h-12 mb-2" />
                                    <span className="text-xs">Esperando inicio de simulación...</span>
                                </div>
                            )}

                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex gap-3 max-w-[90%] animate-slide-up ${msg.sender === 'agent' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${msg.sender === 'user'
                                        ? 'bg-zinc-800 border-zinc-700'
                                        : 'bg-indigo-600 border-indigo-500'
                                        }`}>
                                        {msg.sender === 'user' ? <User className="w-3 h-3 text-zinc-400" /> : <Brain className="w-3 h-3 text-white" />}
                                    </div>

                                    {msg.sender === 'agent-thinking' ? (
                                        <div className="px-3 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-300 italic flex items-center gap-2">
                                            <RefreshCw className="w-3 h-3 animate-spin" />
                                            {msg.text}
                                        </div>
                                    ) : (
                                        <div className={`px-3 py-2 rounded-lg text-xs leading-relaxed ${msg.sender === 'user'
                                            ? 'bg-zinc-800 text-zinc-300'
                                            : 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/20'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>
    )
}
