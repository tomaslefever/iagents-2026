'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Building, Car, Activity, ShoppingBag, GraduationCap, Lock } from 'lucide-react'
import LoginButton from './LoginButton'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a')
      if (link && document.getElementById('mobile-menu-sidebar')?.contains(link)) {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false)
          document.body.style.overflow = ''
        }
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [mobileMenuOpen])

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[998] transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu Sidebar */}
      <aside
        id="mobile-menu-sidebar"
        className={`fixed left-0 h-screen w-[85%] max-w-sm bg-zinc-950 border-r border-white/10 z-[1000] transition-transform duration-300 flex flex-col ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-[105%]'
          }`}
      >
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="iAgents" width={24} height={24} className="w-6 h-6" />
            <span className="font-semibold tracking-tight text-white text-sm">iAgents</span>
          </div>
          <button onClick={toggleMobileMenu} className="p-2 text-zinc-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 custom-scroll">
          <nav className="flex flex-col gap-2">
            <MobileSolutionsMenu />

            <Link href="/productos/agentes" className="px-3 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg">
              Agentes
            </Link>

            <Link href="/pricing" className="px-3 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg">
              Pricing
            </Link>

          </nav>
        </div>

        <div className="p-4 border-t border-white/5 flex flex-col gap-3">

          <a href="https://dashboard.iagents.pro" className="w-full bg-white text-zinc-950 py-2.5 rounded-lg text-xs font-bold hover:bg-zinc-200 transition-colors text-center block">
            Empezar
          </a>
        </div>
      </aside>

      {/* Navbar */}
      <header className="flex backdrop-blur-md translate-y-5 items-center justify-between py-4 fixed w-[90%] md:w-[800px] z-[999] bg-zinc-950/80 max-w-[800px] rounded-full border border-white/5 px-4 lg:px-6 overflow-visible left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-btn"
            onClick={toggleMobileMenu}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link href="/" className="flex items-center gap-2 decoration-0">
            <Image src="/logo.png" alt="iAgents" width={20} height={20} />
            <span className="font-semibold text-white text-sm">iAgents</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-500">
          <DesktopSolutionsMenu />

          <Link href="/productos/agentes" className="px-3 py-2 hover:text-white transition-colors">
            Agentes
          </Link>

          <Link href="/pricing" className="px-3 py-2 hover:text-white transition-colors">
            Pricing
          </Link>

        </nav>

        <div className="flex items-center gap-3">

          <div>
            <LoginButton />
          </div>
        </div>
      </header>
    </>
  )
}

function MobileSolutionsMenu() {
  const [open, setOpen] = useState(false)

  return (
    <details className="group/mobile-item" open={open}>
      <summary
        className="flex items-center justify-between px-3 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer list-none select-none"
        onClick={(e) => {
          e.preventDefault()
          setOpen(!open)
        }}
      >
        Soluciones
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </summary>
      <div className="pl-4 pt-1 pb-2 flex flex-col gap-1 border-l border-white/5 ml-3 mt-1">
        <Link href="/soluciones/inmobiliarias" className="px-3 py-2 text-xs text-zinc-400 hover:text-white block rounded-md hover:bg-white/5">
          Inmobiliarias
        </Link>
        <Link href="/soluciones/automotoras" className="px-3 py-2 text-xs text-zinc-400 hover:text-white block rounded-md hover:bg-white/5">
          Automotoras
        </Link>
        <Link href="/soluciones/salud" className="px-3 py-2 text-xs text-zinc-400 hover:text-white block rounded-md hover:bg-white/5">
          Salud
        </Link>
        <Link href="/soluciones/ecommerce" className="px-3 py-2 text-xs text-zinc-400 hover:text-white block rounded-md hover:bg-white/5">
          Ecommerce
        </Link>
        <Link href="/soluciones/educacion" className="px-3 py-2 text-xs text-zinc-400 hover:text-white block rounded-md hover:bg-white/5">
          Educación
        </Link>
        <Link href="/soluciones/enterprise" className="px-3 py-2 text-xs text-zinc-400 hover:text-white block rounded-md hover:bg-white/5">
          Uso Interno
        </Link>
      </div>
    </details>
  )
}

