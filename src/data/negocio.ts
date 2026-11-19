import type { Negocio } from '../types/negocio'

// Datos confirmados en el artefacto de diseño (20 oct 2026).
// El teléfono sale de la página de Facebook de la barbería; confirmar con
// Ulises que es el mismo número de WhatsApp y, si cada barbero tiene uno
// propio, agregarlo en `barberos[].telefono`.
export const NEGOCIO: Negocio = {
  nombre: 'Barbería Meza',
  ciudad: 'Las Juntas',
  colonia: 'Real Ixtapa',
  estado: 'Jalisco',
  codigoPostal: '48280',
  precioCorte: 200,
  moneda: 'MXN',
  telefono: '523221752714',
  direccion: 'C. Paseo de la Industria 1325-A',
  enlaceMapa: 'https://maps.google.com/?cid=0x1fb017eed7b82e5',
  enlaceResenas: 'https://www.google.com/maps?cid=0x1fb017eed7b82e5',
  calificacion: 4.7,
  resenas: 13,
  etiquetasResenas: [
    'Buen trato',
    'Aire acondicionado',
    'Buena música',
    'Ideal para niños',
  ],
  descripcionPortada:
    'Ulises en la mañana, José en la tarde. Elige a tu barbero y aparta tu lugar por WhatsApp.',
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
      turno: 'Mañana',
      horario: 'Lunes a sábado · 11:00 a 15:00',
    },
    {
      id: 'jose',
      nombre: 'José',
      turno: 'Tarde',
      horario: 'Lunes a viernes · 17:00 a 21:00',
    },
  ],
  galeria: [
    {
      id: 'taper',
      alt: 'Corte taper visto desde atrás, sin rostro del cliente',
      caption: 'Taper',
    },
    {
      id: 'clasico',
      alt: 'Corte clásico terminado, de perfil',
      caption: 'Clásico',
    },
    {
      id: 'corte-y-barba',
      alt: 'Corte y barba con acabado a mano',
      caption: 'Corte y barba',
    },
    {
      id: 'el-taller',
      alt: 'Interior de la barbería, el taller',
      caption: 'El taller',
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

export const MENSAJE_PREDETERMINADO =
  'Hola, quiero agendar un corte en Barbería Meza (Real Ixtapa).'
