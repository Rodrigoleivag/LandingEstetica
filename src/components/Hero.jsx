import { negocio, enlaceWhatsapp } from '../data/negocio.js'
import Petalos from './Petalos.jsx'

export default function Hero() {
  const wa = enlaceWhatsapp()

  return (
    <section id="inicio" className="relative overflow-hidden px-4 pb-16 pt-28 sm:pb-24 sm:pt-36">
      <Petalos posicion="derecha" />
      <Petalos posicion="izquierda" className="top-auto bottom-0 rotate-180" />

      <div className="animar relative mx-auto max-w-3xl text-center">
        <p className="font-script text-4xl text-rosa sm:text-5xl">{negocio.nombre}</p>
        <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-malva sm:text-6xl">
          {negocio.lema}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-malva-claro">{negocio.subtitulo}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {wa ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-malva px-8 py-4 text-base font-medium text-crema shadow-md transition hover:bg-malva-claro sm:w-auto"
            >
              Agenda tu hora por WhatsApp
            </a>
          ) : (
            <a
              href={negocio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-malva px-8 py-4 text-base font-medium text-crema shadow-md transition hover:bg-malva-claro sm:w-auto"
            >
              Escríbenos por Instagram
            </a>
          )}
          <a
            href="#servicios"
            className="w-full rounded-full border border-malva/30 bg-crema px-8 py-4 text-base font-medium text-malva transition hover:border-rosa sm:w-auto"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  )
}