function DesktopSolutionsMenu() {
  return (
    <div className=" group relative px-3 py-2">
      <button className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none">
        Soluciones
        <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
      </button>

      {/* Dropdown Panel */}
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[480px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-1 z-50">
        <div className="backdrop-blur-md bg-zinc-950 border border-white/10 rounded-xl shadow-2xl p-2 overflow-hidden ring-1 ring-white/5 grid grid-cols-2 gap-1">
          <Link
            href="/soluciones/inmobiliarias"
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group/item"
          >
            <div className="w-8 h-8 rounded-md bg-zinc-800/50 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-sky-500/30 group-hover/item:bg-sky-500/10 transition-colors">
              <Building className="w-4 h-4 text-zinc-400 group-hover/item:text-sky-400" />
            </div>
            <div>
              <div className="text-zinc-200 font-medium mb-0.5 group-hover/item:text-white">Inmobiliarias</div>
              <p className="text-[10px] text-zinc-500 leading-snug">Agendamiento de visitas automático.</p>
            </div>
          </Link>
          <Link
            href="/soluciones/automotoras"
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group/item"
          >
            <div className="w-8 h-8 rounded-md bg-zinc-800/50 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-red-500/30 group-hover/item:bg-red-500/10 transition-colors">
              <Car className="w-4 h-4 text-zinc-400 group-hover/item:text-red-400" />
            </div>
            <div>
              <div className="text-zinc-200 font-medium mb-0.5 group-hover/item:text-white">Automotoras</div>
              <p className="text-[10px] text-zinc-500 leading-snug">Agendamiento de test-drives.</p>
            </div>
          </Link>
          <Link
            href="/soluciones/salud"
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group/item"
          >
            <div className="w-8 h-8 rounded-md bg-zinc-800/50 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-teal-500/30 group-hover/item:bg-teal-500/10 transition-colors">
              <Activity className="w-4 h-4 text-zinc-400 group-hover/item:text-teal-400" />
            </div>
            <div>
              <div className="text-zinc-200 font-medium mb-0.5 group-hover/item:text-white">Salud</div>
              <p className="text-[10px] text-zinc-500 leading-snug">Gestión de pacientes y citas médicas.</p>
            </div>
          </Link>
          <Link
            href="/soluciones/ecommerce"
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group/item"
          >
            <div className="w-8 h-8 rounded-md bg-zinc-800/50 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-purple-500/30 group-hover/item:bg-purple-500/10 transition-colors">
              <ShoppingBag className="w-4 h-4 text-zinc-400 group-hover/item:text-purple-400" />
            </div>
            <div>
              <div className="text-zinc-200 font-medium mb-0.5 group-hover/item:text-white">Ecommerce</div>
              <p className="text-[10px] text-zinc-500 leading-snug">Soporte preventa y postventa.</p>
            </div>
          </Link>
          <Link
            href="/soluciones/educacion"
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group/item"
          >
            <div className="w-8 h-8 rounded-md bg-zinc-800/50 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-yellow-500/30 group-hover/item:bg-yellow-500/10 transition-colors">
              <GraduationCap className="w-4 h-4 text-zinc-400 group-hover/item:text-yellow-400" />
            </div>
            <div>
              <div className="text-zinc-200 font-medium mb-0.5 group-hover/item:text-white">Educación</div>
              <p className="text-[10px] text-zinc-500 leading-snug">Captación de alumnos y coaching.</p>
            </div>
          </Link>
          <Link
            href="/soluciones/enterprise"
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group/item"
          >
            <div className="w-8 h-8 rounded-md bg-zinc-800/50 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:border-orange-500/30 group-hover/item:bg-orange-500/10 transition-colors">
              <Lock className="w-4 h-4 text-zinc-400 group-hover/item:text-orange-400" />
            </div>
            <div>
              <div className="text-zinc-200 font-medium mb-0.5 group-hover/item:text-white">Uso Interno</div>
              <p className="text-[10px] text-zinc-500 leading-snug">Automatización de procesos HR/IT.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

