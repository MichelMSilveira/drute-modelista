export default function Experiencia() {
  const timeline = [
    { year: "2015", title: "Início da jornada", desc: "Comecei a trabalhar com modelagem técnica e pilotagem" },
    { year: "2018", title: "Especialização em CAD", desc: "Implementação de sistemas de modelagem digital" },
    { year: "2020", title: "Expansão digital", desc: "Adaptação para o mercado digital e e-commerce" },
    { year: "2023", title: "Inovação contínua", desc: "Implementação de novas tecnologias de modelagem 3D" }
  ];

  return (
    <section id="experiencia" className="py-24 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-dourado/10 text-dourado rounded-full text-sm font-medium tracking-wider uppercase mb-4">
            Minha História
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            30+ Anos de Experiência
          </h2>
          <p className="text-xl text-graphite/70 max-w-3xl mx-auto">
            Do molde à peça - Acompanhei a evolução da moda técnica e pilotoaria, 
            transformando desenhos em peças reais com precisão e criatividade.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha central */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-graphite/20" />

          {/* Itens da timeline */}
          {timeline.map((item, index) => (
            <div 
              key={item.year}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Ponto na linha */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-dourado rounded-full -translate-x-2 mt-1.5" />

              {/* Conteúdo */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:text-right' : 'md:text-left'
              }`}>
                <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-sm font-bold mb-2">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-graphite/70">{item.desc}</p>
              </div>

              {/* Espaço vazio para o lado oposto */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { value: "30+", label: "Anos de Experiência" },
            { value: "500+", label: "Projetos Realizados" },
            { value: "100%", label: "Satisfação do Cliente" },
            { value: "24/7", label: "Suporte Dedicado" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">{stat.value}</div>
              <div className="text-sm text-graphite/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}