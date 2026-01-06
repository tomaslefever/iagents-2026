'use client'

import { Mic, Puzzle, Settings2 } from 'lucide-react'

export default function FeaturesGrid() {
    return (
        <section className="grid md:grid-cols-3 gap-6 py-12 px-6 max-w-[1100px] mx-auto">
            {/* Feature 1 */}
            <div className="glass-panel p-6 rounded-xl hover:border-indigo-500/30 hover:bg-zinc-900/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-colors">
                    <Mic className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">
                    Agentes de Voz y Texto
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                    Crea agentes capaces de mantener conversaciones naturales por
                    teléfono o chat, agendando reuniones automáticamente.
                </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel p-6 rounded-xl hover:border-purple-500/30 hover:bg-zinc-900/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-purple-500/30 group-hover:bg-purple-500/5 transition-colors">
                    <Puzzle className="w-5 h-5 text-zinc-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">
                    Marketplace de Integraciones
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                    Conecta tus agentes con un clic a HubSpot, Gmail, Meta Leads,
                    Calendar y más desde nuestro marketplace.
                </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel p-6 rounded-xl hover:border-emerald-500/30 hover:bg-zinc-900/40 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/5 transition-colors">
                    <Settings2 className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2">
                    Workspace de Configuración
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                    Define la personalidad, objetivos y permisos de tus agentes en un
                    entorno visual intuitivo.
                </p>
            </div>
        </section>
    )
}
