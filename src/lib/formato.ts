export function formatearPrecio(precio: number) {
  return new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 }).format(
    precio,
  )
}
