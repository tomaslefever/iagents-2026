'use client'

import ContactForm from './ContactForm'

interface LeadGenerationProps {
    backgroundImage?: string
    title?: string
    subtitle?: string
    id?: string
}

export default function LeadGeneration({
    backgroundImage = '/img/default-bg.jpg', // Fallback or required? User said "Debe tener una imagen de fondo como propiedad"
    title = "Acelera tus ventas hoy",
    subtitle = "Implementación en 48 horas. Conecta tu WhatsApp y empieza a recibir visitas calificadas.",
    id
}: LeadGenerationProps) {
    return (
        <section id={id} className="py-24 relative rounded-3xl border border-white/10 overflow-hidden w-full">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-zinc-900/80 z-10"></div> {/* Overlay for readability */}
                <img
                    src={backgroundImage}
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>

            <div className="absolute inset-0 bg-zinc-900/50 z-10"></div>

            <div className="container mx-auto px-4 relative z-20 max-w-lg">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-medium text-white mb-2">
                        {title}
                    </h2>
                    <p className="text-sm text-zinc-400">
                        {subtitle}
                    </p>
                </div>

                <div className="bg-zinc-950 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
                    <ContactForm formId="lead-gen-form" source="Lead Generation Section" />
                </div>
            </div>
        </section>
    )
}
