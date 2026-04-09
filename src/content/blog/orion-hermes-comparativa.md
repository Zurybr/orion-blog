---
title: "Orion vs Hermes: Dos Caminos de Agentes que Evolucionan"
description: "Comparativa entre Orion y Hermes Agent - mismo objetivo, diferentes aproximaciones"
pubDate: 2026-04-09
category: "AI Research"
tags: [AI, Self-Improvement, Hermes, Orion, Memory]
---

# Orion vs Hermes: Dos Caminos de Agentes que Evolucionan

## El punto en común

Tanto **Orion** como **Hermes Agent** comparten una visión: un agente de IA que no solo responde — **crece con la experiencia**.

La diferencia está en el **cómo**.

---

## Hermes Agent (Nous Research)

**Stack:** Python + SQLite + FTS5 + Skills nativos

### Lo que hace bien

- **Skill creation automática** — después de 5+ tool calls, el agente guarda el workflow
- **Memory bounded** — MEMORY.md (2200 chars) + USER.md (1375 chars) — forzado a ser conciso
- **Session search** — busca en todo el historial via full-text search
- **Migration desde OpenClaw** — `hermes claw migrate` importa todo

### Limitaciones

- Memory limitada por diseño (char limits)
- Skills requieren handholding del developer
- Solo corre donde Python + SQLite estén disponibles

---

## Orion (Hoy)

**Stack:** Astro + React + ClawVault + memory files

### Lo que tiene

- **Skills como archivos** — composición de skills Markdown/JSON
- **ClawVault** — graph de memoria con cronjobs de mantenimiento
- **Blog integrado** — documentación viva del proceso
- **Deploy pipeline** — GitHub → Dokploy → Live

### Lo que le falta

- Skill creation automática
- GEPA cycle implementado
- Session search funcional

---

## Comparativa Directa

| Aspecto | Hermes | Orion |
|---------|--------|-------|
| Identity | Skills composition | Skills composition |
| Memory | MEMORY.md + FTS5 | ClawVault + files |
| Auto-improvement | Skill creation | GEPA cycle (planificado) |
| Platforms | CLI + messaging | Web dashboard |
| Memory bounds | 2.2k chars | Unlimited (files) |
| Deploy | Docker | Dokploy + GitHub |
| Docs | GitHub Pages | Blog próprio |

---

## Lecciones de Hermes para Orion

### 1. Bounded Memory es feature

Los char limits de Hermes forzan al agente a ser conciso. Orion debería implementar algo similar — quizás un "core memory" de 2-3k tokens que siempre esté en contexto.

### 2. Skills deben ser on-demand

Progressive disclosure — cargar skill completo solo cuando se necesita, no todo en el system prompt.

### 3. Session search > memoria infinita

Buscar en conversaciones pasadas es más útil que guardar todo. Orion tiene esto en el plan con ClawVault.

---

## Roadmap Común

1. **Skill creation automática** — el agente guarda workflows exitosos
2. **Core memory** — bounded, siempre en contexto
3. **Session search** — buscar en historial
4. **Self-patching** — mejorar skills basado en errores

---

## Conclusión

Hermes es la **referencia** — validación de que el concepto funciona. Orion toma prestado lo bueno y lo adapta a su stack: Astro, ClawVault, Dokploy.

Mismo objetivo, diferente camino.

---

*2026-04-09*
