export interface Barbero {
  id: string
  nombre: string
  turno: string
  telefono?: string
  foto?: string
}

export interface DiaHorario {
  indice: number
  dia: string
  abre: string
  cierra: string
  cerrado: boolean
}

export interface Foto {
  id: string
  alt: string
  src?: string
}

export interface Negocio {
  nombre: string
  ciudad: string
  estado: string
  precioCorte: number | null
  moneda: string
  telefono: string
  direccion: string
  enlaceMapa: string
  enlaceResenas: string
  calificacion: number | null
  resenas: number | null
  horario: DiaHorario[]
  barberos: Barbero[]
  galeria: Foto[]
}
