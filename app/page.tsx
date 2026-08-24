import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-zinc-900 font-sans selection:bg-zinc-800 selection:text-white">

      {/* Header Minimalista */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-zinc-200/50">
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-zinc-500 font-medium">
          <a href="#sobre" className="hover:text-zinc-900 transition-colors">
            Sobre
          </a>

          <a href="#servicos" className="hover:text-zinc-900 transition-colors">
            Serviços
          </a>

          <a href="#processo" className="hover:text-zinc-900 transition-colors">
            Processo
          </a>

          <a href="#portfolio" className="hover:text-zinc-900 transition-colors">
            Portfólio
          </a>

          <a href="#contato" className="hover:text-zinc-900 transition-colors">
            Contato
          </a>
        </nav>
      </header>

      {/* Hero Principal */}
      <Hero />

      {/* Footer do Hero */}
      <footer className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-xs font-mono text-zinc-400 uppercase tracking-widest">
        <span>Scroll para explorar</span>

        <div className="flex gap-6">
          <a href="#sobre" className="hover:text-zinc-800 transition-colors">
            Sobre
          </a>

          <a href="#servicos" className="hover:text-zinc-800 transition-colors">
            Serviços
          </a>

          <a href="#contato" className="hover:text-zinc-800 transition-colors">
            Contato
          </a>
        </div>
      </footer>

    </div>
  );
}