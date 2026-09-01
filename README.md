# QA-testing-repo

Repositorio dedicado a pruebas de QA (Quality Assurance). Contiene casos de prueba, automatizaciones, reportes y recursos para garantizar la calidad del software.

## Estructura del repositorio

```
QA-testing-repo/
├── app/                # Aplicación de ejemplo (ecommerce simple)
│   ├── login.html      # Página de login
│   ├── index.html      # Homepage con catálogo de productos
│   ├── cart.html       # Carrito de compras
│   ├── styles.css      # Estilos
│   ├── store.js        # Datos de productos y lógica del carrito
│   ├── auth.js         # Autenticación (sessionStorage)
│   ├── home.js         # Lógica del homepage
│   └── cart.js         # Lógica del carrito
├── tests/
│   ├── e2e/            # Pruebas end-to-end
│   ├── integration/    # Pruebas de integración
│   ├── unit/           # Pruebas unitarias
│   └── performance/    # Pruebas de rendimiento
├── docs/
│   ├── test-plans/     # Planes de prueba
│   ├── test-cases/     # Casos de prueba
│   └── reports/        # Reportes de ejecución
├── config/             # Configuraciones de herramientas de QA
├── data/               # Datos de prueba (fixtures, mocks)
└── scripts/           # Scripts de automatización
```

## Aplicación de ejemplo

El repositorio incluye un ecommerce simple (`app/`) que sirve como objetivo para las pruebas de QA. Es una app estática (HTML + JS vanilla) sin dependencias.

### Características

- **Login** (`login.html`): autenticación simulada con sesión en `sessionStorage`.
- **Homepage** (`index.html`): catálogo de 6 productos con botón "Agregar al carrito".
- **Carrito** (`cart.html`): ver items, total, finalizar compra y vaciar carrito (persiste en `localStorage`).

### Credenciales de prueba

- **Usuario:** `test@example.com`
- **Contraseña:** `1234`

### Cómo ejecutarla

Como es estática, puedes abrirla directamente con cualquier servidor estático:

```bash
# Opción 1: Python
python3 -m http.server 8000 --directory app

# Opción 2: npx
npx serve app
```

Luego abrir http://localhost:8000 (redirige al login).

## Requisitos

- [Node.js](https://nodejs.org/) >= 18
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

```bash
git clone https://github.com/mwilkins-eager/QA-testing-repo.git
cd QA-testing-repo
npm install
```

## Uso

### Ejecutar todas las pruebas

```bash
npm test
```

### Ejecutar pruebas por tipo

```bash
# Pruebas unitarias
npm run test:unit

# Pruebas de integración
npm run test:integration

# Pruebas end-to-end
npm run test:e2e

# Pruebas de rendimiento
npm run test:performance
```

## Convences

- Los nombres de los archivos de prueba deben seguir el patrón `*.test.js` o `*.spec.js`.
- Los casos de prueba deben documentarse en `docs/test-cases/`.
- Los reportes de ejecución se guardan en `docs/reports/` con el formato `YYYY-MM-DD-<modulo>-report.md`.

## Contribución

1. Crea una rama desde `main`: `git checkout -b feature/nueva-prueba`
2. Realiza tus cambios y haz commit: `git commit -m "Agregar prueba para X"`
3. Sube la rama: `git push origin feature/nueva-prueba`
4. Abre un Pull Request.

## Licencia

MIT
