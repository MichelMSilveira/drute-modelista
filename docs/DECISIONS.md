# Decisões do Projeto — Rute Modelista

Este arquivo registra decisões efetivamente tomadas para o projeto.

Hipóteses e ideias ainda não aprovadas não devem ser registradas como decisões.

---

## 2026-08-22 — Início do Projeto

### 1. Produto Inicial

**Decisão:** desenvolver inicialmente um site profissional para Rute.

A primeira versão será uma landing page/site institucional com foco em:

- apresentação profissional;
- experiência;
- serviços;
- processo;
- portfólio;
- contato.

Não existe neste momento necessidade definida de aplicação web complexa.

---

### 2. Desenvolvimento Antes do Discovery Completo

**Decisão:** iniciar a V1 antes da entrevista completa com Rute.

**Motivo:** o projeto poderá ser reconstruído ou ajustado posteriormente sem problema.

Informações ainda não confirmadas devem permanecer identificadas como hipóteses.

---

### 3. Posicionamento

**Decisão:** apresentar Rute como:

**Modelista & Piloteira**

com mais de 30 anos de experiência no setor de vestuário.

O posicionamento deve valorizar:

- experiência;
- conhecimento técnico;
- desenvolvimento de vestuário;
- precisão;
- modelagem;
- pilotagem;
- utilização de CAD.

Evitar estética ou comunicação de costura artesanal genérica.

---

### 4. Conceito Criativo

**Decisão:**

**Do molde à peça.**

O conceito deverá orientar tanto a comunicação quanto elementos visuais do site.

---

### 5. Direção Visual

**Decisão:** utilizar linguagem editorial contemporânea combinada com elementos técnicos de modelagem.

Referências conceituais:

- editorial de moda;
- moldes;
- linhas técnicas;
- medidas;
- CAD;
- tecidos;
- peça-piloto;
- peça final.

Paleta inicial:

- off-white;
- preto;
- grafite;
- bege;
- dourado suave.

---

### 6. Identidade Visual

**Decisão:** utilizar a identidade/logo existente de Rute como referência, permitindo ajustes para harmonizá-la com a nova direção editorial.

Não é necessário preservar rigidamente a identidade atual caso ajustes melhorem a coerência visual.

---

### 7. Stack Tecnológica

**Decisão:** utilizar a estrutura que já foi criada no projeto:

- Next.js 16;
- React;
- TypeScript;
- Tailwind CSS;
- App Router;
- Turbopack durante desenvolvimento.

Não substituir essa stack sem uma necessidade documentada.

---

### 8. Arquitetura Inicial

**Decisão:** manter arquitetura simples adequada a um site institucional.

Estrutura inicial da Home:

1. Header
2. Hero
3. Experiência
4. Serviços
5. Processo
6. Sobre
7. Portfólio
8. Diferenciais
9. Contato
10. Footer

Componentização deve ser utilizada quando melhorar organização, manutenção ou reutilização.

Evitar complexidade arquitetural sem necessidade real.

---

### 9. Backend e Banco de Dados

**Decisão:** não utilizar backend próprio ou banco de dados neste estágio.

Não existe atualmente requisito para:

- Express;
- SQLite;
- autenticação;
- usuários;
- login;
- API própria;
- gerenciamento de estado global complexo.

Esses recursos somente poderão ser adicionados quando surgir uma necessidade real.

---

### 10. Conteúdo

**Decisão:** nenhuma informação profissional não confirmada poderá ser inventada para preencher o site.

Não inventar:

- clientes;
- marcas;
- empresas;
- softwares CAD específicos;
- especializações;
- certificações;
- processos;
- capacidades produtivas.

Conteúdo provisório deverá permanecer compatível com as informações disponíveis.

---

### 11. Portfólio

**Decisão:** preparar a estrutura visual do portfólio mesmo antes de possuirmos o material definitivo.

Posteriormente poderão ser utilizados materiais reais como:

- peças;
- moldes;
- telas CAD;
- peças-piloto;
- detalhes técnicos;
- registros do processo.

Não utilizar trabalhos fictícios como se fossem trabalhos realizados por Rute.

---

### 12. Fluxo de Desenvolvimento

**Decisão:** utilizar documentação persistente como fonte de contexto para as IAs que trabalham no projeto.

Fluxo:

DISCOVERY  
→ DOCUMENTAÇÃO  
→ DECISÃO  
→ IMPLEMENTAÇÃO  
→ TESTE  
→ COMMIT

`PROJECT.md` representa o contexto principal atual.

`DISCOVERY.md` registra conhecimento obtido sobre Rute e seu trabalho.

`DECISIONS.md` registra decisões efetivamente aprovadas.

`METRICS.md` registra evolução e métricas do projeto.

---

## Decisões Pendentes

Ainda precisam ser definidas:

- logo definitiva;
- tipografias definitivas;
- fotografias reais;
- conteúdo definitivo do portfólio;
- dados de contato;
- domínio;
- serviços confirmados por Rute;
- processo profissional real de Rute;
- necessidade futura de outras páginas.

Essas pendências não bloqueiam o desenvolvimento da V1.