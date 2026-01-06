'use client'

import { Mail, Calendar, Database, MessageCircle, Facebook } from 'lucide-react'

export default function IntegrationsSection() {
    return (
        <section className="py-12 flex flex-col items-center gap-8 px-6">
            <h3 className="text-sm font-medium text-white text-center">
                Ecosistema de Integraciones Nativas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    { icon: Mail, label: 'Gmail', color: 'text-red-400' },
                    { icon: Calendar, label: 'Calendar', color: 'text-blue-400' },
                    { icon: Database, label: 'HubSpot', color: 'text-orange-400' },
                    { icon: MessageCircle, label: 'WhatsApp', color: 'text-green-400' },
                    { icon: Facebook, label: 'Meta Leads', color: 'text-blue-500' },
                ].map((item, idx) => (
                    <div key={idx} className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center gap-3 hover:border-zinc-700 transition-colors cursor-default">
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <span className="text-xs text-zinc-300 font-medium">{item.label}</span>
                    </div>
                ))}
            </div>
            <p className="text-[10px] text-zinc-500 max-w-md text-center">
                Instala aplicaciones desde el Marketplace para dar superpoderes a tus
                agentes en segundos.
            </p>
        </section>
    )
}
