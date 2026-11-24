import estilos from './Cinta.module.css'

const MENSAJES = [
  '4.7 ★ (13 reseñas)',
  'Aire acondicionado',
  'Buena música',
  'Niños bienvenidos',
]

export function Cinta() {
  return (
    <div className={estilos.cinta} aria-hidden="true">
      <div className={estilos.pista}>
        {Array.from({ length: 8 }, (_, vuelta) => (
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
