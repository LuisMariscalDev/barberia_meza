import type { CSSProperties } from 'react'
import { NEGOCIO } from '../../data/negocio'
import estilos from './Resenas.module.css'

export function Resenas() {
  const calificacion = NEGOCIO.calificacion

  return (
    <section
      className={estilos.seccion}
      id="resenas"
      aria-labelledby="resenas-titulo"
      data-tema="oscuro"
    >
      <div className={estilos.contenedor} data-revelar>
        <div className={estilos.texto}>
          <p className={estilos.etiqueta}>Reseñas</p>
          <h2 className={estilos.titulo} id="resenas-titulo">
            Lo que dicen <em>los clientes</em>.
          </h2>
          <p className={estilos.entrada}>
            Las experiencias hablan por sí solas. Lee las opiniones en Google o
            comparte la tuya después de tu visita.
          </p>
          <a
            className={estilos.enlace}
            href={NEGOCIO.enlaceResenas}
            target="_blank"
            rel="noreferrer"
          >
            Ver reseñas en Google
            <span aria-hidden="true">↗</span>
          </a>

          <ul
            className={estilos.etiquetas}
            aria-label="Lo que destacan los clientes"
          >
            {NEGOCIO.etiquetasResenas.map((etiqueta) => (
              <li key={etiqueta}>{etiqueta}</li>
            ))}
          </ul>
        </div>

        <div className={estilos.ficha}>
          <p className={estilos.google}>Google</p>

          {calificacion === null ? (
            <>
              <p className={estilos.estrellaVacia} aria-hidden="true">
                ★
              </p>
              <p className={estilos.escala}>Sin calificación</p>
            </>
          ) : (
            <>
              <p className={estilos.puntaje}>{calificacion.toFixed(1)}</p>
              <p className={estilos.escala}>de 5 estrellas</p>

              <div
                className={estilos.estrellas}
                role="img"
                aria-label={`Calificación de ${calificacion} de 5`}
              >
                {Array.from({ length: 5 }, (_, indice) => {
                  const relleno = Math.min(
                    Math.max(calificacion - indice, 0),
                    1,
                  )
                  const estado =
                    relleno === 1
                      ? 'total'
                      : relleno === 0
                        ? 'vacio'
                        : 'parcial'

                  return (
                    <span
                      key={indice}
                      aria-hidden="true"
                      data-relleno={estado}
                      style={
                        estado === 'parcial'
                          ? ({
                              '--relleno': relleno,
                            } as CSSProperties)
                          : undefined
                      }
                    >
                      ★
                    </span>
                  )
                })}
              </div>
            </>
          )}

          <p className={estilos.cantidad}>
            {NEGOCIO.resenas === null
              ? 'Reseñas de clientes'
              : `${NEGOCIO.resenas} reseñas`}
          </p>

          <p className={estilos.pieFicha}>En Google Maps</p>
        </div>
      </div>
    </section>
  )
}
