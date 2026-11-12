# Reglas del proyecto

Reglas de trabajo para todos los que hacen commits en este repositorio.

## Idioma

- Código, comentarios, commits y documentación: **español**
- Los nombres en el código van **sin acentos ni ñ** (`anio`, no `año`), para evitar problemas entre editores y herramientas
- Lo que es del lenguaje o de las librerías se queda como es: `useState`, `map`, `props`, `children`

## Git

- `main` siempre debe compilar y funcionar. Se trabaja en una rama y se une por pull request.
- Nombres de rama: `feat/seccion-precios`, `fix/enlace-whatsapp`, `chore/configurar-prettier`
- Los commits siguen [Conventional Commits](https://www.conventionalcommits.org/es/). El prefijo va en inglés porque es parte del estándar, y la descripción en español:

  ```
  feat: agrega la sección de precios
  fix: corrige el enlace de WhatsApp del turno de la tarde
  style: ajusta el espaciado de las tarjetas del equipo
  docs: actualiza las fases en el README
  chore: configura Prettier
  refactor: extrae la función que arma el enlace de WhatsApp
  ```

- Un cambio por commit. Verbo en presente, en minúsculas y sin punto final.
- Antes de cada commit, `pnpm lint` y `pnpm build` deben pasar.

## Nombres

| Qué | Convención | Ejemplo |
|---|---|---|
| Variables y funciones | camelCase | `horarioBarbero`, `crearEnlaceWhatsApp` |
| Componentes, tipos e interfaces | PascalCase | `Precios`, `Barbero` |
| Constantes fijas | MAYUSCULAS_CON_GUION | `MENSAJE_PREDETERMINADO` |
| Booleanos | prefijo `es`, `esta` o `tiene` | `estaAbierto`, `tieneFoto` |
| Archivos de componentes | PascalCase | `Precios.tsx`, `Precios.module.css` |
| Variables CSS | kebab-case | `--color-dorado` |

Los nombres describen el dato que guardan. Sin abreviaturas (`btn`, `hor`, `datos2`).

## TypeScript

- El modo estricto se queda activado. Nada de `any`.
- Cada componente tiene una interfaz para sus props.
- Los tipos compartidos viven en `src/types`.

## Componentes

- Un componente por archivo y una sola responsabilidad por componente.
- Nada de contenido escrito en el JSX: precios, horarios, nombres y enlaces salen de `src/data`.
- Nada de valores sueltos: colores, tipografías y espaciados salen de los tokens en `src/styles/tokens.css`.

## HTML y CSS

- Elementos semánticos: `header`, `main`, `section`, `footer`. Un solo `h1` por página.
- `<a>` para navegar y `<button>` para acciones.
- Mobile first: los estilos base son para celular y solo se usan media queries `min-width`.
- Los estilos se aíslan con CSS Modules.
- Toda imagen lleva texto `alt`. Las decorativas usan `alt=""`.
- Los elementos interactivos miden al menos 44 px de alto y se pueden usar con teclado.

## Limpieza

- Sin `console.log`, sin código comentado y sin archivos que no se usen.
- Los comentarios explican **por qué**, no qué hace el código.
- Cada dependencia nueva necesita una razón. Si se resuelve en pocas líneas, no se instala una librería.
- Nada de secretos, llaves ni datos personales en el repositorio.

## Cuándo una sección está terminada

- Se ve igual que el diseño aprobado a 390 px de ancho
- Se puede usar solo con teclado
- Las imágenes tienen texto alternativo
- `pnpm lint` y `pnpm build` pasan