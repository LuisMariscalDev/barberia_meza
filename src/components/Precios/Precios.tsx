import { NEGOCIO } from '../../data/negocio'
import { formatearPrecio } from '../../lib/formato'
import estilos from './Precios.module.css'

export function Precios() {
  return (
    <section
      className={estilos.seccion}
      id="precios"
      aria-labelledby="precios-titulo"
    >
      <div className={estilos.contenedor} data-revelar>
        <header className={estilos.cabecera}>
          <p className={estilos.etiqueta}>Precios</p>
          <h2 className={estilos.titulo} id="precios-titulo">
            Un solo precio. <em>Sin letras chiquitas.</em>
          </h2>
        </header>

        <div className={estilos.tarjeta}>
          <p className={estilos.rotulo}>— Servicios —</p>

          <ul className={estilos.lista}>
            {NEGOCIO.servicios.map((servicio) => (
              <li className={estilos.servicio} key={servicio.id}>
                <span className={estilos.nombre}>{servicio.nombre}</span>
                <span className={estilos.linea} aria-hidden="true" />
                <span className={estilos.precio}>
                  ${formatearPrecio(servicio.precio)}
                </span>
              </li>
            ))}
          </ul>

          <p className={estilos.pagos}>{NEGOCIO.formasPago}</p>
          <p className={estilos.duracion}>{NEGOCIO.duracionAproximada}.</p>
        </div>
      </div>
    </section>
  )
}
