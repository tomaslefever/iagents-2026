import Link from 'next/link'
import Image from 'next/image'
import { Bot } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/5 pt-8 pb-20 flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="flex flex-col gap-2 justify-center">
        <Link href="/" className="flex items-center gap-2 decoration-0 justify-center">
          <Image src="/logo.png" alt="iAgents" width={24} height={24} />
          <span className="font-medium text-white font-bold text-sm">iAgents</span>
        </Link>
        <p className="text-[12px] text-zinc-500">
          Automatización inteligente para equipos de venta modernos.
        </p>
      </div>

      <div className="flex items-center gap-6 hidden">
        <Link href="#" className="text-[10px] text-zinc-500 hover:text-white transition-colors uppercase tracking-wider font-medium">
          Documentación
        </Link>
        <Link href="#" className="text-[10px] text-zinc-500 hover:text-white transition-colors uppercase tracking-wider font-medium">
          Status
        </Link>
        <Link href="#" className="text-[10px] text-zinc-500 hover:text-white transition-colors uppercase tracking-wider font-medium">
          LinkedIn
        </Link>
        <Link href="/privacy" className="text-[10px] text-zinc-500 hover:text-white transition-colors uppercase tracking-wider font-medium">
          Privacidad
        </Link>
      </div>
    </footer>
  )
}



