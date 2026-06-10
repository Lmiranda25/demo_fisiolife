// Datos de contacto REALES de fisiolife.com.pe
export const CONTACT = {
  phone: '+51 944 416 561',
  phoneRaw: '51944416561',
  city: 'Lima, Perú',
  waLink: 'https://wa.link/3zzp3t', // enlace WhatsApp directo del cliente
} as const

export const SOCIALS = {
  facebook: 'https://facebook.com/fisiolife.pe',
  youtube: 'https://youtube.com/@alexsilvacomovivirsindolor',
} as const

// Helper central de WhatsApp con mensaje pre-rellenado.
export function whatsappLink(message?: string): string {
  const text = message ?? 'Hola Fisiolife, quiero agendar una cita de fisioterapia.'
  return `https://api.whatsapp.com/send?phone=${CONTACT.phoneRaw}&text=${encodeURIComponent(text)}`
}

// Formspree (placeholder). El cliente pega su ID -> https://formspree.io/f/XXXXXXXX
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/your-form-id'

// Rutas de las vistas separadas (cada una con su propia URL).
export const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Cobertura', to: '/cobertura' },
  { label: 'Blog', to: '/blog' },
  { label: 'Nosotros', to: '/nosotros' },
  { label: 'Contacto', to: '/contacto' },
] as const
