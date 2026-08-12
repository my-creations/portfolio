---
layout: layouts/writing.njk
permalink: /pt/escrita/quality-engineering-como-funcionalidade-de-produto/
translationKey: quality-as-product-feature
contentType: article
title: Quality Engineering como funcionalidade de produto
summary: Penso a qualidade como uma parte do produto que o utilizador sente, não como um check no fim do ciclo.
date: 2026-08-01
tags:
  - writing
  - quality-engineering
featured: true
draft: false
---

Eu também já tratei a qualidade como o último passo.

"Fiz feature → correr tests → deploy."

Só que isso funciona enquanto tudo dá certo.
Depois aparecem os casos que não estavam no happy path.

Desde aí, comecei a encarar quality engineering como parte do **product design**.

Quando a feature anda bem, o produto parece estável.
Quando falha, é que o design real aparece.

## O problema clássico (e comum)

Muitas vezes, sem querer, a equipa faz assim:

- **Product** define o que vai ao lançamento.
- **QA** valida no final.
- **Falhas** ficam para “mais tarde”.

É aí que o utilizador nota a diferença.
Ele não vê cargos, só vê comportamento.

## Uma forma mais leve de pensar a qualidade

Eu simplifiquei para um hábito prático:

### 1) Decidir onde o erro pode falhar em silêncio

Nem tudo precisa gritar no error.
Mas algumas falhas têm de travar a ação.
Antes de implementar, eu defino:

- o que pode ser retry,
- o que deve parar a jornada,
- o que precisa de mensagem clara.

### 2) Usar tests como docs de comportamento

Teste bom é mais do que “não falhou”.
É uma frase simples:

> “Dada esta input, o sistema faz isto.”

Isso mantém a equipa alinhada no que realmente importa.

### 3) Designar recovery, não só sucesso

Se um service falha, o que acontece?

- o fluxo continua,
- o fluxo pausa,
- ou o sistema pede retry?

Pequenas decisões de error handling fazem a diferença.

### 4) Incluir observability no feature design

Se não conseguimos responder rápido a:
“o que mudou?”, “onde falhou?” e “é algo visível pelo utilizador?”,
perdemos confiança.
Então eu incluo desde cedo:

- logs úteis,
- mensagens de erro claras,
- e checks que valem como evidence no processo.

## Como isso aparece no portfólio

Este portfólio também segue isso:

- estrutura previsível,
- conteúdo bilingual com regras consistentes,
- CI + testes automáticos,
- e estados de fallback acessíveis.

Ou seja, não é só vitrine.
É prova da forma como construo.

## Frase curta

Não penso a qualidade como uma gate no fim.
Penso nela como o que mantém o produto confiável quando a coisa aperta.
