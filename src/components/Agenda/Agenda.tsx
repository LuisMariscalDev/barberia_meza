import estilos from './Agenda.module.css'

export function Agenda() {
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
          Tu próximo corte empieza <em>aquí</em>.
        </h2>
        <p className={estilos.entrada}>
          Elige a tu barbero y acuerda directamente con él el día y la hora de
          tu visita.
        </p>

        <div className={estilos.acciones}>
          <a className={estilos.boton} href="#equipo">
            Conocer a los barberos
          </a>
        </div>
      </div>
    </section>
  )
}
