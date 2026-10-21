import { useState } from 'react'
import { negocio, enlaceWhatsapp } from '../data/negocio.js'
import Logo from './Logo.jsx'

const enlaces = [
  { href: '#servicios', texto: 'Servicios' },
  { href: '#promo', texto: 'Promo', soloPromo: true },
  { href: '#reservar', texto: 'Cómo reservar' },
  { href: '#ubicacion', texto: 'Ubicación' },
]

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const wa = enlaceWhatsapp()
  const visibles = enlaces.filter((l) => !l.soloPromo || negocio.promo.activa)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-rosa/30 bg-fondo/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Principal">
        <a href="#inicio" className="shrink-0" aria-label={negocio.nombre}>
          <Logo className="h-8" />
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {visibles.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-malva hover:text-rosa">
                {l.texto}
              </a>
            </li>
          ))}
          {wa && (
            <li>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-malva px-5 py-2 text-sm font-medium text-crema shadow-sm transition hover:bg-malva-claro"
              >
                Agenda tu hora
              </a>
            </li>
          )}
        </ul>

        <button
          type="button"
          onClick={() => setAbierto(!abierto)}
          aria-expanded={abierto}
          aria-label="Abrir menú"
          className="rounded-full p-2 text-malva md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {abierto ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {abierto && (
        <ul className="space-y-1 border-t border-rosa/30 bg-fondo px-4 pb-4 pt-2 md:hidden">
          {visibles.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setAbierto(false)}
                className="block rounded-xl px-3 py-2.5 text-base font-medium text-malva hover:bg-crema"
              >
                {l.texto}
              </a>
            </li>
          ))}
          {wa && (
            <li>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block rounded-full bg-malva px-5 py-3 text-center text-base font-medium text-crema"
              >
                Agenda tu hora
              </a>
            </li>
          )}
        </ul>
      )}
    </header>
  )
}
