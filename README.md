# Barbería MEZA

Landing page para una barbería de barrio en Las Juntas, Jalisco. Hecha para un cliente real, con un objetivo: que un cliente nuevo pueda ver el precio, elegir a su barbero y agendar por WhatsApp en menos de un minuto.

**Estado:** en desarrollo · **Sitio:** _próximamente_

<!-- TODO: agregar una captura en celular cuando estén listas las primeras secciones -->

## El problema

Barbería MEZA no tenía página web. Su precio, horario y datos de contacto estaban repartidos entre Instagram y Google Maps. Además trabajan dos barberos en turnos distintos y cada uno agenda por su propio WhatsApp, así que un cliente nuevo también necesita saber a quién escribirle y a qué hora.

## La solución

Un sitio de una sola página, rápido y pensado primero para celular:

- Un solo precio para todos los servicios, visible desde el inicio
- Una tarjeta por barbero con su turno y su propio botón de WhatsApp, con el mensaje ya escrito
- Barra fija inferior en celular, para agendar siempre a un toque
- Galería, calificación de Google, horario y enlace "Cómo llegar"
- Aviso de privacidad corto

## Tecnologías

| | |
|---|---|
| Framework | React 19 + TypeScript |
| Herramienta de build | Vite |
| Estilos | CSS Modules + variables CSS (tokens de diseño) |
| Gestor de paquetes | pnpm |
| Hosting | Estático (por definir) |

## Decisiones y su porqué

- **Sin backend.** Las citas van por enlaces `wa.me`, que es como ya trabaja la barbería. Nada que mantener y nada que se pueda caer.
- **Sin cookies, analíticas ni contenido incrustado de terceros.** El sitio no recoge datos personales. El mapa es un enlace y no un mapa incrustado, y las tipografías se sirven desde el propio sitio, así que nadie rastrea a los visitantes.
- **El contenido vive en un solo archivo tipado.** Precios, horarios y contactos se definen en `src/data` con interfaces de TypeScript. Cambiar un precio es editar una línea, y el compilador avisa si falta un dato.
- **Mobile first.** La mayoría de los clientes llega desde Instagram o Google Maps en su celular. Los estilos base son para 390 px y las pantallas grandes se agregan con media queries `min-width`.
- **Accesible desde el inicio.** HTML semántico, contraste AA, textos alternativos, navegación con teclado y botones de al menos 44 px.

## Estructura del proyecto

```
src/
├── assets/        Imágenes, logo y tipografías
├── components/    Un componente por sección de la página
├── data/          Contenido tipado: servicios, barberos, horario
├── types/         Interfaces de TypeScript compartidas
├── styles/        Tokens de diseño y estilos globales
└── utils/         Funciones auxiliares (por ejemplo, el enlace de WhatsApp)
```

## Cómo correrlo

Requiere Node 22 o superior y pnpm.

```bash
pnpm install
pnpm dev        # servidor de desarrollo
pnpm lint       # revisar el código con ESLint
pnpm build      # verificar tipos y compilar para producción
```

## Fases

- [ ] **Fase 1 · Landing page** (este repositorio, en curso)
- [ ] **Fase 2 · Registro de cortes:** panel privado para que los barberos lleven el historial de clientes y cortes
- [ ] **Fase 3 · Reservas en línea:** el cliente elige barbero y horario sin crear una cuenta

## Sobre este proyecto

Es mi primer proyecto freelance. Lo construyo mientras aprendo React y TypeScript, y el cliente recibe un sitio profesional para su negocio. El diseño fue revisado y aprobado por el cliente antes de empezar a programar.

Hecho por [Luis Mariscal](https://github.com/LuisMariscalDev).

Las fotos y el logo pertenecen a Barbería MEZA y se usan con su permiso.