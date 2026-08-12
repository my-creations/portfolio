---
layout: layouts/writing.njk
permalink: /pt/escrita/checklist-de-design-de-software/
translationKey: software-design-checklist
contentType: article
title: Checklist de 7 passos para software design que uso hoje
summary: Uma versão prática e sem complicação para manter o código menos acoplado e mais fácil de manter.
date: 2026-08-12
tags:
  - writing
  - software-design
  - quality-engineering
featured: true
draft: false
---

Também já fiz isso dezenas de vezes:

1. Open editor.
2. Start coding.
3. Fix bugs.
4. Add tests.
5. Repeat.

Funciona.
Até deixa de funcionar.

Hoje, antes de me apaixonar pela primeira ideia, passo por uma checklist curta.
Sem cerimónias.
Sem overengineering.

## 1) Definir o problema de verdade

Antes do código, eu anoto:

- o que vamos construir,
- para quem,
- que problema resolve,
- o que é sucesso.

Começo wide, depois narrow.
O objetivo é evitar construir cedo o que devia ficar para depois.

## 2) Desenhar UX primeiro

Sem flow claro, a lógica torna-se confusa.
Eu escrevo o path principal e os caminhos alternativos.

- happy path,
- alt flow,
- impacto na navegação.

Isso corta ideias “muito flexíveis” e pouco úteis.

## 3) Alinhar as technical needs

Depois, fecho o desenho técnico básico:

- model/data updates,
- API boundaries,
- integrações,
- edge cases esperados.

Gosto de manter tudo simples:

- small modules,
- explicit contracts,
- poucas responsabilidades por função.

Se uma função vira “faz de tudo”, eu separo.

## 4) Testes + security no mesmo pacote

Testes e segurança não vêm no fim.
Vêm no desenho:

- quais testes primeiros,
- que side effects a feature traz,
- como mudam as validações.

Se está difícil testar, é sinal que a solução ainda está confusa.

## 5) Planear pelo risco

Eu organizo em slices e assumo incerteza:

- milestones,
- dependências,
- migration tasks,
- risco real.

Valido cedo o risco mais alto (integrations, APIs, migration).
Isso evita surpresa no último minuto.

## 6) Olhar ripple effects antes de acabar

Nada fica local.

Também listo:

- docs a atualizar,
- comunicação com utilizadores/clientes,
- mudanças de processo,
- impact em sistemas externos.

Assim evitamos muito “works on my machine”.

## 7) Fechar com contexto

Antes de fechar, deixo claro:

- o que está fora de scope,
- o que fica para depois,
- constraints (time/compliance/platform).

Mantenho também 2 ou 3 “moonshot notes”.
Nem todas viram task, mas guardam direção.

## O que isto mudou no portfólio

Até este site ganhou com esta rotina:

- estrutura limpa,
- navegação previsível,
- trade-offs explícitos,
- comportamento confiável nos erros.

Se quiser uma versão rápida:

**Define → UX → Technicals → Test/Security → Plan → Ripple → Context**.
