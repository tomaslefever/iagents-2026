'use client'

import OrbitBackground from '@/components/OrbitBackground'

import { useState, useEffect, useRef } from 'react'
import BeforeAfter from '@/components/BeforeAfter'
import LeadGeneration from '@/components/LeadGeneration'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'
import {
    Building2,
    ArrowRight,
    FileText,
    Users,
    BrainCircuit,
    Loader2,
    Sparkles,
    FileCheck,
    UserCheck,
    Hexagon,
    Triangle,
    Circle,
    Box,
    Check,
    ScanFace,
    Library,
    BarChart3,
    Clock,
    FileWarning,
    UserX,
    Zap,
    Search,
    TrendingUp,
    Filter,
    BellRing,
    MessageSquare
} from 'lucide-react'

export default function EnterprisePage() {
    const [selectedAction, setSelectedAction] = useState<'solicitar' | 'politica' | null>(null)
    const [interactionStep, setInteractionStep] = useState(0)
    const chatContainerRef = useRef<HTMLDivElement>(null)

    const handleDoAction = (action: 'solicitar' | 'politica') => {
        setSelectedAction(action)
        setInteractionStep(1)
    }

    useEffect(() => {
        if (interactionStep > 0 && interactionStep < 4) {
            const timer = setTimeout(() => {
                setInteractionStep(prev => prev + 1)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [interactionStep])

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
        }
    }, [interactionStep])

    return (
        <div className="w-full flex flex-col relative z-10">

            {/* Background Elements */}
            <OrbitBackground />

            {/* Hero Section */}
            <main className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-40 pb-16 lg:py-24">
                {/* Hero Content */}
                <div className="flex flex-col animate-fade-in">
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-orange-400 text-[10px] mb-8 uppercase tracking-widest font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                        IA para uso Interno Corporativo
                    </div>

                    <h1 className="font-medium text-4xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
                        El cerebro digital que
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">
                            potencia a tu equipo.
                        </span>
                    </h1>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-lg">
                        Automatiza el onboarding, resuelve dudas de procesos internos al instante y
                        filtra candidatos automáticamente. Transforma tus manuales en
                        asistentes activos disponibles 24/7 para tus colaboradores.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <CTAButton accentColor="orange-500" />
                        <div className="flex items-center gap-3 px-4 py-2 border-l border-zinc-800 ml-2">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-orange-900 flex items-center justify-center text-white">
                                    <FileText className="w-4 h-4" />
                                </div>
                                <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-amber-900 flex items-center justify-center text-white">
                                    <Users className="w-4 h-4" />
                                </div>
                            </div>
                            <div className="text-[10px] text-zinc-500 leading-tight">
                                Integración con
                                <span className="text-zinc-300 font-medium block">
                                    Slack, Teams &amp; Workday
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Visual: Interface Simulation */}
                <div className="relative lg:h-[550px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* Glow */}
                    <div className="absolute inset-0 bg-orange-600/20 blur-3xl rounded-full scale-75 opacity-50 pointer-events-none"></div>

                    {/* Main Dashboard Card */}
                    <div className="relative w-full max-w-[400px] bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden animate-float flex flex-col">
                        {/* Header */}
                        <div className="h-10 border-b border-zinc-800 flex items-center px-4 justify-between bg-zinc-900/50 backdrop-blur">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            </div>
                            <div className="text-[10px] text-zinc-500 font-mono">iAgents Knowledge Base</div>
                        </div>

                        <div className="p-6 flex flex-col gap-6">
                            {/* Context Section */}
                            <div className="flex items-center gap-3 pb-4 border-b border-zinc-800/50">
                                <div className="w-10 h-10 rounded bg-orange-500/10 flex items-center justify-center text-orange-400">
                                    <BrainCircuit className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-white">Asistente de Procesos</div>
                                    <div className="text-[10px] text-zinc-500">Conectado a: Manual de Operaciones 2024.pdf</div>
                                </div>
                            </div>

                            {/* Chat Simulation */}
                            <div ref={chatContainerRef} className="space-y-4 h-[350px] overflow-y-auto custom-scroll pr-2">
                                {/* User Message */}
                                <div className="flex gap-3 chat-bubble" style={{ animationDelay: '0.5s' }}>
                                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full grayscale opacity-80" alt="User" />
                                    <div className="bg-zinc-800 p-3 rounded-lg rounded-tl-none text-[11px] text-zinc-300 leading-relaxed border border-zinc-700/50">
                                        ¿Cuál es el procedimiento para aprobar un presupuesto de marketing sobre $500 USD?
                                    </div>
                                </div>

                                {/* Processing Indicator */}
                                <div className="flex items-center gap-2 px-11 opacity-50 chat-bubble" style={{ animationDelay: '1.2s' }}>
                                    <Loader2 className="w-3 h-3 text-orange-400 animate-spin" />
                                </div>

                                {/* AI Response with Actions */}
                                <div className="flex gap-3 chat-bubble" style={{ animationDelay: '2s' }}>
                                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0">
                                        <Sparkles className="w-4 h-4" />
                                    </div>
                                    <div className="bg-indigo-900/20 p-3 rounded-lg rounded-tr-none text-[11px] text-indigo-100 leading-relaxed border border-indigo-500/20 w-full">
                                        <p className="mb-2">Según el <strong>Art. 4.2 de Gastos</strong>, para montos sobre $500 USD necesitas:</p>
                                        <ol className="list-decimal pl-4 space-y-1 mb-3 text-indigo-200/80">
                                            <li>Cotización de 3 proveedores.</li>
                                            <li>Aprobación del Gerente de Área en Workday.</li>
                                        </ol>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                onClick={() => handleDoAction('solicitar')}
                                                disabled={interactionStep > 0}
                                                className={`px-2 py-1 rounded text-[10px] transition-colors ${selectedAction === 'solicitar'
                                                    ? 'bg-orange-600 text-white'
                                                    : interactionStep > 0
                                                        ? 'bg-zinc-800 text-zinc-500 opacity-50'
                                                        : 'bg-zinc-700 text-orange-400 hover:bg-zinc-600'
                                                    }`}
                                            >
                                                Iniciar solicitud
                                            </button>
                                            <button
                                                onClick={() => handleDoAction('politica')}
                                                disabled={interactionStep > 0}
                                                className={`px-2 py-1 rounded text-[10px] transition-colors ${selectedAction === 'politica'
                                                    ? 'bg-indigo-600 text-white'
                                                    : interactionStep > 0
                                                        ? 'bg-zinc-800 text-zinc-500 opacity-50'
                                                        : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                                                    }`}
                                            >
                                                Ver política
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* User Action Feedback */}
                                {interactionStep >= 1 && (
                                    <div className="flex gap-3 justify-end chat-bubble animate-slide-up">
                                        <div className="bg-indigo-600 p-3 rounded-lg rounded-tr-none text-[11px] text-white leading-relaxed">
                                            {selectedAction === 'solicitar' ? 'Inicia la solicitud en Workday, por favor.' : 'Muéstrame el documento completo.'}
                                        </div>
                                    </div>
                                )}

                                {/* AI Confirmation */}
                                {interactionStep >= 2 && (
                                    <div className="flex gap-3 chat-bubble animate-slide-up">
                                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shrink-0">
                                            <Sparkles className="w-4 h-4" />
                                        </div>
                                        <div className="bg-indigo-900/20 p-3 rounded-lg rounded-tr-none text-[11px] text-indigo-100 leading-relaxed border border-indigo-500/20 w-full">
                                            {selectedAction === 'solicitar'
                                                ? 'He creado el borrador #REQ-992. Tienes 24h para adjuntar las cotizaciones.'
                                                : 'Aquí tienes el PDF "Politica_Gastos_2024.pdf". Página 42 marcada.'}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="bg-zinc-800/30 p-3 mt-auto border-t border-zinc-800">
                            <div className="h-8 rounded bg-zinc-950 border border-zinc-800 flex items-center px-3 text-[10px] text-zinc-600 justify-between">
                                <span>Escribe tu consulta...</span>
                                <div className="w-4 h-4 bg-zinc-800 rounded flex items-center justify-center text-zinc-500 text-[8px]">⌘K</div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    {interactionStep >= 3 && (
                        <div className="absolute top-10 -left-8 glass-card p-3 rounded-lg flex items-center gap-3 animate-slide-up shadow-xl z-20">
                            <div className={`w-8 h-8 rounded flex items-center justify-center ${selectedAction === 'solicitar' ? 'bg-green-500/10 text-green-500' : 'bg-green-500/10 text-green-500'
                                }`}>
                                {selectedAction === 'solicitar' ? <UserCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                            </div>
                            <div>
                                <div className="text-[11px] font-medium text-white">
                                    {selectedAction === 'solicitar' ? 'Solicitud Enviada' : 'Documento Recuperado'}
                                </div>
                                <div className="text-[9px] text-zinc-400">
                                    {selectedAction === 'solicitar' ? 'Workday API • ID: 992' : 'Sharepoint • 2.4MB'}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Main Feature: Onboarding/Training */}
            <section className="py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder */}
                    <div className="relative group order-2 md:order-1">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" alt="Meeting Room" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition duration-700" />


                        </div>
                    </div>

                    {/* Copy */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                            Capacitación escalable,
                            <br />
                            <span className="text-zinc-500">
                                sin agendar reuniones infinitas.
                            </span>
                        </h2>
                        <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                            Dejar de repetir lo mismo a cada nuevo ingreso. iAgents crea módulos
                            interactivos basados en tus documentos existentes. Los nuevos empleados
                            aprenden a su ritmo, y la IA responde sus dudas técnicas al instante.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-0.5 border border-indigo-500/20">
                                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Onboarding Automatizado</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Entrega de credenciales, firma de documentos y training inicial
                                        gestionado por un agente inteligente.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-0.5 border border-indigo-500/20">
                                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Soporte TI y RRHH Nivel 1</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Resuelve el 80% de tickets simples como &quot;¿Cómo configuro la impresora?&quot;
                                        o &quot;¿Cuándo pagan el bono?&quot; sin intervención humana.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="border-y border-white/5 py-8 hidden">
                <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 mb-6 font-medium">
                    Empresas eficientes
                </p>
                <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Fake generic corporate logos */}
                    <div className="flex items-center gap-2 font-bold text-lg text-white">
                        <Hexagon className="w-5 h-5 fill-white" />
                        NEXUS <span className="font-normal text-zinc-500">CORP</span>
                    </div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white">
                        <Triangle className="w-5 h-5 fill-white" />
                        VANTAGE
                    </div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white">
                        <Circle className="w-5 h-5 fill-white" />
                        ORBITAL
                    </div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white">
                        <Box className="w-5 h-5 fill-white" />
                        STRATOS
                    </div>
                </div>
            </section>



            {/* Use Cases Grid */}
            {/* Feature Bento Grid */}
            <section className="py-20 border-t border-white/5">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                        Sistema Operativo para tu Empresa
                    </h2>
                    <p className="text-sm text-zinc-400">
                        Elimina el caos de la gestión interna. Centraliza conocimiento, soporte y
                        procesos en una interfaz unificada.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
                    {/* Feature 1: Ticket Classification (Large) */}
                    <div className="md:col-span-4 bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 text-orange-400">
                                <Filter className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Clasificación Inteligente de Tickets
                            </h3>
                            <p className="text-sm text-zinc-400 max-w-sm">
                                La IA analiza cada solicitud entrante (Slack, Microsoft Teams, Email),
                                detecta la urgencia y la asigna al departamento correcto o la
                                resuelve automáticamente si existe en la base de conocimiento.
                            </p>
                        </div>
                        {/* Visual Mockup */}
                        <div className="absolute top-8 -right-12 w-[300px] space-y-2 opacity-50 group-hover:opacity-80 group-hover:-translate-x-2 transition-all duration-500">
                            <div className="bg-zinc-800 p-3 rounded-l-lg border border-zinc-700 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">IT</div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-zinc-600 rounded mb-1"></div>
                                    <div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
                                </div>
                                <div className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded">
                                    Alta Prioridad
                                </div>
                            </div>
                            <div className="bg-zinc-800 p-3 rounded-l-lg border border-zinc-700 flex items-center gap-3 opacity-60">
                                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-400">HR</div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-zinc-600 rounded mb-1"></div>
                                    <div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
                                </div>
                                <div className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                                    Resuelto
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Smart Notifications (Tall/Small) */}
                    <div className="md:col-span-2 bg-zinc-900 rounded-xl border border-zinc-800 p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4 text-amber-400">
                            <BellRing className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Avisos Proactivos
                        </h3>
                        <p className="text-xs text-zinc-400 mb-6">
                            Notifica automáticamente sobre vencimiento de vacaciones, firmas de contratos pendientes
                            o evaluaciones de desempeño.
                        </p>

                        <div className="bg-zinc-950 p-3 rounded border border-zinc-800 flex items-center gap-3">
                            <MessageSquare className="w-4 h-4 text-amber-500" />
                            <div className="flex-1">
                                <div className="text-[9px] text-zinc-500">Slack • Ahora</div>
                                <div className="text-[10px] text-zinc-300">
                                    Firma pendiente: Anexo de Contrato ✍️
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Knowledge Base (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
                        <div>
                            <div className="w-10 h-10 bg-orange-600/10 rounded-lg flex items-center justify-center mb-4 text-orange-400">
                                <Library className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Base de Conocimiento Unificada
                            </h3>
                            <p className="text-xs text-zinc-400">
                                Conecta tus fuentes de verdad. La IA responde dudas de los empleados
                                leyendo directamente tu documentación actualizada.
                            </p>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <FileText className="w-3 h-3" />
                                Notion
                            </span>
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <FileCheck className="w-3 h-3" />
                                Drive
                            </span>
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <Users className="w-3 h-3" />
                                SharePoint
                            </span>
                        </div>
                    </div>

                    {/* Feature 4: Analytics (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 group hover:border-zinc-700 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400">
                                <BarChart3 className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-mono text-orange-400">
                                +45% EFICIENCIA
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Analytics de Operaciones
                        </h3>
                        <p className="text-xs text-zinc-400 mb-4">
                            Visualiza qué departamentos generan más tickets, tiempos de respuesta
                            y satisfacción del empleado en tiempo real.
                        </p>
                        <div className="h-16 flex items-end gap-1">
                            <div className="w-full bg-zinc-800 h-[40%] rounded-t group-hover:h-[60%] transition-all duration-500"></div>
                            <div className="w-full bg-zinc-800 h-[60%] rounded-t group-hover:h-[80%] transition-all duration-500 delay-75"></div>
                            <div className="w-full bg-orange-500 h-[75%] rounded-t group-hover:h-[95%] transition-all duration-500 delay-100 relative">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                    850
                                </div>
                            </div>
                            <div className="w-full bg-zinc-800 h-[50%] rounded-t group-hover:h-[60%] transition-all duration-500 delay-150"></div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Before/After Comparison */}
            <section className="py-16 border-t border-white/5">
                <BeforeAfter
                    beforePoints={[
                        "RRHH saturado respondiendo emails básicos",
                        "Documentación desactualizada y dispersa",
                        "Onboarding lento y despersonalizado",
                        "Silos de información entre áreas"
                    ]}
                    afterPoints={[
                        "Respuestas instantáneas (Políticas, TI, Beneficios)",
                        "Búsqueda semántica en toda la empresa",
                        "Empleados productivos desde el día 1",
                        "Conocimiento centralizado y accesible"
                    ]}
                />
            </section>

            {/* CTA Section */}
            <LeadGeneration
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                title="Optimiza tu organización hoy"
                subtitle="Agenda una demo personalizada y centraliza el conocimiento de tu empresa."
            />
        </div>
    )
}
