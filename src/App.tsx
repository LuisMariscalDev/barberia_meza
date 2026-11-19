import { useRevelar } from './hooks/useRevelar'
import { Encabezado } from './components/Encabezado/Encabezado'
import { Hero } from './components/Hero/Hero'
import { Cinta } from './components/Cinta/Cinta'
import { Precios } from './components/Precios/Precios'
import { Barberos } from './components/Barberos/Barberos'
import { Galeria } from './components/Galeria/Galeria'
import { Resenas } from './components/Resenas/Resenas'
import { Horario } from './components/Horario/Horario'
import { Agenda } from './components/Agenda/Agenda'
import { PiePagina } from './components/PiePagina/PiePagina'
import { BarraMovil } from './components/BarraMovil/BarraMovil'

export function App() {
  useRevelar()

  return (
    <>
      <Encabezado />
      <main id="contenido">
        <Hero />
        <Cinta />
        <Precios />
        <Barberos />
        <Galeria />
        <Resenas />
        <Horario />
        <Agenda />
      </main>
      <PiePagina />
      <BarraMovil />
    </>
  )
}
