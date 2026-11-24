import { NEGOCIO } from '../../data/negocio'
import { describirHorario, obtenerDiaActual } from '../../lib/horario'
import estilos from './Horario.module.css'

export function Horario() {
  const diaActual = obtenerDiaActual(NEGOCIO.horario)

  return (
    <section
      className={estilos.seccion}
      id="ubicacion"
      aria-labelledby="horario-titulo"
    >
      <div className={estilos.contenedor} data-revelar>
        <header className={estilos.cabecera}>
          <p className={estilos.etiqueta}>Ubicación</p>
          <h2 className={estilos.titulo} id="horario-titulo">
            Te esperamos en <em>{NEGOCIO.colonia}</em>.
          </h2>
        </header>

        <div className={estilos.grid}>
          <div className={estilos.bloque}>
            <h3 className={estilos.bloqueTitulo}>Horario</h3>

            <table className={estilos.tabla}>
              <caption className={estilos.oculto}>
                Horario de atención de {NEGOCIO.nombre}
              </caption>
              <tbody>
                {NEGOCIO.horario.map((dia) => {
                  const esHoy = dia.indice === diaActual?.indice

                  return (
                    <tr
                      key={dia.dia}
                      data-hoy={esHoy}
                      data-cerrado={dia.cerrado}
                    >
                      <th scope="row">
                        {dia.dia}
                        {esHoy && <span className={estilos.hoy}>Hoy</span>}
                      </th>
                      <td>{describirHorario(dia)}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className={estilos.ubicacion}>
            <h3 className={estilos.bloqueTitulo}>Dirección</h3>

            <address className={estilos.direccion}>
              {NEGOCIO.direccion}
              <span>
                {NEGOCIO.colonia}, {NEGOCIO.codigoPostal} {NEGOCIO.ciudad},{' '}
                {NEGOCIO.estado}
              </span>
            </address>

            <a
              className={estilos.boton}
              href={NEGOCIO.enlaceMapa}
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className={estilos.enlaceSecundario}
              href="#equipo"
              rel="noreferrer"
            >
              Elige a tu barbero.
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
