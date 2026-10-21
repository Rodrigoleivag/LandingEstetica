import { negocio, enlaceMaps } from '../data/negocio.js'
import SectionTitle from './SectionTitle.jsx'

export default function Ubicacion() {
  const { zona, direccion } = negocio.ubicacion

  return (
    <section id="ubicacion" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle acento="Encuéntranos" titulo="Ubicación" />

        <p className="mt-8 font-display text-2xl font-semibold text-malva">{zona}</p>
        {direccion && <p className="mt-2 text-malva-claro">{direccion}</p>}

        {negocio.horario && (
          <p className="mt-4 text-sm text-malva-claro">
            <span className="font-semibold text-malva">Horario:</span> {negocio.horario}
          </p>
        )}
        {negocio.mediosPago && (
          <p className="mt-1 text-sm text-malva-claro">
            <span className="font-semibold text-malva">Medios de pago:</span> {negocio.mediosPago}
          </p>
        )}

        <a
          href={enlaceMaps()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full border border-malva/30 bg-crema px-8 py-4 font-medium text-malva transition hover:border-rosa"
        >
          Cómo llegar
        </a>
      </div>
    </section>
  )
}
