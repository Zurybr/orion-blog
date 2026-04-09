---
title: "Comparativa de Agentes de IA para Coding: 30 Propiedades, 10 Contendientes, 1 Ganador"
description: "GSD v2, Hermes Agent, Claude Code, Codex CLI, OpenCode, Goose, Cline, Aider, OpenClaw, Letta Code — analizados punto por punto"
pubDate: 2026-04-09
category: "AI Research"
tags: [AI, Agents, Comparison, GSD, Hermes, Claude Code, Codex, OpenCode, OpenClaw, Letta Code]
---

# Comparativa de Agentes de IA para Coding

10 herramientas. 30 propiedades. 1 ganador.

## Los Contendientes

| # | Agente | Creador | Tipo | GitHub Stars |
|---|--------|---------|------|-------------|
| 1 | **GSD v2** | Tâches (comunidad) | CLI autónomo (Pi SDK) | ~15K |
| 2 | **Hermes Agent** | Nous Research | Agente auto-mejorable | ~5K |
| 3 | **Claude Code** | Anthropic | CLI agéntico nativo | ~30K |
| 4 | **Codex CLI** | OpenAI | CLI ligero | ~67K |
| 5 | **OpenCode** | anomalyco (OSS) | CLI model-agnostic | ~5K |
| 6 | **Goose** | Block (Square) | Agente extensible | ~27K |
| 7 | **Cline** | Cline Bot Inc | IDE agent (VS Code) | ~40K |
| 8 | **Aider** | Paul Gauthier | Pair programming CLI | ~30K |
| 9 | **OpenClaw** | OpenClaw | Agente personal con memoria | ~1K |
| 10 | **Letta Code** | Letta AI | Memory-first coding agent | ~5K |

## Scoring

- 🏆 = +3 (mejor en clase)
- ✅ = +2 (feature completa)
- ⚠️ = +1 (parcial / limitada)
- ❌ = -1 (no disponible)

---

## Tabla Comparativa (30 Propiedades)

### 1. Autonomía

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw | Letta Code |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|------------|
| Ejecución autónoma | 🏆 | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | ❌ | ⚠️ | ✅ |
| Walk-away (deploy solo) | 🏆 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ⚠️ |
| Auto-recovery de errores | ✅ | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ | ⚠️ |
| Loop detection | ✅ | ⚠️ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ |

### 2. Memoria y Persistencia

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw | Letta Code |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|------------|
| Memoria entre sesiones | ⚠️ | 🏆 | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ✅ | 🏆 |
| Session search (FTS) | ❌ | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ✅ |
| Memory files (MD) | ⚠️ | 🏆 | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ✅ | ✅ |
| Graph/typed memory | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |

### 3. Skills y Mejora

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw | Letta Code |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|------------|
| Skills system | ✅ | 🏆 | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ✅ | ✅ |
| Skill creation auto | ❌ | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ |
| Self-improvement cycle | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ | ✅ |
| Skills marketplace | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

### 4. Modelo y Flexibilidad

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw | Letta Code |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|------------|
| Model agnostic | ✅ | ✅ | ❌ | ❌ | 🏆 | ✅ | ✅ | 🏆 | ✅ | ✅ |
| Multi-provider routing | ✅ | ⚠️ | ❌ | ❌ | ✅ | ⚠️ | ⚠️ | ✅ | ✅ | ✅ |
| Local models (Ollama) | ⚠️ | ⚠️ | ❌ | ❌ | ✅ | ⚠️ | ⚠️ | ✅ | ⚠️ | ⚠️ |
| Custom API endpoints | ✅ | ⚠️ | ❌ | ❌ | 🏆 | ✅ | ✅ | 🏆 | ✅ | ✅ |

### 5. Integración y Plataformas

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw | Letta Code |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|------------|
| CLI/Terminal | 🏆 | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ |
| VS Code | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | 🏆 | ❌ | ❌ | ❌ |
| Messaging (Telegram/Discord) | ⚠️ | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Multi-platform gateway | ❌ | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |

### 6. DevOps y Deploy

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw | Letta Code |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|------------|
| Git integration | 🏆 | ✅ | ✅ | ⚠️ | ✅ | ✅ | ✅ | 🏆 | ✅ | ✅ |
| Checkpoints/Rollback | ✅ | ✅ | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ | ⚠️ |
| Parallel execution | 🏆 | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ⚠️ | ⚠️ |
| Cost tracking | ✅ | ❌ | ✅ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

