'use client'

export default function CTASection() {
    return (
        <section className="w-full py-20 relative px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/10 pointer-events-none"></div>
            <div className="glass-panel rounded-2xl p-8 md:p-12 text-center border border-zinc-800 relative overflow-hidden max-w-[1000px] mx-auto">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[80px]"></div>

                <div className="relative z-10 flex flex-col items-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                        Pon a tus Agentes a trabajar hoy mismo.
                    </h2>
                    <p className="text-sm text-zinc-400 max-w-lg">
                        Automatiza llamadas, correos y gestión de leads conectando tus
                        herramientas favoritas.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <button className="bg-white text-zinc-950 px-8 py-3 rounded-md text-xs font-bold hover:bg-zinc-200 transition-all shadow-xl shadow-white/10">
                            Comenzar Prueba Gratuita
                        </button>
                        <button className="px-8 py-3 rounded-md text-xs font-medium text-zinc-300 border border-zinc-700 hover:bg-zinc-800 hover:text-white transition-all">
                            Hablar con Ventas
                        </button>
                    </div>

                    <p className="text-[10px] text-zinc-500 mt-2">
                        14 días de prueba • Sin tarjeta de crédito • Cancelación en
                        cualquier momento
                    </p>
                </div>
            </div>
        </section>
    )
}
