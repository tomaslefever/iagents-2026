import ScrollReveal from '@/components/ScrollReveal'
import { Layers, Magnet, Filter, MessageSquareDashed, CalendarCheck } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: Magnet,
    title: 'Captación',
    description: 'Ingesta instantánea de leads desde Ads, Webforms y Landings.',
    color: 'indigo',
  },
  {
    step: '02',
    icon: Filter,
    title: 'Filtrado IA',
    description: 'Análisis de perfil y scoring predictivo para descartar spam.',
    color: 'purple',
  },
  {
    step: '03',
    icon: MessageSquareDashed,
    title: 'Nutrición',
    description: 'Seguimiento multicanal para madurar el interés del prospecto.',
    color: 'blue',
  },
  {
    step: '04',
    icon: CalendarCheck,
    title: 'Conversión',
    description: 'Reunión agendada automáticamente en el calendario.',
    color: 'green',
  },
]

export default function WorkflowSection() {
  return (
    <ScrollReveal>
      <section className="py-16 relative pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] uppercase tracking-widest font-semibold mb-4">
            <Layers className="w-3 h-3" />
            Workflow Automatizado
          </div>
          <h2 className="text-3xl font-medium text-white tracking-tight mb-4">
            Tu embudo de ventas,
            <span className="text-indigo-400"> en piloto automático</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            iAgents orquesta cada paso del ciclo de vida del cliente. Desde la captura inicial hasta la reunión
            agendada, sin fricción humana.
          </p>
        </div>
        <div className="relative grid md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 border-t border-dashed border-zinc-700/50 z-0">
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-20 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent blur-[2px] animate-shimmer-slide"></div>
          </div>
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-2xl shadow-black/50 group-hover:-translate-y-1 transition-transform duration-300 relative">
                <div
                  className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ${step.color === 'indigo' ? 'bg-gradient-to-b from-indigo-500/20 to-transparent' :
                    step.color === 'purple' ? 'bg-gradient-to-b from-purple-500/20 to-transparent' :
                      step.color === 'blue' ? 'bg-gradient-to-b from-blue-500/20 to-transparent' :
                        'bg-gradient-to-b from-green-500/20 to-transparent'
                    }`}
                ></div>
                <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-white/5 z-10">
                  <step.icon className={`w-5 h-5 ${step.color === 'indigo' ? 'text-indigo-400' :
                    step.color === 'purple' ? 'text-purple-400' :
                      step.color === 'blue' ? 'text-blue-400' :
                        'text-green-400'
                    }`} />
                </div>
                <div className="absolute -bottom-3 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded text-[9px] font-mono text-zinc-500">
                  Step {step.step}
                </div>
              </div>
              <h3 className="text-white font-medium text-sm mb-2">{step.title}</h3>
              <p className="text-[11px] text-zinc-500 leading-relaxed px-2">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}

