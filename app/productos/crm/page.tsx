import HeroSection from '@/components/crm/HeroSection'
import DashboardPreview from '@/components/crm/DashboardPreview'
import FeaturesGrid from '@/components/crm/FeaturesGrid'
import WorkspacePreview from '@/components/crm/WorkspacePreview'
import IntegrationsSection from '@/components/home/IntegrationsSection'
import LeadGeneration from '@/components/LeadGeneration'

export default function CrmPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] left-[30%] w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      </div>

      <main className="relative z-10 w-full flex flex-col items-center">
        <HeroSection />
        <DashboardPreview />
        <FeaturesGrid />
        <WorkspacePreview />
        <IntegrationsSection />
        <LeadGeneration
          backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
          title="Pon a tus Agentes a trabajar hoy mismo."
          subtitle="Automatiza llamadas, correos y gestión de leads conectando tus herramientas favoritas."
        />
      </main>
    </div>
  )
}
