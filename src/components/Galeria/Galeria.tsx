import { NEGOCIO } from '../../data/negocio'
import estilos from './Galeria.module.css'

export function Galeria() {
  return (
    <section
      className={estilos.seccion}
      id="galeria"
      aria-labelledby="galeria-titulo"
    >
      <div className={estilos.contenedor} data-revelar>
        <header className={estilos.cabecera}>
          <p className={estilos.etiqueta}>02 — El trabajo</p>
          <h2 className={estilos.titulo} id="galeria-titulo">
            El sillón, <em>sin filtros</em>.
          </h2>
          <p className={estilos.entrada}>
            Cortes que salen del sillón, no de un banco de imágenes.
          </p>
        </header>

        <ul className={estilos.grid}>
          {NEGOCIO.galeria.map((foto, indice) => (
            <li className={estilos.item} key={foto.id} data-vacia={!foto.src}>
              {foto.src ? (
                <img className={estilos.imagen} src={foto.src} alt={foto.alt} />
              ) : (
                <span className={estilos.marco} aria-hidden="true">
                  <span className={estilos.marcoEtiqueta}>
                    Foto {String(indice + 1).padStart(2, '0')}
                  </span>
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
