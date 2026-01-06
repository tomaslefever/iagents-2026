'use client'

import { X, Check } from 'lucide-react'

interface BeforeAfterProps {
    beforePoints: string[]
    afterPoints: string[]
}

export default function BeforeAfter({
    beforePoints,
    afterPoints,
}: BeforeAfterProps) {
    return (
        <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
            {/* Before Column */}
            <div className="relative group">
                <div className="absolute inset-0 bg-red-500/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative h-full glass-card p-6 rounded-2xl border border-red-500/10 flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                            <X className="w-5 h-5 text-red-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-200">Proceso manual</h3>
                    </div>

                    <ul className="space-y-4 flex-1">
                        {beforePoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500/40 mt-1.5 shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* After Column */}
            <div className="relative group">
                <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative h-full bg-zinc-900/40 backdrop-blur-xl p-6 rounded-2xl border border-emerald-500/20 flex flex-col ring-1 ring-emerald-500/10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.3)]">
                            <Check className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">Con iAgents</h3>
                    </div>

                    <ul className="space-y-4 flex-1">
                        {afterPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-3 h-3 text-emerald-500" />
                                </div>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
