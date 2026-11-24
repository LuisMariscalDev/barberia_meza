import { useEffect, useRef, useState } from 'react'
import estilos from './Encabezado.module.css'

const ENLACES = [
  { href: '#precios', texto: 'Precios' },
  { href: '#equipo', texto: 'Equipo' },
  { href: '#trabajos', texto: 'Trabajos' },
  { href: '#resenas', texto: 'Reseñas' },
  { href: '#ubicacion', texto: 'Ubicación' },
]

export function Encabezado() {
  const [desplazado, setDesplazado] = useState(false)
  const referencia = useRef<HTMLElement>(null)

  useEffect(() => {
    let cuadro: number | null = null

    const actualizar = () => {
      const desplazamiento = window.scrollY
      const recorrido =
        document.documentElement.scrollHeight - window.innerHeight
      const progreso =
        recorrido > 0 ? Math.min(desplazamiento / recorrido, 1) : 0

      referencia.current?.style.setProperty('--progreso', progreso.toFixed(4))
      setDesplazado(desplazamiento > 8)
    }

    const alDesplazar = () => {
      if (cuadro !== null) return

      cuadro = window.requestAnimationFrame(() => {
        cuadro = null
        actualizar()
      })
    }

    actualizar()
    window.addEventListener('scroll', alDesplazar, { passive: true })
    window.addEventListener('resize', alDesplazar)

    return () => {
      window.removeEventListener('scroll', alDesplazar)
      window.removeEventListener('resize', alDesplazar)

      if (cuadro !== null) window.cancelAnimationFrame(cuadro)
    }
  }, [])

  return (
    <>
      <a className={estilos.saltar} href="#contenido">
        Saltar al contenido
      </a>

      <header
        className={estilos.encabezado}
        data-desplazado={desplazado}
        ref={referencia}
      >
        <div className={estilos.contenedor}>
          <a
            className={estilos.marca}
            href="#inicio"
            aria-label="Barbería Meza, ir al inicio"
          >
            <img
              className={estilos.marcaLogo}
              src="/imagenes/logo-barberia-meza.webp"
              alt=""
              width={40}
              height={40}
            />
            <span className={estilos.marcaTexto}>
              <span className={estilos.marcaBarberia}>Barbería</span>
              <span className={estilos.marcaMeza}>MEZA</span>
            </span>
          </a>

          <a className={estilos.lugar} href="#ubicacion">
            Ubicación
          </a>

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

          <a className={estilos.agendar} href="#equipo" rel="noreferrer">
            Agendar
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <span className={estilos.progreso} aria-hidden="true" />
      </header>
    </>
  )
}
