'use client'

import {
    Cpu,
    Bot,
    LayoutGrid,
    Store,
    Users,
    Calendar,
    Kanban,
    Plus,
    MoreHorizontal,
    Headset,
    MessageSquare,
    Mail,
    CalendarRange,
    Phone,
    Wrench,
    Download,
    Home,
    ShoppingBag,
    Scale
} from 'lucide-react'

export default function DashboardPreview() {
    return (
        <div className="w-full max-w-[1000px] mx-auto relative animate-fade-in px-4" style={{ animationDelay: '0.5s' }}>
            {/* Glow behind mockup */}
            <div className="absolute -inset-1 bg-gradient-to-t from-indigo-500/10 via-purple-500/5 to-transparent rounded-xl blur-2xl pointer-events-none"></div>

            <div className="glass-panel bg-zinc-950/80 backdrop-blur-xl rounded-xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[500px] text-left relative z-10">
                {/* Sidebar */}
                <div className="w-16 md:w-[220px] bg-zinc-900/50 border-r border-white/5 flex flex-col shrink-0">
                    <div className="p-4 border-b border-white/5 hidden md:flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                            <Cpu className="w-3 h-3" />
                        </div>
                        <span className="text-xs font-medium text-white">
                            Agent Control
                        </span>
                    </div>

                    <div className="flex-1 py-4 flex flex-col gap-1 px-2">
                        <div className="px-2 py-2 rounded-md bg-zinc-800/50 text-white text-xs font-medium flex items-center gap-3 cursor-pointer border border-white/5">
                            <Bot className="w-4 h-4 text-indigo-400" />
                            <span className="hidden md:inline">Mis Agentes</span>
                            <span className="hidden md:flex ml-auto text-[9px] bg-indigo-500/20 text-indigo-300 px-1.5 rounded-sm">
                                3
                            </span>
                        </div>
                        {[
                            { icon: LayoutGrid, label: 'Workspace' },
                            { icon: Store, label: 'Marketplace' },
                            { icon: Users, label: 'Contactos' },
                            { icon: Calendar, label: 'Calendario' },
                            { icon: Kanban, label: 'Funnel' }
                        ].map((item, idx) => (
                            <div key={idx} className="px-2 py-2 rounded-md text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 text-xs font-medium flex items-center gap-3 cursor-pointer transition-colors">
                                <item.icon className="w-4 h-4" />
                                <span className="hidden md:inline">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="p-4 border-t border-white/5 hidden md:block">
                        <div className="bg-zinc-950 rounded border border-zinc-800 p-3">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-[10px] text-zinc-400 uppercase font-medium">
                                    Forecast Q4
                                </span>
                            </div>
                            <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden mb-1">
                                <div className="h-full bg-indigo-500 w-[72%]"></div>
                            </div>
                            <div className="flex justify-between text-[10px]">
                                <span className="text-white font-mono">$124k</span>
                                <span className="text-zinc-500">Goal: $150k</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Kanban Board Area */}
                <div className="flex-1 bg-zinc-950/30 flex flex-col min-w-0">
                    {/* Toolbar */}
                    <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 bg-zinc-900/30 shrink-0">
                        <div className="flex items-center gap-3">
                            <h3 className="text-xs font-medium text-white">Mis Agentes</h3>
                            <div className="h-4 w-px bg-zinc-800 hidden sm:block"></div>
                            <span className="text-[10px] text-zinc-500 hidden sm:inline-block">
                                Gestiona la inteligencia de tu negocio
                            </span>
                        </div>
                        <button className="bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-medium px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors shadow-lg shadow-indigo-900/20">
                            <Plus className="w-3 h-3" />
                            <span className="hidden sm:inline">Nuevo Agente</span>
                            <span className="sm:hidden">Nuevo</span>
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-4 overflow-y-auto custom-scroll">
                        {/* Active Agents Section */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                                    Agentes Activos
                                </h4>
                                <span className="text-[10px] text-zinc-600 font-mono">
                                    2 / 5
                                </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {/* Agent 1 */}
                                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 hover:border-zinc-700 transition-colors group cursor-pointer relative overflow-hidden">
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                        <MoreHorizontal className="w-3.5 h-3.5 text-zinc-500 hover:text-white" />
                                    </div>
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500/20 to-blue-500/20 flex items-center justify-center border border-indigo-500/20 shrink-0">
                                            <Headset className="w-4 h-4 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-medium text-white">
                                                Soporte Técnico L1
                                            </h5>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                <span className="text-[10px] text-zinc-400">
                                                    En línea
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-2">
                                        <div>
                                            <span className="text-[9px] text-zinc-500 block">
                                                Canales
                                            </span>
                                            <div className="flex gap-1 mt-0.5">
                                                <MessageSquare className="w-3 h-3 text-zinc-400" />
                                                <Mail className="w-3 h-3 text-zinc-400" />
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[9px] text-zinc-500 block">
                                                Conversaciones
                                            </span>
                                            <span className="text-[10px] font-mono text-zinc-300">
                                                843
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Agent 2 */}
                                <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 hover:border-zinc-700 transition-colors group cursor-pointer relative overflow-hidden">
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                        <MoreHorizontal className="w-3.5 h-3.5 text-zinc-500 hover:text-white" />
                                    </div>
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center border border-purple-500/20 shrink-0">
                                            <CalendarRange className="w-4 h-4 text-purple-400" />
                                        </div>
                                        <div>
                                            <h5 className="text-xs font-medium text-white">
                                                Agendamiento Citas
                                            </h5>
                                            <div className="flex items-center gap-1.5 mt-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                <span className="text-[10px] text-zinc-400">
                                                    Activo
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-2">
                                        <div>
                                            <span className="text-[9px] text-zinc-500 block">
                                                Canales
                                            </span>
                                            <div className="flex gap-1 mt-0.5">
                                                <Phone className="w-3 h-3 text-zinc-400" />
                                                <Calendar className="w-3 h-3 text-zinc-400" />
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[9px] text-zinc-500 block">
                                                Citas mes
                                            </span>
                                            <span className="text-[10px] font-mono text-zinc-300">
                                                42
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Library Section */}
                        <div>
                            <h4 className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                                Biblioteca de Plantillas
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: Wrench, color: 'text-blue-400', title: 'Servicio Técnico', desc: 'Triaje automático de tickets.', downloads: '2.4k' },
                                    { icon: Home, color: 'text-orange-400', title: 'Inmobiliario', desc: 'Cualificación de compradores.', downloads: '1.8k' },
                                    { icon: ShoppingBag, color: 'text-green-400', title: 'Ventas Retail', desc: 'Recuperación de carritos.', downloads: '3.1k' },
                                    { icon: Scale, color: 'text-yellow-400', title: 'Asistente Legal', desc: 'Recopilación de documentos.', downloads: '950' },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-zinc-900/40 border border-zinc-800/60 rounded-lg p-3 hover:bg-zinc-900 hover:border-zinc-600 transition-all cursor-pointer group flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="w-7 h-7 rounded bg-zinc-800 flex items-center justify-center">
                                                <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                                            </div>
                                            <button className="text-[9px] bg-white/5 hover:bg-white/10 text-white px-1.5 py-0.5 rounded border border-white/5 transition-colors">
                                                Ver
                                            </button>
                                        </div>
                                        <h5 className="text-[11px] font-medium text-zinc-200 mb-1">
                                            {item.title}
                                        </h5>
                                        <p className="text-[9px] text-zinc-500 leading-relaxed mb-3 flex-1 line-clamp-2">
                                            {item.desc}
                                        </p>
                                        <div className="flex items-center gap-1 text-[9px] text-zinc-600">
                                            <Download className="w-2.5 h-2.5" />
                                            {item.downloads}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
