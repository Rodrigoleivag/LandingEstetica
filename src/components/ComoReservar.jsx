import { negocio } from '../data/negocio.js'
import SectionTitle from './SectionTitle.jsx'

export default function ComoReservar() {
  return (
    <section id="reservar" className="bg-crema px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle acento="Solo 3 pasos" titulo="Cómo reservar" />

        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {negocio.pasos.map((paso) => (
            <li
              key={paso.n}
              className="flex flex-col overflow-hidden rounded-3xl border border-rosa/25 bg-fondo"
            >
              {paso.imagen && (
                <img
                  src={paso.imagen}
                  alt={paso.imagenAlt || paso.titulo}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full shrink-0 object-cover"
                />
              )}

              <div className="flex flex-1 flex-col p-6 text-center">
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-malva font-display text-xl font-semibold text-crema"
                >
                  {paso.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-malva">{paso.titulo}</h3>
                <p className="mt-2 text-sm text-malva-claro">{paso.texto}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-sm text-malva-claro">
          Reservas por WhatsApp o DM de Instagram.
        </p>
      </div>
    </section>
  )
}
