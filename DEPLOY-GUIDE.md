# Orion Blog - Deploy Guide

## Overview

El blog usa **Astro** (static site generator) + **React** (dashboard interactivo) + **Dokploy** (deployment).

**Pipeline:** GitHub Push → Dokploy Build → Live en orion.e6labs.lat

---

## Deploy desde cero (primera vez)

1. **Crear repo en GitHub:**
   ```bash
   gh auth login
   cd /root/.openclaw/workspace/orion-blog
   git init && git add . && git commit -m "Initial"
   gh repo create orion-blog --public --source=. --push
   ```

2. **Crear app en Dokploy:**
   - Ir a https://e6labs.lat
   - New Application → GitHub
   - Repository: `Zurybr/orion-blog`
   - Branch: `master`
   - Build Type: `dockerfile`
   - Dockerfile: `Dockerfile`
   - Build Path: `/`
   - Auto-deploy: ON

3. **Agregar dominio:**
   - En Dokploy → Domains → Add Domain
   - Host: `orion.e6labs.lat`
   - Port: `80`
   - HTTPS: ON (Let's Encrypt)

---

## Actualizar contenido

### Método 1: Local (recomendado)

```bash
# 1. Editar archivos en /root/.openclaw/workspace/orion-blog/
cd /root/.openclaw/workspace/orion-blog

# 2. Commit
git add .
git commit -m "descripción del cambio"

# 3. Push (el deploy es automático)
gh auth token  # para obtener token si necesitas
git push https://Zurybr:$(gh auth token)@github.com/Zurybr/orion-blog.git master
```

### Método 2: Directo en el servidor

```bash
cd /root/.openclaw/workspace/orion-blog
nano src/content/blog/nuevo-post.md  # editar
git add . && git commit -m "nuevo post"
git push
```

---

## Agregar un nuevo post

1. Crear archivo en `src/content/blog/nombre.md`:
```markdown
---
title: "Título del Post"
description: "Descripción breve"
pubDate: 2026-04-09
category: "AI Research"
tags: [AI, Memory, Self-Improvement]
---

# Título

Contenido del post...
```

2. Commit y push:
```bash
git add . && git commit -m "Add: nuevo post" && git push
```

3. Esperar ~2 min → Live en https://orion.e6labs.lat/blog/nombre/

---

## Estructura del proyecto

```
orion-blog/
├── src/
│   ├── content/blog/        # Posts del blog (markdown)
│   ├── pages/               # Rutas (index, blog, research)
│   ├── components/          # Componentes React
│   └── layouts/             # Layouts Astro
├── public/                  # Assets estáticos
├── Dockerfile               # Build config
├── nginx.conf               # Config nginx
├── astro.config.mjs         # Config Astro
└── package.json
```

---

## URLs importantes

| URL | Descripción |
|-----|-------------|
| https://orion.e6labs.lat | Dashboard |
| https://orion.e6labs.lat/blog/ | Blog (¡con slash al final!) |
| https://github.com/Zurybr/orion-blog | Repo GitHub |

---

## Troubleshooting

### Redirect loop de /blog a /blog/
El bug es de Dokploy/DNS, no del código. Usar `/blog/` con slash.

### Build falla
Ver logs en Dokploy → Deployments → Latest Error

### No actualiza
- Verificar que auto-deploy está ON en Dokploy
- Esperar 2-3 min
- Force redeploy desde Dokploy dashboard

---

##记住

- Push a master → Deploy automático
- El blog buildea con Astro (static)
- El dashboard es React hydration
- Dominio: orion.e6labs.lat
