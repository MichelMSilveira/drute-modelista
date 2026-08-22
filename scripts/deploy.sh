#!/bin/bash

# Script de deploy para GitHub Pages
# Use: npm run deploy

echo "🚀 Preparando deploy..."

# Verifica se está no modo de produção
if [ "$NODE_ENV" != "production" ]; then
  echo "⚠️  Executando em modo de desenvolvimento. Para deploy, use: npm run build"
fi

# Build do projeto
npm run build

echo "✅ Build concluído!"
echo "📦 Arquivos prontos para deploy em: .next/"
echo ""
echo "🔗 Para hospedar no GitHub Pages:"
echo "1. Crie um repositório no GitHub"
echo "2. Faça commit dos arquivos"
echo "3. Ative o GitHub Pages nas configurações do repositório"
echo "4. Acesse: https://SEUS-USER.github.io/SEU-REPO/"
