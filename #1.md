# 🎮 Game Wiki - Mi Colección de Juegos Favoritos

Una página web dedicada a recopilar y organizar toda la información de mis juegos favoritos, incluyendo historias, misiones, personajes y más.

---

## 📖 Descripción

Este proyecto es una wiki personal que contiene información detallada sobre videojuegos, organizada de manera clara y accesible. Cada juego tiene su propia sección con:

- **Historia/Trama**: Resumen completo de la narrativa del juego
- **Misiones Principales**: Guía paso a paso de la campaña principal
- **Misiones Secundarias**: Detalle de quests opcionales y contenido extra
- **Personajes**: Información sobre protagonistas, antagonistas y NPCs
- **Objetos/Items**: Base de datos de equipamiento y consumibles
- **Logros/Trofeos**: Lista completa de achievements
- **Galería**: Imágenes y arte conceptual

---

## 🚀 Estado del Proyecto

**En Desarrollo** 🚧

Actualmente en fase de configuración inicial con el stack tecnológico definido.

---

## 🛠️ Stack Tecnológico

### Frontend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **HTML5** | - | Estructura semántica |
| **HTMX** | 1.9.x | Interactividad sin JavaScript complejo |
| **Alpine.js** | 3.x | Reactividad ligera |
| **Tailwind CSS** | 3.x | Estilos utilitarios |
| **GSAP** | 3.12.x | Animaciones avanzadas |

### Backend & Base de Datos
| Tecnología | Propósito |
|------------|-----------|
| **React + JavaScript** | API y renderizado dinámico |
| **PostgreSQL** | Base de datos relacional |
| **DBeaver** | Gestión visual de la BD |

### Iconografía
- **Phosphor Icons** o **Heroicons (Outline)** - Estilo minimalista tipo Nier: Automata

### Desarrollo Local
- Servidor local (sin hosting externo por ahora)
- Node.js para herramientas de desarrollo

---

## 📁 Estructura del Proyecto

```
├── package.json            # Configuración de Node.js y dependencias
├── README.md               # Documentación del proyecto
├── src/                    # Código fuente principal
│   ├── js/                 # Lógica JavaScript (Vanilla y React)
│   │   └── App.js          # Componente React (Lista de Tareas)
│   ├── db/                 # Scripts y configuración de base de datos
│   │   ├── schema.sql      # Esquema de PostgreSQL
│   │   └── seeds.sql       # Datos iniciales
│   └── static/             # Archivos estáticos
│       ├── images/         # Imágenes del proyecto
│       ├── icons/          # Iconos (Phosphor, Heroicons)
│       ├── App.css         # Estilos del componente React
│       └── index.html      # HTML base (si se requiere)
├── templates/              # Plantillas HTML
│   ├── index.html          # Plantilla principal
│   ├── app/                # Plantillas específicas de la aplicación
│   │   ├── ejemplo1-fadein-htmx.html
│   │   ├── ejemplo2-glitch-css.html
│   │   ├── ejemplo3-progress-alpine.html
│   │   └── ejemplo4-gsap-dramatic.html
│   └── errors/             # Plantillas de errores
│       └── content-fragment.html
```

---

## 🎯 Roadmap

### Fase 1: Planificación ✅
- [x] Crear template de issue con roadmap
- [x] Definir tecnología a usar
- [x] Crear ejemplos de animaciones y efectos
- [x] Diseñar arquitectura de información

### Fase 2: Desarrollo Frontend ⬜
- [ ] Configurar entorno de desarrollo local (Node.js, PostgreSQL, DBeaver)
- [ ] Crear estructura HTML base con HTMX
- [ ] Implementar estilos Tailwind CSS

### Fase 3: Contenido ⬜
- [ ] Configurar base de datos PostgreSQL (esquema para juegos, misiones, personajes)
- [ ] Desarrollar backend con React + JavaScript
- [ ] Integrar HTMX con backend para carga dinámica
- [ ] Populado de contenido (NieR: Automata, Hollow Knight, Silksong, DMC 5)

### Fase 4: Mejoras ⬜
- [ ] Optimización técnica
- [ ] Accesibilidad y SEO
- [ ] Testing multiplataforma

### Fase 5: Despliegue ⬜
- [ ] Configurar servidor local para React + PostgreSQL
- [ ] Pruebas de integración HTMX + Backend
- [ ] Despliegue en entorno local (sin hosting externo)

---

## 🤝 Cómo Contribuir

