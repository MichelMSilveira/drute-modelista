# Rute Modelista

Portfólio profissional para apresentar a trajetória, a precisão técnica e a atuação de Rute no desenvolvimento de peças de vestuário.

O projeto comunica a transformação de uma ideia em uma peça preparada para produção — do molde à peça — com uma linguagem editorial contemporânea, centrada em modelagem, pilotagem, CAD e desenvolvimento de produto.

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

O site deve apresentar Rute como profissional técnica de desenvolvimento de vestuário, evitando a estética genérica de artesanato ou de loja de roupas. Conteúdos ainda não confirmados devem permanecer identificados como hipóteses até a validação com a cliente.

## Segurança e publicação

Não versionar credenciais, tokens, dados pessoais desnecessários ou configurações privadas. Antes de publicar, revisar as imagens, os contatos e as informações profissionais com a cliente.

## Status

Protótipo V1 em evolução. Consulte [`docs/PROJECT.md`](docs/PROJECT.md) e os documentos em `docs/` antes de alterar posicionamento, conteúdo ou identidade visual.
