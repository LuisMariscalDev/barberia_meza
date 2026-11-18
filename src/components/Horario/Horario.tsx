import { NEGOCIO, MENSAJE_PREDETERMINADO } from '../../data/negocio'
import { describirHorario, obtenerDiaActual } from '../../lib/horario'
import { crearEnlaceWhatsApp } from '../../lib/whatsapp'
import estilos from './Horario.module.css'

export function Horario() {
  const diaActual = obtenerDiaActual(NEGOCIO.horario)
  const whatsapp = crearEnlaceWhatsApp(NEGOCIO.telefono, MENSAJE_PREDETERMINADO)

  return (
    <section
      className={estilos.seccion}
      id="horario"
      aria-labelledby="horario-titulo"
    >
      <div className={estilos.contenedor} data-revelar>
        <header className={estilos.cabecera}>
          <p className={estilos.etiqueta}>04 — Horario y ubicación</p>
          <h2 className={estilos.titulo} id="horario-titulo">
            Cuándo y <em>dónde</em>.
          </h2>
          <p className={estilos.entrada}>
            Estos son los días y las horas en que estamos en el sillón.
          </p>
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
            <h3 className={estilos.bloqueTitulo}>Cómo llegar</h3>

            <address className={estilos.direccion}>
              {NEGOCIO.direccion}
              <span>
                {NEGOCIO.ciudad}, {NEGOCIO.estado}
              </span>
            </address>

            <a
              className={estilos.boton}
              href={NEGOCIO.enlaceMapa}
              target="_blank"
              rel="noreferrer"
            >
              Abrir en Google Maps
              <span aria-hidden="true">↗</span>
            </a>

            <a
              className={estilos.enlaceSecundario}
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Escribir por WhatsApp
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
