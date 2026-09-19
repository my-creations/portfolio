---
layout: layouts/case-study.njk
tags:
  - case-study
permalink: /pt/trabalho/pkd-digest/
translationKey: pkd-digest
projectKey: pkd-digest
contentType: case-study
title: PKD Digest
summary: Digest bilingue semanal sobre doença renal poliquística — linguagem simples para doentes e famílias, notas clínicas para profissionais de saúde.
featured: true
sanitized: false
order: 4
draft: false
---

## Visão geral e papel

O PKD Digest (Digest DRP) é um digest bilingue (EN+PT) com curadoria semanal sobre doença renal poliquística — doença renal poliquística em geral, não apenas ADPKD. Eu desenho, construo e faço a curadoria: modelo de conteúdo, pipeline de publicação e o ciclo semanal de revisão.

## Problema e utilizadores

Dois públicos, uma publicação: doentes e famílias que precisam de linguagem simples, e clínicos que precisam de precisão. Listas de artigos em bruto não servem nenhum — e conteúdo de saúde nunca pode confundir-se com aconselhamento médico.

## Constrangimentos e riscos

- Cada item tem enquadramento duplo: um resumo em linguagem simples mais uma nota clínica, nas duas línguas.
- Nada é publicado sem revisão humana; as listas assistidas ficam em rascunho até uma pessoa decidir.
- Fronteira explícita: apenas curadoria educacional, não aconselhamento médico.
- Privacidade por omissão: sem analytics na v1.

## Decisões principais

- **Publicação estática em Eleventy 3 + Bun**, seguindo os mesmos padrões deste portefólio: prefixo de caminho, rotas por locale e validação de conteúdo no front-matter.
- **Modelo de conteúdo de um ficheiro**: cada cartão em `src/content/items/*.md` contém `summary.en/pt` e `clinicalNote.en/pt`, com `status` (`draft`/`published`) e etiquetas de edição.
- **Curadoria assistida, nunca automática**: um script de shortlist vai buscar candidatos públicos ao PubMed como rascunhos, e um passo semanal de revisão promove apenas os escolhidos — com enquadramento EN+PT completo e `status: published`.
- **Digest, cronologia, guias, glossário e pesquisa** como superfícies públicas, nas duas línguas.

## Estratégia de qualidade

- Validação de conteúdo no front-matter em cada build.
- Testes unitários Vitest mais verificações end-to-end Playwright, incluindo acessibilidade com axe.
- Lighthouse CI sobre o site gerado.
- oxlint e oxfmt com hooks de pre-commit, além de CI no GitHub Actions e deploy em Pages em cada push para `main`.

## Resultado e evidência

Um digest bilingue publicado com um ciclo de publicação controlado por revisão. Código e demo públicos:

- Código: [my-creations/pkd-digest](https://github.com/my-creations/pkd-digest)
- Demo: [my-creations.github.io/pkd-digest](https://my-creations.github.io/pkd-digest/)

## Lições e próximos passos

- O enquadramento duplo obriga à honestidade: se a versão em linguagem simples não consegue ser escrita, o item não está pronto.
- Manter a automação do lado do rascunho preserva a confiança — a decisão humana de publicar é o produto.
