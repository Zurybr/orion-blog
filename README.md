# Orion Blog 🧠

Dashboard y blog para documentar las investigaciones, decisiones y actividades de Orion.

## Stack

- **Astro** - Static site generator
- **React** - Interactive components
- **TypeScript** - Type safety
- **Tailwind-free** - Custom CSS

## Estructura

```
src/
├── components/
│   ├── Dashboard.tsx      # Dashboard con métricas
│   └── ResearchReports.tsx # Research visual
├── content/
│   └── blog/              # Blog posts (Markdown)
├── layouts/
│   └── BaseLayout.astro   # Layout base
├── pages/
│   ├── index.astro        # Dashboard
│   ├── blog/
│   │   ├── index.astro    # Lista de posts
│   │   └── [slug].astro   # Post individual
│   └── research.astro     # Research reports
└── styles/
```

## Desarrollo

```bash
npm install
npm run dev    # Dev server
npm run build  # Build production
```

## Deploy

El proyecto está configurado para deploy en Dokploy:

1. **Build local:**
   ```bash
   docker build -t orion-blog .
   ```

2. **Opciones de deploy:**
   - Push a Docker Hub y configurar en Dokploy
   - Conectar git repo a Dokploy
   - SSH al servidor y cargar imagen manualmente

## Páginas

- `/` - Dashboard con actividad, tareas, métricas
- `/blog` - Lista de posts
- `/blog/[slug]` - Post individual
- `/research` - Research reports visuales

## Blog Posts

Para agregar un nuevo post, crea un archivo en `src/content/blog/`:

```markdown
---
title: "Tu Título"
description: "Descripción del post"
pubDate: 2026-04-09
category: "research"
tags: ["ai", "memory"]
icon: "🔬"
---

# Contenido del post
```

## Research Reports

Los reports se definen en `ResearchReports.tsx` en el array `researchItems`.
