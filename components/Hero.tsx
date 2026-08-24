export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2EA] px-6 pb-24 pt-28 md:px-10 lg:px-16">
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

          <p className="mt-8 max-w-xl text-lg leading-8 text-[#4B5563]">
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
              className="border border-[#B99A6A] px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] text-[#7A5D3A] transition hover:bg-[#EFE5D7]"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-black/10 pt-6">
            <div>
              <p className="font-serif text-3xl text-[#111111]">30+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#8B8B8B]">
                anos de experiência
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl text-[#111111]">Caimento</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#8B8B8B]">
                atenção aos detalhes
              </p>
            </div>

            <div>
              <p className="font-serif text-3xl text-[#111111]">Produção</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#8B8B8B]">
                desenvolvimento profissional
              </p>
            </div>
          </div>
        </div>

        {/* Composição visual */}
        <div className="relative">
          <div className="grid gap-5 md:grid-cols-[1.18fr_0.82fr]">
            {/* Bloco visual principal com imagem real */}
            <div className="relative min-h-[560px] overflow-hidden border border-[#D8C7AE] bg-[#E7DDCF] shadow-[0_34px_90px_rgba(0,0,0,0.08)]">
              <img
                src="/images/atelier-hero.png"
                alt="Atelier de modelagem com manequim, moldes e tecidos"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/45 via-[#111111]/12 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/35 via-transparent to-[#F7F2EA]/10" />
              <div className="absolute inset-6 border border-[#F7F2EA]/35" />

              <div className="absolute left-6 top-6 rounded-full border border-[#F7F2EA]/50 bg-[#F7F2EA]/75 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-[#7A5D3A] backdrop-blur-sm">
                Atelier real
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#EADFCC]">
                  D&apos;Rute Atelier
                </p>

                <p className="mt-2 max-w-sm font-serif text-3xl leading-tight text-white">
                  Experiência, técnica e cuidado em cada etapa da peça.
                </p>
              </div>
            </div>

            {/* Cards laterais */}
            <div className="grid gap-5">
              <div className="relative min-h-[190px] overflow-hidden border border-[#D8C7AE] bg-[#F2EADF] p-6">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#C7B59B]" />
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#8F785D]">
                  Modelagem &amp; caimento
                </p>
                <p className="mt-5 font-serif text-2xl leading-snug text-[#111111]">
                  Precisão técnica para interpretar, ajustar e construir peças.
                </p>
              </div>

              <div className="relative min-h-[220px] overflow-hidden border border-[#D8C7AE] bg-[#FBF8F3] p-6 text-[#111111]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(185,154,106,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(185,154,106,0.12)_1px,transparent_1px)] bg-[size:24px_24px]" />

                <p className="relative text-[10px] uppercase tracking-[0.3em] text-[#8F785D]">
                  Ferramentas profissionais
                </p>

                <p className="relative mt-5 font-serif text-2xl leading-snug text-[#111111]">
                  Modelagem, pilotagem, CAD e plotagem como apoio ao
                  desenvolvimento e à produção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}