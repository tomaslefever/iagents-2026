import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'iAgents - CRM & Agentes IA',
  description: 'Agentes inteligentes que califican leads, agendan citas y sincronizan datos con tu CRM 24/7',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VQR4PT8H8S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VQR4PT8H8S');
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col items-center selection:bg-indigo-500/30 overflow-x-hidden">
        {/* Background Ambience */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] left-[20%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute inset-0 grid-bg opacity-40"></div>
        </div>

        <Header />

        {/* Container Wrapper */}
        <div className="w-full max-w-[1100px] flex flex-col gap-6 relative z-10 animate-blur-in">
          <main className="w-full min-h-[60vh] flex flex-col px-4">
            {children}
          </main>
          <Footer />
        </div>

        <LeadForm />
      </body>
    </html>
  )
}



