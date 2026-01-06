import ScrollReveal from '@/components/ScrollReveal'
import { Star } from 'lucide-react'

const testimonials = [
  {
    text: '"Redujimos el tiempo de respuesta de 4 horas a segundos. La integración con nuestro CRM fue impecable y el soporte es excelente."',
    name: 'Pablo Covacevic',
    role: 'CTO The Owl Real Estate',
    initials: 'PC',
  },
  {
    text: '"Los agentes de voz suenan increíblemente humanos. Nuestros clientes no notan la diferencia y la tasa de conversión subió un 40%."',
    name: 'Rodrigo Ortega',
    role: 'Value Inmobiliario',
    initials: 'RO',
  },
  {
    text: '"La mejor inversión en automatización que hemos hecho. El dashboard de leads en tiempo real nos da una visibilidad sin precedentes."',
    name: 'Daniel Arellano',
    role: 'Viteo Spa',
    initials: 'DA',
  },
]

export default function TestimonialsSection() {
  return (
    <ScrollReveal>
      <section className="py-16 border-t border-white/5">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-white tracking-tight mb-2">Lo que dicen nuestros clientes</h2>
          <p className="text-sm text-zinc-400">Equipos de alto rendimiento que escalan con iAgents</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-zinc-900/30 border border-white/5 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
                ))}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mb-6 flex-1">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300 border border-white/5">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-xs font-medium text-white">{testimonial.name}</div>
                  <div className="text-[10px] text-zinc-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  )
}



