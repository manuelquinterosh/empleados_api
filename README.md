# 📊 API REST - Gestión de Empleados

Esta es una API REST construida con **Node.js** y **Express**, que permite gestionar empleados utilizando persistencia en un archivo JSON. Incluye funcionalidades CRUD, filtros por parámetros, estadísticas y validaciones.

---

## 📦 Características

- ✅ Crear, listar, actualizar y eliminar empleados.
- 🔍 Filtros por edad, puesto y departamento.
- 📈 Estadísticas generales de empleados.
- ✅ Validaciones de entrada con respuestas HTTP adecuadas.
- 🛡️ Middleware de logging y manejo de errores centralizado.
- 💾 Persistencia de datos en `./data/empleados.json`.

---

## 🗂 Estructura del Proyecto

```
📁 .
├── 📄 app.js
├── 📄 server.js
├── 📁 data
│   └── 📄 empleados.json
├── 📁 controllers
│   └── 📄 empleadosController.js
├── 📁 routes
│   └── 📄 empleadosRoutes.js
├── 📁 services
│   └── 📄 empleadosService.js
├── 📁 middlewares
│   ├── 📄 logger.js
│   └── 📄 errorHandler.js
├── 📁 utils
│   └── 📄 validarEmpleado.js
│   └── 📄 messages.js
├── 📄 .env
├── 📄 .gitignore
├── 📄 package.json
└── 📄 README.md
```

---

## ✅ Pasos para instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/api-empleados.git
cd api-empleados
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Crea un archivo `.env` en la raíz del proyecto

```ini
PORT=3000
```

### 4. Ejecuta el servidor

**Modo desarrollo (requiere nodemon):**

```bash
npm run dev
```

**Modo producción:**

```bash
npm start
```

---

## 🧪 Prueba los Endpoints

Puedes usar Postman o cURL para probar los siguientes endpoints:

---

### ➕ Crear empleado

```http
POST http://localhost:3000/empleados
```

**Body JSON:**

```json
{
  "nombre": "Ana Pérez",
  "edad": 35,
  "puesto": "Contadora",
  "departamento": "Contabilidad"
}
```

---

### 📋 Listar empleados

```http
GET http://localhost:3000/empleados
```

---

### 🔎 Filtrar empleados

```http
GET http://localhost:3000/empleados?edadMin=30&edadMax=40&puesto=Contadora&departamento=Contabilidad
```

---

### 👵 Empleados mayores de 30

```http
GET http://localhost:3000/empleados/mayores
```

---

### ✏️ Actualizar empleado

```http
PUT http://localhost:3000/empleados/5
```

**Body JSON:**

```json
{
  "edad": 36
}
```

---

### ❌ Eliminar empleado

```http
DELETE http://localhost:3000/empleados/5
```

---

### 📊 Obtener estadísticas

```http
GET http://localhost:3000/estadisticas
```

---

## 🧰 Tecnologías Utilizadas

- Node.js
- Express
- fs-extra
- dotenv
- nodemon

---

## 📄 Licencia

MIT © 2025 Manuel Quinteros

---

## 🙌 Autor

Desarrollado por Manuel Quinteros – manuelq_hernandez@outlook.com