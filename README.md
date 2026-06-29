# Store Pro

Projeto base de loja virtual construído com Next.js, React e TypeScript.

## Visão Geral

No estado atual, o projeto contém:

- Estrutura App Router do Next.js
- Página inicial simples em português
- Estilização global com Tailwind CSS v4
- Fonte Roboto via `next/font/google`

## Tecnologias

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint 9

## Estrutura Atual

```text
src/
	app/
		globals.css
		layout.tsx
		page.tsx
public/
	images/
		sample-products/
```

## Scripts

```bash
npm run dev    # executa em modo desenvolvimento
npm run build  # gera build de produção
npm run start  # inicia aplicação em produção
npm run lint   # executa lint
```

## Como Executar Localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse no navegador:

```text
http://localhost:3000
```

## Observações do Projeto

- O layout raiz está configurado com idioma `pt-BR`.
- O título padrão da aplicação é `Store Pro`.
- A página inicial atual exibe: `Bem-vindo à Store Pro`.

## Restrição de Uso

Este projeto é destinado apenas para estudo, testes e desenvolvimento interno.

É proibido comercializar este projeto, no todo ou em parte, incluindo venda, revenda, sublicenciamento, distribuição paga ou qualquer uso com finalidade comercial sem autorização formal e expressa do autor.
