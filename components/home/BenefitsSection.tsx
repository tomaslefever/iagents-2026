import ScrollReveal from '@/components/ScrollReveal'
import { TrendingDown, Zap, Cpu, Database, UserPlus, Code2 } from 'lucide-react'

const benefits = [
  {
    icon: TrendingDown,
    title: '-70% Costos Operativos',
    description: 'Reemplaza equipos de soporte L1 y SDRs con agentes autónomos. Reduce drásticamente el costo por lead atendido y horas hombre.',
    chart: true,
  },
  {
    icon: Zap,
    title: 'Disponibilidad 24/7',
    description: 'Sin turnos, sin vacaciones, sin tiempos muertos. Tus agentes responden instantáneamente a las 3 AM o durante picos de tráfico.',
    metrics: [
      { label: 'Latencia', value: '0.2s' },
      { label: 'Concurrencia', value: '∞' },
    ],
  },
  {
    icon: Cpu,
    title: 'Capacidades Avanzadas',
    description: '',
    features: [
      { icon: Database, title: 'Base de Conocimiento', text: 'Entrena a tu agente con tus PDFs, Notion y sitio web.' },
      { icon: UserPlus, title: 'Derivación Inteligente', text: 'Detecta leads VIP y los transfiere a ejecutivos humanos.' },
      { icon: Code2, title: 'MCP Personalizados', text: 'Crea lógica de negocio a medida mediante Model Context Protocol.' },
    ],
  },
]

export default function BenefitsSection() {
  return (
    <ScrollReveal>
      <section className="grid md:grid-cols-3 gap-4 lg:gap-6 py-6 mb-20">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-indigo-500/30 transition-colors group flex flex-col"
          >
            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/10 transition-colors">
              <benefit.icon className="text-zinc-400 group-hover:text-indigo-400 w-5 h-5" />
            </div>
            <h3 className="text-base text-white font-medium mb-2">{benefit.title}</h3>
            {benefit.description && <p className="text-xs text-zinc-400 leading-relaxed mb-4">{benefit.description}</p>}
            {benefit.chart && (
              <div className="h-16 flex items-end justify-between px-2 gap-2 opacity-50">
                <div className="w-full bg-zinc-800 rounded-t h-[80%]"></div>
                <div className="w-full bg-zinc-800 rounded-t h-[60%]"></div>
                <div className="w-full bg-indigo-500 rounded-t h-[20%] relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-indigo-400 font-mono">-70%</div>
                </div>
              </div>
            )}
            {benefit.metrics && (
              <div className="mt-4 flex items-center gap-3 pt-2 border-t border-white/5">
                {benefit.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-lg font-mono text-white">{metric.value}</span>
                    <span className="text-[9px] text-zinc-500 uppercase">{metric.label}</span>
                  </div>
                ))}
                <div className="w-px h-6 bg-white/10"></div>
              </div>
            )}
            {benefit.features && (
              <ul className="text-xs text-zinc-400 space-y-3 mt-1">
                {benefit.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <feature.icon className="w-3.5 h-3.5 text-indigo-400 mt-0.5" />
                    <span>
                      <strong className="text-zinc-200 font-normal">{feature.title}:</strong> {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </ScrollReveal>
  )
}



