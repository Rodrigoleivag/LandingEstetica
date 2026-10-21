import { negocio, formatearPrecio } from '../data/negocio.js'

/** Promo destacada: se muestra solo si promo.activa es true. */
export default function PromoBanner() {
  if (!negocio.promo.activa) return null
  const { titulo, servicio, precio, detalle, imagen, imagenAlt } = negocio.promo

  return (
    <section id="promo" className="px-4 pb-4 sm:pb-6">
      <div
        className={`animar mx-auto max-w-4xl overflow-hidden rounded-3xl border border-rosa/40 bg-crema shadow-sm ${
          imagen ? 'sm:grid sm:grid-cols-2 sm:items-stretch' : ''
        }`}
      >
        {imagen && (
          <img
            src={imagen}
            alt={imagenAlt || servicio}
            loading="lazy"
            decoding="async"
            className="h-64 w-full object-cover sm:h-full"
          />
        )}

        <div className="p-6 text-center sm:p-10">
          <p className="font-script text-3xl text-rosa">Promoción</p>
          <h2 className="mt-1 font-display text-2xl font-semibold text-malva sm:text-3xl">{titulo}</h2>
          <p className="mt-4 text-lg text-malva">
            <span className="font-medium">{servicio}</span>
            {precio != null && (
              <>
                {' · '}
                <span className="font-semibold">{formatearPrecio(precio)}</span>
              </>
            )}
          </p>
          {detalle && <p className="mt-2 text-sm uppercase tracking-widest text-malva-claro">{detalle}</p>}
        </div>
      </div>
    </section>
  )
}
