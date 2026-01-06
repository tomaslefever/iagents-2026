'use client'

import OrbitBackground from '@/components/OrbitBackground'

import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'
import BeforeAfter from '@/components/BeforeAfter'
import LeadGeneration from '@/components/LeadGeneration'
import { useState, useEffect, useRef } from 'react'
import {
    Check,
    ShoppingBag,
    Store,
    ShoppingCart,
    Wifi,
    Battery,
    Paperclip,
    Send,
    Banknote,
    Package,
    Cloud,
    Layers,
    Box,
    RefreshCcw,
    Sparkles,
    Truck,
    MessageSquareHeart,
    ArrowLeftRight,
    XCircle,
    CheckCircle2,
    Ticket,
    HelpCircle,
    Filter,
    FileText,
    BellRing,
    MapPin,
    Receipt,
    Globe,
    ArrowDown,
    MailOpen,
    MessageSquare
} from 'lucide-react'

export default function EcommercePage() {
    const [selectedAction, setSelectedAction] = useState<'recuperar' | 'ayuda' | null>(null)
    const [interactionStep, setInteractionStep] = useState(0)
    const chatContainerRef = useRef<HTMLDivElement>(null)

    const handleDoAction = (action: 'recuperar' | 'ayuda') => {
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
                    <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-purple-400 text-[10px] mb-8 uppercase tracking-widest font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
                        Soporte &amp; Ventas AI para Ecommerce
                    </div>

                    <h1 className="font-medium text-4xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
                        Recupera carritos y gestiona devoluciones <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">en piloto automático.</span>
                    </h1>

                    <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-lg">
                        Deja de perder ventas por no responder a tiempo. Nuestra IA recupera el 25% de los carritos abandonados por WhatsApp, recomienda productos complementarios y automatiza cambios y devoluciones.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <CTAButton accentColor="purple-500" />
                        <div className="flex items-center gap-2 px-4 py-2">
                            <div className="flex -space-x-2">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover" alt="User" />
                                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80" className="w-8 h-8 rounded-full border-2 border-zinc-950 object-cover" alt="User" />
                                <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] text-white">4k+</div>
                            </div>
                            <div className="text-[10px] text-zinc-500 leading-tight">
                                <span className="text-white font-medium block">Tiendas conectadas</span>
                                Shopify, Woo, Tiendanube
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Visual: Automated Flow */}
                <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    {/* Decorative blurred circle */}
                    <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full scale-75 opacity-50 pointer-events-none"></div>

                    {/* Phone/Interface Container */}
                    <div className="relative w-[320px] bg-zinc-950 rounded-[3rem] border-4 border-zinc-900 shadow-2xl overflow-hidden animate-float">
                        {/* Status Bar */}
                        <div className="h-6 bg-zinc-950 w-full flex items-center justify-between px-6 pt-2">
                            <span className="text-[10px] text-white font-medium">19:20</span>
                            <div className="flex gap-1">
                                <div className="w-3 h-3 text-white"><Wifi className="w-3 h-3" /></div>
                                <div className="w-3 h-3 text-white"><Battery className="w-3 h-3" /></div>
                            </div>
                        </div>

                        {/* Chat Header */}
                        <div className="bg-zinc-900/80 backdrop-blur p-4 flex items-center gap-3 border-b border-white/5">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center relative">
                                <ShoppingCart className="w-4 h-4 text-white" />
                                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-zinc-900"></div>
                            </div>
                            <div>
                                <div className="text-xs font-medium text-white">Soporte Tienda</div>
                                <div className="text-[9px] text-purple-400">Detectó carrito abandonado</div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="relative h-[400px] bg-zinc-950 overflow-hidden">
                            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}></div>
                            <div ref={chatContainerRef} className="absolute inset-0 p-4 flex flex-col gap-3 overflow-y-auto custom-scroll">
                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}></div>

                                {/* Message 1: Cart Recovery */}
                                <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 chat-bubble" style={{ animationDelay: '0.5s' }}>
                                    <p className="text-[11px] text-zinc-200 leading-relaxed">¡Hola Carlos! 👋 Vimos que dejaste estas zapatillas en tu carrito. ¿Tuviste algún problema?</p>

                                </div>

                                {/* Message 2: Product Card with Actions */}
                                <div className="min-h-[100px] self-start max-w-[70%] bg-zinc-800 rounded-xl overflow-hidden border border-zinc-700 z-10 chat-bubble shadow-lg" style={{ animationDelay: '1.0s' }}>
                                    <div className="h-24 w-full bg-zinc-700 relative">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover" alt="Product" />
                                    </div>
                                    <div className="p-2">
                                        <div className="text-[10px] font-bold text-white">Nike Air Max Red</div>
                                        <div className="text-[10px] text-zinc-400">$120.00 USD</div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 mt-2">
                                            <button
                                                onClick={() => handleDoAction('recuperar')}
                                                disabled={interactionStep > 0}
                                                className={`px-2 py-1 rounded text-[10px] transition-colors ${selectedAction === 'recuperar'
                                                    ? 'bg-indigo-600 text-white'
                                                    : interactionStep > 0
                                                        ? 'bg-zinc-800 text-zinc-500 opacity-50'
                                                        : 'bg-zinc-700 text-indigo-400 hover:bg-zinc-600'
                                                    }`}
                                            >
                                                Recuperar (5% OFF)
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* User Response */}
                                {interactionStep >= 1 && (
                                    <div className="self-end max-w-[85%] bg-indigo-600 rounded-2xl rounded-tr-sm p-3 shadow-sm z-10 chat-bubble animate-slide-up">
                                        <p className="text-[11px] text-white leading-relaxed">
                                            {selectedAction === 'recuperar' ? '¡Me interesa el descuento! Terminaré la compra.' : '¿Las tallas son normales o pequeñas?'}
                                        </p>

                                    </div>
                                )}

                                {/* AI Confirmation Response */}
                                {interactionStep >= 2 && (
                                    <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10 chat-bubble animate-slide-up">
                                        <p className="text-[11px] text-zinc-200 leading-relaxed">
                                            {selectedAction === 'recuperar'
                                                ? 'Genial. Aquí tienes el link directo con el cupón aplicado: checkout.nike.com/x8j9s'
                                                : 'Son "True to Size". Si no te quedan bien, el cambio es gratis.'}
                                        </p>
                                        <span className="text-[9px] text-zinc-500 block text-right mt-1">19:22</span>
                                    </div>
                                )}

                                {/* AI Final Response */}
                                {interactionStep >= 3 && (
                                    <div className="self-center my-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 z-10 chat-bubble animate-slide-up">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                                            <p className="text-[10px] font-medium text-indigo-400">
                                                {selectedAction === 'recuperar' ? 'Link de pago generado' : 'Agente humano notificado'}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="p-3 bg-zinc-900 border-t border-white/5 flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500"><Paperclip className="w-3.5 h-3.5" /></div>
                            <div className="flex-1 h-8 bg-zinc-950 rounded-full border border-zinc-800 px-3 flex items-center text-[10px] text-zinc-500">Escribe...</div>
                            <div className="w-6 h-6 text-indigo-500"><Send className="w-4 h-4" /></div>
                        </div>
                    </div>

                    {/* Floating Notification Card */}
                    {interactionStep >= 4 && (
                        <div className="absolute bottom-24 -left-4 lg:-left-12 glass-card p-3 rounded-xl flex items-center gap-3 animate-slide-up shadow-xl max-w-[200px]">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${selectedAction === 'recuperar' ? 'bg-green-500/20 text-green-500' : 'bg-blue-500/20 text-blue-500'
                                }`}>
                                {selectedAction === 'recuperar' ? <Banknote className="w-4 h-4" /> : <HelpCircle className="w-4 h-4" />}
                            </div>
                            <div>
                                <div className="text-xs font-medium text-white">
                                    {selectedAction === 'recuperar' ? 'Venta Recuperada' : 'Soporte Iniciado'}
                                </div>
                                <div className="text-[10px] text-zinc-400">
                                    {selectedAction === 'recuperar' ? 'Hace 2 segundos • $114.00' : 'Ticket #4928 creado'}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Main Feature: Cart Recovery */}
            <section className="py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder */}
                    <div className="relative group order-2 md:order-1">
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                            <img src="/img/ecommerce.jpg" alt="Shopping Context" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition duration-700" />


                        </div>
                    </div>

                    {/* Copy */}
                    <div className="order-1 md:order-2">
                        <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                            Recupera ventas perdidas,
                            <br />
                            <span className="text-zinc-500">
                                automáticamente.
                            </span>
                        </h2>
                        <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                            No dejes dinero sobre la mesa. iAgents contacta proactivamente a los
                            usuarios que abandonan el carrito con ofertas personalizadas y
                            asistencia en tiempo real.
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-0.5 border border-indigo-500/20">
                                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Retargeting Conversacional</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Envía mensajes oportunos por WhatsApp para recordar productos olvidados
                                        y resolver dudas de compra.
                                    </p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-0.5 border border-indigo-500/20">
                                    <Check className="w-3.5 h-3.5 text-indigo-400" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white">Checkout Asistido</h4>
                                    <p className="text-[11px] text-zinc-500 mt-1">
                                        Guía al cliente paso a paso hasta el pago final, reduciendo la fricción
                                        y aumentando la conversión.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Integrations Logos */}
            <section className="border-y border-white/5 py-10 hidden">
                <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 mb-8 font-medium">Integración nativa en 1 click con</p>
                <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Mock Logos tailored for Ecommerce */}
                    <div className="flex items-center gap-2 font-bold text-lg text-white"><ShoppingBag className="w-5 h-5 text-green-400" /> shopify</div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white"><Package className="w-5 h-5 text-purple-400" /> WooCommerce</div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white"><Cloud className="w-5 h-5 text-blue-400" /> tiendanube</div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white"><Layers className="w-5 h-5 text-pink-500" /> VTEX</div>
                    <div className="flex items-center gap-2 font-bold text-lg text-white"><Box className="w-5 h-5 text-orange-500" /> Magento</div>
                </div>
            </section>

            {/* Workflow Section */}
            <section className="py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-medium text-white mb-6">
                            Recupera ventas perdidas
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
                                        Carrito Abandonado
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Detecta cuando un cliente se va sin pagar y activa el flujo de recuperación en &lt;15 min.
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
                                        Incentivo Personalizado
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        Envía un mensaje por WhatsApp ofreciendo ayuda o un pequeño descuento para cerrar la compra.
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
                                        Venta Recuperada
                                    </h4>
                                    <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                                        El cliente finaliza la compra desde el mismo chat o link directo al checkout.
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
                                    Funnel: Carritos
                                </span>
                                <span className="text-[10px] text-zinc-500">Activo</span>
                            </div>

                            <div className="space-y-4">
                                {/* Funnel Step 1 */}
                                <div className="bg-zinc-950 p-4 rounded border border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Globe className="w-4 h-4 text-zinc-500" />
                                        <span className="text-xs text-zinc-300">
                                            Checkout Iniciado
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-white">400 carritos</span>
                                </div>
                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <ArrowDown className="w-4 h-4 text-zinc-700" />
                                </div>

                                {/* Funnel Step 2 */}
                                <div className="bg-zinc-950 p-4 rounded border border-zinc-800 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <MessageSquare className="w-4 h-4 text-indigo-500" />
                                        <span className="text-xs text-zinc-300">
                                            Recordatorio WhatsApp
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-white">
                                        60% open rate
                                    </span>
                                </div>
                                {/* Arrow */}
                                <div className="flex justify-center">
                                    <ArrowDown className="w-4 h-4 text-zinc-700" />
                                </div>

                                {/* Funnel Step 3 */}
                                <div className="bg-indigo-900/10 p-4 rounded border border-indigo-500/30 flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <Receipt className="w-4 h-4 text-indigo-400" />
                                        <span className="text-xs text-white font-medium">
                                            Venta Completada
                                        </span>
                                    </div>
                                    <span className="text-xs font-mono text-indigo-400">
                                        +15% Ingresos
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
                        Vende más, administra menos
                    </h2>
                    <p className="text-sm text-zinc-400">
                        Una suite de herramientas para automatizar el ciclo de vida de cada orden.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(180px,auto)]">
                    {/* Feature 1: Cart Recovery (Large) */}
                    <div className="md:col-span-4 bg-zinc-900 rounded-xl border border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 text-indigo-400">
                                <ShoppingCart className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Recuperación de Carritos
                            </h3>
                            <p className="text-sm text-zinc-400 max-w-sm">
                                Detecta cuando el cliente abandona y envía un mensaje hiper-personalizado por WhatsApp a los 15 minutos (98% Open Rate).
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
                                <div className="text-[10px] bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded">
                                    Recuperado $120
                                </div>
                            </div>
                            <div className="bg-zinc-800 p-3 rounded-l-lg border border-zinc-700 flex items-center gap-3 opacity-60">
                                <div className="w-8 h-8 rounded-full bg-zinc-700"></div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-zinc-600 rounded mb-1"></div>
                                    <div className="h-1.5 w-12 bg-zinc-700 rounded"></div>
                                </div>
                                <div className="text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded">
                                    Cupón 5% OFF
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: Tracking (Tall/Small) */}
                    <div className="md:col-span-2 bg-zinc-900 rounded-xl border border-zinc-800 p-6 relative overflow-hidden group hover:border-zinc-700 transition-colors">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                            <Truck className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Tracking Proactivo
                        </h3>
                        <p className="text-xs text-zinc-400 mb-6">
                            Notifica cada cambio de estado (En Ruta, Entregado) antes que el cliente pregunte "¿Dónde está mi pedido?".
                        </p>

                        <div className="bg-zinc-950 p-3 rounded border border-zinc-800 flex items-center gap-3">
                            <MessageSquareHeart className="w-4 h-4 text-blue-500" />
                            <div className="flex-1">
                                <div className="text-[9px] text-zinc-500">WhatsApp • Ahora</div>
                                <div className="text-[10px] text-zinc-300">
                                    Tu pedido llega hoy antes de las 18:00 📦
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Product Support (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
                        <div>
                            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
                                <HelpCircle className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-medium text-white mb-2">
                                Soporte Post-Venta
                            </h3>
                            <p className="text-xs text-zinc-400">
                                Resuelve dudas de uso, tallas y devoluciones automáticamente. Si requiere devolución, gestiona la etiqueta de envío.
                            </p>
                        </div>
                        <div className="mt-6 flex gap-2">
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <Ticket className="w-3 h-3" />
                                Ticket #1024
                            </span>
                            <span className="text-[10px] bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-zinc-400 flex items-center gap-1">
                                <RefreshCcw className="w-3 h-3" />
                                Devolución
                            </span>
                        </div>
                    </div>

                    {/* Feature 4: Upsell (Medium) */}
                    <div className="md:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-6 group hover:border-zinc-700 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-mono text-emerald-400">
                                +15% LTV
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-white mb-2">
                            Upselling Inteligente
                        </h3>
                        <p className="text-xs text-zinc-400">
                            Recomienda productos complementarios 3 días después de la entrega (ej: "Aquí tienes filtros para tu nueva cafetera").
                        </p>
                    </div>
                </div>
            </section>



            {/* Comparison Visual */}
            <section className="py-16 border-t border-white/5">
                <BeforeAfter
                    beforePoints={[
                        "Email de 'Carrito Abandonado' (Spam)",
                        "Soporte solo Lu-Vi, 9 a 18h",
                        "Devoluciones tardan 5 días en aprobarse",
                        "Sin recomendaciones post-compra"
                    ]}
                    afterPoints={[
                        "WhatsApp Personalizado (98% Open Rate)",
                        "Respuestas Instantáneas 24/7",
                        "Aprobación de cambios en segundos",
                        "Upsell inteligente automatizado"
                    ]}
                />
            </section>

            {/* Contact Form Section */}
            <LeadGeneration
                backgroundImage="/img/ecommerce.jpg"
                title="Automatiza tu tienda hoy"
                subtitle="Prueba la integración con Shopify o Tiendanube."
            />
        </div>
    )
}

