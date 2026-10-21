/** Título de sección: acento en caligrafía + título en serif. */
export default function SectionTitle({ acento, titulo, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      {acento && <p className="font-script text-3xl text-rosa">{acento}</p>}
      <h2 className="font-display text-3xl font-semibold text-malva sm:text-4xl">{titulo}</h2>
      <div className="mx-auto mt-3 h-px w-24 bg-rosa" aria-hidden="true" />
    </div>
  )
}
