# 🎮 Game Wiki — Mi Colección de Juegos Favoritos

Una página web dedicada a recopilar y organizar toda la información de mis juegos favoritos, incluyendo historias, misiones, personajes y más.

---

## 📖 Descripción

Este proyecto es una wiki personal con información detallada sobre videojuegos, organizada de manera clara y accesible. Cada juego tiene su propia sección con:

- **Historia/Trama** — Resumen completo de la narrativa
- **Misiones Principales** — Guía paso a paso de la campaña
- **Misiones Secundarias** — Quests opcionales y contenido extra
- **Personajes** — Protagonistas, antagonistas y NPCs
- **Objetos/Items** — Base de datos de equipamiento y consumibles
- **Logros/Trofeos** — Lista completa de achievements
- **Galería** — Imágenes y arte conceptual

---

## 🚀 Estado del Proyecto

**En Desarrollo** 🚧

Fase de planificación completada. Stack tecnológico y arquitectura definidos.

---

## 🛠️ Stack Tecnológico

El proyecto está organizado en tres capas con responsabilidades claras.

### Capa de Presentación

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **HTML5** | — | Estructura semántica |
| **Tailwind CSS** | 3.x | Estilos utilitarios |
| **Alpine.js** | 3.x | Reactividad ligera y microinteracciones |
| **GSAP** | 3.12.x | Animaciones avanzadas |
| **React** | 18.x | Componentes interactivos selectivos (buscador, trackers) |

### Capa de Lógica

| Tecnología | Propósito |
|------------|-----------|
| **HTMX** | 1.9.x | Peticiones al servidor sin JS complejo |
| **Node.js + Express** | Servidor, rutas, renderizado de fragmentos HTML |
| **REST API** | Endpoints para los componentes React |

### Capa de Datos

| Tecnología | Propósito |
|------------|-----------|
| **PostgreSQL** | Base de datos relacional |
| **DBeaver** | Gestión visual de la base de datos |

### Iconografía

**Phosphor Icons** o **Heroicons (Outline)** — estilo minimalista, coherente con la estética NieR: Automata.

> **Nota sobre React:** No es el núcleo del proyecto sino un complemento selectivo. HTMX maneja la navegación y carga de contenido; React aparece únicamente donde hay estado complejo real (buscador con filtros, tracker de logros, etc.).

---

## 📁 Estructura del Proyecto

```
├── .gitignore
├── package.json              # Dependencias y scripts Node.js
├── package-lock.json
├── README.md
├── style-guide.md            # Guía de estilos y decisiones de diseño
└── src/
    ├── js/
    │   └── App.js            # Componente React principal
    ├── static/
    │   ├── App.css           # Estilos del componente React
    │   └── input.css         # Entrada para compilación de Tailwind
    └── templates/
        ├── app/              # Plantillas de la aplicación
        │   ├── ejemplo1-fadein-htmx.html
        │   ├── ejemplo2-glitch-css.html
        │   ├── ejemplo3-progress-alpine.html
        │   └── ejemplo4-gsap-dramatic.html
        └── error/
            └── content-fragment.html
```

---

## 🎬 Ejemplos de Animaciones y Efectos

Los ejemplos demostrativos están en `src/templates/app/`:

| Archivo | Descripción | Tecnologías |
|---------|-------------|-------------|
| `ejemplo1-fadein-htmx.html` | Fade-in al cargar contenido dinámico | HTMX + CSS |
| `ejemplo2-glitch-css.html` | Efecto glitch en tarjetas de juegos (hover) | CSS puro |
| `ejemplo3-progress-alpine.html` | Barra de progreso para misiones | Alpine.js + Tailwind |
| `ejemplo4-gsap-dramatic.html` | Animación dramática de entrada | GSAP |

Cada archivo HTML carga sus propios estilos de forma aislada, por lo que pueden coexistir sin conflictos.

---

## 🚀 Cómo Ejecutar los Ejemplos

### Requisitos Previos

Instalar [Node.js](https://nodejs.org/) e instalar dependencias del proyecto:

```bash
npm install
```

### Opción A — Servidor Python (sin instalar nada extra)

```bash
cd src/templates/app
python -m http.server 8000
```

Abrir `http://localhost:8000/ejemplo1-fadein-htmx.html` en el navegador.

### Opción B — Live Server (VS Code)

Instalar la extensión **Live Server**, abrir cualquier `.html` de `src/templates/app/` y hacer clic derecho → *Open with Live Server*.

### Opción C — http-server (Node.js)

```bash
npx http-server src/templates/app -p 8000
```

---

## 🎯 Roadmap

### Fase 1: Planificación ✅
- [x] Definir stack tecnológico y arquitectura
- [x] Crear ejemplos de animaciones y efectos
- [x] Diseñar arquitectura de información
- [x] Documentar guía de estilos (`style-guide.md`)

### Fase 2: Entorno y estructura base ⬜
- [ ] Configurar Node.js + Express como servidor local
- [ ] Crear estructura HTML base con HTMX
- [ ] Compilar y conectar Tailwind CSS (`input.css` → `output.css`)
- [ ] Configurar PostgreSQL local y esquema inicial

### Fase 3: Desarrollo de contenido ⬜
- [ ] Definir esquema PostgreSQL (juegos, misiones, personajes, items)
- [ ] Integrar HTMX con Express para carga dinámica de fragmentos
- [ ] Desarrollar componentes React para buscador y tracker de logros
- [ ] Poblar contenido: NieR: Automata, Hollow Knight, Silksong, DMC 5

### Fase 4: Mejoras ⬜
- [ ] Optimización de rendimiento
- [ ] Accesibilidad (WCAG AA)
- [ ] Testing multiplataforma

### Fase 5: Despliegue local ⬜
- [ ] Configurar servidor local completo (Express + PostgreSQL)
- [ ] Pruebas de integración HTMX + API REST + React
- [ ] Despliegue en entorno local (sin hosting externo)

---

## 🔗 Recursos Útiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [HTMX Docs](https://htmx.org/docs/)
- [Alpine.js Docs](https://alpinejs.dev/)
- [GSAP Docs](https://gsap.com/docs/v3/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Express Docs](https://expressjs.com/)

---

## 📄 Licencia

Proyecto de uso personal. Todo el contenido de los juegos pertenece a sus respectivos desarrolladores y editores.

---

<div align="center">
  <strong>Hecho con ❤️ para los amantes de los videojuegos</strong>
</div>