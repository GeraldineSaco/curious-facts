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
*   Debe permitir añadir hechos a una lista de favoritos.

### Extras:

*   Tests unitarios implementados con Vitest/Jest.

## 🛠 Tecnologías y Herramientas

| Categorías | Aplicaciones usadas |
|------------|---------------------|
| Tecnología | HTML5, CSS3, Javascript, VisualStudioCode, LiveServer |
| Herr. de gestión | Trello, con metodología Kanban |
| Herr. de diseño | Figma aplicando atomic design, CANVA para el USERFLOW |
| Herr. de control de versiones | Git/GitHub y Gitflow, aplicando conventional commits |

## 📁 Estructura del Proyecto
```
newCuriousFacts/
├── icons/              # Iconos de botones
│   ├── cambio.png
│   ├── casa.png
│   ├── favorito.png
│   └── hoy-dia.png
├── javaScript/          # Carpeta de archivos del código de la aplicación.
│   ├── controls.js      # Botones de íconos 
│   ├── data.js          # Consumo de data de la API
│   ├── favorite.js      # Funciones: Añadir a favoritos y mostrar la lista de los mismos.
│   └── script.js        # Renderizado mostrar el hecho actual, el random y la lista de Favoritos (botones navbar)
├── index.html           # Página principal
├── README.md
└── style.css            # Estilos CSS
```

## 📐 Proceso de Desarrollo

*   **Planificación:** Se usó tablero Kanban en [Trello](https://trello.com/b/0D09cROk/curios-facts) para definir historias de usuario y tareas.

*   **Diseño:** Primero realicé el flujo de usuario (userflow) se realizó en [CANVA](https://www.canva.com/design/DAG6RP2_FM0/eGUi2TKWz9c_MgEUQqK63Q/edit?utm_content=DAG6RP2_FM0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) y la maquetación inicial se realizó en [Figma](https://www.figma.com/design/eFeEnUoTrhLpDB1uGbYgS8/CuriousFacts?node-id=1-2&p=f&t=MIH3auy2hFRE59aV-0).

*   **Control de Versiones:** Se aplicó la metodología [Gitflow](), trabajando en una rama `dev` principal y ramas de `feature` para cada tarea, con merges eventuales a `main`.

*   **Convenciones de nomenclatura:** Se usa nombres descriptivos en el idioma Inglés: en clases, id's, variables y funciones. Se detalla a continuación: 

| Tecnología | Convención |
|------------|------------|
| HTML y CSS | kebab-case (minúsculas con guión medio) |
| Javascript | camelCase (la primera palabra en minúsculas y las siguientes con mayúscula inicial) |
| Git y Github | Conventional Commits y Gitflow para un historial de commits limpio y descriptivo. |
| VS Code | Estructura de carpetas clasificadas y nombres de archivos en minúsculas, a excepción del README.md |


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