# Métricas do Projeto — Rute Modelista

## Objetivo

Este documento acompanha a evolução, qualidade e resultados do projeto Rute Modelista.

As métricas devem refletir necessidades reais do projeto.

Não criar KPIs relacionados a funcionalidades que não existem.

---

## 1. Progresso do Projeto

| Etapa | Status | Observação |
|---|---|---|
| Contexto inicial | Concluído | Informações iniciais fornecidas por Michel |
| Direção visual | Concluída | Editorial + moda técnica + CAD |
| Conceito visual | Concluído | "Do molde à peça" |
| Estrutura da Home | Concluída | Estrutura V1 definida |
| Documentação inicial | Concluída | PROJECT, DISCOVERY, DECISIONS e METRICS |
| Discovery com Rute | Pendente | Ainda não realizado |
| Identidade visual definitiva | Pendente | Logo poderá ser refinada |
| Implementação da Home | Pendente | |
| Responsividade | Pendente | |
| Conteúdo real | Pendente | Depende de informações da cliente |
| Portfólio real | Pendente | Depende de materiais da cliente |
| Testes | Pendente | |
| GitHub | Pendente | |
| Deploy | Pendente | |

---

## 2. Métricas de Desenvolvimento

Registrar quando possível:

- data de início;
- etapas concluídas;
- principais retrabalhos;
- problemas encontrados;
- decisões que alteraram implementação;
- mudanças relevantes de escopo.

### Início

22/08/2026

### Stack Atual

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- App Router

---

## 3. Qualidade Técnica

### Performance

Objetivo inicial:

- carregamento rápido;
- imagens otimizadas;
- evitar JavaScript desnecessário;
- evitar dependências sem necessidade;
- boa experiência em dispositivos móveis.

### Core Web Vitals

Após implementação, avaliar:

- LCP;
- INP;
- CLS.

Utilizar Lighthouse e ferramentas do navegador para avaliação.

Não definir metas artificiais antes da primeira medição.

---

## 4. Responsividade

Testar pelo menos:

- celular;
- tablet;
- notebook;
- desktop.

Verificar:

- navegação;
- tipografia;
- imagens;
- Hero;
- portfólio;
- botões;
- contato;
- ausência de overflow horizontal.

---

## 5. Acessibilidade

Objetivos:

- HTML semântico;
- contraste adequado;
- navegação por teclado;
- textos alternativos para imagens relevantes;
- hierarquia correta de headings;
- estados de foco visíveis.

Buscar conformidade razoável com WCAG AA.

---

## 6. SEO Inicial

Verificar antes do deploy:

- title;
- description;
- Open Graph;
- headings;
- textos indexáveis;
- alt das imagens;
- favicon;
- sitemap quando necessário;
- robots.txt quando necessário.

---

## 7. Conteúdo

Antes da versão definitiva, verificar:

- informações profissionais confirmadas;
- serviços confirmados;
- ortografia;
- contatos;
- materiais reais do portfólio;
- nenhuma informação fictícia apresentada como fato.

---

## 8. Métricas de Negócio

Ainda não definidas.

Após o discovery com Rute, determinar qual é o objetivo comercial real do site.

Possibilidades futuras podem incluir:

- contatos recebidos;
- cliques no WhatsApp;
- solicitações de orçamento;
- visualizações do portfólio.

Esses itens NÃO são KPIs oficiais até validação do objetivo com a cliente.

---

## 9. Definição de V1

A primeira versão poderá ser considerada funcional quando possuir:

- [ ] Home completa
- [ ] identidade visual consistente
- [ ] experiência profissional apresentada
- [ ] serviços provisórios claramente tratados
- [ ] seção de processo
- [ ] estrutura de portfólio
- [ ] contato
- [ ] responsividade
- [ ] ausência de erros críticos
- [ ] boa performance inicial
- [ ] deploy funcional

---

## 10. Pós-Discovery

Depois da entrevista com Rute:

- revisar PROJECT.md;
- atualizar DISCOVERY.md;
- registrar novas decisões;
- revisar textos do site;
- revisar serviços;
- revisar processo;
- substituir hipóteses por informações confirmadas;
- revisar métricas de negócio.

---

## Regra

Métricas devem acompanhar o projeto real.

Não adicionar métricas de:

- usuários cadastrados;
- autenticação;
- API;
- banco de dados;
- criação de conteúdo por usuários;
- dashboards;
- funcionalidades inexistentes,

a menos que essas funcionalidades sejam posteriormente aprovadas e documentadas.