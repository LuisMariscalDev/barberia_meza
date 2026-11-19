import { NEGOCIO } from '../../data/negocio'
import {
  crearEnlaceWhatsApp,
  crearMensajeParaBarbero,
} from '../../lib/whatsapp'
import estilos from './BarraMovil.module.css'

export function BarraMovil() {
  return (
    <nav className={estilos.barra} aria-label="Agendar por WhatsApp">
      {NEGOCIO.barberos.map((barbero) => {
        const whatsapp = crearEnlaceWhatsApp(
          barbero.telefono ?? NEGOCIO.telefono,
          crearMensajeParaBarbero(barbero.nombre),
        )

        return (
          <a
            className={estilos.boton}
            href={whatsapp}
            key={barbero.id}
            target="_blank"
            rel="noreferrer"
          >
            <span className={estilos.nombre}>{barbero.nombre}</span>
            <span className={estilos.turno}>{barbero.turno} · WhatsApp</span>
          </a>
        )
      })}
    </nav>
  )
}
