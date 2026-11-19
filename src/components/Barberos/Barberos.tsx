import { NEGOCIO } from '../../data/negocio'
import { TarjetaBarbero } from '../TarjetaBarbero/TarjetaBarbero'
import estilos from './Barberos.module.css'

export function Barberos() {
  return (
    <section
      className={estilos.seccion}
      id="equipo"
      aria-labelledby="barberos-titulo"
    >
      <div className={estilos.contenedor} data-revelar>
        <header className={estilos.cabecera}>
          <p className={estilos.etiqueta}>02 — El equipo</p>
          <h2 className={estilos.titulo} id="barberos-titulo">
            Escríbele <em>directo</em> a tu barbero.
          </h2>
          <p className={estilos.entrada}>
            Cada barbero tiene su turno. Escríbele por WhatsApp y te contesta
            él, no un contestador.
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
