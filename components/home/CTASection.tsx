import ScrollReveal from '@/components/ScrollReveal'
import { Check } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export default function CTASection() {
  return (
    <ScrollReveal>
      <section className="py-16 grid lg:grid-cols-2 gap-12 items-center border-t border-white/5">
        <div>
          <h2 className="text-3xl font-medium text-white tracking-tight mb-4">Empieza a automatizar hoy</h2>
          <p className="text-sm text-zinc-400 mb-8 leading-relaxed max-w-md">
            Únete a las empresas que usan iAgents para escalar sus ventas 24/7. Completa el formulario y accede a una
            demo personalizada.
          </p>
          <div className="flex flex-col gap-3">
            {['Sin tarjeta de crédito requerida', 'Setup inicial gratuito', 'Soporte prioritario 24/7'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs text-zinc-300">
                <div className="w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <Check className="w-3 h-3 text-indigo-400" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-6 rounded-xl border border-zinc-800 shadow-2xl">
          <ContactForm formId="lead-form" source="home-contact" />
        </div>
      </section>
    </ScrollReveal>
  )
}



