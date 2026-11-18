import { NEGOCIO, MENSAJE_PREDETERMINADO } from '../../data/negocio'
import { describirHorario, obtenerDiaActual } from '../../lib/horario'
import { crearEnlaceWhatsApp } from '../../lib/whatsapp'
import estilos from './PiePagina.module.css'

const ENLACES = [
  { href: '#precio', texto: 'Precio' },
  { href: '#barberos', texto: 'Barberos' },
  { href: '#galeria', texto: 'Galería' },
  { href: '#resenas', texto: 'Reseñas' },
  { href: '#horario', texto: 'Horario' },
]

export function PiePagina() {
  const anio = new Date().getFullYear()
  const whatsapp = crearEnlaceWhatsApp(NEGOCIO.telefono, MENSAJE_PREDETERMINADO)
  const horarioHoy = describirHorario(obtenerDiaActual(NEGOCIO.horario))

  return (
    <footer className={estilos.pie} data-tema="oscuro">
      <div className={estilos.contenedor}>
        <div className={estilos.marca}>
          <p className={estilos.marcaBarberia}>Barbería</p>
          <p className={estilos.marcaMeza}>MEZA</p>
          <p className={estilos.lema}>
            Corte clásico en {NEGOCIO.ciudad}, {NEGOCIO.estado}.
          </p>
        </div>

        <nav className={estilos.columna} aria-label="Enlaces del pie">
          <h2 className={estilos.columnaTitulo}>La casa</h2>
          <ul className={estilos.lista}>
            {ENLACES.map((enlace) => (
              <li key={enlace.href}>
                <a className={estilos.enlace} href={enlace.href}>
                  {enlace.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={estilos.columna}>
          <h2 className={estilos.columnaTitulo}>Horario</h2>
          <p className={estilos.horarioHoy}>
            Hoy
            <strong>{horarioHoy}</strong>
          </p>
          <a className={estilos.enlace} href="#horario">
            Ver la semana
          </a>
        </div>

        <div className={estilos.columna}>
          <h2 className={estilos.columnaTitulo}>Contacto</h2>
          <ul className={estilos.lista}>
            <li>
              <a
                className={estilos.enlace}
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                className={estilos.enlace}
                href={NEGOCIO.enlaceMapa}
                target="_blank"
                rel="noreferrer"
              >
                Cómo llegar
              </a>
            </li>
          </ul>
          <p className={estilos.lugar}>
            {NEGOCIO.ciudad}, {NEGOCIO.estado}
          </p>
        </div>
      </div>

      <div className={estilos.legal}>
        <div className={estilos.legalContenedor}>
          <p>
            © {anio} {NEGOCIO.nombre}
          </p>
          <p>
            Hecho por{' '}
            <a
              href="https://github.com/LuisMariscalDev"
              target="_blank"
              rel="noreferrer"
            >
              Luis Mariscal
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
