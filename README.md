# 📊 API REST - Gestión de Empleados

Esta es una API REST construida con **Node.js** y **Express**, que permite gestionar empleados utilizando persistencia en un archivo JSON. Incluye funcionalidades CRUD, filtros por parámetros, estadísticas y validaciones robustas.

## 📦 Características

- ✅ Crear, listar, actualizar y eliminar empleados.
- 🔍 Filtros por edad, puesto y departamento.
- 📈 Estadísticas generales de empleados.
- ✅ Validaciones de entrada con respuestas HTTP adecuadas.
- 🛡️ Middleware de logging y manejo de errores centralizado.
- 💾 Persistencia de datos en `./data/empleados.json`.

## 🗂 Estructura del Proyecto

- 📁 .
  - 📄 app.js
  - 📄 server.js
  - 📁 data
    - 📄 empleados.json
  - 📁 controllers
    - 📄 empleadosController.js
  - 📁 routes
    - 📄 empleadosRoutes.js
  - 📁 services
    - 📄 empleadosService.js
  - 📁 middlewares
    - 📄 logger.js
    - 📄 errorHandler.js
  - 📁 utils
    - 📄 validarEmpleado.js
  - 📄 .env
  - 📄 .gitignore
  - 📄 package.json
  - 📄 README.md

## 🚀 Instalación y Uso

### Requisitos previos

- Node.js >= 14.x
- npm >= 6.x
- Git (opcional pero recomendado)
- Postman o cURL (para probar la API)

### Pasos para instalación y ejecución

1. **Clona el repositorio**

```bash
git clone https://github.com/tu-usuario/api-empleados.git
cd api-empleados

2. **Instala las dependencias**

```bash
npm install

3. **Crea un archivo .env en la raíz del proyecto**

```ini
PORT=3000

4. **Ejecuta el servidor**

```bash
En modo desarrollo (requiere nodemon):
npm run dev

```bash
En modo producción:
npm start

5. **Prueba los endpoints**

```bash
Abre Postman o tu navegador y realiza peticiones como:

➕ Crear empleado
POST /empleados
POST http://localhost:3000/empleados

Body (JSON):
```json
{
  "nombre": "Ana Pérez",
  "edad": 35,
  "puesto": "Contadora",
  "departamento": "Contabilidad"
}


