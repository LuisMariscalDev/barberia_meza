import type { Negocio } from '../types/negocio'

// Contenido de ejemplo para revisar el diseño. Reemplazar por los datos reales antes de publicar.
export const NEGOCIO: Negocio = {
  nombre: 'Barbería Meza',
  ciudad: 'Las Juntas',
  estado: 'Jalisco',
  precioCorte: 200,
  moneda: 'MXN',
  telefono: '523300000000',
  direccion: 'Av. Juárez 000, Las Juntas',
  enlaceMapa:
    'https://www.google.com/maps/search/?api=1&query=Las+Juntas%2C+Jalisco',
  enlaceResenas:
    'https://www.google.com/search?q=Barber%C3%ADa+Meza+Las+Juntas+Jalisco',
  calificacion: null,
  resenas: null,
  horario: [
    { indice: 1, dia: 'Lunes', abre: '10:00', cierra: '20:00', cerrado: false },
    {
      indice: 2,
      dia: 'Martes',
      abre: '10:00',
      cierra: '20:00',
      cerrado: false,
    },
    {
      indice: 3,
      dia: 'Miércoles',
      abre: '10:00',
      cierra: '20:00',
      cerrado: false,
    },
    {
      indice: 4,
      dia: 'Jueves',
      abre: '10:00',
      cierra: '20:00',
      cerrado: false,
    },
    {
      indice: 5,
      dia: 'Viernes',
      abre: '10:00',
      cierra: '20:00',
      cerrado: false,
    },
    {
      indice: 6,
      dia: 'Sábado',
      abre: '09:00',
      cierra: '18:00',
      cerrado: false,
    },
    { indice: 0, dia: 'Domingo', abre: '', cierra: '', cerrado: true },
  ],
  barberos: [
    { id: 'barbero-uno', nombre: 'Barbero uno', turno: 'Turno de mañana' },
    { id: 'barbero-dos', nombre: 'Barbero dos', turno: 'Turno de tarde' },
    { id: 'barbero-tres', nombre: 'Barbero tres', turno: 'Todo el día' },
  ],
  galeria: [
    { id: 'foto-uno', alt: 'Interior de la barbería, pendiente de foto' },
    { id: 'foto-dos', alt: 'Corte terminado, pendiente de foto' },
    { id: 'foto-tres', alt: 'Detalle de navaja, pendiente de foto' },
    { id: 'foto-cuatro', alt: 'Sillón de barbero, pendiente de foto' },
    { id: 'foto-cinco', alt: 'Cliente en el espejo, pendiente de foto' },
  ],
}

export const MENSAJE_PREDETERMINADO =
  'Hola, quiero agendar un corte en Barbería Meza.'
