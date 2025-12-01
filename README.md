<h1 align="center">Curious Facts App</h1>

Aplicación web Single Page Application (SPA) que consume una API externa para mostrar y guardar hechos curiosos de manera aleatoria.

## 📄 Descripción del Proyecto

Este proyecto es un ejercicio práctico para desarrollar la interfaz front-end de una aplicación que consume la [API Useless Facts API](https://uselessfacts.jsph.pl/). El objetivo principal es la manipulación del DOM con JavaScript, la gestión de eventos y la realización de llamadas asíncronas (fetch API) para obtener y mostrar datos, permitiendo al usuario guardar sus hechos favoritos en la misma interfaz.

## 🎯 Objetivos

*   Crear una Single Page Application (SPA).
*   Consumir datos de una API externa (<https://uselessfacts.jsph.pl/>).
*   Manipular el DOM para mostrar dinámicamente hechos curiosos.
*   Implementar una funcionalidad para guardar favoritos localmente.

### ✨ Requisitos Funcionales

*   La aplicación debe llamar y mostrar hechos curiosos de uno en uno.
*   Debe ser una SPA (un solo archivo `index.html`).
*   Debe permitir añadir hechos a una lista de favoritos visible en la página.

### Extras (Opcional):

*   Diseño mobile-first y responsive con al menos dos puntos de quiebre.
*   Tests unitarios implementados con Vitest/Jest.

## 🛠 Tecnologías y Herramientas

| Categorías | Aplicaciones usadas |
|------------|---------------------|
| Tecnología | HTML5, CSS3, Javascript, VisualStudioCode, LiveServer |
| Herr. de gestión | Trello, con metodología Kanban |
| Herr. de diseño | Figma aplicando atomic design, CANVA para el USERFLOW |
| Herr. de control de versiones | Git/GitHub y Gitflow, aplicando conventional commits |

## 📐 Metodología y Proceso de Desarrollo

El proyecto se gestionó siguiendo principios ágiles:

*   **Planificación:** Se usó un tablero Kanban en [Trello](https://trello.com/b/0D09cROk/curios-facts) para definir historias de usuario y tareas.

*   **Control de Versiones:** Se aplicó la metodología [Gitflow](), trabajando en una rama `dev` principal y ramas de `feature` para cada tarea, con merges eventuales a `main`. Se usaron [Conventional Commits](www.conventionalcommits.org) para mantener un historial de commits limpio y descriptivo.

*   **Diseño:** El flujo de usuario (userflow) se realizó en CANVA y la maquetación inicial se realizaron en [Figma](www.figma.com).

## 🚀 Despliegue y Uso

### Pre-requisitos
Necesitas tener instalado Node.js y un navegador web moderno (como Google Chrome o Firefox).

### Pasos de Instalación

1. **Clona el repositorio**
```bash
   git clone https://github.com/GeraldineSaco/curious-facts.git
   cd curious-facts
```

2. **Abre el proyecto en VS Code**
```bash
   code .
```

3. **Inicia Live Server**
   - Click derecho en `index.html`
   - Selecciona "Open with Live Server"
   - El proyecto se abrirá en `http://localhost:5500`

> ⚠️ **Importante**: Es necesario usar Live Server para que las rutas relativas funcionen correctamente.

## 👤 Autora

[Geraldine Saco](https://github.com/GeraldineSaco) - Desarrolladora del proyecto.