import ScrollReveal from '@/components/ScrollReveal'
import { ArrowRight, MessageCircle, Phone, Mail } from 'lucide-react'

const leads = [
  {
    initials: 'JS',
    name: 'Juan Silva',
    status: 'Calificado',
    statusColor: 'green',
    interaction: { icon: MessageCircle, text: 'Demo solicitada' },
    nextStep: 'Meeting (Mañana, 10:00 AM)',
    score: '92%',
    scoreColor: 'green',
    avatarColor: 'blue',
  },
  {
    initials: 'MR',
    name: 'Maria Ruiz',
    status: 'Negociación',
    statusColor: 'yellow',
    interaction: { icon: Phone, text: 'Llamada finalizada' },
    nextStep: 'Enviar contrato',
    score: '75%',
    scoreColor: 'yellow',
    avatarColor: 'orange',
  },
  {
    initials: 'AL',
    name: 'Ana López',
    status: 'Nuevo',
    statusColor: 'zinc',
    interaction: { icon: Mail, text: 'Email recibido' },
    nextStep: 'Agente respondiendo...',
    score: '--',
    scoreColor: 'zinc',
    avatarColor: 'zinc',
  },
]

export default function CRMSection() {
  return (
    <ScrollReveal>
      <section className="py-32 flex flex-col gap-6">
        <div className="flex items-end justify-between px-2">
          <div>
            <h2 className="text-2xl font-medium text-white tracking-tight mb-2">CRM en Tiempo Real</h2>
            <p className="text-sm text-zinc-400 max-w-lg">
              Visualiza cómo tus agentes interactúan, califican y convierten leads automáticamente. Todo sincronizado.
            </p>
          </div>
        </div>

        <div className="glass-panel rounded-xl overflow-hidden border border-zinc-800/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-zinc-900/50 text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
                  <th className="px-6 py-3 font-medium">Lead</th>
                  <th className="px-6 py-3 font-medium">Estado</th>
                  <th className="px-6 py-3 font-medium">Interacción</th>
                  <th className="px-6 py-3 font-medium">Próximo Paso</th>
                  <th className="px-6 py-3 font-medium text-right">Score</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-white/5">
                {leads.map((lead, idx) => (
                  <tr key={idx} className="group hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${lead.avatarColor === 'blue' ? 'bg-blue-500/20 text-blue-400 border-blue-500/20' :
                            lead.avatarColor === 'orange' ? 'bg-orange-500/20 text-orange-400 border-orange-500/20' :
                              'bg-zinc-700/50 text-zinc-400 border-zinc-600/20'
                            }`}
                        >
                          {lead.initials}
                        </div>
                        <div className="font-medium text-zinc-200">{lead.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium ${lead.statusColor === 'green' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                          lead.statusColor === 'yellow' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                            'bg-zinc-800 text-zinc-400 border-zinc-700'
                          } border`}
                      >
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-zinc-400">
                      <div className="flex items-center gap-1.5">
                        <lead.interaction.icon className="w-3 h-3 text-zinc-600" />
                        <span>{lead.interaction.text}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3 text-zinc-300">{lead.nextStep}</td>
                    <td className={`px-6 py-3 text-right font-mono ${lead.scoreColor === 'green' ? 'text-green-400' :
                      lead.scoreColor === 'yellow' ? 'text-yellow-400' :
                        'text-zinc-500'
                      }`}>{lead.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}

