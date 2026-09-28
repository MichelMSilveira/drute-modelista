# D’Rute Modelista

Portfólio conceitual para apresentar a trajetória, a precisão técnica e a atuação da D’Rute no desenvolvimento de peças de vestuário.

O projeto comunica, em caráter exploratório, a transformação de uma ideia em uma peça preparada para produção — do molde à peça — com uma linguagem editorial contemporânea, centrada em modelagem, pilotagem, CAD e desenvolvimento de produto.

O conteúdo atual nasceu de uma conversa inicial e foi criado para contextualizar a cliente sobre possibilidades de presença digital e testar se a direção visual conversa com seus gostos. Ainda não representa uma identidade final aprovada.

## Stack

- Next.js 16 com App Router;
- React 19 e TypeScript;
- Tailwind CSS 4 via PostCSS;
- imagens de apresentação em `public/images/`.

## Executar localmente

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Para validar a versão de produção:

```bash
npm run lint
npm run build
npm start
```

## Organização

- `app/`: página, layout, fontes e estilos globais;
- `components/`: seções reutilizáveis da apresentação;
- `public/images/`: imagens do atelier e do portfólio;
- `docs/`: discovery, decisões, contexto e métricas;
- `docs/PROJECT.md`: fonte de verdade sobre posicionamento e escopo.

## Direção do produto

O site deve apresentar D’Rute como profissional técnica de desenvolvimento de vestuário, evitando a estética genérica de artesanato ou de loja de roupas. Conteúdos ainda não confirmados devem permanecer identificados como hipóteses até a validação com a cliente.

## Próximas etapas com a cliente

- acolher a cliente e entender sua história, repertório e expectativas;
- apresentar a proposta inicial e ouvir o que faz ou não sentido para ela;
- oferecer assessoria para posicionamento, conteúdo, imagens e presença digital;
- revisar a direção visual e os textos a partir desse retorno;
- somente então consolidar a identidade e publicar a versão definitiva.

## Segurança e publicação

Não versionar credenciais, tokens, dados pessoais desnecessários ou configurações privadas. Antes de publicar, revisar as imagens, os contatos e as informações profissionais com a cliente. O workflow em `.github/workflows/deploy.yml` foi convertido em **validação sem publicação**; o antigo envio de `.next` para GitHub Pages falhava e não era um artefato de exportação estática. Publicação futura exige aceite da cliente, escolha de hospedagem compatível com os recursos usados e verificação da URL final. Configurações de GitHub Pages da conta devem ser revisadas separadamente, pois este arquivo não controla uma publicação nativa habilitada nas configurações do repositório.

## Status

Proposta exploratória V1 em evolução. A cliente ainda não conseguiu participar de uma etapa de validação; acolhimento e assessoria estão pendentes. Consulte [`docs/PROJECT.md`](docs/PROJECT.md) e os documentos em `docs/` antes de alterar posicionamento, conteúdo ou identidade visual.
