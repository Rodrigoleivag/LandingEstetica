import { useState } from 'react'
import {
  negocio,
  formatearPrecio,
  precioPorSesion,
  enlaceWhatsappServicio,
} from '../data/negocio.js'
import SectionTitle from './SectionTitle.jsx'

const categorias = [
  { id: 'corporales', etiqueta: 'Corporales' },
  { id: 'faciales', etiqueta: 'Faciales' },
]

function Tarjeta({ servicio }) {
  const porSesion = precioPorSesion(servicio)
  const enlaceReserva = enlaceWhatsappServicio(servicio.nombre) || negocio.instagram
  const descripcion = servicio.descripcion || []

  return (
    <li className="flex flex-col overflow-hidden rounded-3xl border border-rosa/25 bg-crema shadow-sm">
      {servicio.imagen && (
        <img
          src={servicio.imagen}
          alt={servicio.imagenAlt || servicio.nombre}
          loading="lazy"
          decoding="async"
          className="h-56 w-full shrink-0 object-cover"
        />
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold text-malva">{servicio.nombre}</h3>
          {servicio.etiqueta && (
            <span className="shrink-0 rounded-full bg-rosa-suave px-3 py-1 text-xs font-semibold text-malva">
              {servicio.etiqueta}
            </span>
          )}
        </div>

        {negocio.evaluacionGratis && (
          <span className="mt-2 w-fit rounded-full border border-rosa px-3 py-1 text-xs font-medium text-malva-claro">
            Evaluación gratuita
          </span>
        )}

        {descripcion.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {descripcion.map((item, i) => {
              const texto = typeof item === 'string' ? item : item.texto
              const destacado = typeof item === 'string' ? false : item.destacado
              return (
                <li key={i} className="flex items-start gap-2 text-sm text-malva-claro">
                  {destacado && (
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-rosa">
                      <path
                        d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5 8.5 8.5 0 1 0 20.5 14.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                  <span>{texto}</span>
                </li>
              )
            })}
          </ul>
        )}

        <div className="mt-auto pt-5">
          <p className="font-display text-3xl font-semibold text-malva">{formatearPrecio(servicio.precio)}</p>
          {porSesion != null && (
            <p className="mt-1 text-sm text-malva-claro">
              ≈ {formatearPrecio(porSesion)} por sesión ({servicio.pack.sesiones} sesiones)
            </p>
          )}

          <a
            href={enlaceReserva}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-full bg-malva px-6 py-3 text-center text-sm font-medium text-crema transition hover:bg-malva-claro"
          >
            Reservar
          </a>
        </div>
      </div>
    </li>
  )
}

export default function Servicios() {
  const [activa, setActiva] = useState('corporales')
  const lista = negocio.servicios[activa] || []

  return (
    <section id="servicios" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle acento="Nuestros tratamientos" titulo="Servicios" />

        <div className="mt-8 flex justify-center" role="tablist" aria-label="Categorías de servicios">
          <div className="inline-flex rounded-full border border-rosa/40 bg-crema p-1">
            {categorias.map((c) => (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={activa === c.id}
                onClick={() => setActiva(c.id)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition ${
                  activa === c.id ? 'bg-malva text-crema' : 'text-malva hover:text-rosa'
                }`}
              >
                {c.etiqueta}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((servicio) => (
            <Tarjeta key={servicio.id} servicio={servicio} />
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-crema px-5 py-4 text-center text-sm text-malva-claro">
          {negocio.disclaimerServicios}
        </p>
      </div>
    </section>
  )
}
