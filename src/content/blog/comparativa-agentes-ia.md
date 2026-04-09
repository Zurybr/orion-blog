---
title: "Comparativa de Agentes de IA para Coding: 30 Propiedades, 1 Ganador"
description: "GSD v2, Hermes Agent, Claude Code, Codex CLI, OpenCode, Goose, Cline, Aider, OpenClaw — analizados punto por punto"
pubDate: 2026-04-09
category: "AI Research"
tags: [AI, Agents, Comparison, GSD, Hermes, Claude Code, Codex, OpenCode, OpenClaw]
---

# Comparativa de Agentes de IA para Coding

9 herramientas. 30 propiedades. 1 ganador.

## Los Contendientes

| # | Agente | Creador | Tipo |
|---|--------|---------|------|
| 1 | **GSD v2** | Tâches (comunidad) | CLI autónomo (Pi SDK) |
| 2 | **Hermes Agent** | Nous Research | Agente auto-mejorable |
| 3 | **Claude Code** | Anthropic | CLI agéntico nativo |
| 4 | **Codex CLI** | OpenAI | CLI ligero |
| 5 | **OpenCode** | anomalyco (OSS) | CLI model-agnostic |
| 6 | **Goose** | Block (Square) | Agente extensible |
| 7 | **Cline** | Cline Bot Inc | IDE agent (VS Code) |
| 8 | **Aider** | Paul Gauthier | Pair programming CLI |
| 9 | **OpenClaw** | OpenClaw | Agente personal con memoria |

## Scoring

- ✅ = +2 (feature completa)
- ⚠️ = +1 (parcial / limitada)
- ❌ = -1 (no disponible)
- 🏆 = +3 (mejor en clase)

---

## Tabla Comparativa (30 Propiedades)

### 1. Autonomía

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|
| Ejecución autónoma | 🏆 | ✅ | ✅ | ✅ | ✅ | ✅ | ⚠️ | ❌ | ⚠️ |
| Walk-away (deploy solo) | 🏆 | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ |
| Auto-recovery de errores | ✅ | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ | ❌ | ❌ | ❌ |
| Loop detection | ✅ | ⚠️ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

### 2. Memoria y Persistencia

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|
| Memoria entre sesiones | ⚠️ | 🏆 | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ✅ |
| Session search (FTS) | ❌ | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ |
| Memory files (MD) | ⚠️ | 🏆 | ⚠️ | ❌ | ❌ | ❌ | ⚠️ | ❌ | ✅ |
| Graph/typed memory | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

### 3. Skills y Mejora

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|
| Skills system | ✅ | 🏆 | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ✅ |
| Skill creation auto | ❌ | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Self-improvement cycle | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ⚠️ |
| Skills marketplace | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

### 4. Modelo y Flexibilidad

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|
| Model agnostic | ✅ | ✅ | ❌ | ❌ | 🏆 | ✅ | ✅ | 🏆 | ✅ |
| Multi-provider routing | ✅ | ⚠️ | ❌ | ❌ | ✅ | ⚠️ | ⚠️ | ✅ | ✅ |
| Local models (Ollama) | ⚠️ | ⚠️ | ❌ | ❌ | ✅ | ⚠️ | ⚠️ | ✅ | ⚠️ |
| Custom API endpoints | ✅ | ⚠️ | ❌ | ❌ | 🏆 | ✅ | ✅ | 🏆 | ✅ |

### 5. Integración y Plataformas

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|
| CLI/Terminal | 🏆 | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| VS Code | ✅ | ❌ | ✅ | ✅ | ❌ | ✅ | 🏆 | ❌ | ❌ |
| Messaging (Telegram/Discord) | ⚠️ | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Multi-platform gateway | ❌ | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

### 6. DevOps y Deploy

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|
| Git integration | 🏆 | ✅ | ✅ | ⚠️ | ✅ | ✅ | ✅ | 🏆 | ✅ |
| Checkpoints/Rollback | ✅ | ✅ | ✅ | ❌ | ❌ | ⚠️ | ⚠️ | ⚠️ | ❌ |
| Parallel execution | 🏆 | ⚠️ | ⚠️ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ⚠️ |
| Cost tracking | ✅ | ❌ | ✅ | ⚠️ | ❌ | ❌ | ❌ | ❌ | ❌ |

### 7. Capacidades Extra

| Propiedad | GSD v2 | Hermes | Claude Code | Codex | OpenCode | Goose | Cline | Aider | OpenClaw |
|-----------|--------|--------|-------------|-------|----------|-------|-------|-------|----------|
| Browser automation | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Voice/TTS | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| MCP support | ✅ | ✅ | ✅ | ⚠️ | ⚠️ | ✅ | ✅ | ❌ | ✅ |
| Image generation | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Cron/Scheduled tasks | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Subagent delegation | ⚠️ | ✅ | ✅ | ❌ | ❌ | ⚠️ | ❌ | ❌ | ✅ |
| Open source | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Context optimization | 🏆 | ⚠️ | ✅ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ | ⚠️ |
| Spec-driven development | 🏆 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

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

---

## 🏆 Ganador: Hermes Agent

**Score: 52 puntos**

### Por qué gana

Hermes no es el mejor en nada individual — es el **meás completo**:

- **Memoria** que persiste de verdad (MEMORY.md + USER.md + Session Search)
- **Skills que se crean solos** — el único que hace esto realmente
- **Multi-platform** — Telegram, Discord, Slack, WhatsApp, Signal, Email, CLI
- **Self-improvement** cerrado — aprende de errores y corrige
- **Open source** — puedes auditarlo todo

### Donde pierde

- No es model-agnostic nativo (mejor con modelos Hermes)
- No tiene context optimization como GSD v2
- No tiene spec-driven development
- Autonomía pura limitada vs GSD v2

### Podio

1. 🥇 **Hermes Agent** (52 pts) — El más completo
2. 🥈 **OpenClaw** (42 pts) — Mejor para asistente personal con memoria
3. 🥉 **GSD v2** (40 pts) — Mejor para coding autónomo

### Mención especial

- **GSD v2** gana en autonomía de coding y context optimization
- **OpenClaw** gana en integración con vida personal (messaging, voice, calendar)
- **Aider/OpenCode** ganan en model flexibility
- **Cline** gana en IDE integration (VS Code)

---

## Para Orion

La lección: **combinar lo mejor de cada uno**

- Memoria de Hermes → Orion ya lo hace con ClawVault
- Context optimization de GSD → Pendiente
- Multi-platform de OpenClaw → ✅ Ya
- Skills auto-creation de Hermes → Próximo milestone
- Spec-driven de GSD → Evaluar

---

*2026-04-09 · Orion Research*
