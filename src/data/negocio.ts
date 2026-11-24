import type { Negocio } from '../types/negocio'

// Datos confirmados en el artefacto de diseño (20 oct 2026).
// El teléfono sale de la página de Facebook de la barbería; confirmar con
// Ulises que es el mismo número de WhatsApp y, si cada barbero tiene uno
// propio, agregarlo en `barberos[].telefono`.
export const NEGOCIO: Negocio = {
  nombre: 'Barbería Meza',
  ciudad: 'Puerto Vallarta',
  colonia: 'Ixtapa',
  estado: 'Jalisco',
  codigoPostal: '48280',
  precioCorte: 200,
  moneda: 'MXN',
  telefono: '523221752714',
  direccion: 'C. Paseo de la Industria 1325-A',
  enlaceMapa: 'https://www.google.com/maps?cid=142709457854104293',
  enlaceResenas:
    'https://www.google.com/maps/place/Barber%C3%ADa+MEZA+%7C+Cortes+de+Cabello+y+Barba./@20.7155892,-105.2225959,17z/data=!4m18!1m9!3m8!1s0x8421470039d990a5:0x1fb017eed7b82e5!2sBarber%C3%ADa+MEZA+%7C+Cortes+de+Cabello+y+Barba.!8m2!3d20.7155892!4d-105.220021!9m1!1b1!16s%2Fg%2F11xnlpq2_g!3m7!1s0x8421470039d990a5:0x1fb017eed7b82e5!8m2!3d20.7155892!4d-105.220021!9m1!1b1!16s%2Fg%2F11xnlpq2_g',
  calificacion: 4.7,
  resenas: 13,
  etiquetasResenas: [
    'Buen trato',
    'Aire acondicionado',
    'Buena música',
    'Ideal para niños',
  ],
  descripcionPortada:
    'Corte, fade o barba a $200. Mañana con Ulises, tarde con José.',
  horario: [
    {
      indice: 1,
      dia: 'Lunes',
      cerrado: false,
      intervalos: [
        { abre: '11:00', cierra: '15:00' },
        { abre: '17:00', cierra: '21:00' },
      ],
    },
    {
      indice: 2,
      dia: 'Martes',
      cerrado: false,
      intervalos: [
        { abre: '11:00', cierra: '15:00' },
        { abre: '17:00', cierra: '21:00' },
      ],
    },
    {
      indice: 3,
      dia: 'Miércoles',
      cerrado: false,
      intervalos: [
        { abre: '11:00', cierra: '15:00' },
        { abre: '17:00', cierra: '21:00' },
      ],
    },
    {
      indice: 4,
      dia: 'Jueves',
      cerrado: false,
      intervalos: [
        { abre: '11:00', cierra: '15:00' },
        { abre: '17:00', cierra: '21:00' },
      ],
    },
    {
      indice: 5,
      dia: 'Viernes',
      cerrado: false,
      intervalos: [
        { abre: '11:00', cierra: '15:00' },
        { abre: '17:00', cierra: '21:00' },
      ],
    },
    {
      indice: 6,
      dia: 'Sábado',
      cerrado: false,
      intervalos: [{ abre: '11:00', cierra: '15:00' }],
    },
    { indice: 0, dia: 'Domingo', cerrado: true, intervalos: [] },
  ],
  barberos: [
    {
      id: 'ulises',
      nombre: 'Ulises',
      telefono: '523221752714',
      turno: 'Mañana',
      horario: 'Lunes a sábado · 11:00 a 15:00',
    },
    {
      id: 'jose',
      nombre: 'José',
      telefono: '527445162909',
      turno: 'Tarde',
      horario: 'Lunes a viernes · 17:00 a 21:00',
    },
  ],
  galeria: [
    {
      id: 'el-taller',
      alt: 'Interior de Barbería Meza con dos sillas de barbero, televisión y ventana',
      caption: 'El taller',
      src: '/imagenes/local-01.webp',
      srcChico: '/imagenes/local-01-800.webp',
      ancho: 1200,
      alto: 900,
    },
    {
      id: 'la-sala',
      alt: 'Sala de espera con sillón de piel frente a las estaciones de corte',
      caption: 'La sala',
      src: '/imagenes/local-02.webp',
      srcChico: '/imagenes/local-02-800.webp',
      ancho: 1200,
      alto: 900,
    },
    {
      id: 'la-puerta',
      alt: 'Puerta de entrada y ventana de la barbería con la luz de la tarde',
      caption: 'La puerta',
      src: '/imagenes/local-03.webp',
      srcChico: '/imagenes/local-03-800.webp',
      ancho: 1200,
      alto: 900,
      posicion: '72% center',
    },
    {
      id: 'el-espejo',
      alt: 'Estación de trabajo con espejo, productos y silla de barbero',
      caption: 'El espejo',
      src: '/imagenes/local-04.webp',
      srcChico: '/imagenes/local-04-800.webp',
      ancho: 1200,
      alto: 900,
      posicion: '80% center',
    },
  ],
  servicios: [
    {
      id: 'corte',
      nombre: 'Corte de cabello',
      precio: 200,
      duracion: '~1 hora',
    },
    { id: 'fade', nombre: 'Fade', precio: 200, duracion: '~1 hora' },
    { id: 'barba', nombre: 'Barba', precio: 200, duracion: '~1 hora' },
    {
      id: 'nino',
      nombre: 'Corte de niño',
      precio: 200,
      duracion: '~1 hora',
    },
  ],
  formasPago: 'Efectivo · Transferencia · Tarjeta',
  duracionAproximada: 'Cada servicio dura alrededor de una hora.',
  redes: {
    instagram: 'https://www.instagram.com/barberiameza98/',
    facebook: 'https://www.facebook.com/profile.php?id=61587294583121',
  },
  avisoPrivacidad: '/aviso-de-privacidad',
}

export const MENSAJE_PRIVACIDAD =
  'Hola, tengo una consulta sobre mis datos personales.'
