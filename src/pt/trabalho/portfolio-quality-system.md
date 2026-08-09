---
layout: layouts/case-study.njk
tags:
  - case-study
permalink: /pt/trabalho/sistema-qualidade-portfolio/
translationKey: portfolio-quality-system
projectKey: portfolio-quality-system
contentType: case-study
title: Sistema de qualidade do portefólio
summary: Um site pessoal tratado como software de produção — bilingue, testável e continuamente verificado.
featured: true
sanitized: false
order: 3
draft: false
---

## Visão geral e papel

Este portefólio é produto e prova ao mesmo tempo. Construí o site original de página única em HTML, CSS e JavaScript vanilla, e estou a redesenhá-lo como uma publicação estática com várias páginas geradas pelo Eleventy. O objetivo mantém-se: mostrar como trabalho em Quality Engineering sem depender de informação confidencial de empregadores.

## Problema e utilizadores

Os portefólios costumam mostrar capturas de projetos e esconder a forma de trabalhar. Quem está a contratar ou a avaliar o trabalho não consegue perceber a disciplina de testes, os hábitos de CI, o cuidado com a acessibilidade ou o critério editorial apenas através de uma página inicial decorativa.

## Constrangimentos e riscos

- O site tem de permanecer útil sem renderização client-side.
- O conteúdo deve manter-se bilingue sem substituição de texto em tempo de execução nas páginas indexáveis.
- As afirmações precisam de sinais de prova verificáveis; métricas de vaidade e resultados sem suporte estão fora de âmbito.
- O site público atual permanece disponível até ao redesenho passar os seus critérios de qualidade.

## Decisões principais

- **Estático por omissão** — o Eleventy gera HTML a partir de layouts partilhados, dados estruturados de projetos e Markdown.
- **CSS vanilla e JavaScript no browser**; sem framework de aplicação no cliente.
- **Arquitetura de informação editorial** — Início, Trabalho, Escrita, Sobre — em vez de uma única página-currículo.
- **Hooks `data-test`, Vitest e Playwright** em Chromium, Firefox e WebKit no site existente, com CI em cada push.
- **Sinais de prova sem contagens fixas de testes** no redesenho até os números serem novamente gerados e verificados.

## Estratégia de qualidade

- Landmarks semânticos, ordem dos títulos, acesso por teclado, foco visível e contraste WCAG 2.2 AA como requisitos para publicação.
- Testes unitários para comportamento relevante no browser; cobertura Playwright em três motores.
- Verificações de acessibilidade dentro da cobertura end-to-end automatizada.
- Suporte a movimento reduzido e layouts responsivos que se adaptam sem carrosséis.

## Resultado e evidência

O site anterior de página única atingiu Lighthouse 100 (verificado no commit `e38ea2e`) e corre verificações unitárias e end-to-end cross-browser no GitHub Actions. O redesenho preserva essa barra de qualidade ao deslocar o produto para uma publicação curada.

- Código: [my-creations/portfolio](https://github.com/my-creations/portfolio)
- Site: [my-creations.github.io/portfolio](https://my-creations.github.io/portfolio/)

## Lições e próximos passos

- Um portefólio pode mostrar especialização pela forma como é construído, não apenas pelo que apresenta.
- A profundidade ganha ao volume: poucos casos de estudo honestos valem mais do que um grande carrossel indiferenciado.
- A seguir: terminar os rascunhos de Escrita, afinar o acabamento visual e só mudar o alojamento depois de os critérios de qualidade das várias páginas estarem cumpridos.
