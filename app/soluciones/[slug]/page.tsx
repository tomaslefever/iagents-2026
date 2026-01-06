import Link from 'next/link'
import OrbitBackground from '@/components/OrbitBackground'
import VoiceSection from '@/components/home/VoiceSection'
import { Building, Car, Activity, ShoppingBag, GraduationCap, Lock, Check, X, MessageSquare, PhoneCall, Database, CalendarDays, HeartPulse, ShieldCheck, RefreshCcw, Sparkles, Truck, ShoppingCart, MessageSquareHeart, ArrowLeftRight, BellRing, ClipboardCheck, Filter, PackageCheck, BarChart3, Globe, MailOpen, CalendarCheck, Rocket, Home, Triangle, Hexagon, CheckCircle2, XCircle, Bot, Send, Plus } from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import ContactForm from '@/components/ContactForm'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

interface SolutionContent {
  hero: {
    badge: string
    title: string
    titleHighlight: string
    description: string
    ctaText: string
    testimonial: { count: string; text: string }
  }
  logos?: {
    title: string
    items: { icon: any; text: string; subtext?: string }[]
  }
  mainFeature?: {
    imageSrc: string
    imageAlt: string
    imageOverlayTitle: string
    imageOverlaySubtitle: string
    imageOverlayValue: string
    imageOverlayUnit: string
    title: string
    subtitle: string
    description1: string
    description2: string
    points: {
      icon: any
      title: string
      description: string
    }[]
  }
  features: {
    title: string
    description: string
    items: { icon: any; title: string; description: string; color?: string }[]
  }
  comparison: {
    before: { title: string; items: string[] }
    after: { title: string; items: string[] }
  }
  cta: {
    title: string
    description: string
    placeholder: string
    imageSrc?: string
    imageAlt?: string
  }
  color: 'orange' | 'red' | 'rose' | 'cyan' | 'yellow' | 'green' | 'emerald' | 'sky' | 'teal' | 'purple'
  icon: any
}

