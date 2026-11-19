import { useEffect, useRef } from 'react'
import { NEGOCIO, MENSAJE_PREDETERMINADO } from '../../data/negocio'
import { formatearPrecio } from '../../lib/formato'
import { describirHorario, obtenerDiaActual } from '../../lib/horario'
import { crearEnlaceWhatsApp } from '../../lib/whatsapp'
import estilos from './Hero.module.css'

export function Hero() {
  const referencia = useRef<HTMLElement>(null)
  const whatsapp = crearEnlaceWhatsApp(NEGOCIO.telefono, MENSAJE_PREDETERMINADO)
  const horarioHoy = obtenerDiaActual(NEGOCIO.horario)
  const precio =
    NEGOCIO.precioCorte === null ? null : formatearPrecio(NEGOCIO.precioCorte)

  useEffect(() => {
    const hero = referencia.current
    if (!hero) return

    const movimientoReducido = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    )

    if (movimientoReducido.matches) return

    let cuadro: number | null = null
    let x = 0
    let y = 0

    const aplicar = () => {
      cuadro = null
      hero.style.setProperty('--puntero-x', x.toFixed(3))
      hero.style.setProperty('--puntero-y', y.toFixed(3))
    }

    const programar = () => {
      if (cuadro !== null) return
      cuadro = window.requestAnimationFrame(aplicar)
    }

    const alMover = (evento: PointerEvent) => {
      if (evento.pointerType === 'touch') return

      const caja = hero.getBoundingClientRect()
      x = ((evento.clientX - caja.left) / caja.width) * 2 - 1
      y = ((evento.clientY - caja.top) / caja.height) * 2 - 1
      programar()
    }

    const alSalir = () => {
      x = 0
      y = 0
      programar()
    }

    hero.addEventListener('pointermove', alMover)
    hero.addEventListener('pointerleave', alSalir)

    return () => {
      hero.removeEventListener('pointermove', alMover)
      hero.removeEventListener('pointerleave', alSalir)

      if (cuadro !== null) window.cancelAnimationFrame(cuadro)
    }
  }, [])

  return (
    <section
      className={estilos.hero}
      id="inicio"
      aria-labelledby="hero-titulo"
      ref={referencia}
    >
      <span className={estilos.franja} aria-hidden="true" />

      <div className={estilos.polvo} aria-hidden="true">
        {Array.from({ length: 6 }, (_, indice) => (
          <span key={indice} />
        ))}
      </div>

      <div className={estilos.contenedor}>
        <div className={estilos.grid}>
          <div className={estilos.copia}>
            <p className={estilos.ubicacion}>
              {NEGOCIO.colonia} · {NEGOCIO.ciudad}
            </p>

            <h1 className={estilos.titulo} id="hero-titulo">
              <span className={estilos.tituloBarberia}>Barbería</span>
              <span className={estilos.tituloMeza}>MEZA</span>
            </h1>

            <span className={estilos.selloFlotante} aria-hidden="true">
              <span className={estilos.sello}>
                <span>Barbería</span>
                <span>Meza</span>
                <span>{NEGOCIO.ciudad}</span>
              </span>
            </span>

            <p className={estilos.entrada}>{NEGOCIO.descripcionPortada}</p>

            <div className={estilos.acciones}>
              <a
                className={estilos.botonPrimario}
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Agendar por WhatsApp
                <span aria-hidden="true">→</span>
              </a>
              <a className={estilos.botonSecundario} href="#equipo">
                Conocer a los barberos
              </a>
            </div>

            <p className={estilos.nota}>
              Sin cuenta, sin descargas, sin llamadas.
            </p>
          </div>

          <div className={estilos.boletaFlotante}>
            <aside
              className={estilos.boleta}
              id="precio"
              aria-labelledby="precio-titulo"
            >
              <p className={estilos.boletaEtiqueta} id="precio-titulo">
                Precio único
              </p>

              <p className={estilos.boletaPrecio}>
                {precio === null ? (
                  <span className={estilos.boletaPendiente}>Por confirmar</span>
                ) : (
                  <>
                    <span className={estilos.boletaSigno}>$</span>
                    {precio}
                    <span className={estilos.boletaMoneda}>
                      {NEGOCIO.moneda}
                    </span>
                  </>
                )}
              </p>

              <p className={estilos.boletaServicio}>Corte clásico</p>

              <div className={estilos.boletaDivisor} aria-hidden="true" />

              <dl className={estilos.boletaDatos}>
                <div>
                  <dt>Hoy</dt>
                  <dd>{describirHorario(horarioHoy)}</dd>
                </div>
                <div>
                  <dt>Lugar</dt>
                  <dd>
                    {NEGOCIO.colonia}, {NEGOCIO.ciudad}
                  </dd>
                </div>
              </dl>

              <p className={estilos.boletaNota}>Agenda por WhatsApp</p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
