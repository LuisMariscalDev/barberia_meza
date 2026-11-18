import { NEGOCIO, MENSAJE_PREDETERMINADO } from '../../data/negocio'
import { formatearPrecio } from '../../lib/formato'
import { describirHorario, obtenerDiaActual } from '../../lib/horario'
import { crearEnlaceWhatsApp } from '../../lib/whatsapp'
import estilos from './Hero.module.css'

export function Hero() {
  const whatsapp = crearEnlaceWhatsApp(NEGOCIO.telefono, MENSAJE_PREDETERMINADO)
  const horarioHoy = obtenerDiaActual(NEGOCIO.horario)
  const precio =
    NEGOCIO.precioCorte === null ? null : formatearPrecio(NEGOCIO.precioCorte)

  return (
    <section className={estilos.hero} id="inicio" aria-labelledby="hero-titulo">
      <span className={estilos.franja} aria-hidden="true" />

      <div className={estilos.contenedor}>
        <div className={estilos.grid}>
          <div className={estilos.copia}>
            <p className={estilos.ubicacion}>
              {NEGOCIO.ciudad}, {NEGOCIO.estado}
            </p>

            <h1 className={estilos.titulo} id="hero-titulo">
              <span className={estilos.tituloBarberia}>Barbería</span>
              <span className={estilos.tituloMeza}>MEZA</span>
            </h1>

            <span className={estilos.sello} aria-hidden="true">
              <span>Barbería</span>
              <span>Meza</span>
              <span>{NEGOCIO.ciudad}</span>
            </span>

            <p className={estilos.entrada}>
              Corte clásico, sin prisas y sin sorpresas. Elige a tu barbero y
              aparta tu lugar por WhatsApp.
            </p>

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
              <a className={estilos.botonSecundario} href="#barberos">
                Conocer a los barberos
              </a>
            </div>

            <p className={estilos.nota}>
              Sin cuenta, sin descargas, sin llamadas.
            </p>
          </div>

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
                  <span className={estilos.boletaMoneda}>{NEGOCIO.moneda}</span>
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
                  {NEGOCIO.ciudad}, {NEGOCIO.estado}
                </dd>
              </div>
            </dl>

            <p className={estilos.boletaNota}>Agenda por WhatsApp</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