const solutionsContent: Record<string, SolutionContent> = {
  inmobiliarias: {
    hero: {
      badge: 'Disponible 24/7 en WhatsApp & Voz',
      title: 'Califica leads y agenda visitas',
      titleHighlight: 'mientras duermes.',
      description: 'Tu equipo pierde 4 horas al día respondiendo preguntas repetitivas. Nuestros agentes de IA atienden al instante, filtran curiosos y agendan visitas solo con clientes calificados en tu calendario.',
      ctaText: 'Probar en WhatsApp Ahora',
      testimonial: { count: '+2k', text: 'Corredores felices usando iAgents' },
    },
    logos: {
      title: 'Potenciando a las mejores corredoras',
      items: [
        { icon: Home, text: 'RE/MAX', subtext: 'PARTNER' },
        { icon: Triangle, text: 'CENTURY', subtext: '21' },
        { icon: Hexagon, text: 'Engel&Völkers' },
        { icon: Building, text: 'PORTAL', subtext: 'INMOBILIARIO' },
      ],
    },
    mainFeature: {
      imageSrc: 'https://images.unsplash.com/photo-1560518883-ce09059ee971?q=80&w=1000&auto=format&fit=crop',
      imageAlt: 'Broker showing property',
      imageOverlayTitle: 'Esta Semana',
      imageOverlaySubtitle: 'Gracias a la pre-calificación automática.',
      imageOverlayValue: '15',
      imageOverlayUnit: 'Visitas',
      title: 'Recupera el trato humano',
      subtitle: 'eliminando el ruido operativo.',
      description1: 'Un corredor pasa el 70% de su tiempo respondiendo "¿Precio?" y coordinando horarios. iAgents se encarga de entregar la ficha técnica, ubicación y filtrar requisitos básicos.',
      description2: 'Cuando tu corredor recibe el lead, ya sabe: presupuesto, urgencia de compra y disponibilidad horaria. Llegan a la visita a cerrar, no a informar.',
      points: [
        {
          icon: Check,
          title: 'Entrega de Información Inmediata',
          description: 'Envía brochures PDF, planos y ubicaciones en el segundo exacto que el cliente pregunta.',
        },
        {
          icon: Check,
          title: 'Reactiva Base de Datos Antigua',
          description: 'El agente de voz puede llamar a leads de hace 6 meses para preguntar si siguen buscando.',
        },
      ],
    },
    features: {
      title: 'Todo lo que tu inmobiliaria necesita',
      description: 'Una suite completa de herramientas conversacionales.',
      items: [
        {
          icon: MessageSquare,
          title: 'WhatsApp API Oficial',
          description: 'Sin riesgos de bloqueo. Utiliza la API oficial de Meta para enviar catálogos y mensajes masivos a interesados.',
          color: 'emerald',
        },
        {
          icon: PhoneCall,
          title: 'Agente de Voz Empático',
          description: 'Realiza llamadas de seguimiento post-visita para obtener feedback real del cliente: "¿Qué le pareció la propiedad?".',
          color: 'blue',
        },
        {
          icon: Database,
          title: 'Sync con CRM',
          description: 'Toda la conversación, etiquetas y datos del cliente se guardan automáticamente en Salesforce, HubSpot o tu CRM propio.',
          color: 'purple',
        },
      ],
    },
    comparison: {
      before: {
        title: 'Proceso Manual',
        items: ['Respuesta en 4-24 horas', 'Información dispersa en emails', 'Visitas basura (sin presupuesto)', 'Seguimiento manual en Excel'],
      },
      after: {
        title: 'Proceso Automatizado',
        items: ['Respuesta inmediata (0 seg)', 'Ficha y ubicación enviadas al instante', 'Pre-calificación crediticia básica', 'Auto-agendamiento en Calendar'],
      },
    },
    cta: {
      title: 'Empieza a vender más hoy.',
      description: 'La implementación toma menos de 48 horas. Conecta tus números, sube tu inventario y deja que la IA haga el resto.',
      placeholder: 'correo@inmobiliaria.com',
      imageSrc: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000&auto=format&fit=crop',
      imageAlt: 'Modern Real Estate Interior',
    },
    color: 'sky',
    icon: Building,
  },
  automotoras: {
    hero: {
      badge: 'Disponible 24/7 en WhatsApp & Voz',
      title: 'Vende más autos y agenda Test Drives',
      titleHighlight: 'en piloto automático.',
      description: 'Tus vendedores pierden horas respondiendo "¿Precio?" en Marketplace y Chileautos. iAgents califica leads, filtra curiosos y agenda visitas al concesionario solo con clientes reales.',
      ctaText: 'Probar Demo WhatsApp',
      testimonial: { count: '+500', text: 'Automotoras líderes usando iAgents' },
    },
    features: {
      title: 'Motor de ventas para tu automotora',
      description: 'Herramientas diseñadas para la industria automotriz.',
      items: [
        {
          icon: MessageSquare,
          title: 'Omnicanalidad',
          description: 'Centraliza consultas de Chileautos, Facebook Marketplace, Instagram y tu Web en un solo número de WhatsApp.',
        },
        {
          icon: PhoneCall,
          title: 'Agente de Agendamiento',
          description: 'Coordina horas para taller o Test Drive automáticamente, sincronizando con la disponibilidad de tus mecánicos o vendedores.',
        },
        {
          icon: Database,
          title: 'Integración DMS/CRM',
          description: 'Conectamos con Pilot, Salesforce o Hubspot para crear la oportunidad de venta y registrar cada interacción.',
        },
      ],
    },
    comparison: {
      before: {
        title: 'Venta Tradicional',
        items: ['Leads perdidos por demora', 'Vendedores filtrando "curiosos"', 'Sin seguimiento de retomadas', 'Excel desactualizado'],
      },
      after: {
        title: 'Venta Digital',
        items: ['Respuesta inmediata 24/7', 'Pre-evaluación de retoma y crédito', 'Agendamiento automático en sala', 'Sync directo a tu CRM'],
      },
    },
    cta: {
      title: 'Acelera tus ventas hoy.',
      description: 'Implementación en 48 horas. Carga tu stock, conecta tu WhatsApp y empieza a recibir visitas calificadas.',
      placeholder: 'gerencia@automotora.cl',
    },
    color: 'red',
    icon: Car,
  },
  salud: {
    hero: {
      badge: 'Asistente Médico IA 24/7',
      title: 'Elimina el ausentismo y llena tu agenda',
      titleHighlight: 'sin llamadas telefónicas.',
      description: 'Automatiza la confirmación de citas, responde dudas médicas frecuentes y gestiona la agenda de tus especialistas por WhatsApp. Reduce el "no-show" un 40%.',
      ctaText: 'Optimizar mi Clínica',
      testimonial: { count: '2k+', text: 'Profesionales de salud confían en iAgents' },
    },
    features: {
      title: 'Tu clínica abierta 24/7',
      description: 'Herramientas diseñadas para mejorar la experiencia del paciente.',
      items: [
        {
          icon: CalendarDays,
          title: 'Agendamiento Automático',
          description: 'Sincronización en tiempo real con Google Calendar o tu CRM. El paciente elige el horario en el chat y se bloquea al instante.',
        },
        {
          icon: HeartPulse,
          title: 'Seguimiento Post-Consulta',
          description: 'Envía instrucciones de cuidado y preguntas de control 24h después de la cita. Detecta señales de alarma y avisa al médico.',
        },
        {
          icon: ShieldCheck,
          title: 'Privacidad Garantizada',
          description: 'Cumplimiento con normas de protección de datos (HIPAA/GDPR). Datos encriptados y anonimización de información sensible.',
        },
      ],
    },
    comparison: {
      before: {
        title: 'Gestión Tradicional',
        items: ['Paciente espera 10 min al teléfono', '30% de ausentismo por olvido', 'Reagendar toma múltiples llamadas', 'Atención solo en horario de oficina'],
      },
      after: {
        title: 'Clínica Automatizada',
        items: ['Respuesta inmediata por WhatsApp', 'Confirmación automática (reduce ausentismo)', 'Reagendamiento en 1 click 24/7', 'Triaje previo a la consulta'],
      },
    },
    cta: {
      title: 'Mejora la atención hoy mismo.',
      description: 'Ideal para consultorios, clínicas dentales, centros de estética y hospitales. Prueba gratis por 14 días.',
      placeholder: 'correo@tuclinica.com',
    },
    color: 'teal',
    icon: Activity,
  },
  ecommerce: {
    hero: {
      badge: 'Soporte & Ventas AI para Ecommerce',
      title: 'Recupera carritos y gestiona devoluciones',
      titleHighlight: 'en piloto automático.',
      description: 'Deja de perder ventas por no responder a tiempo. Nuestra IA recupera el 25% de los carritos abandonados por WhatsApp, recomienda productos complementarios y automatiza cambios y devoluciones.',
      ctaText: 'Instalar en mi Tienda',
      testimonial: { count: '4k+', text: 'Tiendas conectadas Shopify, Woo, Tiendanube' },
    },
    features: {
      title: 'Tu tienda, 24/7 en piloto automático',
      description: 'Funcionalidades diseñadas para escalar ventas.',
      items: [
        {
          icon: ShoppingCart,
          title: 'Recuperación de Carritos',
          description: 'Envía recordatorios hiper-personalizados por WhatsApp. "Hey Juan, te guardamos tu camisa azul". Tasa de apertura del 98%.',
        },
        {
          icon: MessageSquareHeart,
          title: 'Asesor de Compras AI',
          description: 'Responde dudas de tallas, materiales y stock en tiempo real. Guía al cliente hasta el checkout como un vendedor en tienda física.',
        },
        {
          icon: ArrowLeftRight,
          title: 'Cambios Automáticos',
          description: 'Portal de autogestión y chat para devoluciones. Reduce costos logísticos validando fotos del producto antes de aprobar.',
        },
      ],
    },
    comparison: {
      before: {
        title: 'Ecommerce Tradicional',
        items: ['Email de "Carrito Abandonado" (Spam)', 'Soporte solo Lu-Vi, 9 a 18h', 'Devoluciones tardan 5 días en aprobarse', 'Sin recomendaciones post-compra'],
      },
      after: {
        title: 'Commerce Automatizado',
        items: ['WhatsApp Personalizado (98% Open Rate)', 'Respuestas Instantáneas 24/7', 'Aprobación de cambios en segundos', 'Upsell inteligente automatizado'],
      },
    },
    cta: {
      title: 'Aumenta tu conversión en 30 días.',
      description: 'Sin tarjetas de crédito. Prueba la integración con Shopify o Tiendanube gratis por 14 días.',
      placeholder: 'midominio.myshopify.com',
    },
    color: 'purple',
    icon: ShoppingBag,
  },
  educacion: {
    hero: {
      badge: 'Agentes IA para WhatsApp',
      title: 'Escala tu negocio de',
      titleHighlight: 'formación online con IA.',
      description: 'Automatiza la venta de tus cursos y mentorías. Tus agentes de IA cualifican prospectos, resuelven dudas y cierran ventas high-ticket 24/7.',
      ctaText: 'Crear mi cuenta',
      testimonial: { count: '', text: 'Sin tarjeta requerida • Cancelación simple' },
    },
    features: {
      title: 'Todo lo que necesitas para vender conocimiento',
      description: 'Elimina el caos administrativo. Lumina centraliza cada aspecto de tu negocio digital en una interfaz elegante.',
      items: [
        {
          icon: Filter,
          title: 'Filtra Estudiantes Ideales',
          description: 'No pierdas tiempo en llamadas con curiosos. La IA analiza el perfil y presupuesto antes de agendar, asegurando que solo hables con leads cualificados.',
        },
        {
          icon: BellRing,
          title: 'Asistencia a Sesiones',
          description: 'Aumenta la asistencia a tus webinars y llamadas de venta con recordatorios multicanal automáticos.',
        },
        {
          icon: PackageCheck,
          title: 'Acceso a Contenidos',
          description: 'Integración directa con Skool, Kajabi y Hotmart para dar acceso inmediato a tus alumnos tras el pago.',
        },
      ],
    },
    comparison: {
      before: {
        title: 'Proceso Manual',
        items: ['Captación manual de leads', 'Seguimiento en Excel', 'Sin automatización de recordatorios', 'Acceso manual a contenidos'],
      },
      after: {
        title: 'Proceso Automatizado',
        items: ['Captación automática y calificación', 'CRM integrado con métricas', 'Recordatorios multicanal automáticos', 'Acceso inmediato post-pago'],
      },
    },
    cta: {
      title: 'Listo para escalar tu negocio?',
      description: 'Únete a creadores que facturan 6 cifras usando automatización inteligente. Prueba gratis por 14 días.',
      placeholder: 'tu@email.com',
    },
    color: 'yellow',
    icon: GraduationCap,
  },
  'uso-interno': {
    hero: {
      badge: 'Automatización HR/IT',
      title: 'Optimiza procesos internos',
      titleHighlight: 'y mejora la productividad.',
      description: 'Automatiza tareas repetitivas de RRHH e IT, gestiona tickets automáticamente y mejora la experiencia del empleado con respuestas instantáneas.',
      ctaText: 'Solicitar Demo',
      testimonial: { count: '500+', text: 'Empresas usando iAgents Interno' },
    },
    features: {
      title: 'Automatización para equipos internos',
      description: 'Herramientas diseñadas para optimizar procesos HR e IT.',
      items: [
        {
          icon: MessageSquare,
          title: 'Automatización HR',
          description: 'Responde consultas sobre vacaciones, políticas y beneficios. Gestiona onboarding automatizado para nuevos empleados.',
        },
        {
          icon: Database,
          title: 'Gestión de Tickets IT',
          description: 'Clasifica y prioriza tickets automáticamente. Resuelve consultas comunes sin intervención del equipo técnico.',
        },
        {
          icon: ShieldCheck,
          title: 'Seguridad y Compliance',
          description: 'Cumplimiento automático con políticas internas. Auditoría y reportes de acceso y permisos.',
        },
      ],
    },
    comparison: {
      before: {
        title: 'Proceso Manual',
        items: ['Tickets sin priorizar', 'Respuestas lentas a consultas', 'Onboarding manual', 'Sin seguimiento de procesos'],
      },
      after: {
        title: 'Proceso Automatizado',
        items: ['Priorización automática de tickets', 'Respuestas instantáneas 24/7', 'Onboarding automatizado', 'Métricas y seguimiento en tiempo real'],
      },
    },
    cta: {
      title: 'Optimiza tu empresa hoy.',
      description: 'Reduce costos operativos y mejora la experiencia de tus empleados. Implementación en menos de una semana.',
      placeholder: 'correo@empresa.com',
    },
    color: 'orange',
    icon: Lock,
  },
}

