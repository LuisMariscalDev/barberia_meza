import type { Barbero } from '../../types/negocio'
import { NEGOCIO } from '../../data/negocio'
import {
  crearEnlaceWhatsApp,
  crearMensajeParaBarbero,
} from '../../lib/whatsapp'
import estilos from './TarjetaBarbero.module.css'

interface Props {
  barbero: Barbero
  indice: number
}

export function TarjetaBarbero({ barbero, indice }: Props) {
  const whatsapp = crearEnlaceWhatsApp(
    barbero.telefono ?? NEGOCIO.telefono,
    crearMensajeParaBarbero(barbero.nombre),
  )

  return (
    <article className={estilos.tarjeta}>
      <div className={estilos.foto} data-vacia={!barbero.foto}>
        {barbero.foto ? (
          <img
            src={barbero.foto}
            alt={`${barbero.nombre}, barbero de ${NEGOCIO.nombre}`}
          />
        ) : (
          <span className={estilos.fotoEtiqueta}>Foto pendiente · 4:5</span>
        )}

        <span className={estilos.indice} aria-hidden="true">
          {String(indice + 1).padStart(2, '0')}
        </span>
      </div>

      <div className={estilos.cuerpo}>
        <p className={estilos.turno}>{barbero.turno}</p>
        <h3 className={estilos.nombre}>{barbero.nombre}</h3>

        <a
          className={estilos.enlace}
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label={`Escribir por WhatsApp a ${barbero.nombre}`}
        >
          Escribir por WhatsApp
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}
