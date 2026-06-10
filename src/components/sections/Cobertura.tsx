import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { ZONES } from '@/data/content'
import { whatsappLink } from '@/lib/constants'
import { stock } from '@/lib/img'
import { slideRight, slideLeft, stagger, fadeUp, inView } from '@/lib/motion'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

// Cobertura a domicilio — zonas de atención en Lima.
export default function Cobertura() {
  return (
    <section id="cobertura" className="section-pad bg-navy-gradient">
      <div className="container-pro grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={slideRight}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="relative"
        >
          <div className="absolute -inset-3 -z-10 animate-blob bg-leaf-500/20 blur-2xl" />
          <img
            src={stock('domicilio.jpg')}
            alt="Fisioterapia a domicilio"
            className="w-full rounded-3xl shadow-soft"
          />
          <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-card">
            <MapPin className="h-6 w-6 text-leaf-500" />
            <div>
              <p className="font-display text-sm font-bold text-navy-700">Atención a domicilio</p>
              <p className="text-xs text-ink/60">en toda Lima Metropolitana</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideLeft}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
        >
          <SectionTitle
            eyebrow="Cobertura"
            title="Llevamos la fisioterapia a tu hogar"
            subtitle="Atendemos en los principales distritos de Lima con todos los protocolos de bioseguridad. ¿No ves tu zona? Consúltanos."
            align="left"
            light
          />

          <motion.div
            variants={stagger}
            initial={inView.initial}
            whileInView={inView.whileInView}
            viewport={inView.viewport}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {ZONES.map((zone) => (
              <motion.span
                key={zone}
                variants={fadeUp}
                className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-leaf-500"
              >
                {zone}
              </motion.span>
            ))}
          </motion.div>

          <a
            href={whatsappLink('Hola Fisiolife, quiero saber si atienden a domicilio en mi zona.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-leaf mt-8"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Consultar mi zona
          </a>
        </motion.div>
      </div>
    </section>
  )
}
