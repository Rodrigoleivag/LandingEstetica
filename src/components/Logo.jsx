import { useState } from 'react'
import { negocio } from '../data/negocio.js'

/** Logo desde /public/logo.png. Si no existe, muestra el nombre con una media luna. */
export default function Logo({ className = 'h-9' }) {
  const [conImagen, setConImagen] = useState(true)

  if (conImagen) {
    return (
      <img
        src="/logo.png"
        alt={negocio.nombre}
        className={`${className} w-auto`}
        onError={() => setConImagen(false)}
      />
    )
  }

  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} w-auto text-rosa`}>
        <path
          d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"
          fill="currentColor"
        />
      </svg>
      <span className="font-display text-xl font-semibold tracking-wide">{negocio.nombre}</span>
    </span>
  )
}