1. Revisa el [roadmap completo](.github/ISSUE_TEMPLATE/implementacion-wiki-juegos.md) para ver la hoja de ruta detallada.
2. Crea un branch para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es de uso personal. Todo el contenido de los juegos pertenece a sus respectivos desarrolladores y editores.

---

## 🔗 Recursos Útiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [FreeCodeCamp](https://www.freecodecamp.org/)
- [CSS Tricks](https://css-tricks.com/)

---

<div align="center">
  <strong>Hecho con ❤️ para los amantes de los videojuegos</strong>
</div>
---

## 🎬 Ejemplos de Animaciones y Efectos

Los ejemplos ahora se encuentran organizados en la carpeta `templates/app/`:
Se han creado ejemplos demostrativos en las carpetas `examples/` y `example/`:

### Ejemplos HTML (carpeta `examples/`)

| Archivo | Descripción | Tecnologías |
|---------|-------------|-------------|
| `ejemplo1-fadein-htmx.html` | Fade-in suave al cargar contenido dinámico | HTMX + CSS |
| `ejemplo2-glitch-css.html` | Efecto glitch en tarjetas de juegos (hover) | CSS puro |
| `ejemplo3-progress-alpine.html` | Barra de progreso para misiones con estado interactivo | Alpine.js + Tailwind |
| `ejemplo4-gsap-dramatic.html` | Animación dramática de entrada para páginas principales | GSAP |

Adicionalmente, el componente React de Lista de Tareas se encuentra en:
- **JavaScript**: `src/js/App.js`
- **Estilos**: `src/static/App.css`

**Nota sobre los estilos**: Los archivos de ejemplos HTML usan estilos CSS independientes que **SÍ se pueden usar simultáneamente** sin conflictos, ya que cada archivo HTML carga sus propios estilos de manera aislada.

---

## 🚀 Cómo Ejecutar los Ejemplos

### Requisitos Previos

1. **Instalar Node.js** (si no lo tienes):
   - Descarga desde [nodejs.org](https://nodejs.org/)
   - O usa un gestor de versiones como `nvm`

2. **Instalar dependencias del proyecto**:
   ```bash
   cd /workspace
   npm install
   ```

### Ejemplos HTML (carpeta `templates/app/`)

1. **Opción A: Servidor simple con Python**
   ```bash
   cd /workspace/templates/app
   python -m http.server 8000
   ```
   Luego abre `http://localhost:8000/ejemplo1-fadein-htmx.html` en tu navegador.

2. **Opción B: Extensión Live Server en VS Code**
   - Instala la extensión "Live Server"
   - Abre cualquier archivo `.html` de la carpeta `templates/app/`
   - Haz clic derecho → "Open with Live Server"

3. **Opción C: Usando Node.js (http-server)**
   ```bash
   npm install -g http-server
   cd /workspace/templates/app
   http-server -p 8000
   ```

### Ejemplo React (Lista de Tareas)

**Importante**: Este ejemplo está configurado para funcionar con el `package.json` raíz del proyecto.

1. **Asegúrate de tener las dependencias instaladas**:
   ```bash
   cd /workspace
   npm install
   ```

2. **Ejecutar la aplicación**:
### Ejemplo React (carpeta `example/`)

Para ejecutar la aplicación de Lista de Tareas en React:

1. **Crear un proyecto React nuevo** (si no tienes uno):
   ```bash
   npx create-react-app mi-todo-app
   cd mi-todo-app
   ```

2. **Reemplazar los archivos**:
   - Copia `/workspace/example/App.js` a `src/App.js`
   - Copia `/workspace/example/App.css` a `src/App.css`

3. **Ejecutar la aplicación**:
   ```bash
   npm start
   ```
   La aplicación se abrirá automáticamente en `http://localhost:3000`

**Nota**: Los archivos del componente React ya están en su ubicación correcta:
- `src/js/App.js` - Componente principal
- `src/static/App.css` - Estilos del componente

Si prefieres crear un proyecto React independiente:
```bash
npx create-react-app mi-todo-app
cd mi-todo-app
# Luego copia App.js y App.css desde src/js/ y src/static/ respectivamente
npm start
```

### Estructura Actual del Proyecto

La estructura de carpetas configurada es:

```
/workspace
├── package.json            ✅ Configurado
├── src/
│   ├── js/                 ✅ Con App.js (React)
│   ├── db/                 ✅ Lista
│   └── static/
│       ├── images/         ✅ Lista
│       ├── icons/          ✅ Lista
│       └── App.css         ✅ Estilos React
├── templates/
│   ├── index.html          (por crear)
│   ├── app/                ✅ Con 4 ejemplos HTML
│   └── errors/             ✅ Con plantilla de error
```

