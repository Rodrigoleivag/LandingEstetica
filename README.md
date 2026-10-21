# Landing Page — Estética Luna

Plantilla de **landing page de una página** para centro de estética facial y corporal:
**Estética Luna**, en Metro Los Leones, Providencia (Santiago, Chile). El sitio muestra
los tratamientos y precios, la promo destacada, cómo reservar y la ubicación, sin
backend ni pagos online.

**Ventaja clave:** todo el contenido del negocio vive en **un solo archivo**
(`src/data/negocio.js`). Para adaptarla a otro negocio basta con editar ese archivo
(textos, servicios, precios, packs, promos, enlaces, colores de marca vía config) sin
tocar los componentes.

**Reservas:** solo por WhatsApp o DM de Instagram (sin carrito ni pagos online).

---

## Arquitectura

```
┌─────────────────────────────────────────────────────────┐
│  Navegador (SPA estática, sin servidor)                 │
│                                                         │
│  index.html ──► main.jsx ──► App.jsx                    │
│      │                           │                      │
│      │         ┌─────────────────┼──────────────────┐   │
│      │         ▼                 ▼                  ▼   │
│      │   Componentes UI   src/data/negocio.js    seo.js │
│      │   (Navbar, Hero,   (ÚNICA fuente de      (title, │
│      │    Servicios, ...)  datos del negocio)   meta,   │
│      │         │                │              JSON-LD) │
│      │         └───── helpers de negocio.js ────┘       │
│      │           (wa.me, Google Maps, CLP,              │
│      │            precio por sesión de packs)           │
│      ▼                                                  │
│  Google Fonts: Cormorant Garamond + Great Vibes + Inter │
└─────────────────────────────────────────────────────────┘
                        │
                        ▼  npm run build
                  dist/  (HTML + CSS + JS estático)
                        │
            ┌───────────┴───────────┐
            ▼                       ▼
        Netlify             Cloudflare Workers
```

- **Frontend:** React 18 (solo `react` y `react-dom`) + Vite 6 (dev server y build).
- **Estilos:** Tailwind CSS 4 (mobile first, clases utilitarias, colores como variables `@theme`).
- **Sin backend, sin base de datos, sin pagos online, sin librerías pesadas** (JS: 52 kB gzip).
- **Despliegue:** sitio 100% estático en `dist/`, apto para cualquier CDN.
- **Tipografías:** Cormorant Garamond (titulares), Great Vibes (acentos) e Inter (cuerpo) desde Google Fonts.
- **Imágenes:** propias del negocio en `public/servicios/`, `public/reserva/` y `public/galeria/`, con `loading="lazy"`.

## Stack tecnológico

| Tecnología | Versión | Rol |
| --- | --- | --- |
| React | 18.3 | UI en componentes, estado (tabs de servicios, menú) |
| Vite | 6.4 | Dev server y build de producción → `dist/` |
| Tailwind CSS | 4.0 | Estilos utilitarios, variables de color (`@theme`), responsive |
| HTML semántico + JSON-LD | — | SEO (`BeautySalon` con ubicación y redes) |

## Módulos del sistema y su ubicación

