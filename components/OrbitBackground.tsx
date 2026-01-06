'use client'

import { useEffect, useState } from 'react'

export default function OrbitBackground() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // Load script if not present
        if (!document.getElementById('unicorn-studio-script')) {
            const script = document.createElement('script')
            script.id = 'unicorn-studio-script'
            script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js'
            script.onload = () => {
                // @ts-ignore
                if (window.UnicornStudio) {
                    // @ts-ignore
                    UnicornStudio.init().then(() => setIsLoaded(true))
                }
            }
            document.head.appendChild(script)
        } else {
            // Script already loaded, just init or check
            // @ts-ignore
            if (window.UnicornStudio) {
                // @ts-ignore
                UnicornStudio.init().then(() => setIsLoaded(true))
            }
        }
    }, [])

    return (
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-screen h-[850px] overflow-hidden pointer-events-none -z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div
                className="absolute inset-0 w-full h-full"
                data-us-project="p7Ff6pfTrb5Gs59C7nLC"
                style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
            ></div>
            <div
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                }}
            ></div>
        </div>
    )
}
