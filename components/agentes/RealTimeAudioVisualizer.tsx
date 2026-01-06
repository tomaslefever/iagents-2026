'use client'

import { useEffect, useRef } from 'react'

interface RealTimeAudioVisualizerProps {
    audioRef: React.RefObject<HTMLAudioElement>
    isPlaying: boolean
    barColor?: string
    gap?: number
    barWidth?: number
}

export default function RealTimeAudioVisualizer({
    audioRef,
    isPlaying,
    barColor = '#818cf8',
    gap = 2,
    barWidth = 3
}: RealTimeAudioVisualizerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const contextRef = useRef<AudioContext | null>(null)
    const sourceRef = useRef<MediaElementAudioSourceNode | null>(null)
    const analyzerRef = useRef<AnalyserNode | null>(null)
    const animationRef = useRef<number>()

    useEffect(() => {
        if (!audioRef.current) return

        // Initialize Audio Context on first play (user interaction required)
        const initAudioContext = () => {
            if (!contextRef.current && audioRef.current) {
                const AudioContext = window.AudioContext || (window as any).webkitAudioContext
                contextRef.current = new AudioContext()
                analyzerRef.current = contextRef.current.createAnalyser()
                analyzerRef.current.fftSize = 256

                sourceRef.current = contextRef.current.createMediaElementSource(audioRef.current)
                sourceRef.current.connect(analyzerRef.current)
                analyzerRef.current.connect(contextRef.current.destination)
            }
        }

        if (isPlaying) {
            initAudioContext()
            // Resume context if suspended (browser autoplay policy)
            if (contextRef.current?.state === 'suspended') {
                contextRef.current.resume()
            }
            draw()
        } else {
            cancelAnimationFrame(animationRef.current!)
            // Optional: Clear canvas or let it stay at last frame? 
            // Let's clear to flat line or return to low bars
            const canvas = canvasRef.current
            if (canvas) {
                const ctx = canvas.getContext('2d')
                if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
            }
        }

        return () => {
            cancelAnimationFrame(animationRef.current!)
            // We don't close context here to allow reuse, but in a full unmount we might.
        }
    }, [isPlaying, audioRef])

    const draw = () => {
        const canvas = canvasRef.current
        const analyzer = analyzerRef.current
        if (!canvas || !analyzer) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const bufferLength = analyzer.frequencyBinCount
        const dataArray = new Uint8Array(bufferLength)

        const renderFrame = () => {
            animationRef.current = requestAnimationFrame(renderFrame)
            analyzer.getByteFrequencyData(dataArray)

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Calculate number of bars that fit
            const totalBarWidth = barWidth + gap
            const barsToRender = Math.floor(canvas.width / totalBarWidth)

            // We'll pick a subset of frequency data to spread across width
            const step = Math.ceil(bufferLength / barsToRender)

            for (let i = 0; i < barsToRender; i++) {
                // Average value for this step to smooth it out
                let value = 0
                for (let j = 0; j < step; j++) {
                    value += dataArray[i * step + j] || 0
                }
                value = value / step

                const percent = value / 255
                const height = percent * canvas.height

                // Center vertically
                const y = (canvas.height - height) / 2
                const x = i * totalBarWidth

                ctx.fillStyle = barColor
                // Draw rounded rect manually or just rect
                ctx.beginPath()
                ctx.roundRect(x, y, barWidth, Math.max(height, 2), 2) // Min height showing
                ctx.fill()
            }
        }
        renderFrame()
    }

    return (
        <canvas
            ref={canvasRef}
            width={400}
            height={80}
            className="w-full h-full"
        />
    )
}
