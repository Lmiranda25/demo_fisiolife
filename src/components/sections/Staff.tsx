import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { reciclada } from '@/lib/img'
import { whatsappLink } from '@/lib/constants'
import { slideRight, slideLeft, stagger, fadeUp, inView } from '@/lib/motion'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

const CREDS = [
  'PT. TMO. Alex Silva García — Director',
  '+15 años de experiencia clínica',
  'Especialista en Terapia Manual Ortopédica',
  'Creador de la metodología Hands Pro',
]

// Staff / Sobre breve — confianza en las personas.
export default function Staff() {
  return (
    <section className="section-pad bg-navy-50/40">
      <div className="container-pro grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={slideRight}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="relative order-2 lg:order-1"
        >
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-leaf-gradient opacity-15 blur-xl" />
          <img
            src={reciclada('instalaciones.png')}
            alt="Instalaciones de Fisiolife"
            className="w-full rounded-3xl shadow-soft"
          />
        </motion.div>

        <motion.div
          variants={slideLeft}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="order-1 lg:order-2"
        >
          <span className="eyebrow">Nuestro equipo</span>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-navy-700 sm:text-3xl lg:text-4xl">
            Profesionales que se comprometen con tu recuperación
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/65">
            Fisiolife está dirigido por el PT. Alex Silva García, referente en fisioterapia integral y
            terapia manual en el Perú. Un equipo que combina experiencia, evidencia científica y un
            trato humano para que vuelvas a vivir sin dolor.
          </p>

          <motion.ul
            variants={stagger}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
            className="mt-7 space-y-3"
          >
            {CREDS.map((c) => (
              <motion.li key={c} variants={fadeUp} className="flex items-center gap-3 text-ink/80">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-leaf-500" />
                <span className="text-sm font-medium">{c}</span>
              </motion.li>
            ))}
          </motion.ul>

          <a
            href={whatsappLink('Hola Fisiolife, quiero conocer más sobre su equipo y servicios.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy mt-8"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Conversemos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
