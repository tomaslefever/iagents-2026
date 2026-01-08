'use client'

import OrbitBackground from '@/components/OrbitBackground'

import { useState, useEffect, useRef } from 'react'
import BeforeAfter from '@/components/BeforeAfter'
import LeadGeneration from '@/components/LeadGeneration'
import {
    Layers,
    Check,
    CheckCircle2,
    ArrowRight,
    Filter,
    BellRing,
    MessageSquare,
    PackageCheck,
    File,
    Video,
    Key,
    BarChart3,
    Globe,
    MailOpen,
    ArrowDown,
    Rocket,
    GraduationCap,
    Wifi,
    Battery,
    Plus,
    Send,
    DollarSign,
    Phone,
    CalendarCheck,
    X
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'

// Define types for our data structure
type ActionButton = {
    label: string
    value: 'temario' | 'asesor'
    type: 'primary' | 'default'
}

type Message = {
    id: string
    role: 'user' | 'assistant'
    type: 'text'
    content?: string
    actions?: ActionButton[]
}

type FinalCardState = {
    visible: boolean
    type: 'temario' | 'asesor'
}

export default function EducacionPage() {
    const [selectedAction, setSelectedAction] = useState<'temario' | 'asesor' | null>(null)
    const [messages, setMessages] = useState<Message[]>([])
    const [isTyping, setIsTyping] = useState(false)
    const [finalCard, setFinalCard] = useState<FinalCardState>({ visible: false, type: 'temario' })
    const chatContainerRef = useRef<HTMLDivElement>(null)

    // Initial Message
    useEffect(() => {
        setMessages([
            {
                id: '1',
                role: 'user',
                type: 'text',
                content: 'Hola, me interesa el Máster en IA.'
            },
            {
                id: '2',
                role: 'assistant',
                type: 'text',
                content: '¡Hola! 👋 Excelente elección. Es nuestro programa más demandado. ¿Buscas especializarte o aplicarlo a tu negocio?'
            },
            {
                id: '3',
                role: 'user',
                type: 'text',
                content: 'Tengo una agencia y quiero automatizar procesos.'
            },
            {
                id: '4',
                role: 'assistant',
                type: 'text',
                content: 'Perfecto. El módulo de Agentes Autónomos es ideal para eso. ¿Te gustaría ver el temario detallado o hablar con un asesor de admisiones?',
                actions: [
                    { label: 'Ver Temario', value: 'temario', type: 'primary' },
                    { label: 'Hablar con Asesor', value: 'asesor', type: 'default' }
                ]
            }
        ])
    }, [])

    // Interaction Flow
    const handleAction = (action: 'temario' | 'asesor') => {
        if (selectedAction) return // Prevent double clicks
        setSelectedAction(action)

        // 1. Add User Response
        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            type: 'text',
            content: action === 'temario' ? 'Me interesa ver el temario.' : 'Quiero hablar con un asesor.'
        }
        setMessages(prev => [...prev, userMsg])
        setIsTyping(true)

        // 2. Agent Intermediate Response (Processing)
        setTimeout(() => {
            const intermediateMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                type: 'text',
                content: action === 'temario'
                    ? '¡Excelente! 📚 Dame un momento mientras preparo el material...'
                    : 'Entendido. 👨‍💻 Voy a buscar un horario disponible...'
            }
            setMessages(prev => [...prev, intermediateMsg])
        }, 1200)

        // 3. Agent Final Response (Text only) + Show Floating Card
        setTimeout(() => {
            const finalMsg: Message = {
                id: (Date.now() + 2).toString(),
                role: 'assistant',
                type: 'text',
                content: action === 'temario'
                    ? 'Aquí tienes el Plan de Estudios 2026 completo. 👇'
                    : 'He encontrado estos horarios libres para tí. 👇'
            }
            setMessages(prev => [...prev, finalMsg])
            setIsTyping(false)

            // Trigger floating card
            setFinalCard({ visible: true, type: action })
        }, 3000)
    }

    // Auto-scroll
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [messages, isTyping])

    return (
        <div className="w-full flex flex-col relative z-10">

            {/* Background Elements */}

            {/* Hero Section */}
            <main className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-40 pb-16 lg:py-24">

                {/* Hero Content */}
                <div className="flex flex-col animate-fade-in relative">
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-yellow-400 text-[10px] mb-8 uppercase tracking-widest font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
                        Agentes IA para WhatsApp
                    </div>

                    <h1 className="font-medium text-4xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
                        Escala tu negocio de
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-white">
                            formación online con IA.
                        </span>
                    </h1>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-lg">
                        Automatiza la venta de tus cursos y mentorías. Tus agentes de IA
                        cualifican prospectos, resuelven dudas y cierran ventas high-ticket
                        24/7.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <CTAButton accentColor="yellow-500" />
                        <div className="flex items-center gap-2 px-4 py-2 text-[10px] text-zinc-500">
                            <Check className="w-3 h-3 text-yellow-500" />
                            Sin tarjeta requerida
                            <Check className="w-3 h-3 text-yellow-500 ml-2" />
                            Cancelación simple
                        </div>
                    </div>
                </div>

                {/* Hero Visual: Phone Chat Interface */}
                <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* Decorative blurred circle */}
                    <div className="absolute inset-0 bg-yellow-600/10 blur-3xl rounded-full scale-75 opacity-50 pointer-events-none"></div>

                    {/* Phone/Interface Container */}
                    <div className="relative w-[320px] bg-zinc-950 rounded-[2.5rem] border-4 border-zinc-900 shadow-2xl overflow-hidden animate-float">
                        {/* Status Bar */}
                        <div className="h-6 bg-zinc-950 w-full flex items-center justify-between px-6 pt-2">
                            <span className="text-[10px] text-white font-medium">10:00</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 text-white"><Wifi className="w-3 h-3" /></div>
                                <div className="w-3 h-3 text-white"><Battery className="w-3 h-3" /></div>
                            </div>
                        </div>

                        {/* Chat Header */}
                        <div className="bg-zinc-900/80 backdrop-blur p-4 flex items-center gap-3 border-b border-white/5">
                            <div className="w-8 h-8 bg-yellow-600 rounded-full flex items-center justify-center relative">
                                <GraduationCap className="w-4 h-4 text-zinc-950" />
                                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-zinc-900"></div>
                            </div>
                            <div>
                                <div className="text-xs font-medium text-white">Admisión 2026</div>
                                <div className="text-[9px] text-yellow-400">Asistente Virtual • En línea</div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="relative h-[400px] bg-zinc-950 overflow-hidden">
                            <div className="fixed inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}></div>

                            <div ref={chatContainerRef} className="absolute inset-0 p-4 flex flex-col gap-3 overflow-y-auto custom-scroll">

                                {messages.map((msg, index) => (
                                    <div
                                        key={msg.id}
                                        className={`max-w-[85%] z-10 chat-bubble animate-slide-up ${msg.role === 'user'
                                            ? 'self-end bg-yellow-600 rounded-2xl rounded-tr-sm p-3 shadow-sm text-zinc-900'
                                            : 'self-start bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700'
                                            }`}
                                        style={{ animationDelay: `${index < 4 ? index * 1.2 : 0}s` }}
                                    >
                                        {/* Text Content */}
                                        {msg.content && (
                                            <p className={`text-[11px] leading-relaxed ${msg.role === 'user' ? 'text-white' : 'text-zinc-200'}`}>
                                                {msg.content}
                                            </p>
                                        )}

                                        {/* Actions (Buttons) */}
                                        {msg.actions && (
                                            <div className="flex gap-2 mt-2">
                                                {msg.actions.map((btn) => (
                                                    <button
                                                        key={btn.value}
                                                        onClick={() => handleAction(btn.value)}
                                                        disabled={!!selectedAction}
                                                        className={`px-2 py-1 rounded text-[10px] transition-colors ${selectedAction === btn.value
                                                            ? 'bg-yellow-600 text-zinc-900'
                                                            : selectedAction
                                                                ? 'bg-zinc-800 text-zinc-500 opacity-50'
                                                                : 'bg-zinc-700 text-yellow-400 hover:bg-zinc-600'
                                                            }`}
                                                    >
                                                        {btn.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {isTyping && (
                                    <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 animate-pulse">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
                                            <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-zinc-900 border-t border-white/5 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500">
                                <Plus className="w-4 h-4" />
                            </div>
                            <div className="flex-1 h-8 bg-zinc-950 rounded-full border border-zinc-800 px-3 flex items-center text-[10px] text-zinc-500">
                                Escribe un mensaje...
                            </div>
                            <div className="w-6 h-6 text-indigo-500">
                                <Send className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Floating Card: Conditional Final Result */}
                    {finalCard.visible && (
                        <div className="absolute -bottom-[5%] -right-[15%] glass-card p-4 rounded-xl border-l-[3px] animate-fade-in shadow-2xl z-30 max-w-[260px] backdrop-blur-md"
                            style={{
                                borderColor: finalCard.type === 'temario' ? '#6366f1' : '#10b981', // Indigo or Emerald
                                animationDuration: '0.5s'
                            }}
                        >
                            <button
                                onClick={() => setFinalCard(prev => ({ ...prev, visible: false }))}
                                className="absolute top-2 right-2 text-zinc-500 hover:text-white"
                            >
                                <X className="w-3 h-3" />
                            </button>

                            <div className="flex gap-3 items-start">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${finalCard.type === 'temario' ? 'bg-indigo-500/20' : 'bg-emerald-500/20'
                                    }`}>
                                    {finalCard.type === 'temario' ? (
                                        <File className="w-5 h-5 text-indigo-400" />
                                    ) : (
                                        <CalendarCheck className="w-5 h-5 text-emerald-400" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white mb-1">
                                        {finalCard.type === 'temario' ? 'Plan de Estudios 2026' : 'Agenda de Asesores'}
                                    </h4>
                                    <p className="text-[10px] text-zinc-300 mb-3 leading-snug">
                                        {finalCard.type === 'temario'
                                            ? 'PDF listo para descargar. Incluye detalle de módulos y bonus.'
                                            : 'Te hemos reservado un espacio prioritario por 15 minutos.'}
                                    </p>
                                    <button className={`w-full text-[10px] font-bold py-1.5 rounded transition-colors ${finalCard.type === 'temario'
                                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                                        : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                                        }`}>
                                        {finalCard.type === 'temario' ? 'Descargar Ahora' : 'Confirmar Cita'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


            </main>

            {/* Main Feature: Enrollment */}
            <section className="py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder */}
                    <div className="relative group order-2 md:order-1">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                            <img src="/img/educacion.jpg" alt="Campus Context" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition duration-700" />


                        </div>
                    </div>

                    {/* Copy */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                            Matrícula sin fricción,
                            <br />
                            <span className="text-zinc-500">
                                100% digital.
                            </span>
                        </h2>
                        <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                            Guía a tus postulantes desde la consulta inicial hasta la matrícula.
                            iAgents resuelve dudas académicas y gestiona la documentación 24/7.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-0.5 border border-indigo-500/20">
                                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Soporte Académico IA</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Responde preguntas sobre planes de estudio, becas y aranceles
                                        al instante, sin intervención humana.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-0.5 border border-indigo-500/20">
                                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Gestión Documental</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Recopila y valida certificados de notas y otros documentos
                                        directamente en el chat de WhatsApp.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Feature Bento Grid */}
            <section className="py-20 border-t border-white/5">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                        Todo lo que necesitas para vender conocimiento
                    </h2>
                    <p className="text-sm text-zinc-400">
                        Elimina el caos administrativo. Lumina centraliza cada aspecto de tu
                        negocio digital en una interfaz elegante.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
                    {/* Feature 1: Lead Qualification (Large) */}
                    <div className="md:col-span-4 bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                                <Filter className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Filtra Estudiantes Ideales
                            </h3>
                            <p className="text-sm text-zinc-400 max-w-sm">
                                No pierdas tiempo en llamadas con curiosos. La IA analiza el
                                perfil y presupuesto antes de agendar, asegurando que solo
                                hables con leads cualificados.
                            </p>
                        </div>
                        {/* Visual Mockup */}
                        <div className="absolute top-8 -right-12 w-[300px] space-y-2 opacity-50 group-hover:opacity-80 group-hover:-translate-x-2 transition-all duration-500">
                            <div className="bg-zinc-800 p-3 rounded-l-lg border border-zinc-700 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-zinc-600 rounded mb-1"></div>
                                    <div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
                                </div>
                                <div className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">
                                    98% Match
                                </div>
                            </div>
                            <div className="bg-zinc-800 p-3 rounded-l-lg border border-zinc-700 flex items-center gap-3 opacity-60">
                                <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-zinc-600 rounded mb-1"></div>
                                    <div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
                                </div>
                                <div className="text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">
                                    45% Match
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Automated Reminders (Tall/Small) */}
                    <div className="md:col-span-2 bg-zinc-900 rounded-xl border border-zinc-800 p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
                            <BellRing className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Asistencia a Sesiones
                        </h3>
                        <p className="text-xs text-zinc-400 mb-6">
                            Aumenta la asistencia a tus webinars y llamadas de venta con
                            recordatorios multicanal automáticos.
                        </p>

                        <div className="bg-zinc-950 p-3 rounded border border-zinc-800 flex items-center gap-3">
                            <MessageSquare className="w-4 h-4 text-emerald-500" />
                            <div className="flex-1">
                                <div className="text-[9px] text-zinc-500">WhatsApp • Ahora</div>
                                <div className="text-[10px] text-zinc-300">
                                    Tu clase en vivo comienza en 1 hora 🚀
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Digital Delivery (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
                        <div>
                            <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4 text-violet-400">
                                <PackageCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Acceso a Contenidos
                            </h3>
                            <p className="text-xs text-zinc-400">
                                Integración directa con Skool, Kajabi y Hotmart para dar acceso
                                inmediato a tus alumnos tras el pago.
                            </p>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <File className="w-3 h-3" />
                                Ebooks
                            </span>
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <Video className="w-3 h-3" />
                                Cursos
                            </span>
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <Key className="w-3 h-3" />
                                Accesos
                            </span>
                        </div>
                    </div>

                    {/* Feature 4: Analytics (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 group hover:border-zinc-700 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-rose-500/10 rounded-lg flex items-center justify-center text-rose-400">
                                <BarChart3 className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-mono text-emerald-400">
                                +24% vs mes anterior
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Métricas de Lanzamiento
                        </h3>
                        <p className="text-xs text-zinc-400">
                            Visualiza ROAS, LTV y tasa de conversión de tus embudos de venta
                            en tiempo real.
                        </p>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-medium text-white mb-6">
                            Diseñado para vender mientras duermes
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-indigo-600 transition-colors">
                                        1
                                    </div>
                                    <div className="h-full w-px bg-zinc-800 my-2 group-hover:bg-zinc-700"></div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">
                                        Captación de Tráfico
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Landing pages optimizadas y formularios pop-up que
                                        convierten visitantes en leads calificados.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-indigo-600 transition-colors">
                                        2
                                    </div>
                                    <div className="h-full w-px bg-zinc-800 my-2 group-hover:bg-zinc-700"></div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">
                                        Nurturing Automático
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Tu agente dialoga vía WhatsApp, entiende audios y
                                        pre-califica leads según tus reglas de negocio.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-indigo-600 transition-colors">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">
                                        Cierre High-Ticket
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        El agente envía tu calendario o link de pago automáticamente
                                        cuando detecta clara intención de compra.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Workflow Visual */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full opacity-20"></div>
                        <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
                            {/* Mockup of a funnel */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xs font-medium text-white">
                                    Funnel: Webinar Evergreen
                                </span>
                                <span className="text-[10px] text-zinc-500">Activo</span>
                            </div>

                            <div className="space-y-4">
                                {/* Funnel Step 1 */}
                                <div className="bg-zinc-950 p-4 rounded border border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Globe className="w-4 h-4 text-zinc-500" />
                                        <span className="text-xs text-zinc-300">
                                            Registro a Masterclass
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-white">1,240 vistas</span>
                                </div>
                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <ArrowDown className="w-4 h-4 text-zinc-700" />
                                </div>

                                {/* Funnel Step 2 */}
                                <div className="bg-zinc-950 p-4 rounded border border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <MailOpen className="w-4 h-4 text-indigo-500" />
                                        <span className="text-xs text-zinc-300">
                                            Asistencia al Vivo
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-white">
                                        45% open rate
                                    </span>
                                </div>
                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <ArrowDown className="w-4 h-4 text-zinc-700" />
                                </div>

                                {/* Funnel Step 3 */}
                                <div className="bg-indigo-900/10 p-4 rounded border border-indigo-500/30 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <CalendarCheck className="w-4 h-4 text-emerald-400" />
                                        <span className="text-xs text-white font-medium">
                                            Agendó Llamada
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-emerald-400">
                                        Ticket: $2,500
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Comparison Visual */}
            <section className="py-16 border-t border-white/5">
                <BeforeAfter
                    beforePoints={[
                        "Consultas de alumnos perdidas",
                        "Admisión manual y lenta",
                        "Seguimiento por email ignorado",
                        "Alta deserción estudiantil"
                    ]}
                    afterPoints={[
                        "Respuestas instantáneas 24/7",
                        "Matrícula 100% automatizada",
                        "Seguimiento proactivo por WhatsApp",
                        "Soporte académico IA"
                    ]}
                />
            </section>

            {/* Contact Form Section */}
            <LeadGeneration
                backgroundImage="/img/educacion.jpg"
                title="Agenda una Demo Personalizada"
                subtitle="Descubre cómo iAgents puede transformar tu proceso de ventas educativas."
            />
        </div>
    )
}
