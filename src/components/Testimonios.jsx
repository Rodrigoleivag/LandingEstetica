import { negocio } from '../data/negocio.js'
import SectionTitle from './SectionTitle.jsx'

/** Se muestra solo si hay testimonios o galería con contenido. */
export default function Testimonios() {
  const hayTestimonios = negocio.testimonios.length > 0
  const hayGaleria = negocio.galeria.length > 0

  if (!hayTestimonios && !hayGaleria) return null

  return (
    <section id="testimonios" className="bg-crema px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        {hayTestimonios && (
          <>
            <SectionTitle acento="Lo que dicen" titulo="Testimonios" />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {negocio.testimonios.map((t, i) => (
                <li key={i} className="rounded-3xl border border-rosa/25 bg-fondo p-6">
                  {t.estrellas > 0 && (
                    <p aria-label={`${t.estrellas} de 5 estrellas`} className="mb-2 text-rosa">
                      {'★'.repeat(t.estrellas)}
                      <span className="text-rosa/40">{'★'.repeat(5 - t.estrellas)}</span>
                    </p>
                  )}
                  <p className="text-malva-claro">“{t.texto}”</p>
                  {t.nombre && <p className="mt-3 text-sm font-semibold text-malva">{t.nombre}</p>}
                </li>
              ))}
            </ul>
          </>
        )}

        {hayGaleria && (
          <>
            <SectionTitle acento="Nuestros resultados" titulo="Galería" className={hayTestimonios ? 'mt-16' : ''} />
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {negocio.galeria.map((foto, i) => (
                <li key={i} className="overflow-hidden rounded-3xl border border-rosa/25">
                  <img
                    src={foto.src}
                    alt={foto.alt || `Resultado ${i + 1} de ${negocio.nombre}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  )
}
