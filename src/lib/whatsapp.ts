export function crearEnlaceWhatsApp(telefono: string, mensaje: string) {
  const numero = telefono.replace(/\D/g, '')

  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`
}

export function crearMensajeParaBarbero(nombre: string) {
  return `Hola, quiero agendar un corte con ${nombre} en Barbería Meza.`
}
