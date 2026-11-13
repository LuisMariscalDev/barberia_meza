# Barbería MEZA

Landing page para una barbería en Las Juntas, Jalisco. Un cliente nuevo ve el precio, elige a su barbero y agenda por WhatsApp en menos de un minuto.

**Sitio:** _próximamente_

<!-- TODO: captura en celular -->

## Qué incluye

- Precio único visible desde el inicio
- Una tarjeta por barbero, con su turno y su botón de WhatsApp con el mensaje ya escrito
- Barra fija en celular para agendar a un toque
- Galería, calificación de Google, horario y enlace para llegar

## Tecnologías

React 19 · TypeScript · Vite · CSS Modules · pnpm

## Decisiones

- **Sin backend:** las citas van por enlaces `wa.me`, que es como ya trabaja la barbería.
- **Sin cookies ni rastreo de terceros:** el mapa es un enlace y las tipografías se sirven desde el propio sitio.
- **Contenido en un archivo tipado:** cambiar un precio o un horario es editar una línea, y TypeScript avisa si falta un dato.
- **Mobile first y accesible:** estilos base para celular, contraste AA y navegación con teclado.

## Cómo correrlo

Requiere Node 22 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

## Siguiente

Registro de cortes para los barberos y reservas en línea sin crear cuenta.

---

Hecho por [Luis Mariscal](https://github.com/LuisMariscalDev). Las fotos y el logo pertenecen a Barbería MEZA y se usan con su permiso.
