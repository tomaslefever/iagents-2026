'use client'

import { useState } from 'react'
import PricingSection, { frequencies } from '@/components/PricingSection'
import LeadGeneration from '@/components/LeadGeneration'
import PricingComparisonTable from '@/components/PricingComparisonTable'

import OrbitBackground from '@/components/OrbitBackground'

export default function PricingPage() {
    const [frequency, setFrequency] = useState(frequencies[0])

    return (
        <div className="min-h-screen text-white selection:bg-indigo-500/30 pt-20 relative">
            <OrbitBackground />
            <main className="relative z-10 w-full flex flex-col items-center">
                <PricingSection frequency={frequency} setFrequency={setFrequency} />
                <PricingComparisonTable frequency={frequency} />

                <LeadGeneration
                    backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                    title="¿Necesitas un plan a medida?"
                    subtitle="Hablemos sobre tus necesidades específicas y diseñemos una solución para ti."
                />
            </main>
        </div>
    )
}
