# Identidad de Barbería Meza

Sistema visual tomado del artefacto de diseño aprobado y de los tokens que ya
viven en `src/styles/tokens.css`. Todo lo que se construya en el sitio sale de
aquí; no se inventan tonos ni familias.

## Color

| Token                          | Valor     | Uso                                 |
| ------------------------------ | --------- | ----------------------------------- |
| `--color-crema-claro`          | `#fbf6ec` | Fondo base, papel                   |
| `--color-crema`                | `#f3e6c8` | Secciones alternas, tarjetas suaves |
| `--color-tarjeta`              | `#eadbb8` | Relleno de marcos de foto           |
| `--color-borde`                | `#d9cba8` | Filetes, divisiones                 |
| `--color-carbon`               | `#2a2a2a` | Tinta principal, botones, pie       |
| `--color-texto-secundario`     | `#6b655a` | Texto de apoyo                      |
| `--color-dorado`               | `#d4a64a` | Rellenos, sellos, detalles          |
| `--color-dorado-texto`         | `#8c6a1f` | Precios y acentos de 24 px o más    |
| `--color-rojo`                 | `#b3282d` | Sello de goma, banda de cierre      |
| `--color-azul`                 | `#2e4a7d` | Banda de reseñas, enlace de mapa    |
| `--color-pie-texto`            | `#cfc6b2` | Texto del pie                       |
| `--color-pie-texto-secundario` | `#a9a296` | Rótulos del pie                     |

Los derivados (`--color-dorado-tenue`, `--color-crema-tenue`,
`--color-tinta-tenue`) se generan con `color-mix()` a partir de estos valores.

## Tipografía

| Familia          | Pesos cargados   | Uso                                      |
| ---------------- | ---------------- | ---------------------------------------- |
| DM Serif Display | 400, 400 itálica | Títulos, precio, firma de la marca       |
| Barlow Condensed | 600, 700         | Rótulos, botones, navegación, numeración |
| Barlow           | 400, 600         | Texto corrido, datos, enlaces            |

Las fuentes se sirven desde `src/assets/fonts` con `@font-face` local; no hay
llamadas a Google Fonts.

## Recursos de marca

- **Logo:** pendiente. Mientras no exista el archivo oficial, la marca se
  compone tipográficamente y el favicon usa el monograma M.
- **Fotografías:** pendientes. Las tarjetas de barbero y la galería muestran
  marcos rotulados en lugar de siluetas o imágenes de banco.
- **Ficha de Google:** pendiente de enlazar con la calificación y el número de
  reseñas reales.

## Contenido pendiente

- Precio real del corte.
- Nombres, turnos, teléfonos y fotos de los barberos.
- Dirección exacta y enlace corto de Google Maps.
- Horario definitivo por día.
- Enlace al perfil de Google Business.
