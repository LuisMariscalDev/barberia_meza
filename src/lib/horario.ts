import type { DiaHorario } from '../types/negocio'

export function obtenerDiaActual(horario: DiaHorario[]) {
  const indice = new Date().getDay()

  return horario.find((dia) => dia.indice === indice)
}

export function describirHorario(dia: DiaHorario | undefined) {
  if (!dia) return '—'
  if (dia.cerrado) return 'Cerrado'

  return `${dia.abre} – ${dia.cierra}`
}
