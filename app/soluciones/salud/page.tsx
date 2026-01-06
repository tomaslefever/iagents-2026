'use client'

import OrbitBackground from '@/components/OrbitBackground'

import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'
import BeforeAfter from '@/components/BeforeAfter'
import LeadGeneration from '@/components/LeadGeneration'

import { useState, useEffect, useRef } from 'react'
import {
    Check,
    Activity,
    Wifi,
    Battery,
    Plus,
    Stethoscope,
    BellRing,
    ClipboardCheck,
    MessageSquare,
    CalendarDays,
    HeartPulse,
    ShieldCheck,
    CheckCircle2,
    Calendar,
    FilePlus,
    ClipboardList,
    Database,
    Send,
    CalendarCheck2,
    XCircle,
    CalendarCheck,
    CalendarX,
    Filter,
    FileText,
    MapPin,
    Globe,
    ArrowDown,
    MailOpen
} from 'lucide-react'

export default function SaludPage() {
    const [selectedAction, setSelectedAction] = useState<'confirmar' | 'reagendar' | null>(null)
    const [interactionStep, setInteractionStep] = useState(0)
    const chatContainerRef = useRef<HTMLDivElement>(null)

    const handleDoAction = (action: 'confirmar' | 'reagendar') => {
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
            <main className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">

                {/* Hero Content */}
                <div className="flex flex-col animate-fade-in">
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-teal-400 text-[10px] mb-8 uppercase tracking-widest font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
                        Asistente Médico IA 24/7
                    </div>

                    <h1 className="font-medium text-4xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
                        Elimina el ausentismo y llena tu agenda <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">sin llamadas telefónicas.</span>
                    </h1>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-lg">
                        Automatiza la confirmación de citas, responde dudas médicas frecuentes y gestiona la agenda de tus especialistas por WhatsApp. Reduce el &quot;no-show&quot; un 40%.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <CTAButton accentColor="teal-500" />
                        <div className="flex items-center gap-2 px-4 py-2">
                            <div className="flex -space-x-2">
                                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=100&h=100&q=80" className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover" alt="Doctor" />
                                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=100&h=100&q=80" className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover" alt="Nurse" />
                                <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] text-white">2k+</div>
                            </div>
                            <div className="text-[10px] text-zinc-500 leading-tight">
                                <span className="text-white font-medium block">Profesionales de salud</span>
                                confían en iAgents
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Visual: Appointment Flow */}
                <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* Decorative blurred circle */}
                    <div className="absolute inset-0 bg-teal-500/10 blur-3xl rounded-full scale-75 opacity-50 pointer-events-none"></div>

                    {/* Phone/Interface Container */}
                    <div className="relative w-[320px] bg-zinc-950 rounded-[3rem] border-4 border-zinc-900 shadow-2xl overflow-hidden animate-float">
                        {/* Status Bar */}
                        <div className="h-6 bg-zinc-950 w-full flex items-center justify-between px-6 pt-2">
                            <span className="text-[10px] text-white font-medium">09:41</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 text-white"><Wifi className="w-3 h-3" /></div>
                                <div className="w-3 h-3 text-white"><Battery className="w-3 h-3" /></div>
                            </div>
                        </div>

                        {/* Chat Header */}
                        <div className="bg-zinc-900/80 backdrop-blur p-4 flex items-center gap-3 border-b border-white/5">
                            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center relative">
                                <Plus className="w-4 h-4 text-white" />
                                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border border-zinc-900"></div>
                            </div>
                            <div>
                                <div className="text-xs font-medium text-white">Clínica San Lucas</div>
                                <div className="text-[9px] text-teal-400">Asistente Virtual • En línea</div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="relative h-[400px] bg-zinc-950 overflow-hidden">
                            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}></div>
                            <div ref={chatContainerRef} className="absolute inset-0 p-4 flex flex-col gap-3 overflow-y-auto custom-scroll">
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}></div>

                                {/* Message 1: Reminder with Actions */}
                                <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 chat-bubble" style={{ animationDelay: '0.5s' }}>
                                    <p className="text-[11px] text-zinc-200 leading-relaxed">Hola Laura 👋 Te escribo de Clínica San Lucas. Tienes cita mañana a las 09:00 con el Dr. Ruiz (Dermatología). ¿Confirmas tu asistencia?</p>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2 mt-2">
                                        <button
                                            onClick={() => handleDoAction('confirmar')}
                                            disabled={interactionStep > 0}
                                            className={`px-2 py-1 rounded text-[10px] transition-colors ${selectedAction === 'confirmar'
                                                ? 'bg-teal-600 text-white'
                                                : interactionStep > 0
                                                    ? 'bg-zinc-800 text-zinc-500 opacity-50'
                                                    : 'bg-zinc-700 text-teal-400 hover:bg-zinc-600'
                                                }`}
                                        >
                                            Confirmar
                                        </button>
                                        <button
                                            onClick={() => handleDoAction('reagendar')}
                                            disabled={interactionStep > 0}
                                            className={`px-2 py-1 rounded text-[10px] transition-colors ${selectedAction === 'reagendar'
                                                ? 'bg-teal-600 text-white'
                                                : interactionStep > 0
                                                    ? 'bg-zinc-800 text-zinc-500 opacity-50'
                                                    : 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600'
                                                }`}
                                        >
                                            Reagendar
                                        </button>
                                    </div>

                                </div>

                                {/* User Response */}
                                {interactionStep >= 1 && (
                                    <div className="self-end max-w-[85%] bg-teal-600 rounded-2xl rounded-tr-sm p-3 shadow-sm z-10 chat-bubble animate-slide-up">
                                        <p className="text-[11px] text-white leading-relaxed">
                                            {selectedAction === 'confirmar' ? 'Sí, confirmo mi asistencia.' : 'Necesito cambiar la hora.'}
                                        </p>

                                    </div>
                                )}

                                {/* AI Confirmation Response */}
                                {interactionStep >= 2 && (
                                    <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 chat-bubble animate-slide-up">
                                        <p className="text-[11px] text-zinc-200 leading-relaxed">
                                            {selectedAction === 'confirmar'
                                                ? '¡Perfecto! Tu cita ha sido confirmada. Te esperamos.'
                                                : 'Entendido. Te envío las horas disponibles para esta semana.'}
                                        </p>
                                        <span className="text-[9px] text-zinc-500 block text-right mt-1">09:42 AM</span>
                                    </div>
                                )}

                                {/* AI Final Response */}
                                {interactionStep >= 3 && (
                                    <div className="self-center my-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 z-10 chat-bubble animate-slide-up">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></div>
                                            <p className="text-[10px] font-medium text-teal-400">
                                                {selectedAction === 'confirmar' ? 'Agenda sincronizada' : 'Asistente reprogramando'}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-zinc-900 border-t border-white/5 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500"><Plus className="w-3.5 h-3.5" /></div>
                            <div className="flex-1 h-8 bg-zinc-950 rounded-full border border-zinc-800 px-3 flex items-center text-[10px] text-zinc-500">Escribe un mensaje...</div>
                            <div className="w-6 h-6 text-teal-500"><Send className="w-4 h-4" /></div>
                        </div>
                    </div>

                    {/* Floating Notification Card */}
                    {interactionStep >= 4 && (
                        <div className="absolute bottom-24 -left-4 lg:-left-12 glass-card p-3 rounded-xl flex items-center gap-3 animate-slide-up shadow-xl max-w-[200px]">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${selectedAction === 'confirmar' ? 'bg-teal-500/20 text-teal-500' : 'bg-orange-500/20 text-orange-500'
                                }`}>
                                {selectedAction === 'confirmar' ? <CalendarCheck2 className="w-4 h-4" /> : <CalendarX className="w-4 h-4" />}
                            </div>
                            <div>
                                <div className="text-xs font-medium text-white">
                                    {selectedAction === 'confirmar' ? 'Cita Confirmada' : 'Reagendando'}
                                </div>
                                <div className="text-[10px] text-zinc-400">
                                    {selectedAction === 'confirmar' ? 'Sincronizado con CRM' : 'Buscando huecos...'}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Main Feature: Triage */}
            <section className="py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder */}
                    <div className="relative group order-2 md:order-1">
                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                            <img src="/img/salud.jpg" alt="Medical Context" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition duration-700" />


                        </div>
                    </div>

                    {/* Copy */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                            Triage clínico inteligente,
                            <br />
                            <span className="text-zinc-500">
                                antes de la llegada.
                            </span>
                        </h2>
                        <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                            Optimiza la gestión de pacientes clasificando la urgencia y síntomas
                            previamente. Reduce tiempos de espera y mejora la asignación de recursos
                            médicos.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center mt-0.5 border border-teal-500/20">
                                    <Check className="w-3.5 h-3.5 text-teal-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Anamnesis Automatizada</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Recopila síntomas y antecedentes clave a través de una conversación
                                        amable y estructurada.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center mt-0.5 border border-teal-500/20">
                                    <Check className="w-3.5 h-3.5 text-teal-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Agendamiento Eficiente</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Coordina horas médicas automáticamente según la disponibilidad
                                        y prioridad del paciente.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Integrations Logos */}
            <section className="border-y border-white/5 py-10 hidden">
                <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 mb-8 font-medium">Se integra con tu software médico</p>
                <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Mock Logos tailored for Health */}
                    <div className="flex items-center gap-2 font-bold text-lg text-white"><Database className="w-5 h-5 text-teal-400" /> Salesforce Health</div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white"><FilePlus className="w-5 h-5 text-blue-400" /> Medicloud</div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white"><ClipboardList className="w-5 h-5 text-green-400" /> Doctoralia</div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white"><Calendar className="w-5 h-5 text-orange-500" /> Google Calendar</div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-medium text-white mb-6">
                            Tu recepción nunca cierra
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-teal-600 transition-colors">
                                        1
                                    </div>
                                    <div className="h-full w-px bg-zinc-800 my-2 group-hover:bg-zinc-700"></div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">
                                        Agendamiento 24/7
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Pacientes agendan y resuelven dudas por WhatsApp sin colapsar tu teléfono, integrado con Google/Doctoralia.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-teal-600 transition-colors">
                                        2
                                    </div>
                                    <div className="h-full w-px bg-zinc-800 my-2 group-hover:bg-zinc-700"></div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">
                                        Triaje Previo
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Recopila motivo de consulta, síntomas y previsión para optimizar el tiempo del especialista.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-white group-hover:bg-teal-600 transition-colors">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white mb-1">
                                        Cita Confirmada
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Reduce el ausentismo con confirmaciones automáticas y reagendamiento fácil.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Workflow Visual */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute inset-0 bg-teal-500/20 blur-3xl rounded-full opacity-20"></div>
                        <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl">
                            {/* Mockup of a funnel */}
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xs font-medium text-white">
                                    Funnel: Agenda Diaria
                                </span>
                                <span className="text-[10px] text-zinc-500">Activo</span>
                            </div>

                            <div className="space-y-4">
                                {/* Funnel Step 1 */}
                                <div className="bg-zinc-950 p-4 rounded border border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Globe className="w-4 h-4 text-zinc-500" />
                                        <span className="text-xs text-zinc-300">
                                            Doctoralia / Web
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-white">85 consultas</span>
                                </div>
                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <ArrowDown className="w-4 h-4 text-zinc-700" />
                                </div>

                                {/* Funnel Step 2 */}
                                <div className="bg-zinc-950 p-4 rounded border border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <MessageSquare className="w-4 h-4 text-teal-500" />
                                        <span className="text-xs text-zinc-300">
                                            Triaje IA
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-white">
                                        100% respuesta
                                    </span>
                                </div>
                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <ArrowDown className="w-4 h-4 text-zinc-700" />
                                </div>

                                {/* Funnel Step 3 */}
                                <div className="bg-teal-900/10 p-4 rounded border border-teal-500/30 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <CalendarCheck className="w-4 h-4 text-teal-400" />
                                        <span className="text-xs text-white font-medium">
                                            Cita Agendada
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-teal-400">
                                        Agenda Llena
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
                        Gestión clínica inteligente
                    </h2>
                    <p className="text-sm text-zinc-400">
                        Libera a tu personal administrativo. iAgents se encarga de la rutina para que tú te encargues de los pacientes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
                    {/* Feature 1: Triage/Pre-Consulta (Large) */}
                    <div className="md:col-span-4 bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center mb-4 text-teal-400">
                                <ClipboardCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Triaje y Pre-Consulta
                            </h3>
                            <p className="text-sm text-zinc-400 max-w-sm">
                                Recopila motivo de consulta, síntomas actuales y antecedentes antes de la cita. El médico recibe un resumen estructurado, ahorrando 5-10 minutos por paciente.
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
                                <div className="text-[10px] bg-teal-500/20 text-teal-400 px-2 py-0.5 rounded">
                                    Síntomas: Leves
                                </div>
                            </div>
                            <div className="bg-zinc-800 p-3 rounded-l-lg border border-zinc-700 flex items-center gap-3 opacity-60">
                                <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-zinc-600 rounded mb-1"></div>
                                    <div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
                                </div>
                                <div className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">
                                    Historial Ready
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Reminders (Tall/Small) */}
                    <div className="md:col-span-2 bg-zinc-900 rounded-xl border border-zinc-800 p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 text-orange-400">
                            <BellRing className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Reducción de Ausentismo
                        </h3>
                        <p className="text-xs text-zinc-400 mb-6">
                            Recordatorios automáticos por WhatsApp con opción de reagendar en 1 clic si el paciente no puede asistir.
                        </p>

                        <div className="bg-zinc-950 p-3 rounded border border-zinc-800 flex items-center gap-3">
                            <MessageSquare className="w-4 h-4 text-orange-500" />
                            <div className="flex-1">
                                <div className="text-[9px] text-zinc-500">WhatsApp • Ahora</div>
                                <div className="text-[10px] text-zinc-300">
                                    Tu cita con Dr. Ruiz es mañana 09:00 🕘
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Specs/Prep (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
                        <div>
                            <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4 text-sky-400">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Instrucciones y Resultados
                            </h3>
                            <p className="text-xs text-zinc-400">
                                Envía preparaciones para exámenes (ayuno, traer ropa cómoda) y entrega resultados de laboratorio validuados automáticamente.
                            </p>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <Activity className="w-3 h-3" />
                                Ayuno 8h
                            </span>
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                Piso 3, Box 4
                            </span>
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <FileText className="w-3 h-3" />
                                PDF Resultados
                            </span>
                        </div>
                    </div>

                    {/* Feature 4: Reactivation (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 group hover:border-zinc-700 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400">
                                <HeartPulse className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-mono text-emerald-400">
                                Llenar Agenda
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Salud Preventiva
                        </h3>
                        <p className="text-xs text-zinc-400">
                            La IA contacta a pacientes para sus chequeos anuales, limpiezas dentales o seguimiento de crónicos, llenando espacios vacíos.
                        </p>
                    </div>
                </div>
            </section>



            {/* Before/After Comparison Visual */}
            <section className="py-16 border-t border-white/5">
                <BeforeAfter
                    beforePoints={[
                        "Paciente espera 10 min al teléfono",
                        "30% de ausentismo por olvido",
                        "Reagendar toma múltiples llamadas",
                        "Atención solo en horario de oficina"
                    ]}
                    afterPoints={[
                        "Respuesta inmediata por WhatsApp",
                        "Confirmación automática (reduce ausentismo)",
                        "Reagendamiento en 1 click 24/7",
                        "Triaje previo a la consulta"
                    ]}
                />
            </section>

            {/* Contact Form Section */}
            <LeadGeneration
                backgroundImage="/img/salud.jpg"
                title="Mejora la atención hoy mismo"
                subtitle="Ideal para consultorios, clínicas dentales, centros de estética y hospitales."
            />

        </div>
    )
}
