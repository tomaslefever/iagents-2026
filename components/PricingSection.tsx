'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

export const frequencies = [
    { value: 'monthly', label: 'Mensual', priceSuffix: '/mes' },
    { value: 'annually', label: 'Anual', priceSuffix: '/mes' },
]

const tiers = [
    {
        name: 'Starter',
        id: 'starter',
        price: { monthly: '$90', annually: '$72' },
        originalPrice: { monthly: '$120', annually: '$96' },
        description: 'Perfecto para startups y equipos pequeños que inician su automatización.',
        features: [
            '2 Agentes IA de texto',
            '1 Agente IA de voz',
            'Integración WhatsApp',
            '1,000 conversaciones/mes',
            'Soporte por email 24/7',
            'Dashboard básico'
        ],
        featured: false,
        cta: 'Comenzar Prueba',
        href: '#'
    },
    {
        name: 'Growth',
        id: 'growth',
        price: { monthly: '$290', annually: '$230' },
        originalPrice: { monthly: '$390', annually: '$290' },
        description: 'Para empresas en expansión que necesitan escalar su operación comercial.',
        features: [
            '3 Agentes IA de texto',
            '2 Agentes IA de voz',
            'Autoentrenamiento',
            'Integración WhatsApp',
            '5,000 conversaciones/mes',
            'Soporte prioritario'
        ],
        featured: true,
        cta: 'Escalar Ahora',
        href: '#'
    },
    {
        name: 'Enterprise',
        id: 'enterprise',
        price: { monthly: 'Custom', annually: 'Custom' },
        originalPrice: { monthly: null, annually: null },
        description: 'Soluciones a medida para corporativos con necesidades complejas de seguridad.',
        features: [
            'Agentes Ilimitados',
            'Entrenamiento con LLM propio',
            'Despliegue en VPC privada',
            'SLA garantizado (99.9%)',
            'Gerente de cuenta dedicado',
            'Integraciones custom (SAP, Oracle)',
            'Auditoría y Compliance'
        ],
        featured: false,
        cta: 'Contactar Ventas',
        href: '#'
    }
]

export default function PricingSection({ frequency, setFrequency }: { frequency: any, setFrequency: (f: any) => void }) {

    const handlePlanSelect = (tier: any) => {
        if (tier.id === 'enterprise') {
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
            return
        }

        const cartItem = {
            id: tier.id,
            name: tier.name,
            price: tier.price[frequency.value],
            frequency: frequency.value,
        }

        localStorage.setItem('iagents_cart', JSON.stringify(cartItem))
        window.location.href = 'https://dashboard.iagents.pro'
    }

    return (
        <section className="py-24 relative overflow-hidden" id="pricing">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-4xl text-center mb-10">
                    <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Precios simples para escalar tu negocio
                    </p>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Elige el plan que mejor se adapte al volumen de tu operación. Sin costos ocultos.
                    </p>
                </div>

                {/* Frequency Toggle */}
                <div className="flex justify-center mb-16">
                    <div className="bg-zinc-900/50 p-1 rounded-lg border border-white/10 flex items-center relative">
                        {frequencies.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setFrequency(option)}
                                className={`
                                    relative px-4 py-2 text-sm font-medium rounded-md transition-all z-10
                                    ${frequency.value === option.value ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}
                                `}
                            >
                                {option.label}
                                {option.value === 'annually' && (
                                    <span className="absolute -top-3 -right-3 bg-emerald-500/20 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded border border-emerald-500/20">
                                        -20%
                                    </span>
                                )}
                            </button>
                        ))}
                        {/* Selected Indicator - simplified version using bg on active button would be easier but let's try sliding pill if possible, or just active styling above */}
                        <div
                            className={`absolute inset-y-1 rounded-md bg-white/10 transition-all duration-300 ease-out`}
                            style={{
                                width: '50%',
                                left: frequency.value === 'monthly' ? '4px' : 'calc(50% - 4px)'
                            }}
                        ></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
                    {tiers.map((tier) => (
                        <div
                            key={tier.id}
                            className={`
                relative flex flex-col rounded-3xl p-8 ring-1 transition-all duration-300
                ${tier.featured
                                    ? 'bg-zinc-900/80 ring-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105'
                                    : 'bg-zinc-900/40 ring-white/10 hover:bg-zinc-900/60 hover:ring-white/20'
                                }
              `}
                        >
                            {tier.featured && (
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-indigo-500 px-3 py-1 text-center text-xs font-semibold leading-5 text-white shadow-lg">
                                    Más Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold leading-8 text-white">{tier.name}</h3>
                                <p className="mt-4 text-sm leading-6 text-zinc-400 min-h-[48px]">{tier.description}</p>
                                <div className="mt-6 flex flex-col items-center justify-center">
                                    {/* @ts-ignore */}
                                    {tier.originalPrice[frequency.value] && (
                                        <div className="hidden text-lg text-zinc-500 line-through decoration-zinc-600 mb-1 pointer-events-none">
                                            {/* @ts-ignore */}
                                            {tier.originalPrice[frequency.value]}
                                        </div>
                                    )}
                                    <div className="flex items-baseline gap-x-1">
                                        <span className="text-5xl font-bold tracking-tight text-white">
                                            {/* @ts-ignore */}
                                            {tier.price[frequency.value]}
                                        </span>
                                        {/* @ts-ignore */}
                                        {tier.price[frequency.value] !== 'Custom' && (
                                            <span className="text-sm font-semibold leading-6 text-zinc-500">
                                                {frequency.priceSuffix}
                                            </span>
                                        )}
                                    </div>
                                    {/* @ts-ignore */}
                                    {tier.price[frequency.value] !== 'Custom' && frequency.value === 'annually' && (
                                        <span className="text-[10px] font-normal text-zinc-500 mt-1">
                                            facturado anualmente
                                        </span>
                                    )}
                                </div>
                            </div>

                            <ul role="list" className="mt-2 space-y-3 text-sm leading-6 text-zinc-300 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <Check className={`h-6 w-5 flex-none ${tier.featured ? 'text-indigo-400' : 'text-zinc-500'}`} aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handlePlanSelect(tier)}
                                className={`
                  mt-8 block w-full rounded-md px-3 py-2.5 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all
                  ${tier.featured
                                        ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                                        : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                                    }
                `}
                            >
                                {tier.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
