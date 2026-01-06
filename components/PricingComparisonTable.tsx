'use client'

import { Check, Minus, HelpCircle } from 'lucide-react'

const features = [
    {
        category: 'Core Capabilities',
        items: [
            { name: 'Agentes de IA', starter: '2', growth: '3', enterprise: 'Ilimitados' },
            { name: 'Conversaciones/mes', starter: '1,000', growth: '5,000', enterprise: 'Ilimitadas' },
            { name: 'Memoria de contexto', starter: '14 días', growth: 'Persistente', enterprise: 'Persistente' },
            { name: 'Entrenamiento automático', starter: false, growth: true, enterprise: true },
        ]
    },
    {
        category: 'Canales',
        items: [
            { name: 'Email Automation', starter: true, growth: true, enterprise: true },
            { name: 'WhatsApp Business', starter: true, growth: true, enterprise: true },
            { name: 'Voz / Telefonía', starter: true, growth: true, enterprise: true },
            { name: 'SMS', starter: false, growth: 'Add-on', enterprise: true },
        ]
    },
    {
        category: 'Integraciones',
        items: [
            { name: 'CRM Básico (HubSpot, Pipedrive)', starter: true, growth: true, enterprise: true },
            { name: 'Sincronización bidireccional', starter: false, growth: true, enterprise: true },
            { name: 'API Access', starter: false, growth: true, enterprise: true },
            { name: 'Custom Webhooks', starter: false, growth: false, enterprise: true },
            { name: 'ERP Legacy (SAP, Oracle)', starter: false, growth: false, enterprise: true },
        ]
    },
    {
        category: 'Soporte & Seguridad',
        items: [
            { name: 'SLA de Uptime', starter: '99.0%', growth: '99.9%', enterprise: '99.99%' },
            { name: 'Soporte', starter: 'Email', growth: 'Prioritario', enterprise: 'Ingeniero Dedicado' },
            { name: 'SSO (Okta, Azure AD)', starter: false, growth: false, enterprise: true },
            { name: 'On-premise Deployment', starter: false, growth: false, enterprise: true },
        ]
    }
]

export default function PricingComparisonTable({ frequency }: { frequency: { value: string } }) {
    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-medium text-white tracking-tight mb-4">
                        Comparativa detallada
                    </h2>
                    <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
                        Desglose completo de funcionalidades por plan para ayudarte a tomar la mejor decisión.
                    </p>
                </div>

                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm shadow-2xl">
                    {/* Header */}
                    <div className="grid grid-cols-4 p-6 border-b border-white/10 bg-zinc-900/80 sticky top-0 z-20">
                        <div className="col-span-1 text-sm font-semibold text-zinc-500 uppercase tracking-wider flex items-end pb-2">
                            Features
                        </div>
                        <div className="col-span-1 text-center">
                            <h3 className="text-lg font-semibold text-white">Starter</h3>
                            <p className="text-sm text-zinc-500 line-through decoration-zinc-600 text-[10px]">
                                {frequency.value === 'monthly' ? '$120' : '$96'}
                            </p>
                            <p className="text-sm text-zinc-400 font-bold">
                                {frequency.value === 'monthly' ? '$90' : '$72'}/mes
                            </p>
                        </div>
                        <div className="col-span-1 text-center relative">
                            {/* Neon highlight for Growth */}
                            <div className="absolute inset-x-4 -top-6 bottom-0 bg-indigo-500/10 rounded-t-xl z-0 pointer-events-none"></div>
                            <div className="relative z-10">
                                <h3 className="text-lg font-semibold text-indigo-400 drop-shadow-[0_0_10px_rgba(129,140,248,0.5)]">Growth</h3>
                                <p className="text-sm text-zinc-600 line-through decoration-zinc-600 text-[10px]">
                                    {frequency.value === 'monthly' ? '$390' : '$290'}
                                </p>
                                <p className="text-sm text-zinc-400 font-bold">
                                    {frequency.value === 'monthly' ? '$290' : '$230'}/mes
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 text-center">
                            <h3 className="text-lg font-semibold text-white">Enterprise</h3>
                            <p className="text-sm text-zinc-500">Custom</p>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="divide-y divide-white/5">
                        {features.map((section, sIdx) => (
                            <div key={sIdx}>
                                {/* Section Header */}
                                <div className="bg-zinc-900/50 p-4 pl-6 border-b border-white/5">
                                    <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-widest">
                                        {section.category}
                                    </h4>
                                </div>

                                {/* Rows */}
                                {section.items.map((item, iIdx) => (
                                    <div
                                        key={iIdx}
                                        className="grid grid-cols-4 items-center p-4 hover:bg-white/5 transition-colors group"
                                    >
                                        <div className="col-span-1 pl-2 text-sm text-zinc-300 font-medium flex items-center gap-2">
                                            {item.name}
                                            <HelpCircle className="w-3 h-3 text-zinc-600 cursor-help opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>

                                        {/* Starter Value */}
                                        <div className="col-span-1 text-center text-sm text-zinc-400 flex justify-center">
                                            {renderValue(item.starter)}
                                        </div>

                                        {/* Growth Value */}
                                        <div className="col-span-1 text-center text-sm text-white font-medium flex justify-center relative">
                                            {/* Subtle column highlight */}
                                            <div className="absolute inset-y-[-16px] inset-x-4 bg-indigo-500/5 z-0 pointer-events-none group-hover:bg-indigo-500/10 transition-colors"></div>
                                            <span className="relative z-10">{renderValue(item.growth)}</span>
                                        </div>

                                        {/* Enterprise Value */}
                                        <div className="col-span-1 text-center text-sm text-zinc-400 flex justify-center">
                                            {renderValue(item.enterprise)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function renderValue(value: string | boolean) {
    if (value === true) {
        return <Check className="w-5 h-5 text-indigo-400 drop-shadow-[0_0_5px_rgba(129,140,248,0.5)]" />
    }
    if (value === false) {
        return <Minus className="w-4 h-4 text-zinc-700" />
    }
    return value
}
