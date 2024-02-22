# Cómo crear un API REST usando Node.js, Express y MySQL 😱

#### Descubre cómo crear tu propia API REST con Node.js y Express de manera sencilla y eficiente. Aprende los fundamentos de los métodos HTTP y explora cómo desarrollar tus propias APIs de forma rápida y práctica. ¡Domina el poder de Node.js para construir aplicaciones web escalables y flexibles!

#### Inicializar un proyecto en Node.js:

    npm init -y

#### Instalar

    npm install express axios cors mysql2

#### Para instalar todas las dependencias del proyecto, solo basta ejecutar

    npm install o npm i

#### Para correr el proyecto, solo debes ejecutar el proyectar

    node --watch app.js ----> Opcion 1
    node app.js    -----> Opcion 2

##### Nota

    Se debe definir en el package.json la propiedad   "type": "module", indica que el proyecto o archivo JavaScript está utilizando el módulo ECMAScript (ESM) en lugar del sistema de módulos CommonJS.
    "type": "module", indica que usaremos la especificación de módulos ECMAScript, que es una forma más moderna y estándar de organizar y modularizar el código en JavaScript.

#####

## Lista de Endpoint API

#### Método GET ✅

    👉 http://127.0.0.1:3000/alumnos

        [
            {
                "id": "1",
                "nombre_alumno": "Braudin",
                "email_alumno": "braudin@gmail.com",
                "curso_alumno": "React Native",
                "sexo_alumno": "M",
                "habla_ingles": "0",
                "fecha_registro": "2024-02-18 20:49:51"
            },
            {
                "id": "16",
                "nombre_alumno": "urian Viera",
                "email_alumno": "urian@gmail.com",
                "curso_alumno": "REACT",
                "sexo_alumno": "M",
                "habla_ingles": "0",
                "fecha_registro": "2024-02-18 20:58:43"
            }
        ]

#### Método GET ✅

    👉 http://127.0.0.1:3000/alumnos/16
        {
            "id": "16",
            "nombre_alumno": "urian Viera",
            "email_alumno": "urian@gmail.com",
            "curso_alumno": "REACT",
            "sexo_alumno": "M",
            "habla_ingles": "0",
            "fecha_registro": "2024-02-18 20:58:43"
        }

#### Método POST ✅

    👉 http://127.0.0.1:3000/alumnos
        {
            "nombre_alumno": "Torres ",
            "email_alumno": "torres@gmail.com",
            "curso_alumno": "sql",
            "sexo_alumno": "F",
            "habla_ingles": "1",
            "fecha_registro": "2024-02-18 20:49:51"
        }

#### Método PUT ✅

    👉 http://127.0.0.1:3000/alumnos/18
        {
            "id": "1",
            "nombre_alumno": "Braudin Laya",
            "email_alumno": "braudin@gmail.com",
            "curso_alumno": "React Native",
            "sexo_alumno": "M",
            "habla_ingles": "0",
            "fecha_registro": "2024-02-18 20:49:51"
        }

#### Método DELETE ✅

    👉 http://127.0.0.1:3000/alumnos/15

### Expresiones de Gratitud 🎁

    Comenta a otros sobre este proyecto 📢
    Invita una cerveza 🍺 o un café ☕
    Paypal iamdeveloper86@gmail.com
    Da las gracias públicamente 🤓.

## No olvides SUSCRIBIRTE 👍
