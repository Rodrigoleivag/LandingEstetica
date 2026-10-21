import { negocio } from './data/negocio.js'

/**
 * Actualiza título, meta tags y JSON-LD desde negocio.js.
 * Así la plantilla es reutilizable: al cambiar negocio.js se actualiza el SEO.
 * (index.html ya trae los valores correctos de Estética Luna pre-renderizados.)
 */
const setMeta = (selector, attr, key, valor) => {
  if (!valor) return
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', valor)
}

export function aplicarSeo() {
  const titulo = `${negocio.nombre} | ${negocio.subtitulo}`
  const descripcion = `${negocio.descripcionCorta} En ${negocio.ubicacion.zona}. Agenda por WhatsApp.`

  document.title = titulo
  setMeta('meta[name="description"]', 'name', 'description', descripcion)
  setMeta('meta[property="og:title"]', 'property', 'og:title', titulo)
  setMeta('meta[property="og:description"]', 'property', 'og:description', descripcion)
  setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', negocio.nombre)
  setMeta('meta[property="og:url"]', 'property', 'og:url', negocio.sitioWeb)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: negocio.nombre,
    description: negocio.descripcionCorta,
    slogan: negocio.lema,
    url: negocio.sitioWeb,
    telephone: negocio.whatsappVisible || undefined,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: negocio.ubicacion.direccion || undefined,
      addressLocality: 'Providencia',
      addressRegion: 'Región Metropolitana',
      addressCountry: 'CL',
    },
    sameAs: [negocio.instagram, negocio.whatsapp ? `https://wa.me/${negocio.whatsapp}` : null].filter(Boolean),
  }

  const tag = document.createElement('script')
  tag.type = 'application/ld+json'
  tag.textContent = JSON.stringify(ld)
  document.head.appendChild(tag)
}
