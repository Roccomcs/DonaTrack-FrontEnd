# DonaTrack

Frontend MVP para gestionar donaciones entre donantes, entidades beneficiarias y administradores.
Incluye landing pública, mapa de donaciones y 3 dashboards por rol.

## Caracteristicas

- Stack: React 19 + React Router 7 + Vite + Leaflet.
- Estado actual: app 100% frontend con datos mock en src/data.
- Autenticación: simulada con Context + localStorage.
- Dashboards disponibles: donante, entidad beneficiaria, administrador.

## Quick Start

Requisitos recomendados:

- Node.js 18+
- npm 9+

Instalación y ejecución:

```bash
npm install
npm run dev
```

Scripts útiles:

```bash
npm run lint
npm run build
npm run preview
```

## Rutas Clave

Públicas:

- / (landing)
- /explorar-donaciones (mapa)
- /explorar-donaciones/:donationId (detalle)
- /registro y subrutas de registro
- /login

Protegidas por rol:

- /donante/dashboard (role donor)
- /entidad/dashboard (role beneficiary)
- /admin/dashboard (role admin)

## Credenciales De Prueba

Donante:

- juan@example.com / 123456
- maria@example.com / 123456

Entidad beneficiaria:

- info@fundaciondespierta.org / 123456
- contacto@redsolitaria.org / 123456

Administrador:

- admin@donatrack.com / admin123

## Qué Puede Hacer Cada Rol

Donante:

- Ver y filtrar sus donaciones
- Explorar entidades beneficiarias
- Consultar incentivos, misiones e insignias
- Revisar notificaciones
- Seguir entregas activas (vista simulada)

Entidad beneficiaria:

- Registrar necesidades
- Ver donaciones asignadas
- Confirmar recepción de entregas
- Revisar entregas y notificaciones

Administrador:

- Gestionar donantes
- Gestionar donaciones pendientes
- Asignar donaciones a beneficiarios
- Gestionar camiones
- Ver rankings
- Importar donantes vía CSV (simulado)

## Arquitectura

- src/main.jsx: Bootstrap de app, Router y AuthProvider.
- src/App.jsx: Definición de rutas públicas/protegidas.
- src/context/: auth context + hook useAuth.
- src/pages/: páginas principales (landing, login, dashboards).
- src/components/: módulos por dominio (admin, donor, beneficiary, map).
- src/data/: fuente de datos mock.
- src/styles/: CSS por base/layout/componentes/páginas.

## Limitaciones Actuales

- Sin backend real ni base de datos.
- Login y autorización simulados en cliente.
- Persistencia solo en localStorage para sesión.
- Registros e importación CSV simulados (sin API real).
- Parte del tracking de entregas en dashboard de donante usa mapa placeholder.