| Módulo | Ubicación | Qué hace |
| --- | --- | --- |
| **Datos del negocio** | `src/data/negocio.js` | Único archivo editable: nombre, lema, redes, WhatsApp, horario, dirección, servicios, packs, promos, testimonios, galería y avisos legales. Incluye helpers: formato CLP, precio por sesión de packs, enlaces `wa.me` y Google Maps |
| **SEO runtime** | `src/seo.js` | Actualiza `<title>`, meta description, Open Graph y JSON-LD `BeautySalon` desde `negocio.js` |
| **App / orquestador** | `src/App.jsx` | Orden de secciones |
| **Navbar** | `src/components/Navbar.jsx` | Barra fija con logo, enlaces ancla (Servicios, Promo, Cómo reservar, Ubicación) y botón "Agenda tu hora" (menú hamburguesa en móvil) |
| **Hero** | `src/components/Hero.jsx` | Lema, subtítulo y CTAs (WhatsApp / Ver servicios) |
| **Promo destacada** | `src/components/PromoBanner.jsx` | Banner de promoción con foto (visible solo si `promo.activa`) |
| **Servicios** | `src/components/Servicios.jsx` | Tabs Corporales/Faciales + grilla de tarjetas con imagen, precio, valor por sesión del pack y botón "Reservar" + aviso de precios |
| **Cómo reservar** | `src/components/ComoReservar.jsx` | 3 pasos del proceso de reserva, cada uno con su foto |
| **Sobre nosotros** | `src/components/SobreNosotros.jsx` | Texto corto y editable del negocio |
| **Testimonios y galería** | `src/components/Testimonios.jsx` | Testimonios + galería de resultados (ocultos si los arreglos están vacíos) |
| **Ubicación** | `src/components/Ubicacion.jsx` | Zona, dirección, horario, medios de pago y "Cómo llegar" (Google Maps, sin iframes) |
| **Footer** | `src/components/Footer.jsx` | Instagram, WhatsApp y aviso legal |
| **WhatsApp flotante** | `src/components/WhatsAppFab.jsx` | Botón flotante en todas las pantallas, con mensaje prellenado y codificado |
| **Logo** | `src/components/Logo.jsx` | Usa `/public/logo.png`; si no existe, muestra el nombre con media luna SVG |
| **Título de sección** | `src/components/SectionTitle.jsx` | Acento en caligrafía + título en serif |
| **Pétalos** | `src/components/Petalos.jsx` | Fondo decorativo SVG liviano (sin imágenes) |
| **Estilos globales** | `src/index.css` | Tailwind + variables `@theme` (colores y tipografías) + fade-in + motion reducido |
| **Config. de build** | `vite.config.js`, `netlify.toml`, `wrangler.jsonc` | Build, Tailwind v4 y deploy en Netlify / Cloudflare |
| **Assets** | `public/` | `logo.png` (agregar), `favicon.svg`, `servicios/` (fotos de tratamientos), `reserva/` (fotos de los pasos de reserva), `galeria/` (fotos de resultados) |

## Requisitos

