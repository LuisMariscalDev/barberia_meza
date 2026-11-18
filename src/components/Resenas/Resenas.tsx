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
          <p className={estilos.etiqueta}>03 — Reseñas</p>
          <h2 className={estilos.titulo} id="resenas-titulo">
            Búscanos <em>en Google</em>.
          </h2>
          <p className={estilos.entrada}>
            Las reseñas las escriben los clientes, no nosotros. Entra a leerlas
            o deja la tuya después del corte.
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
                {Array.from({ length: 5 }, (_, indice) => (
                  <span
                    key={indice}
                    data-activa={indice < Math.round(calificacion)}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
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
