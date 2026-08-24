export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2EA]/35 px-6 pb-24 pt-28 md:px-10 lg:px-16">
      {/* Fundo técnico sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7%] top-0 h-full w-px bg-black/5" />
        <div className="absolute right-[10%] top-0 h-full w-px bg-black/5" />
        <div className="absolute left-0 top-[22%] h-px w-full bg-black/5" />
        <div className="absolute left-0 bottom-[18%] h-px w-full bg-black/5" />
        <div className="absolute left-[3%] bottom-[10%] h-36 w-36 rounded-full border border-[#D8C7AE]/50" />
        <div className="absolute right-[7%] top-[9%] h-52 w-52 rounded-full border border-[#D8C7AE]/50" />
      </div>

      <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
        {/* Conteúdo principal */}
        <div className="max-w-2xl">
          <span className="mb-6 inline-flex border border-[#D8C7AE] bg-[#FBF8F2]/70 px-4 py-2 text-[10px] uppercase tracking-[0.36em] text-[#8F785D]">
            Modelagem · Pilotagem · Desenvolvimento
          </span>

          <h1 className="font-serif text-[4.5rem] leading-[0.88] tracking-[-0.06em] text-[#111111] sm:text-[5.8rem] lg:text-[7.8rem]">
            D&apos;Rute
            <span className="mt-3 block text-[2.1rem] uppercase tracking-[0.38em] text-[#9A7B55] sm:text-[2.7rem] lg:text-[3.2rem]">
              Atelier
            </span>
          </h1>

          <div className="mt-7 flex items-center gap-4">
            <div className="h-11 w-px bg-[#B99A6A]" />
            <p className="text-sm uppercase tracking-[0.32em] text-[#1F2937]">
              Modelista &amp; Piloteira
            </p>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#374151]">
            Um atelier contemporâneo que une mais de 30 anos de experiência,
            cuidado no caimento, capricho nos detalhes e ferramentas profissionais
            para desenvolvimento de peças, pilotagem e produção.
          </p>

          <blockquote className="mt-8 border-l-2 border-[#B99A6A] py-2 pl-5 font-serif text-2xl italic leading-relaxed text-[#1F2937]">
            “Do molde à peça, com técnica, atenção e propósito.”
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="bg-[#111111] px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-[#2A2A2A]"
            >
              Conheça meu trabalho
            </a>

            <a
              href="#contato"
              className="border border-[#B99A6A] bg-[#F7F2EA]/60 px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#7A5D3A] transition hover:bg-[#EFE5D7]"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-black/10 pt-6">
            <div>
              <p className="font-serif text-3xl text-[#111111]">30+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#6B7280]">
                anos de experiência
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl text-[#111111]">Caimento</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#6B7280]">
                atenção aos detalhes
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl text-[#111111]">Produção</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#6B7280]">
                desenvolvimento profissional
              </p>
            </div>
          </div>
        </div>

        {/* Painel editorial translúcido */}
        <div className="relative">
          <div className="grid gap-5 md:grid-cols-[1.18fr_0.82fr]">
            <div className="relative min-h-[560px] overflow-hidden border border-[#D8C7AE]/70 bg-[#FBF8F3]/42 p-8 shadow-[0_34px_90px_rgba(0,0,0,0.08)] backdrop-blur-[2px]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(185,154,106,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(185,154,106,0.12)_1px,transparent_1px)] bg-[size:34px_34px]" />
              <div className="absolute inset-6 border border-[#B99A6A]/25" />

              <div className="relative flex h-full min-h-[500px] flex-col justify-between">
                <div>
                  <p className="inline-flex rounded-full border border-[#D8C7AE] bg-[#F7F2EA]/80 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#7A5D3A]">
                    Atelier técnico
                  </p>

                  <p className="mt-10 max-w-md font-serif text-4xl leading-tight text-[#111111]">
                    Técnica de modelagem, olhar de atelier e cuidado real no
                    desenvolvimento da peça.
                  </p>
                </div>

                <div className="border-t border-[#B99A6A]/30 pt-6">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#8F785D]">
                    D&apos;Rute Atelier
                  </p>

                  <p className="mt-3 max-w-sm text-base leading-7 text-[#4B5563]">
                    Experiência artesanal, processo técnico e ferramentas
                    profissionais para transformar ideia, molde e peça piloto em
                    desenvolvimento real.
                  </p>
                </div>
              </div>
            </div>

            {/* Cards laterais */}
            <div className="grid gap-5">
              <div className="relative min-h-[190px] overflow-hidden border border-[#D8C7AE]/75 bg-[#F2EADF]/56 p-6 backdrop-blur-[2px]">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#C7B59B]" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8F785D]">
                  Modelagem &amp; caimento
                </p>
                <p className="mt-5 font-serif text-2xl leading-snug text-[#111111]">
                  Precisão técnica para interpretar, ajustar e construir peças.
                </p>
              </div>

              <div className="relative min-h-[220px] overflow-hidden border border-[#D8C7AE]/75 bg-[#FBF8F3]/56 p-6 text-[#111111] backdrop-blur-[2px]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(185,154,106,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(185,154,106,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />

                <p className="relative text-[10px] uppercase tracking-[0.3em] text-[#8F785D]">
                  Ferramentas profissionais
                </p>

                <p className="relative mt-5 font-serif text-2xl leading-snug text-[#111111]">
                  Modelagem, pilotagem, CAD e plotagem como apoio técnico ao
                  desenvolvimento de peças.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}