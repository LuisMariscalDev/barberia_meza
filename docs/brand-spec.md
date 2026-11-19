# Identidad de Barbería Meza

Sistema visual del sitio construido con los tokens de `src/styles/tokens.css`.
La base viene del artefacto aprobado; las diferencias de color y las piezas
extra se documentan abajo para no perder el acuerdo.

## Color

| Token                          | Valor     | Uso actual                                            |
| ------------------------------ | --------- | ----------------------------------------------------- |
| `--color-crema-claro`          | `#fbf6ec` | Fondo base, portada, equipo, horario, tarjetas        |
| `--color-crema`                | `#f3e6c8` | Secciones alternas, precios, trabajos                 |
| `--color-tarjeta`              | `#eadbb8` | Relleno de marcos de foto                             |
| `--color-borde`                | `#d9cba8` | Filetes, divisiones, bordes suaves                    |
| `--color-carbon`               | `#2a2a2a` | Tinta principal, barra fija, pie                      |
| `--color-texto-secundario`     | `#6b655a` | Texto de apoyo                                        |
| `--color-dorado`               | `#d4a64a` | Rellenos: botones, etiquetas de turno, franja, sellos |
| `--color-dorado-texto`         | `#8c6a1f` | Precios y acentos de 24 px o más                      |
| `--color-azul`                 | `#2e4a7d` | Fondo de reseñas, botón de mapa, foco                 |
| `--color-pie-texto`            | `#cfc6b2` | Texto del pie                                         |
| `--color-pie-texto-secundario` | `#a9a296` | Rótulos del pie                                       |

Reglas de uso:

- El dorado nunca se usa como color de texto pequeño. Para texto dorado está
  `--color-dorado-texto`, solo en 24 px o más.
- El azul se reserva para la sección de reseñas, el enlace de mapa y el foco.
- El rojo poste del artefacto no está en la paleta actual. La franja y los
  acentos usan dorado; si se recupera el rojo, hay que actualizar tokens,
  franja y documentación a la vez.

## Tipografía

| Familia          | Pesos cargados   | Uso                                      |
| ---------------- | ---------------- | ---------------------------------------- |
| DM Serif Display | 400, 400 itálica | Títulos, precio, firma de la marca       |
| Barlow Condensed | 600, 700         | Rótulos, botones, navegación, numeración |
| Barlow           | 400, 600         | Texto corrido, datos, enlaces            |

Las fuentes se sirven desde `src/assets/fonts` con `@font-face` local; no hay
llamadas a Google Fonts.

## Piezas del sitio

- **Portada:** marca tipográfica con logo, precio único, boleta con horario y
  dos CTA. El sello circular ya usa el logo; la foto del fade sigue pendiente.
- **Precios:** tarjeta con los cuatro servicios a $200, formas de pago y
  duración aproximada.
- **Equipo:** una tarjeta por barbero con foto, turno, horario y botón dorado
  de WhatsApp. Las fotos están pendientes.
- **Trabajos:** galería 2×2 con fotos del local, pie de foto y enlace a
  Instagram.
- **Reseñas:** 4.7 de 5 con 13 reseñas y etiquetas de lo que destacan los
  clientes.
- **Horario y ubicación:** tabla semanal con horario partido, dirección y
  enlace a Google Maps. El mapa no se incrusta.
- **Barra fija:** dos botones, Ulises y José, visible desde la primera pantalla
  en celular; se oculta a partir de 768 px.
- **Pie:** navegación, horario de hoy, WhatsApp, Instagram, Facebook, “Cómo
  llegar”, aviso de privacidad y crédito.

## Recursos de marca

- **Logo:** `public/imagenes/logo-barberia-meza.webp` (recorte circular con
  fondo transparente). Se usa en el encabezado, el sello de la portada, el pie
  y el favicon (`favicon-32.png`, `apple-touch-icon.png`). La versión para
  compartir en redes está en `logo-barberia-meza-og.jpg`.
- **Fotografías:** cuatro fotos del local en `public/imagenes/local-0*.webp`,
  con variantes de 800 px para móvil. Los originales de WhatsApp se guardan en
  `docs/fotos-originales/` para no publicarlos. Las fotos de los barberos y de
  cortes siguen pendientes.
- **Ficha de Google:** enlazada con 4.7 de calificación y 13 reseñas.

## Contenido confirmado

- Servicios: corte de cabello, fade, barba y corte de niño, $200 MXN cada uno.
- Formas de pago: efectivo, transferencia y tarjeta.
- Barberos: Ulises (mañana, lunes a sábado 11:00–15:00) y José (tarde, lunes a
  viernes 17:00–21:00).
- Horario: lunes a viernes 11:00–15:00 y 17:00–21:00; sábado 11:00–15:00;
  domingo cerrado.
- Dirección: C. Paseo de la Industria, Real Ixtapa, 48280 Las Juntas, Jal.
- Redes: Instagram `@barberiameza98` y Facebook.

## Pendientes antes de publicar

- **Confirmar el teléfono de WhatsApp.** `src/data/negocio.ts` usa
  `523221752714`, tomado de la página de Facebook de la barbería. Confirmar con
  Ulises que es el número de citas y si cada barbero tiene uno propio.
- Fotos de Ulises y José trabajando, y fotos de cortes para completar la
  galería.
- `og:image` definitiva cuando exista dominio: usar
  `/imagenes/logo-barberia-meza-og.jpg` o una foto del local.
- Dominio y hospedaje con uso comercial permitido (Netlify o Cloudflare Pages,
  no el plan gratuito de Vercel).
- Revisión legal del texto del aviso de privacidad.

## Reglas que no cambian

- Sin Google Analytics, píxeles de redes ni cookies de terceros.
- Sin mapa embebido: solo enlace a Google Maps.
- Precios en pesos y sin cargos ocultos.
- Fotos solo de la barbería y con permiso; sin caras de clientes, menores
  nunca de frente y sin marcas ajenas protagonistas.
- Imágenes en WebP, con dimensiones, `loading="lazy"` y texto alternativo.
- Botones de 44 px o más, navegables con teclado y con foco visible.
- Probar los dos botones de WhatsApp en un celular real antes de entregar.
