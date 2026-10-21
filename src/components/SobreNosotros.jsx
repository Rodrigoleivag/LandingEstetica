import { negocio } from '../data/negocio.js'
import SectionTitle from './SectionTitle.jsx'

export default function SobreNosotros() {
  return (
    <section id="sobre" className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle acento="Un espacio para ti" titulo={`Sobre ${negocio.nombre}`} />
        <div className="mt-8 space-y-4">
          {negocio.sobre.parrafos.map((parrafo, i) => (
            <p key={i} className="text-lg leading-relaxed text-malva-claro">
              {parrafo}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
