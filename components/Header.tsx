import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-off-white/95 backdrop-blur-sm border-b border-graphite/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold tracking-tight text-black">
              RUTE
            </span>
            <span className="hidden sm:inline-block ml-2 text-sm text-graphite">
              Modelista & Piloteira
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="#experiencia" className="text-sm font-medium text-graphite hover:text-black transition-colors">
              Experiência
            </Link>
            <Link href="#servicos" className="text-sm font-medium text-graphite hover:text-black transition-colors">
              Serviços
            </Link>
            <Link href="#processo" className="text-sm font-medium text-graphite hover:text-black transition-colors">
              Processo
            </Link>
            <Link href="#portfolio" className="text-sm font-medium text-graphite hover:text-black transition-colors">
              Portfólio
            </Link>
            <Link href="#contato" className="text-sm font-medium text-graphite hover:text-black transition-colors">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-graphite hover:bg-beige/50 focus:outline-none focus:ring-2 focus:ring-dourado/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-off-white border-b border-graphite/10 shadow-lg">
              <nav className="flex flex-col px-4 py-2 space-y-1">
                <Link 
                  href="#experiencia" 
                  className="text-sm font-medium text-graphite hover:text-black py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experiência
                </Link>
                <Link 
                  href="#servicos" 
                  className="text-sm font-medium text-graphite hover:text-black py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Serviços
                </Link>
                <Link 
                  href="#processo" 
                  className="text-sm font-medium text-graphite hover:text-black py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Processo
                </Link>
                <Link 
                  href="#portfolio" 
                  className="text-sm font-medium text-graphite hover:text-black py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfólio
                </Link>
                <Link 
                  href="#contato" 
                  className="text-sm font-medium text-graphite hover:text-black py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contato
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}