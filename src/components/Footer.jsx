import { negocio, enlaceWhatsapp } from '../data/negocio.js'
import Logo from './Logo.jsx'

export default function Footer() {
  const wa = enlaceWhatsapp()

  return (
    <footer className="bg-malva px-4 py-12 text-crema">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <Logo className="h-10" />
        <p className="font-display text-xl">{negocio.lema}</p>

        <div className="flex items-center gap-4">
          {negocio.instagram && (
            <a
              href={negocio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-crema/30 p-3 transition hover:bg-crema/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          )}
          {wa && (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full border border-crema/30 p-3 transition hover:bg-crema/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.2 1.2-1.7 1.2-.5.1-1 .1-3.2-.7-2.7-1.1-4.4-3.9-4.5-4-.2-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.8 2c.1.2.1.4 0 .6l-.4.5c-.1.2-.3.3-.1.6.1.3.6 1.1 1.4 1.8 1 .9 1.8 1.1 2 1.2.3.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.3.1.2.1.6 0 1.2Z" />
              </svg>
            </a>
          )}
        </div>

        {negocio.whatsappVisible && <p className="text-sm text-crema/80">{negocio.whatsappVisible}</p>}

        <p className="max-w-xl text-xs leading-relaxed text-crema/70">{negocio.avisoLegal}</p>
      </div>
    </footer>
  )
}
