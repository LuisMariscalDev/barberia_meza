import { useEffect, useState } from 'react'
import { NEGOCIO, MENSAJE_PREDETERMINADO } from '../../data/negocio'
import { formatearPrecio } from '../../lib/formato'
import { crearEnlaceWhatsApp } from '../../lib/whatsapp'
import estilos from './BarraMovil.module.css'

export function BarraMovil() {
  const [visible, setVisible] = useState(false)
  const whatsapp = crearEnlaceWhatsApp(NEGOCIO.telefono, MENSAJE_PREDETERMINADO)
  const precio =
    NEGOCIO.precioCorte === null ? null : formatearPrecio(NEGOCIO.precioCorte)

  useEffect(() => {
    const alDesplazar = () => setVisible(window.scrollY > 420)

    alDesplazar()
    window.addEventListener('scroll', alDesplazar, { passive: true })

    return () => window.removeEventListener('scroll', alDesplazar)
  }, [])

  return (
    <div className={estilos.barra} data-visible={visible} inert={!visible}>
      <p className={estilos.precio}>
        <span className={estilos.etiqueta}>Corte</span>
        <span className={estilos.cifra}>
          {precio === null ? '—' : `$${precio}`}
          <span className={estilos.moneda}>{NEGOCIO.moneda}</span>
        </span>
      </p>

      <a
        className={estilos.boton}
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        Agendar
        <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}
