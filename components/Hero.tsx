export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background com elementos CAD sutis */}
      <div className="absolute inset-0 opacity-10">
        {/* Linhas de grade estilo CAD */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Elementos decorativos estilo molde/CAD */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-dashed border-white/20 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 border border-dotted border-white/10 rounded-full" />

      {/* Conteúdo principal */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo RUTE - Maior hierarquia */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-2 animate-fade-in-up">
          RUTE
        </h1>

        {/* Subtítulo principal */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-bege mb-4 animate-fade-in-up delay-100">
          MODELISTA & PILOTEIRA
        </h2>

        {/* Experiência */}
        <p className="text-xl md:text-2xl text-graphite/80 mb-8 font-medium animate-fade-in-up delay-200">
          30+ ANOS DE EXPERIÊNCIA
        </p>

        {/* Conceito visual */}
        <div className="inline-block px-6 py-3 border border-dourado/40 rounded-full mb-12 animate-fade-in-up delay-300">
          <span className="text-dourado/90 text-sm tracking-widest uppercase">
            Do molde à peça
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
          <a 
            href="#portfolio" 
            className="px-8 py-4 bg-black text-white font-medium rounded hover:bg-graphite transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-dourado/50"
          >
            Ver Portfólio
          </a>
          <a 
            href="#contato" 
            className="px-8 py-4 border border-white/30 text-white font-medium rounded hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-dourado/50"
          >
            Fale Comigo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}