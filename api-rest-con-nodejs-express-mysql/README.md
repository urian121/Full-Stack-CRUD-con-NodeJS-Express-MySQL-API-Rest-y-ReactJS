# API REST - Backend

**API REST para gestión de alumnos con Node.js, Express y MySQL**

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar servidor
node server.js
```

## 📦 Dependencias

- **express:** Framework web para Node.js
- **mysql2:** Cliente MySQL para Node.js
- **cors:** Middleware para habilitar CORS

## ⚙️ Configuración

- **Puerto:** 3000
- **Base URL:** http://localhost:3000
- **Tipo de módulo:** ESM ("type": "module")

## 📋 Endpoints API

### GET `/alumnos`
**Obtener todos los alumnos**
```json
[
  {
    "id": 1,
    "nombre_alumno": "Juan Pérez",
    "email_alumno": "juan@gmail.com",
    "curso_alumno": "React",
    "sexo_alumno": "M",
    "habla_ingles": 1,
    "fecha_registro": "2024-02-18 20:49:51"
  }
]
```

### GET `/alumnos/:id`
**Obtener alumno por ID**
```json
{
  "id": 1,
  "nombre_alumno": "Juan Pérez",
  "email_alumno": "juan@gmail.com",
  "curso_alumno": "React",
  "sexo_alumno": "M",
  "habla_ingles": 1,
  "fecha_registro": "2024-02-18 20:49:51"
}
```

### POST `/alumnos`
**Crear nuevo alumno**
```json
{
  "nombre_alumno": "María García",
  "email_alumno": "maria@gmail.com",
  "curso_alumno": "Node.js",
  "sexo_alumno": "F",
  "habla_ingles": 1
}
```

### PUT `/alumnos/:id`
**Actualizar alumno existente**
```json
{
  "nombre_alumno": "Juan Carlos Pérez",
  "email_alumno": "juancarlos@gmail.com",
  "curso_alumno": "Full Stack",
  "sexo_alumno": "M",
  "habla_ingles": 1
}
```

### DELETE `/alumnos/:id`
**Eliminar alumno por ID**

Respuesta: `200 OK`
