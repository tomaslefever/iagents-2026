import ScrollReveal from '@/components/ScrollReveal'
import { Box, Search, Zap, Infinity, MessageSquare, PlaneIcon, PlaneTakeoff, ShoppingCart, CreditCard, Calendar, VideoIcon, Share2 } from 'lucide-react'

export default function IntegrationsSection() {
  const integrations = [
    { icon: Share2, name: 'HUBSPOT', color: 'text-orange-500' },
    { icon: Search, name: 'GOOGLE', color: 'text-blue-500' },
    { icon: Zap, name: 'SALESFORCE', color: 'text-blue-400' },
    { icon: Infinity, name: 'META', color: 'text-blue-600' },
    { icon: MessageSquare, name: 'WHATSAPP', color: 'text-green-500' },
    { icon: VideoIcon, name: 'ZOOM', color: 'text-blue-500' },
    // shopify
    { icon: ShoppingCart, name: 'SHOPIFY', color: 'text-green-500' },
    // stripe
    { icon: CreditCard, name: 'STRIPE', color: 'text-blue-500' },
    { icon: PlaneIcon, name: 'TELEGRAM', color: 'text-sky-500' },
    // calendar
    { icon: Calendar, name: 'CALENDAR', color: 'text-blue-500' },
    // meet
    { icon: VideoIcon, name: 'MEET', color: 'text-green-500' },
    { icon: MessageSquare, name: 'DISCORD', color: 'text-purple-500' },

  ]

  return (
    <ScrollReveal>
      <section className="py-8 overflow-hidden">
        <div className="flex flex-col items-center gap-6">
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
            Integraciones nativas con tu stack
          </span>

          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
              {integrations.map((item, idx) => (
                <li key={idx}>
                  <div className="flex items-center gap-2 font-bold tracking-tighter text-sm text-white group cursor-default opacity-70 hover:opacity-100 transition-opacity">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
              {integrations.map((item, idx) => (
                <li key={idx}>
                  <div className="flex items-center gap-2 font-bold tracking-tighter text-sm text-white group cursor-default opacity-70 hover:opacity-100 transition-opacity">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}



