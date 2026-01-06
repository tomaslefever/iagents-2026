import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function HomeBackground() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        // @ts-ignore
        if (window.UnicornStudio) {
            // @ts-ignore
            UnicornStudio.init().then(() => {
                setIsLoaded(true)
            })
        }
    }, [])

    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div data-us-project="ILgOO23w4wEyPQOKyLO4" className="absolute inset-0 w-full h-full"></div>
            <div className="absolute inset-0 grid-bg opacity-40"></div>
            <Script
                src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
                onLoad={() => {
                    // @ts-ignore
                    if (window.UnicornStudio) {
                        // @ts-ignore
                        UnicornStudio.init().then(() => {
                            setIsLoaded(true)
                        })
                    }
                }}
                strategy="lazyOnload"
            />
        </div>
    )
}