const colorClasses = {
  orange: {
    badge: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    button: 'bg-orange-500 hover:bg-orange-400 text-orange-950',
    feature: 'border-orange-500/30',
    check: 'text-orange-500',
    gradient: 'from-orange-400 to-orange-600',
  },
  red: {
    badge: 'bg-red-500/10 border-red-500/20 text-red-400',
    button: 'bg-red-600 hover:bg-red-500 text-white',
    feature: 'border-red-500/30',
    check: 'text-red-500',
    gradient: 'from-red-500 to-orange-500',
  },
  rose: {
    badge: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
    button: 'bg-rose-600 hover:bg-rose-500 text-white',
    feature: 'border-rose-500/30',
    check: 'text-rose-500',
    gradient: 'from-rose-400 to-pink-400',
  },
  cyan: {
    badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    button: 'bg-cyan-600 hover:bg-cyan-500 text-white',
    feature: 'border-cyan-500/30',
    check: 'text-cyan-500',
    gradient: 'from-cyan-400 to-blue-400',
  },
  yellow: {
    badge: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    button: 'bg-yellow-600 hover:bg-yellow-500 text-yellow-950',
    feature: 'border-yellow-500/30',
    check: 'text-yellow-500',
    gradient: 'from-yellow-400 via-yellow-200 to-white',
  },
  green: {
    badge: 'bg-green-500/10 border-green-500/20 text-green-400',
    button: 'bg-green-600 hover:bg-green-500 text-white',
    feature: 'border-green-500/30',
    check: 'text-green-500',
    gradient: 'from-green-400 to-emerald-400',
  },
  emerald: {
    badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    button: 'bg-emerald-500 hover:bg-emerald-400 text-emerald-950',
    feature: 'border-emerald-500/30',
    check: 'text-emerald-500',
    gradient: 'from-emerald-400 to-teal-400',
    icon: 'bg-emerald-500/10 text-emerald-400',
    comparisonBg: 'bg-emerald-900/5',
    comparisonText: 'text-emerald-500',
    bgGradient: 'from-emerald-500/10 to-blue-600/10',
  },
  sky: {
    badge: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
    button: 'bg-sky-500 hover:bg-sky-400 text-sky-950',
    feature: 'border-sky-500/30',
    check: 'text-sky-500',
    gradient: 'from-sky-400 to-blue-400',
    icon: 'bg-sky-500/10 text-sky-400',
    comparisonBg: 'bg-sky-900/5',
    comparisonText: 'text-sky-500',
    bgGradient: 'from-sky-500/10 to-blue-600/10',
  },
  teal: {
    badge: 'bg-teal-500/10 border-teal-500/20 text-teal-400',
    button: 'bg-teal-500 hover:bg-teal-400 text-teal-950',
    feature: 'border-teal-500/30',
    check: 'text-teal-500',
    gradient: 'from-teal-400 to-emerald-400',
    icon: 'bg-teal-500/10 text-teal-400',
    comparisonBg: 'bg-teal-900/5',
    comparisonText: 'text-teal-500',
    bgGradient: 'from-teal-500/10 to-emerald-600/10',
  },
  purple: {
    badge: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    button: 'bg-purple-600 hover:bg-purple-500 text-white',
    feature: 'border-purple-500/30',
    check: 'text-purple-500',
    gradient: 'from-purple-400 to-pink-400',
    icon: 'bg-purple-500/10 text-purple-400',
    comparisonBg: 'bg-purple-900/5',
    comparisonText: 'text-purple-500',
    bgGradient: 'from-purple-500/10 to-violet-600/10',
  },
}

