/**
 * ============================================================
 *  TODO EL CONTENIDO DEL NEGOCIO VIVE EN ESTE ARCHIVO
 *  Edita aquí para cambiar textos, precios, enlaces y secciones.
 *  Si un campo queda vacío ("") o su arreglo queda vacío ([]),
 *  la sección o línea asociada se oculta automáticamente.
 * ============================================================
 */

export const negocio = {
  nombre: 'Estética Luna',
  lema: 'Belleza elevada, como la luna',
  descripcionCorta: 'Estética facial y corporal.',

  // Subtítulo del hero
  subtitulo: 'Estética facial y corporal en Metro Los Leones, Providencia',

  // Ubicación
  ubicacion: {
    zona: 'Metro Los Leones, Providencia',
    direccion: '', // ej: 'Av. Pedro de Valdivia 1234, oficina 501'
    // Link de "Cómo llegar" en Google Maps. Si queda vacío, se genera
    // uno automáticamente con "ubicacion.zona".
    mapsUrl: '',
  },

  // Si whatsapp está vacío ("") se ocultan los botones de WhatsApp
  // y queda solo Instagram como canal de contacto.
  whatsapp: '56989321348', // formato internacional sin + ni espacios
  whatsappVisible: '+56 9 8932 1348', // como se muestra en pantalla (opcional)

  instagram: 'https://www.instagram.com/esteticaluna.cl',

  // Mensaje prellenado del botón flotante de WhatsApp
  mensajeWhatsapp: 'Hola, quiero agendar una hora en Estética Luna',

  // Si queda vacío, la línea del horario se oculta
  horario: '', // ej: 'Lun a vie 10:00 a 20:00 · Sáb 10:00 a 14:00'

  // Si queda vacío, la línea de medios de pago se oculta
  mediosPago: '', // ej: 'Efectivo, transferencia y tarjetas'

  // Etiqueta "Evaluación gratuita" en las tarjetas de servicio.
  // Por confirmar con la dueña.
  evaluacionGratis: false,

  // Promo destacada: se muestra solo si "activa" es true
  promo: {
    activa: true,
    titulo: 'Regálate un momento para ti',
    servicio: 'Masaje descontracturante y/o relajación',
    precio: 25000,
    detalle: 'Cupos limitados.',
    // Foto opcional de la promo. Si queda vacía, el banner es solo texto.
    imagen: '/servicios/masaje-descontracturante.jpg',
    imagenAlt: 'Masaje descontracturante y de relajación',
  },

  // Aviso que se muestra siempre al final de la sección de servicios
  disclaimerServicios:
    'Precios referenciales, sujetos a cambio. Los resultados pueden variar según cada persona. Consulta por evaluación previa.',

  // Aviso legal del pie de página
  avisoLegal:
    '© 2026 Estética Luna. Todos los derechos reservados. Precios referenciales sujetos a cambio. Sin ventas online: las reservas se coordinan por WhatsApp o Instagram.',

  // Texto corto de la sección "Sobre Estética Luna".
  // Mantener neutro: sin certificaciones ni cifras no confirmadas.
  sobre: {
    parrafos: [
      'Somos un espacio de estética facial y corporal en el corazón de Providencia, a pasos del Metro Los Leones.',
      'Cada atención la diseñamos para ti: te escuchamos, evaluamos tu piel o tu cuerpo y te recomendamos el tratamiento que tiene sentido para tu objetivo.',
      'Queremos que salgas sintiéndote bien contigo. Ese es el único resultado que nos importa.',
    ],
  },

  // Cómo reservar: 3 pasos
  // "imagen" es opcional: si queda vacía, el paso se muestra solo con texto.
  pasos: [
    {
      n: 1,
      titulo: 'Escríbenos',
      texto: 'Por WhatsApp o por DM de Instagram.',
      imagen: '/reserva/paso-1-escribenos.jpg',
      imagenAlt: 'Escribiendo por WhatsApp para reservar una hora',
    },
    {
      n: 2,
      titulo: 'Elige tu tratamiento y horario',
      texto: 'Te orientamos según lo que necesitas.',
      imagen: '/reserva/paso-2-elige-tratamiento.jpg',
      imagenAlt: 'Elección del tratamiento y del horario de la atención',
    },
    {
      n: 3,
      titulo: 'Ven a vivir tu momento',
      texto: 'Te esperamos en Metro Los Leones, Providencia.',
      imagen: '/reserva/paso-3-ven-a-vivir.jpg',
      imagenAlt: 'Viviendo el momento de放松 en el centro de estética',
    },
  ],

  // Servicios. Tipos de descripción:
  //  - string                → texto libre
  //  - { texto, destacado }  → texto con viñeta decorativa
  // Pack: "sesiones" define cuántas sesiones incluye; el valor por sesión
  // se calcula automáticamente (precio / sesiones, redondeado).
  // Imagen: opcional. Vive en "public/servicios/" (ver README). Si queda
  // vacío, la tarjeta se muestra solo con texto. Los packs reutilizan la
  // imagen de su servicio base.
  servicios: {
    corporales: [
      {
        id: 'reductivo-1',
        nombre: 'Masaje reductivo (1 sesión)',
        precio: 25000,
        destacado: true,
        imagen: '/servicios/masaje-reductivo.jpg',
        imagenAlt: 'Masaje reductivo en el centro de estética',
        descripcion: [
          { texto: 'Reduce medidas y celulitis', destacado: true },
          { texto: 'Moldea y reafirma', destacado: true },
          { texto: 'Mejora la circulación', destacado: true },
        ],
      },
      {
        id: 'reductivo-10',
        nombre: 'Pack 10 masajes reductivos',
        precio: 125000,
        pack: { sesiones: 10 },
        imagen: '/servicios/masaje-reductivo.jpg',
        imagenAlt: 'Masaje reductivo en el centro de estética',
        descripcion: [
          { texto: 'Reduce medidas y celulitis', destacado: true },
          { texto: 'Moldea y reafirma', destacado: true },
          { texto: 'Mejora la circulación', destacado: true },
        ],
      },
      {
        id: 'reductivo-20',
        nombre: 'Pack 20 masajes reductivos',
        precio: 200000,
        pack: { sesiones: 20 },
        imagen: '/servicios/masaje-reductivo.jpg',
        imagenAlt: 'Masaje reductivo en el centro de estética',
        descripcion: [
          { texto: 'Reduce medidas y celulitis', destacado: true },
          { texto: 'Moldea y reafirma', destacado: true },
          { texto: 'Mejora la circulación', destacado: true },
        ],
      },
      {
        id: 'drenaje-1',
        nombre: 'Drenaje linfático manual (1 sesión)',
        precio: 25000,
        imagen: '/servicios/drenaje-linfatico.jpg',
        imagenAlt: 'Drenaje linfático manual',
      },
      {
        id: 'drenaje-5',
        nombre: 'Pack 5 drenajes linfáticos manuales',
        precio: 110000,
        pack: { sesiones: 5 },
        imagen: '/servicios/drenaje-linfatico.jpg',
        imagenAlt: 'Drenaje linfático manual',
      },
      {
        id: 'descontracturante',
        nombre: 'Masaje descontracturante y/o de relajación',
        precio: 25000,
        etiqueta: 'Cupos limitados',
        imagen: '/servicios/masaje-descontracturante.jpg',
        imagenAlt: 'Masaje descontracturante y de relajación',
        descripcion: [
          { texto: 'Alivia tensiones y contracturas', destacado: true },
          { texto: 'Ayuda a relajar cuerpo y mente', destacado: true },
        ],
      },
    ],
    faciales: [
      {
        id: 'limpieza-1',
        nombre: 'Limpieza facial',
        precio: 25000,
        imagen: '/servicios/limpieza-facial.jpg',
        imagenAlt: 'Limpieza facial profunda',
      },
      {
        id: 'limpieza-3',
        nombre: 'Pack 3 limpiezas faciales',
        precio: 65000,
        pack: { sesiones: 3 },
        imagen: '/servicios/limpieza-facial.jpg',
        imagenAlt: 'Limpieza facial profunda',
      },
      {
        id: 'dermapen-1',
        nombre: 'Dermapen + vitaminas',
        precio: 35000,
        imagen: '/servicios/dermapen-vitaminas.jpg',
        imagenAlt: 'Tratamiento de dermapen con vitaminas',
      },
      {
        id: 'dermapen-3',
        nombre: 'Pack 3 Dermapen + vitaminas',
        precio: 90000,
        pack: { sesiones: 3 },
        imagen: '/servicios/dermapen-vitaminas.jpg',
        imagenAlt: 'Tratamiento de dermapen con vitaminas',
      },
      {
        id: 'limpieza-dermaplaning',
        nombre: 'Limpieza facial + dermaplaning',
        precio: 27000,
        imagen: '/servicios/limpieza-facial-dermaplaning.jpg',
        imagenAlt: 'Limpieza facial con dermaplaning',
      },
    ],
  },

  // Testimonios: se muestran solo si el arreglo tiene contenido.
  // Ej: { nombre: 'Camila R.', texto: '...', estrellas: 5 }
  testimonios: [],

  // Galería de resultados: se muestra solo si el arreglo tiene contenido.
  // Usa imágenes propias (sin fotos de Instagram de terceros).
  // Ej: { src: '/galeria/1.jpg', alt: 'Resultado de limpieza facial' }
  galeria: [],

  // Imagen opcional del hero/SEO (se ignora si está vacía)
  imagen: '',

  // URL del sitio para Open Graph / JSON-LD
  sitioWeb: 'https://esteticaluna.cl/',
}

/* ============================================================
 *  Helpers: no editar si no es necesario
 * ============================================================ */

export const formatearPrecio = (valor) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(valor)

/** Valor aproximado por sesión de un pack: precio / sesiones, redondeado. */
export const precioPorSesion = (servicio) =>
  servicio.pack ? Math.round(servicio.precio / servicio.pack.sesiones) : null

export const enlaceWhatsapp = (mensaje = negocio.mensajeWhatsapp) =>
  negocio.whatsapp ? `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}` : null

export const enlaceWhatsappServicio = (nombre) =>
  enlaceWhatsapp(`Hola, quiero agendar una hora para: ${nombre}`)

export const enlaceMaps = () => {
  const { mapsUrl, zona, direccion } = negocio.ubicacion
  if (mapsUrl) return mapsUrl
  const query = encodeURIComponent([direccion, zona, 'Santiago, Chile'].filter(Boolean).join(', '))
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}
