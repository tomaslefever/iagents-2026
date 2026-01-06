import ScrollReveal from '@/components/ScrollReveal'
import { Clock, Globe, ShieldCheck, Users, CheckCircle2 } from 'lucide-react'

export default function CalendarSection() {
  return (
    <ScrollReveal>
      <section className="py-12 grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
          <div className="glass-panel rounded-xl overflow-hidden border border-zinc-800 flex flex-col relative z-10">
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-zinc-900/50">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <div className="text-[10px] font-medium text-zinc-500">Oct 2023</div>
            </div>

            <div className="flex text-xs bg-zinc-950/80">
              <div className="w-12 border-r border-white/5 flex flex-col items-center py-2 gap-8 text-[10px] text-zinc-600 font-mono">
                <span>9 AM</span>
                <span>10 AM</span>
                <span>11 AM</span>
                <span>12 PM</span>
                <span>1 PM</span>
              </div>

              <div className="flex-1 grid grid-cols-3 relative cal-grid">
                <div className="absolute top-0 left-0 right-0 flex border-b border-white/5">
                  <div className="flex-1 py-1 text-center text-[10px] text-zinc-500">Mon 24</div>
                  <div className="flex-1 py-1 text-center text-[10px] text-white font-medium bg-white/5">Tue 25</div>
                  <div className="flex-1 py-1 text-center text-[10px] text-zinc-500">Wed 26</div>
                </div>

                <div className="pt-8 relative border-r border-white/5 h-[200px]">
                  <div className="absolute top-[40px] left-1 right-1 h-[60px] bg-zinc-800/80 border-l-2 border-zinc-600 rounded-r px-2 py-1.5">
                    <div className="text-[9px] text-zinc-300 font-medium">Daily Sync</div>
                  </div>
                </div>

                <div className="pt-8 relative border-r border-white/5 bg-white/[0.01] h-[200px]">
                  <div className="absolute top-[90px] left-0 right-0 h-px bg-red-500/50 z-20 flex items-center">
                    <div className="w-1 h-1 rounded-full bg-red-500 -ml-0.5"></div>
                  </div>
                  <div className="absolute top-[120px] left-1 right-1 h-[60px] bg-indigo-500/20 border-l-2 border-indigo-500 rounded-r px-2 py-1.5 animate-slide-up ring-1 ring-indigo-500/20 shadow-lg shadow-indigo-500/10 group cursor-pointer">
                    <div className="flex justify-between items-start text-[9px] text-indigo-200 font-medium">
                      <span>Demo: iAgents</span>
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <div className="text-[8px] text-indigo-300/70 mt-0.5">Scheduled by AI</div>
                  </div>
                </div>

                <div className="pt-8 relative h-[200px]">
                  <div className="absolute top-[20px] left-1 right-1 h-[40px] bg-zinc-800/80 border-l-2 border-zinc-600 rounded-r px-2 py-1.5">
                    <div className="text-[9px] text-zinc-300 font-medium">Deep Work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-1/2 glass-panel px-3 py-2 rounded-lg flex items-center gap-3 animate-float shadow-xl z-20" style={{ animationDelay: '1s' }}>
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-wider">Status</div>
              <div className="text-xs font-medium text-white">Reunión Agendada</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 text-[10px] uppercase tracking-widest font-semibold mb-4">
            <Clock className="w-3 h-3" />
            Auto-Scheduling
          </div>
          <h2 className="text-3xl font-medium text-white tracking-tight mb-4">Tu calendario, gestionado por IA</h2>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            Olvídate de los correos de ida y vuelta. iAgents accede a tu disponibilidad real, negocia horarios con el
            cliente y bloquea el espacio en tu calendario automáticamente.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xs font-medium text-white mb-0.5">Detección de Zona Horaria</h4>
                <p className="text-xs text-zinc-500">Convierte automáticamente las horas locales del cliente a tu zona horaria.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xs font-medium text-white mb-0.5">Protección contra doble reserva</h4>
                <p className="text-xs text-zinc-500">Lectura en tiempo real de Google Calendar y Outlook para evitar conflictos.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                <Users className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xs font-medium text-white mb-0.5">Round Robin</h4>
                <p className="text-xs text-zinc-500">Distribuye las citas equitativamente entre los miembros de tu equipo de ventas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}



