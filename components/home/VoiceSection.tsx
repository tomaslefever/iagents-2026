'use client'

import { useState, useRef, useEffect } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { Mic, Play, Pause } from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import RealTimeAudioVisualizer from '@/components/agentes/RealTimeAudioVisualizer'

export default function VoiceSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Audio Context handling logic moved to Visualizer component, but we need to ensure audioRef is ready
  // No need to fetch blob anymore

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      if (audioRef.current.currentTime >= audioRef.current.duration) {
        audioRef.current.currentTime = 0
      }
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <ScrollReveal>
      <section className="py-12 relative">
        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-12 border border-zinc-800">

          {/* Left Column: Features */}
          <div className="flex-1 z-10 w-full">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] uppercase tracking-widest font-semibold mb-4">
              <Mic className="w-3 h-3" />
              Voice Engine 1.0
            </div>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">Agentes de Voz Ultra-Realistas</h2>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <span className="text-zinc-400 font-mono text-xs">01</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Latencia Sub-500ms</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Respuestas instantáneas que se sienten como una conversación real, sin pausas robóticas.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <span className="text-zinc-400 font-mono text-xs">02</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Manejo de Interrupciones</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">El agente se detiene naturalmente si el cliente lo interrumpe y retoma el contexto.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <span className="text-zinc-400 font-mono text-xs">03</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">Entonación Emocional</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">Adapta su tono (empático, urgente, profesional) según el sentimiento del cliente.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Demo Player */}
          <div className="w-full md:w-1/2 bg-zinc-950 rounded-xl border border-white/10 p-6 flex flex-col gap-6 relative shadow-2xl">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <Mic className="w-24 h-24 text-white" />
            </div>

            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-xs ring-4 ring-indigo-500/20">
                  AI
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Calificación de leads</div>
                  <div className="text-xs text-zinc-500">Demo Call #429</div>
                </div>
              </div>
              <div className="px-2 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-medium border border-green-500/20">
                Voz en vivo
              </div>
            </div>

            {/* Visualizer Placeholder */}
            <div className="h-32 bg-zinc-900/50 rounded-lg flex items-center justify-center px-4 relative overflow-hidden border border-zinc-800">
              <RealTimeAudioVisualizer
                audioRef={audioRef}
                isPlaying={isPlaying}
                barColor="#818cf8"
              />
            </div>

            <audio
              ref={audioRef}
              src="/audio/agent-voice-test.mp3"
              crossOrigin="anonymous"
              onEnded={() => {
                setIsPlaying(false)
                if (audioRef.current) setCurrentTime(audioRef.current.duration)
              }}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="hidden"
            />

            <div className="flex flex-col gap-4 pt-2">
              {/* Timeline Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-white/20 shrink-0"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  )}
                </button>

                <div className="flex-1 flex flex-col gap-1">
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:scale-110 transition-all"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </div>
            <CTAButton text="Probar una llamada de voz" mode="voice" />
          </div>

        </div>
      </section>
    </ScrollReveal>
  )
}
