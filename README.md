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
*   Tests unitarios implementados con Vitest.

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
├── css/                 → Carpeta de estilos CSS
│   └── style.css
├── img/                 → Carpeta de imágenes
│   ├── cambio.png
│   ├── casa.png
│   ├── favorito.png
│   ├── hoy-dia.png
│   └── test.png
├── js/                  → Carpeta de archivos del código de la aplicación:
│   ├── controls.js        → Botones de íconos 
│   ├── data.js            → Consumo de data de la API
│   ├── favorite.js        → Funciones: Añadir a favoritos y mostrar la lista de los mismos
│   └── script.js          → Renderizado del los botones del navbar
├── test/                 → Carpeta Test
│   └── data.test.js
├── .gitignore
├── index.html           → Página principal
├── package-lock.json
├── package.json         → Configuración de las dependencias del proyecto  
├── README.md
└── vite.config.js       → Configuración del DOM en Vitest     
```

## 📐 Proceso de Desarrollo

*   **Planificación:** Se usó tablero Kanban en [Trello](https://trello.com/b/0D09cROk/curios-facts) para definir historias de usuario y tareas.

*   **Diseño:** Primero realicé el flujo de usuario (userflow) se realizó en [CANVA](https://www.canva.com/design/DAG6RP2_FM0/eGUi2TKWz9c_MgEUQqK63Q/edit?utm_content=DAG6RP2_FM0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) y la maquetación inicial se realizó en [Figma](https://www.figma.com/design/eFeEnUoTrhLpDB1uGbYgS8/CuriousFacts?node-id=1-2&p=f&t=MIH3auy2hFRE59aV-0), aplicando la metodología Atomic design.

*   **Convenciones de nomenclatura:** Se usa nombres descriptivos en el idioma Inglés: en clases, id's, variables y funciones. Se detalla a continuación: 

| Tecnología | Convención |
|------------|------------|
| HTML y CSS | **kebab-case** (minúsculas con guión medio) |
| Javascript | **camelCase** (la primera palabra en minúsculas y las siguientes con mayúscula inicial) |
| Git y Github | Conventional Commits y Gitflow para un historial de commits limpio y descriptivo. |
| VS Code | Estructura de carpetas clasificadas y nombres de archivos en minúsculas, a excepción del README.md |

*   **Control de Versiones:** Se aplicó la metodología **Gitflow**, trabajando en una rama `dev` principal y ramas de `feature` para cada tarea, con merges a `main`.

*   **Pruebas unitarias:** Se usa **Vitest** para realizar los test unitarios. En este proyecto se aplica al archivo data.js testeando la función que obtiene información del API, las consideraciones son: que la respuesta sea de tipo Objeto y que devuelva la estructura específica del objeto (se agrega un objeto falso, un MOCK que simula la respuesta de la API). Durante las pruebas, me marcaba error en el DOM (document.getElementById), ya que no es un navegador web, *Vitest* no lo reconoce. Para resolver esto, hay que indicarle a Vitest que simule un entorno de navegador para que  *document* esté disponible cuando ejecute tus tests. Tuve que realizar los siguientes pasos:

1. **Instalar el paquete JSDOM**

```bash
   npm install jsdom --save-dev
```

2. **Crear un archivo llamado vite.config.js** en la raíz del proyecto, ya que no lo encontré en la carpeta node_modules.

3. **Pegar este código** en el archivo vite.config.js:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
});
```

4. **El resultado,** se obtuvo los test exitosos:

<div align="center">
  <img src="/img/test.png" width="200px">
</div>

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

3. **Instala las dependencias**
```bash
   npm install
```

4. **Inicia Live Server**
   - Click derecho en `index.html`
   - Selecciona "Open with Live Server"
   - El proyecto se abrirá en `http://localhost:5500`

> ⚠️ **Importante**: Es necesario usar Live Server para que las rutas relativas funcionen correctamente.

## 👤 Autora

[Geraldine Saco](https://github.com/GeraldineSaco) - Desarrolladora del proyecto.