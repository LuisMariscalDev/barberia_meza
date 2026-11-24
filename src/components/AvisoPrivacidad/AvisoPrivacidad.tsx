import { useEffect } from 'react'
import { NEGOCIO, MENSAJE_PRIVACIDAD } from '../../data/negocio'
import { crearEnlaceWhatsApp } from '../../lib/whatsapp'
import estilos from './AvisoPrivacidad.module.css'

export function AvisoPrivacidad() {
  const whatsapp = crearEnlaceWhatsApp(NEGOCIO.telefono, MENSAJE_PRIVACIDAD)

  useEffect(() => {
    const tituloAnterior = document.title
    document.title = `Aviso de privacidad · ${NEGOCIO.nombre}`

    return () => {
      document.title = tituloAnterior
    }
  }, [])

  return (
    <div className={estilos.pagina}>
      <header className={estilos.encabezado}>
        <a
          className={estilos.marca}
          href="/"
          aria-label="Barbería MEZA, inicio"
        >
          <span className={estilos.marcaBarberia}>Barbería</span>
          <span className={estilos.marcaMeza}>MEZA</span>
        </a>

        <a className={estilos.volver} href="/">
          ← Volver al inicio
        </a>
      </header>

      <main className={estilos.contenido}>
        <p className={estilos.etiqueta}>Aviso de privacidad</p>
        <h1 className={estilos.titulo}>Qué hacemos con tus datos.</h1>
        <p className={estilos.entrada}>
          Este aviso es corto a propósito: la barbería solo usa los datos que le
          compartes por WhatsApp para agendar tu cita.
        </p>

        <h2 className={estilos.subtitulo}>Quién es el responsable</h2>
        <p>
          {NEGOCIO.nombre}, {NEGOCIO.direccion}, {NEGOCIO.colonia},{' '}
          {NEGOCIO.codigoPostal} {NEGOCIO.ciudad}, {NEGOCIO.estado}.
        </p>

        <h2 className={estilos.subtitulo}>Qué datos recibimos</h2>
        <p>
          Solo los que compartes por WhatsApp: tu nombre, tu teléfono y el
          mensaje con el que pides tu cita. No hay formularios ni cuentas en
          este sitio.
        </p>

        <h2 className={estilos.subtitulo}>Para qué los usamos</h2>
        <p>
          Para agendar y confirmar tu cita, avisarte de cambios de horario y
          contestar tus dudas. Nada más.
        </p>

        <h2 className={estilos.subtitulo}>Qué no hacemos</h2>
        <ul className={estilos.lista}>
          <li>
            No usamos Google Analytics, píxeles de redes sociales ni cookies de
            terceros.
          </li>
          <li>No incrustamos mapas ni formularios que recojan datos.</li>
          <li>No compartimos tus datos con terceros.</li>
        </ul>

        <h2 className={estilos.subtitulo}>
          Cómo pedir acceso, corrección o borrado
        </h2>
        <p>
          Escríbenos por WhatsApp y dinos qué quieres consultar, corregir o
          borrar.
        </p>

        <p className={estilos.acciones}>
          <a
            className={estilos.boton}
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Escribir por WhatsApp
            <span aria-hidden="true">→</span>
          </a>
        </p>

        <p className={estilos.fecha}>
          Última actualización: 23 de noviembre de 2026.
        </p>
      </main>

      <footer className={estilos.pie}>
        <p>
          © {new Date().getFullYear()} {NEGOCIO.nombre}
        </p>
        <p>
          Sitio hecho por{' '}
          <a
            href="https://github.com/LuisMariscalDev"
            target="_blank"
            rel="noreferrer"
          >
            Luis Mariscal
          </a>
        </p>
      </footer>
    </div>
  )
}
