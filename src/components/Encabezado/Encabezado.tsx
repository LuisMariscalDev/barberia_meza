import { useEffect, useState } from 'react'
import { NEGOCIO, MENSAJE_PREDETERMINADO } from '../../data/negocio'
import { crearEnlaceWhatsApp } from '../../lib/whatsapp'
import estilos from './Encabezado.module.css'

const ENLACES = [
  { href: '#precio', texto: 'Precio' },
  { href: '#barberos', texto: 'Barberos' },
  { href: '#galeria', texto: 'Galería' },
  { href: '#resenas', texto: 'Reseñas' },
  { href: '#horario', texto: 'Horario' },
]

export function Encabezado() {
  const [desplazado, setDesplazado] = useState(false)
  const whatsapp = crearEnlaceWhatsApp(NEGOCIO.telefono, MENSAJE_PREDETERMINADO)

  useEffect(() => {
    const alDesplazar = () => setDesplazado(window.scrollY > 8)

    alDesplazar()
    window.addEventListener('scroll', alDesplazar, { passive: true })

    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  return (
    <>
      <a className={estilos.saltar} href="#contenido">
        Saltar al contenido
      </a>

      <header className={estilos.encabezado} data-desplazado={desplazado}>
        <div className={estilos.contenedor}>
          <a
            className={estilos.marca}
            href="#inicio"
            aria-label="Barbería Meza, ir al inicio"
          >
            <span className={estilos.marcaBarberia}>Barbería</span>
            <span className={estilos.marcaMeza}>MEZA</span>
          </a>

          <p className={estilos.lugar}>
            {NEGOCIO.ciudad}, {NEGOCIO.estado}
          </p>

          <nav className={estilos.navegacion} aria-label="Secciones del sitio">
            {ENLACES.map((enlace) => (
              <a
                className={estilos.enlace}
                href={enlace.href}
                key={enlace.href}
              >
                {enlace.texto}
              </a>
            ))}
          </nav>

          <a
            className={estilos.agendar}
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Agendar
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>
    </>
  )
}