export default function SolucionPage({ params }: { params: { slug: string } }) {
  const solution = solutionsContent[params.slug]

  if (!solution) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-medium text-white mb-4">Solución no encontrada</h1>
        <Link href="/" className="text-indigo-400 hover:text-indigo-300">
          Volver al inicio
        </Link>
      </div>
    )
  }

  const IconComponent = solution.icon
  const colors = colorClasses[solution.color] as any

  return (
    <div className="py-16 relative">
      <OrbitBackground />
      {/* Hero Section */}
      <ScrollReveal>
        <main className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-24">
          <div className="flex flex-col">
            <div className={`inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 ${colors.badge} text-[10px] mb-8 uppercase tracking-widest font-semibold`}>
              <span className={`w-1.5 h-1.5 rounded-full ${solution.color === 'orange' ? 'bg-orange-500' :
                solution.color === 'red' ? 'bg-red-500' :
                  solution.color === 'rose' ? 'bg-rose-500' :
                    solution.color === 'cyan' ? 'bg-cyan-500' :
                      solution.color === 'yellow' ? 'bg-yellow-500' :
                        solution.color === 'green' ? 'bg-green-500' :
                          'bg-emerald-500'
                } animate-pulse`}></span>
              {solution.hero.badge}
            </div>

            <h1 className="font-medium text-4xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
              {solution.hero.title} <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
                {solution.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-sm text-zinc-400 leading-relaxed mb-8 max-w-lg">{solution.hero.description}</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <CTAButton accentColor={`${solution.color}-500`} />
              {solution.hero.testimonial.count && (
                <div className="flex items-center gap-2 px-4 py-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] text-white">
                      {solution.hero.testimonial.count}
                    </div>
                  </div>
                  <div className="text-[10px] text-zinc-500 leading-tight">
                    <span className="text-white font-medium block">{solution.hero.testimonial.text}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className={`absolute inset-0 ${solution.color === 'orange' ? 'bg-orange-500/10' :
              solution.color === 'red' ? 'bg-red-600/10' :
                solution.color === 'rose' ? 'bg-rose-500/10' :
                  solution.color === 'cyan' ? 'bg-cyan-500/10' :
                    solution.color === 'yellow' ? 'bg-yellow-500/10' :
                      solution.color === 'green' ? 'bg-green-500/10' :
                        'bg-emerald-500/10'
              } blur-3xl rounded-full scale-75 opacity-50 pointer-events-none`}></div>
            <div className="relative w-[320px] bg-zinc-950 rounded-[3rem] border-4 border-zinc-900 shadow-2xl overflow-hidden animate-float">
              <div className="h-6 bg-zinc-950 w-full flex items-center justify-between px-6 pt-2">
                <span className="text-[10px] text-white font-medium">9:41</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 text-white"></div>
                  <div className="w-3 h-3 text-white"></div>
                </div>
              </div>
              <div className="bg-zinc-900/80 backdrop-blur p-4 flex items-center gap-3 border-b border-white/5">
                <div className={`w-8 h-8 ${solution.color === 'orange' ? 'bg-orange-500' :
                  solution.color === 'red' ? 'bg-red-600' :
                    solution.color === 'rose' ? 'bg-rose-500' :
                      solution.color === 'cyan' ? 'bg-cyan-500' :
                        solution.color === 'yellow' ? 'bg-yellow-500' :
                          solution.color === 'green' ? 'bg-green-500' :
                            'bg-emerald-500'
                  } rounded-full flex items-center justify-center`}>
                  {solution.color === 'emerald' ? <Bot className="w-4 h-4 text-emerald-950" /> : <IconComponent className="w-4 h-4 text-white" />}
                </div>
                <div>
                  <div className="text-xs font-medium text-white">{solution.color === 'emerald' ? 'Agente Ventas IA' : 'Agente IA'}</div>
                  <div className={`text-[9px] ${colors.badge.split(' ')[2]}`}>En línea • Responde al instante</div>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3 h-[400px] bg-zinc-950 overflow-hidden relative">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')" }}></div>
                {solution.color === 'emerald' ? (
                  <>
                    <div className="self-end max-w-[85%] bg-emerald-600 rounded-2xl rounded-tr-sm p-3 shadow-sm z-10">
                      <p className="text-[11px] text-white leading-relaxed">Hola, vi el dpto de 3 dorms en Las Condes. ¿Sigue disponible?</p>
                      <span className="text-[9px] text-emerald-200 block text-right mt-1">10:42 AM</span>
                    </div>
                    <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10">
                      <p className="text-[11px] text-zinc-200 leading-relaxed">¡Hola! 👋 Sí, aún está disponible. El valor es de 7.500 UF. ¿Buscas para inversión o para vivir?</p>
                      <span className="text-[9px] text-zinc-500 block text-right mt-1">10:42 AM</span>
                    </div>
                    <div className="self-end max-w-[85%] bg-emerald-600 rounded-2xl rounded-tr-sm p-3 shadow-sm z-10">
                      <p className="text-[11px] text-white leading-relaxed">Para vivir con mi familia.</p>
                      <span className="text-[9px] text-emerald-200 block text-right mt-1">10:43 AM</span>
                    </div>
                    <div className="self-start max-w-[85%] bg-zinc-800 rounded-2xl rounded-tl-sm p-3 border border-zinc-700 z-10">
                      <p className="text-[11px] text-zinc-200 leading-relaxed">Perfecto. Tiene estacionamiento doble y bodega. ¿Te gustaría agendar una visita para este Jueves?</p>
                      <div className="flex gap-2 mt-2">
                        <button className="px-2 py-1 rounded bg-zinc-700 text-[10px] text-emerald-400 hover:bg-zinc-600">Sí, agendar</button>
                        <button className="px-2 py-1 rounded bg-zinc-700 text-[10px] text-zinc-300 hover:bg-zinc-600">Ver ficha</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="self-end max-w-[85%] bg-zinc-800 rounded-2xl rounded-tr-sm p-3 border border-zinc-700 z-10">
                      <p className="text-[11px] text-zinc-200 leading-relaxed">Hola, estoy interesado...</p>
                      <span className="text-[9px] text-zinc-500 block text-right mt-1">10:42 AM</span>
                    </div>
                    <div className={`self-start max-w-[85%] rounded-2xl rounded-tl-sm p-3 shadow-sm z-10 ${solution.color === 'orange' ? 'bg-orange-600' :
                      solution.color === 'red' ? 'bg-red-600' :
                        solution.color === 'rose' ? 'bg-rose-600' :
                          solution.color === 'cyan' ? 'bg-cyan-600' :
                            solution.color === 'yellow' ? 'bg-yellow-600' :
                              'bg-green-600'
                      }`}>
                      <p className="text-[11px] text-white leading-relaxed">¡Hola! Te puedo ayudar con eso...</p>
                      <span className="text-[9px] text-white/70 block text-right mt-1">10:42 AM</span>
                    </div>
                  </>
                )}
              </div>
              {solution.color === 'emerald' && (
                <div className="p-3 bg-zinc-900 border-t border-white/5 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500"><Plus className="w-4 h-4" /></div>
                  <div className="flex-1 h-8 bg-zinc-950 rounded-full border border-zinc-800 px-3 flex items-center text-[10px] text-zinc-500">Escribe un mensaje...</div>
                  <div className="w-6 h-6 text-emerald-500"><Send className="w-4 h-4" /></div>
                </div>
              )}
            </div>
            {solution.color === 'emerald' && (
              <div className="absolute bottom-20 -right-4 lg:-right-12 glass-panel p-4 rounded-xl flex items-center gap-3 animate-pulse shadow-xl max-w-[220px]">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">Visita Agendada</div>
                  <div className="text-[10px] text-zinc-400">Jueves, 16:00 PM • Sincronizado con Google Calendar</div>
                </div>
              </div>
            )}
          </div>
        </main>
      </ScrollReveal>

      {/* Logos Section */}
      {solution.logos && (
        <ScrollReveal>
          <section className="border-y border-white/5 py-8 mb-16">
            <p className="text-center text-[10px] uppercase tracking-widest text-zinc-600 mb-6 font-medium">
              {solution.logos.title}
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {solution.logos.items.map((logo, idx) => {
                const LogoIcon = logo.icon
                return (
                  <div key={idx} className="flex items-center gap-2 font-bold text-lg text-white">
                    <LogoIcon className="w-5 h-5" />
                    {logo.text} {logo.subtext && <span className="text-[10px] font-normal opacity-50">{logo.subtext}</span>}
                  </div>
                )
              })}
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Main Feature Section */}
      {solution.mainFeature && (
        <ScrollReveal>
          <section className="py-20 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${solution.color === 'emerald' ? 'from-emerald-500 to-blue-600' :
                  colors.bgGradient || 'from-zinc-500 to-zinc-600'
                  } rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
                  <Image src={solution.mainFeature.imageSrc} alt={solution.mainFeature.imageAlt} fill style={{ objectFit: 'cover' }} className="opacity-80 group-hover:scale-105 transition duration-700 ease-out" />
                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg text-center min-w-[70px]">
                        <div className="text-xl font-bold text-white">{solution.mainFeature.imageOverlayValue}</div>
                        <div className="text-[9px] text-zinc-300 uppercase tracking-wider">{solution.mainFeature.imageOverlayUnit}</div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">{solution.mainFeature.imageOverlayTitle}</h4>
                        {solution.mainFeature.imageOverlaySubtitle && (
                          <p className="text-xs text-zinc-400">{solution.mainFeature.imageOverlaySubtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-6 tracking-tight">
                  {solution.mainFeature.title} <br />
                  <span className="text-zinc-500">{solution.mainFeature.subtitle}</span>
                </h2>
                <p className="text-sm text-zinc-400 mb-8 leading-relaxed">{solution.mainFeature.description1}</p>
                {solution.mainFeature.description2 && (
                  <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                    {solution.mainFeature.description2.split('Llegan a la visita a cerrar, no a informar.')[0]}
                    <span className="text-white font-medium">Llegan a la visita a cerrar, no a informar.</span>
                  </p>
                )}

                <ul className="space-y-4">
                  {solution.mainFeature.points.map((point, idx) => {
                    const PointIcon = point.icon
                    return (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full ${solution.color === 'emerald' ? 'bg-emerald-500/10' :
                          colors.icon || 'bg-zinc-500/10'
                          } flex items-center justify-center mt-0.5`}>
                          <PointIcon className={`w-3.5 h-3.5 ${solution.color === 'emerald' ? 'text-emerald-500' :
                            colors.check
                            }`} />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-white">{point.title}</h4>
                          <p className="text-[11px] text-zinc-500 mt-1">{point.description}</p>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* Features Section */}
      <ScrollReveal>
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-medium text-white mb-3">{solution.features.title}</h2>
            <p className="text-sm text-zinc-400">{solution.features.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {solution.features.items.map((feature, idx) => {
              const featureColor = feature.color || solution.color
              const hoverClassMap: Record<string, string> = {
                orange: 'hover:border-orange-500/30',
                red: 'hover:border-red-500/30',
                rose: 'hover:border-rose-500/30',
                cyan: 'hover:border-cyan-500/30',
                yellow: 'hover:border-yellow-500/30',
                green: 'hover:border-green-500/30',
                emerald: 'hover:border-emerald-500/30',
                blue: 'hover:border-blue-500/30',
                purple: 'hover:border-purple-500/30',
              }
              const iconColorMap: Record<string, string> = {
                orange: 'text-orange-500',
                red: 'text-red-500',
                rose: 'text-rose-500',
                cyan: 'text-cyan-500',
                yellow: 'text-yellow-500',
                green: 'text-green-500',
                emerald: 'text-emerald-500',
                blue: 'text-blue-500',
                purple: 'text-purple-500',
              }

              return (
                <div key={idx} className={`glass-panel p-6 rounded-xl ${hoverClassMap[featureColor] || hoverClassMap[solution.color]} transition-colors group`}>
                  <feature.icon className={`w-8 h-8 ${iconColorMap[featureColor] || iconColorMap[solution.color]} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="text-white text-sm font-semibold mb-2">{feature.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </section>
      </ScrollReveal>

      {/* Comparison Section */}
      <ScrollReveal>
        <section className="py-16 border-t border-white/5">
          <div className="grid lg:grid-cols-2 gap-8 bg-zinc-900/50 rounded-2xl border border-white/5 overflow-hidden">
            <div className="p-8 border-r border-white/5 relative overflow-hidden">
              <div className="absolute top-4 right-4 text-[10px] uppercase font-bold text-red-500 tracking-wider">Antes</div>
              <h3 className="text-white font-medium mb-6">{solution.comparison.before.title}</h3>
              <div className="space-y-4 opacity-50">
                {solution.comparison.before.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-zinc-400">
                    <X className="w-4 h-4 text-red-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-8 relative overflow-hidden ${solution.color === 'orange' ? 'bg-orange-900/5' :
              solution.color === 'red' ? 'bg-red-900/5' :
                solution.color === 'rose' ? 'bg-rose-900/5' :
                  solution.color === 'cyan' ? 'bg-cyan-900/5' :
                    solution.color === 'yellow' ? 'bg-yellow-900/5' :
                      solution.color === 'green' ? 'bg-green-900/5' :
                        solution.color === 'emerald' ? 'bg-emerald-900/5' :
                          'bg-zinc-900/5'
              }`}>
              <div className={`absolute top-4 right-4 text-[10px] uppercase font-bold ${solution.color === 'orange' ? 'text-orange-500' :
                solution.color === 'red' ? 'text-red-500' :
                  solution.color === 'rose' ? 'text-rose-500' :
                    solution.color === 'cyan' ? 'text-cyan-500' :
                      solution.color === 'yellow' ? 'text-yellow-500' :
                        solution.color === 'green' ? 'text-green-500' :
                          solution.color === 'emerald' ? 'text-emerald-500' :
                            'text-zinc-500'
                } tracking-wider`}>Con iAgents</div>
              <h3 className="text-white font-medium mb-6">{solution.comparison.after.title}</h3>
              <div className="space-y-4">
                {solution.comparison.after.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-white">
                    <Check className={`w-4 h-4 ${colors.check}`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20 relative container mx-auto px-4 max-w-lg">
          <div className="bg-zinc-950 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
            <ContactForm formId={params.slug} source={params.slug} />
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
