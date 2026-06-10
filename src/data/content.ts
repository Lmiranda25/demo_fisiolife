import { stock, reciclada } from '@/lib/img'

// Tipos de consulta REALES (presencial, online, domiciliaria)
export interface ConsultType {
  key: string
  title: string
  desc: string
  image: string
  perks: string[]
  whatsapp: string
}

export const CONSULT_TYPES: ConsultType[] = [
  {
    key: 'presencial',
    title: 'Presencial',
    desc: 'Atención completa en nuestras instalaciones, con todo el equipamiento profesional.',
    image: reciclada('instalaciones.png'),
    perks: ['Evaluación completa', 'Equipamiento especializado', 'Terapia instrumental'],
    whatsapp: 'Hola Fisiolife, quiero agendar una consulta PRESENCIAL.',
  },
  {
    key: 'online',
    title: 'Online',
    desc: 'Orientación y seguimiento desde donde estés, ideal para PrimeSolution y segundas opiniones.',
    image: stock('online.jpg'),
    perks: ['Desde cualquier lugar', 'Segunda opinión clínica', 'Seguimiento personalizado'],
    whatsapp: 'Hola Fisiolife, quiero agendar una consulta ONLINE.',
  },
  {
    key: 'domicilio',
    title: 'A domicilio',
    desc: 'Llevamos la fisioterapia a tu casa con todos los protocolos de bioseguridad.',
    image: stock('domicilio.jpg'),
    perks: ['En la comodidad de tu hogar', 'Protocolos de bioseguridad', 'Sin desplazamientos'],
    whatsapp: 'Hola Fisiolife, quiero agendar una consulta A DOMICILIO.',
  },
]

// "Cómo funciona" — patrón de conversión en 3 pasos
export const STEPS = [
  {
    n: '01',
    title: 'Agenda tu cita',
    desc: 'Escríbenos por WhatsApp y elige el tipo de consulta que mejor se adapte a ti.',
  },
  {
    n: '02',
    title: 'Evaluación personalizada',
    desc: 'Analizamos tu caso a fondo para encontrar la causa real de tu dolor.',
  },
  {
    n: '03',
    title: 'Recupérate sin dolor',
    desc: 'Seguimos un plan a tu medida hasta que vuelvas a moverte con total libertad.',
  },
]

// Ventajas reales: Experiencia, Compromiso, Profesionalismo
export const ADVANTAGES = [
  {
    title: '+15 años de experiencia',
    desc: 'Dirigidos por el PT. Alex Silva García, referente en terapia manual y fisioterapia integral.',
  },
  {
    title: 'Compromiso real',
    desc: 'Nos comprometemos con tu recuperación. Cada dolor tiene una historia y una solución posible.',
  },
  {
    title: 'Profesionalismo',
    desc: 'Técnicas basadas en evidencia y los más altos protocolos de bioseguridad.',
  },
]

// Zonas de cobertura a domicilio (Lima)
export const ZONES = [
  'La Molina',
  'San Borja',
  'Surco',
  'Miraflores',
  'San Isidro',
  'Los Olivos',
  'San Miguel',
  'Magdalena',
  'Jesús María',
  'Lince',
  'Barranco',
  'La Victoria',
]

// PLACEHOLDER: testimonios de ejemplo. Reemplazar por reseñas reales.
export interface Testimonial {
  name: string
  role: string
  avatar: string
  text: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carmen Díaz',
    role: 'Dolor lumbar crónico',
    avatar: stock('av1.jpg'),
    text: 'Probé de todo y nada me funcionaba. En Fisiolife encontraron la causa real y por fin vivo sin dolor. El trato fue excelente.',
  },
  {
    name: 'Ricardo Ponce',
    role: 'Lesión deportiva',
    avatar: stock('av2.jpg'),
    text: 'Me recuperé de una lesión de rodilla más rápido de lo que esperaba. La fisioterapia a domicilio fue súper cómoda y profesional.',
  },
  {
    name: 'Elena Vargas',
    role: 'Rehabilitación postural',
    avatar: stock('av3.jpg'),
    text: 'El análisis biomecánico me abrió los ojos. Corregí mi postura y los dolores de cuello desaparecieron. Totalmente recomendado.',
  },
]
