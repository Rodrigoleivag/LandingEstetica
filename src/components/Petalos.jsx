/**
 * Fondo decorativo liviano de pétalos (SVG inline, sin imágenes).
 * Uso: <Petalos posicion="derecha" /> dentro de una sección con position relative.
 */
export default function Petalos({ posicion = 'derecha', className = '' }) {
  const lado = posicion === 'derecha' ? 'right-0' : 'left-0'
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute ${lado} top-10 h-40 w-40 -scale-x-100 opacity-40 sm:h-56 sm:w-56 ${className}`}
      fill="none"
    >
      <g fill="#E8A9B6" opacity="0.5">
        <ellipse cx="100" cy="60" rx="16" ry="34" transform="rotate(20 100 60)" />
        <ellipse cx="100" cy="60" rx="16" ry="34" transform="rotate(90 100 60)" />
        <ellipse cx="100" cy="60" rx="16" ry="34" transform="rotate(160 100 60)" />
        <circle cx="100" cy="60" r="7" fill="#7A4358" opacity="0.35" />
      </g>
      <g fill="#E8A9B6" opacity="0.35">
        <ellipse cx="150" cy="140" rx="10" ry="22" transform="rotate(35 150 140)" />
        <ellipse cx="150" cy="140" rx="10" ry="22" transform="rotate(110 150 140)" />
        <ellipse cx="150" cy="140" rx="10" ry="22" transform="rotate(185 150 140)" />
      </g>
      <circle cx="60" cy="150" r="5" fill="#E8A9B6" opacity="0.5" />
      <circle cx="175" cy="70" r="4" fill="#E8A9B6" opacity="0.4" />
    </svg>
  )
}