### 7. Capacidades Extra

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw | Letta Code |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|------------|
| Browser automation | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Voice/TTS | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| MCP support | ✅ | ✅ | ✅ | ⚠️ | ⚠️ | ✅ | ✅ | ❌ | ✅ | ⚠️ |
| Image generation | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Cron/Scheduled tasks | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Subagent delegation | ⚠️ | ✅ | ✅ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ✅ | ✅ |
| Open source | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Context optimization | 🏆 | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Spec-driven development | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## Scoring Final

| Agente | Autonomía | Memoria | Skills | Modelo | Integración | DevOps | Extra | **TOTAL** |
|--------|-----------|---------|--------|--------|-------------|--------|-------|-----------|
| **GSD v2** | 12 | 1 | 2 | 8 | 5 | 10 | 2 | **40** |
| **Hermes Agent** | 6 | 12 | 9 | 2 | 8 | 4 | 11 | **52** |
| **Claude Code** | 8 | 2 | 0 | -4 | 3 | 7 | 2 | **18** |
| **Codex CLI** | 6 | -3 | -3 | -4 | 3 | 1 | 0 | **0** |
| **OpenCode** | 5 | -3 | -3 | 10 | 3 | 3 | 0 | **15** |
| **Goose** | 5 | -3 | 0 | 5 | 5 | 3 | 2 | **17** |
| **Cline** | 0 | 0 | -3 | 5 | 2 | 3 | 3 | **10** |
| **Aider** | -2 | -3 | -3 | 10 | 2 | 7 | -1 | **10** |
| **OpenClaw** | 0 | 8 | 5 | 8 | 8 | 3 | 10 | **42** |
| **Letta Code** | 8 | 12 | 5 | 8 | 3 | 5 | 3 | **44** |

---

## 🏆 Ganador: Hermes Agent

**Score: 52 puntos**

### Podio

1. 🥇 **Hermes Agent** (52 pts) — El más completo
2. 🥈 **Letta Code** (44 pts) — Memory-first, stateful, aprende entre sesiones
3. 🥉 **OpenClaw** (42 pts) — Mejor para asistente personal con memoria
4. 🏅 **GSD v2** (40 pts) — Mejor para coding autónomo

### Por qué Hermes gana

- **Memoria** que persiste de verdad (MEMORY.md + USER.md + Session Search)
- **Skills que se crean solos** — el único que hace esto realmente
- **Multi-platform** — Telegram, Discord, Slack, WhatsApp, Signal, Email, CLI
- **Self-improvement** cerrado — aprende de errores y corrige
- **Open source** — auditables

### Por qué Letta Code es el nuevo contendiente fuerte

Letta Code es el **único que compite de verdad con Hermes en memoria**:

- **Stateful por diseño** — mismo agente entre sesiones, no sesiones independientes
- **Memoria jerárquica** — blocks editables, `/remember` command, auto-bootstrap
- **Model agnostic** — Claude, GPT, Gemini, GLM, Kimi, MiniMax
- **Open source** — puedes self-hostear con Docker
- **Filosofía**: "Like having a coworker that learns and remembers" vs "meeting a new contractor"

Lo que le falta vs Hermes: multi-platform messaging, browser automation, voice, skill creation automática.

### Claude Code: Potente pero limitado

Claude Code (18 pts) es excelente en ejecución — cuando funciona, es el mejor. Pero:
- **Vendado a Anthropic** — solo Claude models
- **Sin memoria real** entre sesiones
- **Closed source** — no puedes auditarlo
- **Sin multi-platform** — solo terminal y VS Code

### OpenCode: El más flexible pero básico

OpenCode (15 pts) gana en model flexibility pero no tiene memoria, skills, ni autonomía real. Es un buen punto de partida si quieres algo minimal.

---

## Para Orion

La lección: **combinar lo mejor de cada uno**

| Feature | Fuente | Estado en Orion |
|---------|--------|-----------------|
| Memoria persistente | Hermes + Letta | ✅ ClawVault |
| Skills auto-creation | Hermes | ❌ Pendiente |
| Multi-platform | OpenClaw | ✅ Telegram, Discord |
| Context optimization | GSD v2 | ❌ Pendiente |
| Stateful sessions | Letta Code | ⚠️ Parcial |
| Model agnostic | OpenCode + Aider | ✅ Multi-provider |
| Spec-driven dev | GSD v2 | ❌ Evaluar |
| Self-improvement | Hermes + Letta | ⚠️ Planificado |

---

*2026-04-09 · Orion Research*
