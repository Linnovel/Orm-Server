# PERN Backend

Este proyecto es un backend básico usando Node.js, Express, Sequelize y PostgreSQL. Puedes usar TablePlus para gestionar tu base de datos de forma visual.

## Requisitos

- Node.js >= 18
- PostgreSQL
- TablePlus (opcional, para gestionar la base de datos)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd pern-backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Copia el archivo `.env.template` a `.env` y edítalo con tus datos:
   ```bash
   cp .env.template .env
   # Edita .env con tus credenciales
   ```
4. Asegúrate de tener una base de datos PostgreSQL creada. Puedes usar TablePlus para crearla fácilmente.
5. Ejecuta las migraciones o sincroniza los modelos (según tu configuración).
6. Inicia el servidor:
   ```bash
   npm run dev
   ```

## Variables de entorno

Configura tu archivo `.env` con los siguientes valores (ver `.env.template`):

- `DATABASE_URL`: URL de conexión a tu base de datos PostgreSQL.
- `PORT`: Puerto donde correrá el servidor (opcional, por defecto 3000).

## Ejemplo de conexión con TablePlus

1. Abre TablePlus y crea una nueva conexión PostgreSQL.
2. Usa los mismos datos que tienes en tu `.env` para conectar.
3. Podrás ver y editar las tablas creadas por Sequelize.

## Endpoints principales

- `POST /products` — Crear producto
- `GET /products` — Listar productos
- `GET /products/:id` — Obtener producto por id
- `PUT /products/:id` — Actualizar producto
- `DELETE /products/:id` — Eliminar producto

---

¡Listo! Ahora puedes usar y modificar el backend según tus necesidades.
