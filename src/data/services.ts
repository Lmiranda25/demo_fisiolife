import {
  Home,
  Activity,
  ScanLine,
  PersonStanding,
  Bandage,
  Hand,
  StretchHorizontal,
  Waves,
  Syringe,
  Sparkles,
  Armchair,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Category = 'manual' | 'instrumental' | 'deportivo' | 'postural' | 'domicilio'

export interface Service {
  title: string
  desc: string
  icon: LucideIcon
  category: Category
}

export const CATEGORIES: { key: Category | 'todos'; label: string }[] = [
  { key: 'todos', label: 'Todos' },
  { key: 'manual', label: 'Terapia manual' },
  { key: 'instrumental', label: 'Instrumental' },
  { key: 'deportivo', label: 'Deportivo' },
  { key: 'postural', label: 'Postural' },
  { key: 'domicilio', label: 'A domicilio' },
]

// Servicios REALES de fisiolife.com.pe
export const SERVICES: Service[] = [
  {
    title: 'Fisioterapia en Casa',
    desc: 'Recuperación en la comodidad de tu hogar, con todos los protocolos de bioseguridad.',
    icon: Home,
    category: 'domicilio',
  },
  {
    title: 'Fisioterapia Integral',
    desc: 'Plan de recuperación personalizado que aborda la causa real de tu dolor.',
    icon: Activity,
    category: 'manual',
  },
  {
    title: 'Análisis Biomecánico',
    desc: 'Evaluación del movimiento para identificar disfunciones y prevenir lesiones.',
    icon: ScanLine,
    category: 'postural',
  },
  {
    title: 'Despistaje Postural',
    desc: 'Detección temprana de problemas posturales y plan correctivo a tu medida.',
    icon: PersonStanding,
    category: 'postural',
  },
  {
    title: 'Vendaje Neuromuscular',
    desc: 'Kinesiotape para dar soporte, reducir dolor y mejorar la función muscular.',
    icon: Bandage,
    category: 'deportivo',
  },
  {
    title: 'Movilización Articular',
    desc: 'Técnicas manuales para restaurar el rango de movimiento de las articulaciones.',
    icon: Hand,
    category: 'manual',
  },
  {
    title: 'Stretching Deportivo',
    desc: 'Elongación guiada para problemas deportivos y mejora del rendimiento.',
    icon: StretchHorizontal,
    category: 'deportivo',
  },
  {
    title: 'Movilización de Tejidos',
    desc: 'Trabajo de tejidos blandos para liberar tensión y mejorar la elasticidad.',
    icon: Waves,
    category: 'manual',
  },
  {
    title: 'Punción Seca',
    desc: 'Tratamiento de puntos gatillo miofasciales para aliviar el dolor profundo.',
    icon: Syringe,
    category: 'manual',
  },
  {
    title: 'Manipulación Miofascial',
    desc: 'Liberación de la fascia para restaurar la movilidad y reducir restricciones.',
    icon: Sparkles,
    category: 'manual',
  },
  {
    title: 'Asesoramiento Ergonómico',
    desc: 'Recomendaciones para tu día a día y puesto de trabajo, evitando recaídas.',
    icon: Armchair,
    category: 'postural',
  },
  {
    title: 'Fisioterapia Instrumental',
    desc: 'Manipulación instrumentada (Hands Pro) para resultados más precisos y eficaces.',
    icon: Wrench,
    category: 'instrumental',
  },
]
