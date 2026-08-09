---
layout: layouts/case-study.njk
tags:
  - case-study
permalink: /pt/trabalho/cuf-prepara/
translationKey: cuf-prepara
projectKey: cuf-prepara
contentType: case-study
title: CUF Prepara
summary: Preparação personalizada para colonoscopia no Hospital CUF Descobertas — um assistente bilingue com a qualidade integrada no produto.
featured: true
sanitized: true
order: 1
draft: false
---

## Visão geral e papel

O CUF Prepara é uma experiência client-side bilingue (português/inglês) que personaliza a orientação de preparação para colonoscopia. Desenhei e construí o produto de ponta a ponta, tratando a qualidade automatizada como parte do produto e não como uma checklist final.

Este é um **caso de estudo sanitizado**. O repositório é privado e ainda não existe uma demonstração pública. Dados pessoais, sistemas internos e detalhes confidenciais da instituição ficam de fora.

## Problema e utilizadores

As pessoas que se preparam para uma colonoscopia precisam de um plano claro e temporizado. Instruções genéricas em PDF são fáceis de interpretar mal: falham passos, os horários desviam-se e os exames podem atrasar por razões evitáveis.

Os principais utilizadores são as pessoas que vão realizar o exame e os familiares que as apoiam. Têm de seguir orientações sobre dieta, medicação e o dia do exame sob pressão de tempo.

## Constrangimentos e riscos

- Os dados clínicos devem personalizar a experiência sem transformar a interface num sistema de registo clínico.
- A experiência tem de funcionar bem em telemóvel; a preparação acontece em casa, não numa secretária.
- O texto e os horários devem permanecer precisos em português e em inglês.
- Detalhes clínicos e institucionais privados não podem aparecer numa descrição pública do portefólio.

## Decisões principais

- **Assistente client-side** com persistência local para o progresso sobreviver a recarregamentos sem backend.
- **Ligações diretas** para retomar a sessão dentro do fluxo do produto.
- **Exportação de calendário** (`.ics` com `VALARM`) para os lembretes viverem onde as pessoas já gerem o tempo.
- **Módulos JS vanilla** para manter o runtime pequeno e a lógica principal testável unitariamente.

## Estratégia de qualidade

- Testes unitários em torno da lógica de personalização e dos horários (meta de cobertura ≥80% nos módulos críticos).
- Cobertura end-to-end com Playwright nas jornadas que importam.
- Decisões de UI conscientes de CLS para a estabilidade de layout fazer parte da qualidade da experiência.
- Gates de lint/formatação e hooks de pre-commit para manter o feedback perto do código.

## Resultado e evidência

Uma experiência de preparação responsiva que transforma dados clínicos num plano bilingue temporizado, com lógica principal testável e verificações automatizadas dos percursos principais. Para além destas práticas de engenharia, não são divulgadas métricas públicas.

## Lições e próximos passos

- A orientação de preparação é um problema de produto, não apenas de conteúdo: horários, idioma e retoma importam tanto como o texto clínico.
- Quando for possível publicar uma demonstração em segurança, este caso de estudo deverá passar a ter uma ligação pública sem alargar os limites de divulgação.
