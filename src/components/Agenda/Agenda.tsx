import { NEGOCIO, MENSAJE_PREDETERMINADO } from '../../data/negocio'
import { crearEnlaceWhatsApp } from '../../lib/whatsapp'
import estilos from './Agenda.module.css'

export function Agenda() {
  const whatsapp = crearEnlaceWhatsApp(NEGOCIO.telefono, MENSAJE_PREDETERMINADO)

  return (
    <section
      className={estilos.seccion}
      id="agenda"
      aria-labelledby="agenda-titulo"
      data-tema="oscuro"
    >
      <span className={estilos.marca} aria-hidden="true">
        MEZA
      </span>

      <div className={estilos.contenedor} data-revelar>
        <p className={estilos.etiqueta}>Agenda</p>
        <h2 className={estilos.titulo} id="agenda-titulo">
          Aparta <em>tu lugar</em>.
        </h2>
        <p className={estilos.entrada}>
          Escríbenos por WhatsApp y dinos a qué hora pasas. Te confirmamos por
          el mismo chat.
        </p>

        <div className={estilos.acciones}>
          <a
            className={estilos.boton}
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Agendar por WhatsApp
            <span aria-hidden="true">→</span>
          </a>
          <a className={estilos.botonSecundario} href="#equipo">
            Conocer a los barberos
          </a>
        </div>
      </div>
    </section>
  )
}
