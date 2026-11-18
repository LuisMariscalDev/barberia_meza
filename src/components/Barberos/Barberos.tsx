import { NEGOCIO } from '../../data/negocio'
import { TarjetaBarbero } from '../TarjetaBarbero/TarjetaBarbero'
import estilos from './Barberos.module.css'

export function Barberos() {
  return (
    <section
      className={estilos.seccion}
      id="barberos"
      aria-labelledby="barberos-titulo"
    >
      <div className={estilos.contenedor} data-revelar>
        <header className={estilos.cabecera}>
          <p className={estilos.etiqueta}>01 — Los barberos</p>
          <h2 className={estilos.titulo} id="barberos-titulo">
            Elige quién <em>te corta</em>.
          </h2>
          <p className={estilos.entrada}>
            Cada barbero tiene su turno. Escríbele directo y te contesta él, no
            un contestador.
          </p>
        </header>

        <ul className={estilos.lista}>
          {NEGOCIO.barberos.map((barbero, indice) => (
            <li className={estilos.item} key={barbero.id}>
              <TarjetaBarbero barbero={barbero} indice={indice} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