- **Node.js 18+** y npm
- Cuenta gratuita en [Netlify](https://www.netlify.com) y/o [Cloudflare](https://dash.cloudflare.com)
- (Opcional) `netlify-cli` o `wrangler` para desplegar desde terminal

## Comandos

```bash
npm install        # instalar dependencias (una sola vez)
npm run dev        # desarrollo local → http://localhost:5173
npm run build      # build de producción → carpeta dist/
npm run preview    # probar el build localmente en http://localhost:4173
npm run deploy     # build + deploy a Cloudflare Workers (wrangler deploy)
npm run deploy:pages # build + deploy a Cloudflare Pages
```

## Deploy

### Netlify (opción 1: panel web)

1. Sube el proyecto a GitHub/GitLab
2. En Netlify: **Add new site → Import an existing project**
3. Configuración (ya viene en `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Netlify (opción 2: terminal)

```bash
npm install -g netlify-cli
netlify deploy --prod    # desde la raíz del proyecto
```

### Cloudflare Workers (recomendado para este proyecto)

1. En Cloudflare dashboard: **Workers & Pages → Create → Worker**
2. Conecta el repositorio de GitHub y deja la configuración detectada:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
   - **Output directory:** `dist`
3. La configuración está en `wrangler.jsonc` (nombre del worker `landingestetica`,
   assets en `./dist` y fallback SPA con `not_found_handling: "single-page-application"`).

O desde terminal:

```bash
npm run deploy          # = npm run build && wrangler deploy
```

> **Importante:** no vuelvas a crear un archivo `public/_redirects`. Cloudflare
> Workers también parsea ese archivo y **rechaza el deploy** con
> `Invalid _redirects configuration: Infinite loop detected in this rule`
> (código `100324`) cuando contiene la regla `/* /index.html 200`.
> El fallback SPA en Netlify está en `netlify.toml` (`[[redirects]]`), y en
> Cloudflare lo resuelve `wrangler.jsonc`.

### Cloudflare Pages (alternativa)

1. En Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**
2. Framework preset: **Vite**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

O desde terminal:

```bash
npm run build
npm run deploy:pages     # = wrangler pages deploy dist
```

## Módulos opcionales (se activan en `negocio.js`)

| Módulo | Cómo activarlo | Si queda vacío |
| --- | --- | --- |
| **WhatsApp** ✅ activo | `whatsapp: "56989321348"` | Se ocultan flotante, hero, navbar y tarjetas (queda solo Instagram) |
| **Promo destacada** ✅ activa | `promo: { activa: true, ... }` | Se oculta la sección de promo y su ancla del navbar |
| **Horario** | `horario: "Lun a vie 10:00 a 20:00"` | Se oculta la línea en Ubicación |
| **Medios de pago** | `mediosPago: "Efectivo y transferencia"` | Se oculta la línea |
| **Dirección exacta** | `ubicacion.direccion: "Av. ..."`, deja `ubicacion.mapsUrl` vacío y se genera el link de Maps solo | Se muestra solo la zona (Metro Los Leones) |
| **Evaluación gratuita** | `evaluacionGratis: true` | No se muestra la etiqueta en las tarjetas |
| **Testimonios** | `testimonios: [{ nombre, texto, estrellas }]` | Se oculta la sección |
| **Galería de resultados** | `galeria: [{ src: "/galeria/1.jpg", alt: "..." }]` | Se oculta la sección |
| **Foto del servicio** | `servicios.*[].imagen: "/servicios/masaje-reductivo.jpg"` | La tarjeta se muestra solo con texto |
| **Foto de la promo** | `promo.imagen: "/servicios/masaje-descontracturante.jpg"` | El banner de promo es solo texto |
| **Foto de los pasos** | `pasos[].imagen: "/reserva/paso-1-escribenos.jpg"` | El paso se muestra solo con texto |
| **Logo** | `public/logo.png` | Se muestra el nombre en texto con media luna SVG |

## Personalización

- **Colores de marca:** `src/index.css` → bloque `@theme`
  (`fondo`, `rosa`, `rosa-suave`, `malva`, `malva-claro`, `crema`). En Tailwind v4 no hay
  `tailwind.config.js`: al cambiar una variable se actualiza en todos los componentes
  (`bg-fondo`, `text-malva`, `font-display`, etc.).
- **Tipografías:** link de Google Fonts en `index.html` + `--font-*` en `@theme`
  (`font-display`, `font-script`, `font-body`).
- **Contenido:** solo `src/data/negocio.js`.
- **SEO:** título, description y Open Graph en `index.html` (estáticos) + `src/seo.js`
  (se regeneran desde `negocio.js`; usar URL absoluta en `og:image` una vez publicado
  para que WhatsApp/Instagram muestren la imagen).

## SEO incluido

- `lang="es-CL"`, `<title>`, meta description y Open Graph
- HTML semántico (`header`, `main`, `section`, `footer`) y `alt` en imágenes
- JSON-LD `BeautySalon` con ubicación, teléfono y enlaces sociales
- `favicon.svg` en `public/`

## Imágenes de servicios

Cada tarjeta de tratamiento puede llevar una foto. Los archivos viven en
`public/servicios/` y se referencian con el campo `imagen` de cada servicio en
`negocio.js`:

```js
{
  id: 'reductivo-1',
  nombre: 'Masaje reductivo (1 sesión)',
  precio: 25000,
  imagen: '/servicios/masaje-reductivo.jpg',
  imagenAlt: 'Masaje reductivo en el centro de estética',
}
```

- Si `imagen` queda vacío, la tarjeta se dibuja solo con texto (sigue funcionando).
- `imagenAlt` es opcional; si falta, se usa el nombre del servicio como texto alternativo.
- Los **packs reutilizan la foto de su servicio base** (p. ej. "Pack 10 masajes reductivos"
  usa la misma imagen que "Masaje reductivo (1 sesión)").
- La foto se recorta con `object-cover` en una franja de 224 px de alto, así que
  funciona mejor una imagen **vertical o cuadrada** centrada en el tratamiento.

Fotos incluidas (optimizadas a máx. 800 px, calidad 78):

| Archivo | Servicio |
| --- | --- |
| `public/servicios/masaje-reductivo.jpg` | Masaje reductivo (y sus packs) |
| `public/servicios/drenaje-linfatico.jpg` | Drenaje linfático manual (y su pack) |
| `public/servicios/masaje-descontracturante.jpg` | Masaje descontracturante / relajación |
| `public/servicios/limpieza-facial.jpg` | Limpieza facial (y su pack) |
| `public/servicios/limpieza-facial-dermaplaning.jpg` | Limpieza facial + dermaplaning |
| `public/servicios/dermapen-vitaminas.jpg` | Dermapen + vitaminas (y su pack) |

Para reemplazar una foto, deja el archivo en `public/servicios/` con el mismo nombre
(o cambia la ruta en `negocio.js`) y optimízalo antes de subirlo:

```bash
sips -Z 800 -s format jpeg -s formatOptions 78 "mi foto.png" --out public/servicios/masaje-reductivo.jpg
```

## Imágenes de la promo y de "Cómo reservar"

La **promo** usa el campo `promo.imagen` de `negocio.js`. Si queda vacío, el banner
se dibuja solo con texto:

```js
promo: {
  activa: true,
  titulo: 'Regálate un momento para ti',
  servicio: 'Masaje descontracturante y/o relajación',
  precio: 25000,
  detalle: 'Cupos limitados.',
  imagen: '/servicios/masaje-descontracturante.jpg',
  imagenAlt: 'Masaje descontracturante y de relajación',
}
```

Los **3 pasos de "Cómo reservar"** usan el campo `imagen` de cada paso. Las fotos
viven en `public/reserva/`:

| Archivo | Paso |
| --- | --- |
| `public/reserva/paso-1-escribenos.jpg` | 1. Escríbenos |
| `public/reserva/paso-2-elige-tratamiento.jpg` | 2. Elige tu tratamiento y horario |
| `public/reserva/paso-3-ven-a-vivir.jpg` | 3. Ven a vivir tu momento |

Ambos casos son opcionales: si `imagen` está vacío, la sección se muestra sin foto.

## Imágenes de galería

Las fotos viven en `public/galeria/` y se enlazan con el arreglo `galeria` de
`negocio.js` (si el arreglo está vacío, la sección no se muestra). No usar fotos de
Instagram de terceros.

Para **agregar o reemplazar una foto**: pon el archivo en `public/galeria/` (por ejemplo
`limpieza-facial.jpg`) y agrega `{ src: "/galeria/limpieza-facial.jpg", alt: "Resultado
de limpieza facial" }` al arreglo. Consejos: formato WebP o JPEG, cuadradas o verticales,
mínimo 600 px, y optimizadas (macOS: `sips -Z 800 foto.png --out foto.jpg` reduce el
peso sin perder calidad útil). No incluir fotos de antes y después por defecto.

## Adaptar esta plantilla a otro negocio

1. Editar `src/data/negocio.js` (nombre, lema, servicios, precios, packs, enlaces).
2. Cambiar colores/tipografías en `src/index.css` (bloque `@theme`).
3. Reemplazar `public/logo.png` y `public/favicon.svg`.
4. Actualizar `<title>`, description y OG en `index.html` (y `sitioWeb` en `negocio.js`).
5. Revisar los campos pendientes:

### Campos por completar (Estética Luna)

- [x] `whatsapp` → `56989321348`
- [x] `instagram` → `esteticaluna.cl`
- [x] `ubicacion.zona` → Metro Los Leones, Providencia
- [x] `servicios` y precios de la lista
- [ ] `ubicacion.direccion` (dirección exacta, por confirmar con la dueña)
- [ ] `horario` (por confirmar)
- [ ] `mediosPago` (por confirmar)
- [ ] `evaluacionGratis` (por confirmar con la dueña; inicial `false`)
- [ ] `testimonios` (dejar `[]` hasta tener reales; no inventar)
- [x] Fotos de servicios → `public/servicios/` + campo `imagen` en cada servicio
- [x] Foto de la promo → `public/servicios/masaje-descontracturante.jpg` (`promo.imagen`)
- [x] Fotos de "Cómo reservar" → `public/reserva/` + campo `imagen` en cada paso
- [ ] `galeria` (fotos propias, no de Instagram)
- [ ] `public/logo.png` (si no existe, se muestra el nombre en texto)

## Notas legales

- Sin carrito ni pagos online: las reservas se coordinan por WhatsApp o DM de Instagram.
- Aviso de precios referenciales y variación de resultados al final de Servicios y en el
  pie de página (campos `disclaimerServicios` y `avisoLegal` en `negocio.js`).
- El botón flotante de WhatsApp usa mensaje prellenado codificado con `encodeURIComponent`.
