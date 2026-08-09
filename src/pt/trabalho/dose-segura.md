---
layout: layouts/case-study.njk
tags:
  - case-study
permalink: /pt/trabalho/dose-segura/
translationKey: dose-segura
projectKey: dose-segura
contentType: case-study
title: Dose Segura
summary: Referência offline-first de medicamentos injetáveis para profissionais de saúde em Portugal — orientação, não prescrição.
featured: true
sanitized: false
order: 2
draft: false
---

## Visão geral e papel

O Dose Segura é uma referência offline-first de informação sobre medicamentos injetáveis para profissionais de saúde em Portugal. Entreguei um utilitário clínico mobile-first com superfície PWA/web além do nativo, moldado por constrangimentos reais de fluxo de enfermagem.

**Fronteira clínica:** o Dose Segura fornece orientação e material de referência. Não é uma calculadora de prescrição e não deve ser apresentado como tal.

## Problema e utilizadores

Os enfermeiros precisam de referência rápida e fiável no ponto de cuidado. A cobertura de rede não é garantida em todas as enfermarias ou momentos. Ferramentas que falham em silêncio offline, ou que atravessam a linha da prescrição, criam risco em vez de o reduzir.

## Constrangimentos e riscos

- O uso offline é um requisito, não um melhoramento.
- A linguagem de domínio tem de permanecer precisa; reivindicar autoridade clínica a mais é inaceitável.
- A entrega multiplataforma (nativo + web/PWA) precisa de um modelo de domínio coerente.
- Software adjacente a contextos de segurança crítica exige fronteiras tipadas e verificações automatizadas.

## Decisões principais

- **Armazenamento offline-first** com persistência assente em AsyncStorage para uso de referência sem rede.
- **Módulos de domínio estruturados** em TypeScript para as formas do conteúdo clínico ficarem explícitas.
- **Expo / React Native + Expo Router** para entrega mobile, com superfície PWA/web para acesso mais amplo.
- **Enquadramento claro de produto** como referência/orientação e não como prescrição de doses.

## Estratégia de qualidade

- Garantias ao nível dos tipos em torno dos módulos de domínio.
- Cobertura unitária Jest na lógica crítica.
- Verificações Playwright na superfície web.
- Gates de lint e tipos como parte do ciclo de entrega.

## Resultado e evidência

Um utilitário clínico mobile-first com módulos de domínio tipados e verificações automatizadas de lint, tipos, unitários e E2E web. Código e demo públicos:

- Código: [my-creations/dose-segura](https://github.com/my-creations/dose-segura)
- Demo: [my-creations.github.io/dose-segura](https://my-creations.github.io/dose-segura/)

## Lições e próximos passos

- A experiência de domínio vale mais quando define fronteiras duras de produto, não quando maximiza funcionalidades.
- Ferramentas de referência offline-first ganham confiança ao falhar com honestidade e carregar depressa onde o cuidado acontece de facto.
