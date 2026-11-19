export interface IntervaloHorario {
  abre: string
  cierra: string
}

export interface DiaHorario {
  indice: number
  dia: string
  intervalos: IntervaloHorario[]
  cerrado: boolean
}

export interface Servicio {
  id: string
  nombre: string
  precio: number
  duracion: string
}

export interface Barbero {
  id: string
  nombre: string
  turno: string
  horario: string
  telefono?: string
  foto?: string
}

export interface Foto {
  id: string
  alt: string
  caption: string
  src?: string
}

export interface Redes {
  instagram: string
  facebook: string
}

export interface Negocio {
  nombre: string
  ciudad: string
  colonia: string
  estado: string
  codigoPostal: string
  precioCorte: number | null
  moneda: string
  telefono: string
  direccion: string
  enlaceMapa: string
  enlaceResenas: string
  calificacion: number | null
  resenas: number | null
  etiquetasResenas: string[]
  descripcionPortada: string
  horario: DiaHorario[]
  barberos: Barbero[]
  galeria: Foto[]
  servicios: Servicio[]
  formasPago: string
  duracionAproximada: string
  redes: Redes
  avisoPrivacidad: string
}
