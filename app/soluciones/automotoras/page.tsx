'use client'

import OrbitBackground from '@/components/OrbitBackground'

import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'
import BeforeAfter from '@/components/BeforeAfter'
import LeadGeneration from '@/components/LeadGeneration'

import { useState, useEffect, useRef } from 'react'
import {
    CarFront,
    MessageCircle,
    Wifi,
    Battery,
    Bot,
    Plus,
    Send,
    Key,
    CircleDot,
    Zap,
    Disc,
    Search,
    Check,
    MessageSquare,
    PhoneCall,
    Database,
    XCircle,
    CheckCircle2,
    Paperclip,
    Filter,
    BellRing,
    BarChart3,
    Receipt,
    MapPin,
    RefreshCw,
    FileText,
    Globe,
    ArrowDown,
    MailOpen
} from 'lucide-react'

export default function AutomotoraPage() {
    const [selectedAction, setSelectedAction] = useState<'agendar' | 'credito' | null>(null)
    const [interactionStep, setInteractionStep] = useState(0) // 0: initial, 1: processing, 2: confirmation, 3: success, 4: card
    const chatContainerRef = useRef<HTMLDivElement>(null)

    const handleDoAction = (action: 'agendar' | 'credito') => {
        setSelectedAction(action)
        setInteractionStep(1)
    }

    // Sequence timer
    useEffect(() => {
        if (interactionStep > 0 && interactionStep < 4) {
            const timer = setTimeout(() => {
                setInteractionStep(prev => prev + 1)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [interactionStep])

    // Auto-scroll on new messages
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [interactionStep])

    return (
        <div className="w-full flex flex-col relative z-10">

            {/* Background Elements */}

            {/* Hero Section */}
            <main className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-40 pb-16 lg:py-24">
                {/* Hero Content */}
                <div className="flex flex-col animate-fade-in">
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-red-400 text-[10px] mb-8 uppercase tracking-widest font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                        Disponible 24/7 en WhatsApp & Voz
                    </div>

                    <h1 className="font-medium text-4xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
                        Vende más autos y agenda Test Drives
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                            en piloto automático.
                        </span>
                    </h1>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-lg">
                        Tus vendedores pierden horas respondiendo "¿Precio?" en Marketplace
                        y Chileautos. iAgents califica leads, filtra curiosos y agenda
                        visitas al concesionario solo con clientes reales.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <CTAButton accentColor="red-500" />
                        <div className="flex items-center gap-2 px-4 py-2">
                            <div className="flex -space-x-2">
                                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=100&h=100&q=80" className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover" alt="Gerente" />
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover" alt="Vendedor" />
                                <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] text-white">
                                    +500
                                </div>
                            </div>
                            <div className="text-[10px] text-zinc-500 leading-tight">
                                <span className="text-white font-medium block">
                                    Automotoras líderes
                                </span>
                                usando iAgents
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Visual: Automated Flow */}
                <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* Decorative blurred circle */}
                    <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full scale-75 opacity-50 pointer-events-none"></div>

                    {/* Phone/Interface Container */}
                    <div className="relative w-[320px] bg-zinc-950 rounded-[2rem] border-4 border-zinc-900 shadow-2xl overflow-hidden animate-float">
                        {/* Status Bar */}
                        <div className="h-6 bg-zinc-950 w-full flex items-center justify-between px-6 pt-2">
                            <span className="text-[10px] text-white font-medium">14:20</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 text-white">
                                    <Wifi className="w-3 h-3" />
                                </div>
                                <div className="w-3 h-3 text-white">
                                    <Battery className="w-3 h-3" />
                                </div>
                            </div>
                        </div>

                        {/* Chat Header */}
                        <div className="bg-zinc-900/80 backdrop-blur p-4 flex items-center gap-3 border-b border-white/5">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                <Bot className="w-4 h-4 text-white" />
                            </div>
                            <div>
                                <div className="text-xs font-medium text-white">
                                    Agente Automotora IA
                                </div>
                                <div className="text-[9px] text-red-400">
                                    En línea • Ventas Nuevos
                                </div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="relative h-[400px] bg-zinc-950 overflow-hidden">
                            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}></div>
                            <div ref={chatContainerRef} className="absolute inset-0 p-4 flex flex-col gap-3 overflow-y-auto custom-scroll">

                                {/* Messages */}
                                <div className="self-end max-w-[85%] bg-red-600 rounded-2xl rounded-tr-sm p-3 shadow-sm z-10 chat-bubble" style={{ animationDelay: '0.5s' }}>
                                    <p className="text-[11px] text-white leading-relaxed">
                                        Hola, vi el CX-5 en Facebook. ¿Precio y disponibilidad?
                                    </p>

                                </div>

                                <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 chat-bubble" style={{ animationDelay: '1.5s' }}>
                                    <p className="text-[11px] text-zinc-200 leading-relaxed">
                                        ¡Hola! 🚗 El New CX-5 2024 está desde $22.990.000. Tenemos
                                        stock en color Soul Red. ¿Tienes auto en parte de pago?
                                    </p>

                                </div>

                                <div className="self-end max-w-[85%] bg-red-600 rounded-2xl rounded-tr-sm p-3 shadow-sm z-10 chat-bubble" style={{ animationDelay: '2.8s' }}>
                                    <p className="text-[11px] text-white leading-relaxed">
                                        Sí, tengo un Suzuki Swift 2019.
                                    </p>

                                </div>

                                <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 chat-bubble" style={{ animationDelay: '4.0s' }}>
                                    <p className="text-[11px] text-zinc-200 leading-relaxed">
                                        Excelente, podemos tasarlo en línea. ¿Te gustaría agendar un
                                        Test Drive para este Viernes?
                                    </p>

                                    {/* Suggestion Chips */}
                                    <div className="flex gap-2 mt-2">
                                        <button
                                            onClick={() => handleDoAction('agendar')}
                                            disabled={interactionStep > 0}
                                            className={`px-2 py-1 rounded text-[10px] transition-colors ${selectedAction === 'agendar'
                                                ? 'bg-red-600 text-white'
                                                : interactionStep > 0
                                                    ? 'bg-zinc-800 text-zinc-500 opacity-50'
                                                    : 'bg-zinc-700 text-red-400 hover:bg-zinc-600'
                                                }`}
                                        >
                                            Sí, agendar
                                        </button>
                                        <button
                                            onClick={() => handleDoAction('credito')}
                                            disabled={interactionStep > 0}
                                            className={`px-2 py-1 rounded text-[10px] transition-colors ${selectedAction === 'credito'
                                                ? 'bg-red-600 text-white'
                                                : interactionStep > 0
                                                    ? 'bg-zinc-800 text-zinc-500 opacity-50'
                                                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                                                }`}
                                        >
                                            Cotizar crédito
                                        </button>
                                    </div>
                                </div>

                                {/* AI Confirmation Response */}
                                {interactionStep >= 2 && (
                                    <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 chat-bubble animate-slide-up">
                                        <p className="text-[11px] text-zinc-200 leading-relaxed">
                                            Perfecto, un ejecutivo te contactará a la brevedad.
                                        </p>

                                    </div>
                                )}

                                {/* AI Final Response */}
                                {interactionStep >= 3 && (
                                    <div className="self-center my-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 z-10 chat-bubble animate-slide-up">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                            <p className="text-[10px] font-medium text-green-400">
                                                Lead calificado derivado a un humano
                                            </p>
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
                            <div className="w-6 h-6 text-red-500">
                                <Send className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Floating Notification Card */}
                    {interactionStep >= 4 && (
                        <div className="absolute bottom-20 -right-4 lg:-right-12 glass-card p-4 rounded-xl flex items-center gap-3 animate-slide-up shadow-xl max-w-[220px]">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${selectedAction === 'credito' ? 'bg-red-500/20 text-red-500' : 'bg-red-500/20 text-red-500'
                                }`}>
                                {selectedAction === 'credito' ? <Paperclip className="w-5 h-5" /> : <Key className="w-5 h-5" />}
                            </div>
                            <div>
                                <div className="text-xs font-medium text-white">
                                    {selectedAction === 'credito' ? 'Cotización Solicitada' : 'Test Drive Agendado'}
                                </div>
                                <div className="text-[10px] text-zinc-400">
                                    {selectedAction === 'credito'
                                        ? 'Pre-evaluación en curso • Lead Calificado'
                                        : 'Viernes, 11:00 AM • Sucursal Las Condes'
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Main Feature: Workflow Automation */}
            <section className="py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder */}
                    <div className="relative group order-2 md:order-1">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                            <img src="/img/automotoras.jpg" alt="Car Dealership" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition duration-700" />


                        </div>
                    </div>

                    {/* Copy */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                            Automatiza flujos de trabajo,
                            <br />
                            <span className="text-zinc-500">
                                sin depender de integraciones complejas.
                            </span>
                        </h2>
                        <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                            iAgents se encarga de las tareas repetitivas: calificar prospectos, recolectar documentación y agendar visitas. Tu equipo solo interviene cuando el cliente está listo para comprar.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5 border border-red-500/20">
                                    <Check className="w-3.5 h-3.5 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Recolección de Documentos</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Solicita fotos de cédula, liquidaciones y comprobantes de domicilio
                                        directamente por WhatsApp, organizándolos para tu equipo.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5 border border-red-500/20">
                                    <Check className="w-3.5 h-3.5 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Seguimiento Inteligente</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Reactiva leads antiguos y mantiene el contacto con los actuales
                                        hasta que estén listos para visitar la sucursal.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Logos Section */}
            <section className="border-y border-white/5 py-8 hidden">
                <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 mb-6 font-medium">
                    Confían en nosotros
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 font-bold text-lg text-white">
                        <CircleDot className="w-5 h-5" />
                        TOYOTA
                    </div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white">
                        <Zap className="w-5 h-5" />
                        CHEVROLET
                    </div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white">
                        <Disc className="w-5 h-5" />
                        BMW
                    </div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white">
                        <Search className="w-5 h-5" />
                        CHILE
                        <span className="text-[10px] font-normal opacity-50">AUTOS</span>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-medium text-white mb-6">
                            Vende autos mientras duermes
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-red-600 transition-colors">
                                        1
                                    </div>
                                    <div className="h-full w-px bg-zinc-800 my-2 group-hover:bg-zinc-700"></div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">
                                        Tráfico Marketplace
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Captura interesados de Facebook Marketplace, Chileautos y tu sitio web al instante.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-red-600 transition-colors">
                                        2
                                    </div>
                                    <div className="h-full w-px bg-zinc-800 my-2 group-hover:bg-zinc-700"></div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">
                                        Cualificación
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Valida si tiene auto en parte de pago y pie inicial antes de derivar a un vendedor.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-red-600 transition-colors">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">
                                        Test Drive
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Agenda la prueba de manejo automáticamente en la sucursal más cercana.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Workflow Visual */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full opacity-20"></div>
                        <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
                            {/* Mockup of a funnel */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xs font-medium text-white">
                                    Funnel: Test Drive
                                </span>
                                <span className="text-[10px] text-zinc-500">Activo</span>
                            </div>

                            <div className="space-y-4">
                                {/* Funnel Step 1 */}
                                <div className="bg-zinc-950 p-4 rounded border border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Globe className="w-4 h-4 text-zinc-500" />
                                        <span className="text-xs text-zinc-300">
                                            Facebook Ads
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-white">320 leads</span>
                                </div>
                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <ArrowDown className="w-4 h-4 text-zinc-700" />
                                </div>

                                {/* Funnel Step 2 */}
                                <div className="bg-zinc-950 p-4 rounded border border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <MessageSquare className="w-4 h-4 text-red-500" />
                                        <span className="text-xs text-zinc-300">
                                            Filtro Automático
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-white">
                                        45% calificado
                                    </span>
                                </div>
                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <ArrowDown className="w-4 h-4 text-zinc-700" />
                                </div>

                                {/* Funnel Step 3 */}
                                <div className="bg-red-900/10 p-4 rounded border border-red-500/30 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Key className="w-4 h-4 text-red-400" />
                                        <span className="text-xs text-white font-medium">
                                            Test Drive Agendado
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-red-400">
                                        Sucursal Las Condes
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Feature Bento Grid */}
            <section className="py-20 border-t border-white/5">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                        Todo lo que tu automotora necesita
                    </h2>
                    <p className="text-sm text-zinc-400">
                        Elimina los tiempos muertos de tus vendedores. iAgents gestiona la calificación, agenda y seguimiento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
                    {/* Feature 1: Test Drive Qualification (Large) */}
                    <div className="md:col-span-4 bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 text-red-400">
                                <Filter className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Filtra Compradores Reales
                            </h3>
                            <p className="text-sm text-zinc-400 max-w-sm">
                                Tu vendedor solo recibe el lead cuando ya tiene: modelo de interés, auto en parte de pago y validación de identidad.
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
                                <div className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded">
                                    Datos Validados
                                </div>
                            </div>
                            <div className="bg-zinc-800 p-3 rounded-l-lg border border-zinc-700 flex items-center gap-3 opacity-60">
                                <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-zinc-600 rounded mb-1"></div>
                                    <div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
                                </div>
                                <div className="text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded">
                                    Retoma
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Appointment Reminders (Tall/Small) */}
                    <div className="md:col-span-2 bg-zinc-900 rounded-xl border border-zinc-800 p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 text-orange-400">
                            <BellRing className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Confirmación Test Drive
                        </h3>
                        <p className="text-xs text-zinc-400 mb-6">
                            Reduce el ausentismo enviando ubicación de la sucursal y requisitos por WhatsApp 24 horas antes.
                        </p>

                        <div className="bg-zinc-950 p-3 rounded border border-zinc-800 flex items-center gap-3">
                            <MessageSquare className="w-4 h-4 text-orange-500" />
                            <div className="flex-1">
                                <div className="text-[9px] text-zinc-500">WhatsApp • Ahora</div>
                                <div className="text-[10px] text-zinc-300">
                                    Te esperamos en Sucursal Movicenter 📍
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Spec Sheets (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
                        <div>
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Fichas Técnicas 24/7
                            </h3>
                            <p className="text-xs text-zinc-400">
                                Entrega PDFs con especificaciones, videos del interior y disponibilidad de stock al instante.
                            </p>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <FileText className="w-3 h-3" />
                                Specs
                            </span>
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                Sucursal
                            </span>
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <Receipt className="w-3 h-3" />
                                Stock
                            </span>
                        </div>
                    </div>

                    {/* Feature 4: Reactivation (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 group hover:border-zinc-700 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-mono text-emerald-400">
                                +18% Retención
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Renovación Proactiva
                        </h3>
                        <p className="text-xs text-zinc-400">
                            La IA contacta individualmente a clientes antiguos para ofrecerles renovar su modelo, gestionando la tasación de su auto actual.
                        </p>
                    </div>
                </div>
            </section>



            {/* Before/After Comparison Visual */}
            <section className="py-16 border-t border-white/5">
                <BeforeAfter
                    beforePoints={[
                        "Leads perdidos por demora",
                        "Vendedores filtrando 'curiosos'",
                        "Sin seguimiento de retomadas",
                        "Excel desactualizado"
                    ]}
                    afterPoints={[
                        "Respuesta inmediata 24/7",
                        "Pre-evaluación de retoma y perfil",
                        "Agendamiento automático en sala",
                        "Sync directo a tu CRM"
                    ]}
                />
            </section>

            {/* Contact Form Section */}
            <LeadGeneration
                backgroundImage="/img/automotoras.jpg"
                title="Acelera tus ventas hoy"
                subtitle="Implementación en 48 horas. Carga tu stock, conecta tu WhatsApp y empieza a recibir visitas calificadas."
            />
        </div>
    )
}
