'use client'

import React, { useRef, useEffect } from 'react'

export default function AudioVisualizer() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number>()
    const analyserRef = useRef<AnalyserNode>()
    const audioContextRef = useRef<AudioContext>()

    useEffect(() => {
        const initAudio = async () => {
            if (!canvasRef.current) return

            // Initialize Audio Context
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext
            const ctx = new AudioContext()
            audioContextRef.current = ctx

            // Create Analyser
            const analyser = ctx.createAnalyser()
            analyser.fftSize = 256
            analyserRef.current = analyser

            // Create Oscillator to simulate voice (since we don't have real mic/file input in this demo)
            // In a real app, you'd connect navigator.mediaDevices.getUserMedia stream here
            const oscillator = ctx.createOscillator()
            oscillator.type = 'sine'
            oscillator.frequency.value = 200 // Base frequency

            // Create a GainNode to modulate volume (simulate talking patterns)
            const gainNode = ctx.createGain()
            gainNode.gain.value = 0

            // Connect: Oscillator -> Gain -> Analyser -> (Not connecting to destination to keep it silent)
            oscillator.connect(gainNode)
            gainNode.connect(analyser)
            // analyser.connect(ctx.destination) // Uncomment to hear it (annoying beep)

            oscillator.start()

            // Modulate gain to simulate speech rhythm
            const modulate = () => {
                const time = ctx.currentTime
                // Complex modulation to sound/look like speech
                const modulation = Math.sin(time * 10) * Math.cos(time * 5) * 0.5 + 0.5
                gainNode.gain.setValueAtTime(modulation * 0.5, time) // Keep it somewhat quiet/subtle signal
                setTimeout(modulate, 100)
            }
            modulate()

            // Drawing logic
            const canvas = canvasRef.current
            const canvasCtx = canvas.getContext('2d')
            if (!canvasCtx) return

            const bufferLength = analyser.frequencyBinCount
            const dataArray = new Uint8Array(bufferLength)

            const renderFrame = () => {
                animationRef.current = requestAnimationFrame(renderFrame)
                analyser.getByteFrequencyData(dataArray)

                canvasCtx.clearRect(0, 0, canvas.width, canvas.height)

                // Style configuration from user example
                // ctx.fillStyle = "#9933ff"; -> converted to Tailwind styled or explicitly set
                // We use a gradient or the specific color requested: #9933ff (Indigo/Purple)

                const gradient = canvasCtx.createLinearGradient(0, 0, 0, canvas.height)
                gradient.addColorStop(0, '#818cf8') // Indigo 400
                gradient.addColorStop(1, '#6366f1') // Indigo 500
                canvasCtx.fillStyle = gradient // Or use "#9933ff" as requested

                const bars = 40 // Reduced bar count for cleaner look in small space
                // Example used 100 bars for 300px width. We have variable width.

                const barWidth = (canvas.width / bars) * 2 // Make them wider
                let barHeight
                let x = 0

                for (let i = 0; i < bars; i++) {
                    // Use a subset of frequency data to get the "voice" range
                    const index = Math.floor(i * (bufferLength / bars))
                    barHeight = dataArray[index] / 2 // Scale down

                    // Draw rounded bars? Or just rects as in example. Example: fillRect
                    // Example logic: bar_height = -(freqData[i] / 2) -> draws from bottom up?
                    // ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);

                    // Center the wave or bottom align?
                    // The example draws from bottom: `canvas.height` with negative height.

                    canvasCtx.fillRect(x, canvas.height, barWidth - 1, -barHeight)

                    x += barWidth
                }
            }

            renderFrame()
        }

        initAudio()

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
            if (audioContextRef.current) audioContextRef.current.close()
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            width={800}
            height={160}
            className="w-full h-full"
        />
    )
}
