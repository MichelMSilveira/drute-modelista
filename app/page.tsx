import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-zinc-900 font-sans selection:bg-zinc-800 selection:text-white">
      {/* Header Minimalista */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#FDFBF7]/95 backdrop-blur-sm border-b border-zinc-200/50">
        <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-zinc-500 font-medium">
          <a href="#sobre" className="hover:text-zinc-900 transition-colors duration-300">Sobre</a>
          <a href="#servicos" className="hover:text-zinc-900 transition-colors duration-300">Serviços</a>
          <a href="#processo" className="hover:text-zinc-900 transition-colors duration-300">Processo</a>
          <a href="#portfolio" className="hover:text-zinc-900 transition-colors duration-300">Portfólio</a>
          <a href="#contato" className="hover:text-zinc-900 transition-colors duration-300">Contato</a>
        </nav>
      </header>

      {/* Hero Editorial Assimétrico */}
      <section className="relative min-h-screen flex items-center pt-24 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Elementos CAD de Fundo - Linhas Técnicas */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Linhas verticais técnicas */}
          <div className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-300/40 to-transparent"></div>
          <div className="absolute right-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-300/40 to-transparent"></div>
          
          {/* Linhas horizontais sutis */}
          <div className="absolute left-0 right-0 top-[15%] h-px bg-gradient-to-r from-transparent via-zinc-300/30 to-transparent"></div>
          <div className="absolute left-0 right-0 bottom-[20%] h-px bg-gradient-to-r from-transparent via-zinc-300/30 to-transparent"></div>

          {/* Linhas pontilhadas diagonais */}
          <div className="absolute top-[10%] left-[5%] w-[90%] h-[90%] border-l border-dashed border-zinc-300/20 -rotate-12"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[85%] h-[85%] border-r border-dashed border-zinc-300/20 rotate-6"></div>

          {/* Medidas técnicas flutuantes */}
          <span className="absolute top-[8%] left-[10%] text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
            30+ ANOS
          </span>
          <span className="absolute bottom-[25%] right-[15%] text-[9px] font-mono text-zinc-400/60 uppercase tracking-widest">
            CAD PRECISION
          </span>

          {/* Elemento visual manequim/molde abstrato */}
          <div className="absolute right-[8%] top-[25%] w-[35%] h-[45%] bg-zinc-100/50 rounded-full border border-zinc-200/30 flex items-center justify-center overflow-hidden">
            {/* Curvas de molde sutis */}
            <svg className="w-full h-full opacity-20" viewBox="0 0 200 280">
              <path d="M100,50 C130,50 160,80 170,120 C180,160 170,200 140,220 C110,240 80,230 60,200 C40,170 50,120 70,80 C90,40 100,50 100,50 Z" fill="none" stroke="#D4C5B0" strokeWidth="1" />
              <path d="M100,60 C125,60 150,85 160,120 C170,155 160,190 135,205 C110,220 85,210 70,185 C55,160 60,125 75,100 C90,75 95,65 100,60 Z" fill="none" stroke="#C4B09A" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Marcações técnicas */}
          <div className="absolute top-[30%] left-[20%] w-12 h-px bg-zinc-300/40"></div>
          <div className="absolute top-[35%] right-[25%] w-8 h-px bg-zinc-300/40 rotate-12"></div>
        </div>

        {/* Conteúdo Principal - Composição Assimétrica */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Coluna Esquerda - Texto Editorial (8 colunas) */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-8">
            
            {/* Logo Principal */}
            <div className="space-y-4">
              <h1 className="text-[120px] md:text-[160px] lg:text-[180px] font-serif font-bold text-zinc-900 leading-none tracking-tighter select-none">
                RUTE
              </h1>
              
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 font-medium pl-4 border-l-2 border-zinc-800">
                Modelista & Piloteira
              </p>

              <div className="flex items-center gap-4 pt-4">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest bg-zinc-100 px-3 py-1.5 border border-zinc-200">
                  30+ ANOS DE EXPERIÊNCIA
                </span>
              </div>

              {/* Conceito Central */}
              <blockquote className="mt-8 max-w-md text-lg leading-relaxed text-zinc-700 font-serif italic border-l-4 border-[#D4C5B0] pl-6 py-2">
                "Do molde à peça."
              </blockquote>
            </div>

          </div>

          {/* Coluna Direita - Elemento Visual (4 colunas) */}
          <div className="lg:col-span-4 flex items-center justify-end">
            {/* Placeholder para imagem/manequim - Composição Gráfica */}
            <div className="relative w-full max-w-[320px] aspect-square bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-sm overflow-hidden border border-zinc-200/50">
              {/* Grid técnico de fundo */}
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, transparent 49%, #e8e4dc 49%, #e8e4dc 51%, transparent 51%)', backgroundSize: '20px 20px', opacity: 0.3 }}></div>
              
              {/* Elemento abstrato de molde */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full p-8">
                  {/* Curvas principais do molde */}
                  <path d="M200,50 C260,50 320,100 340,160 C360,220 340,280 300,320 C260,360 200,370 150,340 C100,310 80,250 90,190 C100,130 130,90 180,70 C200,60 200,50 200,50 Z" fill="none" stroke="#D4C5B0" strokeWidth="2" />
                  <path d="M200,60 C250,60 300,95 315,145 C330,195 310,250 275,275 C240,300 185,295 150,265 C115,235 110,185 120,140 C130,95 160,70 190,60 C195,58 200,60 200,60 Z" fill="none" stroke="#C4B09A" strokeWidth="1.5" />
                  
                  {/* Linhas de costura técnicas */}
                  <path d="M200,80 L200,320" fill="none" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="4 4" />
                  <path d="M160,160 Q200,180 240,160" fill="none" stroke="#D4C5B0" strokeWidth="1" />
                  
                  {/* Medidas técnicas */}
                  <text x="170" y="190" className="fill-zinc-400 text-[8px] font-mono uppercase tracking-widest">32cm</text>
                  <text x="230" y="190" className="fill-zinc-400 text-[8px] font-mono uppercase tracking-widest">45cm</text>
                  
                  {/* Marcador de ponto */}
                  <circle cx="200" cy="200" r="3" fill="#D4C5B0" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Footer do Hero - Minimalista */}
        <footer className="absolute bottom-6 left-6 right-6 flex justify-between items-center text-xs font-mono text-zinc-400 uppercase tracking-widest">
          <span>Scroll para explorar</span>
          <div className="flex gap-6">
            <a href="#sobre" className="hover:text-zinc-800 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-zinc-800 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-zinc-800 transition-colors">Contato</a>
          </div>
        </footer>

      </section>
    </div>
  );
}
