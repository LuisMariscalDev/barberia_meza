import { useEffect } from 'react'

export function useRevelar() {
  useEffect(() => {
    const elementos = Array.from(
      document.querySelectorAll<HTMLElement>('[data-revelar]'),
    )

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      for (const elemento of elementos) {
        elemento.dataset.visible = 'true'
      }
      return
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (!entrada.isIntersecting) continue

          const elemento = entrada.target as HTMLElement
          elemento.dataset.visible = 'true'
          observador.unobserve(elemento)
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    for (const elemento of elementos) {
      observador.observe(elemento)
    }

    return () => observador.disconnect()
  }, [])
}
