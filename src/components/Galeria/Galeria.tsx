import { NEGOCIO } from '../../data/negocio'
import estilos from './Galeria.module.css'

export function Galeria() {
  return (
    <section
      className={estilos.seccion}
      id="trabajos"
      aria-labelledby="galeria-titulo"
    >
      <div className={estilos.contenedor} data-revelar>
        <header className={estilos.cabecera}>
          <p className={estilos.etiqueta}>03 — Trabajos</p>
          <h2 className={estilos.titulo} id="galeria-titulo">
            Hecho aquí, <em>a mano</em>.
          </h2>
          <p className={estilos.entrada}>
            El taller, las sillas y el espejo donde se hace cada corte. Sin
            banco de imágenes.
          </p>
        </header>

        <ul className={estilos.grid}>
          {NEGOCIO.galeria.map((foto, indice) => (
            <li className={estilos.item} key={foto.id} data-vacia={!foto.src}>
              {foto.src ? (
                <img
                  className={estilos.imagen}
                  src={foto.src}
                  srcSet={
                    foto.srcChico
                      ? `${foto.srcChico} 800w, ${foto.src} 1200w`
                      : undefined
                  }
                  sizes="(min-width: 1184px) 554px, 50vw"
                  alt={foto.alt}
                  width={foto.ancho}
                  height={foto.alto}
                  style={
                    foto.posicion
                      ? { objectPosition: foto.posicion }
                      : undefined
                  }
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <span className={estilos.marco} aria-hidden="true">
                  <span className={estilos.marcoEtiqueta}>
                    Foto {String(indice + 1).padStart(2, '0')}
                  </span>
                </span>
              )}

              <span className={estilos.pie}>{foto.caption}</span>
            </li>
          ))}
        </ul>

        <a
          className={estilos.instagram}
          href={NEGOCIO.redes.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Ver más en Instagram
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
