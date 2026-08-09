---
layout: layouts/writing.njk
permalink: false
translationKey: cross-browser-e2e
contentType: note
title: Porque é que o E2E cross-browser importa
summary: Rascunho — porque a confiança só em Chromium é insuficiente para releases fiáveis.
date: 2026-08-02
tags:
  - writing
  - testing
featured: true
draft: true
---

> **Rascunho.** Esta nota ainda não é pública. Os detalhes técnicos têm de coincidir com a suíte de testes atual antes da publicação.

## Ponto pretendido

Checks verdes num único motor de browser não são o mesmo que confiança de release. Diferenças entre motores ainda aparecem em layout, APIs e jornadas reais.

## Material verificado a usar

- Cobertura Playwright existente em Chromium, Firefox e WebKit
- Execução de CI em cada push
- Verificações semânticas e de acessibilidade já presentes na história de qualidade do portefólio

## Revisão necessária

Re-verificar o comportamento exato dos testes atuais antes de publicar contagens, matriz de browsers ou afirmações de tooling.
