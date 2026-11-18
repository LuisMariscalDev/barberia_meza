import estilos from './Cinta.module.css'

const MENSAJES = [
  'Corte clásico',
  'Las Juntas, Jalisco',
  'Agenda por WhatsApp',
  'Atención de barbero',
]

export function Cinta() {
  return (
    <div className={estilos.cinta} aria-hidden="true">
      <div className={estilos.pista}>
        {[0, 1].map((vuelta) => (
          <div className={estilos.grupo} key={vuelta}>
            {MENSAJES.map((mensaje) => (
              <span className={estilos.item} key={mensaje}>
                {mensaje}
                <span className={estilos.punto} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
