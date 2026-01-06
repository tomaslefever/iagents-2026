'use client'

import { ArrowRight } from 'lucide-react'

interface CTAButtonProps {
  text?: string
  mode?: 'chat' | 'voice'
  accentColor?: string
}

export default function CTAButton({ text = 'Probar ahora', mode = 'chat', accentColor = 'indigo-500' }: CTAButtonProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).openChatModal) {
      (window as any).openChatModal(mode)
    }
  }

  // Map tailwind colors to hex/rgb or use inline styles if needed, 
  // but better to allow passing the full class string or handle specific colors.
  // For simplicity and to match the user request "Define el accent color... y aplicalo",
  // I will assume accentColor is a Tailwind class prefix like 'emerald-500' or similar.
  // However, dynamically building classes like `bg-${accentColor}` is discouraged in Tailwind.
  // I will use a style object or utility lookup if possible, OR just pass the full className.
  // But standardizing: let's map a few known keys.

  const colorMap: Record<string, string> = {
    'emerald-500': 'bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-emerald-500/20',
    'indigo-500': 'bg-indigo-500 text-white hover:bg-indigo-400 shadow-indigo-500/20',
    'red-500': 'bg-red-500 text-white hover:bg-red-400 shadow-red-500/20',
    'cyan-500': 'bg-cyan-500 text-cyan-950 hover:bg-cyan-400 shadow-cyan-500/20',
    'sky-500': 'bg-sky-500 text-sky-950 hover:bg-sky-400 shadow-sky-500/20',
    'teal-500': 'bg-teal-500 text-white hover:bg-teal-400 shadow-teal-500/20',
    'pink-500': 'bg-pink-500 text-white hover:bg-pink-400 shadow-pink-500/20',
    'orange-500': 'bg-orange-500 text-white hover:bg-orange-400 shadow-orange-500/20',
    'rose-500': 'bg-rose-500 text-white hover:bg-rose-400 shadow-rose-500/20',
    'yellow-500': 'bg-yellow-500 text-yellow-950 hover:bg-yellow-400 shadow-yellow-500/20',
    'green-500': 'bg-green-500 text-white hover:bg-green-400 shadow-green-500/20',
    'purple-500': 'bg-purple-500 text-white hover:bg-purple-400 shadow-purple-500/20',
    'violet-500': 'bg-violet-500 text-white hover:bg-violet-400 shadow-violet-500/20',
    'blue-500': 'bg-blue-500 text-white hover:bg-blue-400 shadow-blue-500/20',
    'default': 'bg-white text-zinc-950 hover:bg-zinc-200 shadow-white/5'
  }

  const colorClass = colorMap[accentColor] || colorMap['default']

  return (
    <button
      data-action="open-chat"
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold transition-all shadow-lg group cursor-pointer ${colorClass}`}
    >
      <span>{text}</span>
      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
    </button>
  )
}



