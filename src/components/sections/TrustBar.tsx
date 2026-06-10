import { motion } from 'framer-motion'
import { ShieldCheck, Heart, Award } from 'lucide-react'
import { ADVANTAGES } from '@/data/content'
import { stagger, fadeUp, inView } from '@/lib/motion'

const ICONS = [Award, Heart, ShieldCheck]

// Barra de confianza justo bajo el hero (reduce fricción de inmediato).
export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-10">
      <div className="container-pro">
        <motion.div
          variants={stagger}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="grid gap-px overflow-hidden rounded-3xl bg-navy-100 shadow-soft sm:grid-cols-3"
        >
          {ADVANTAGES.map((adv, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={adv.title}
                variants={fadeUp}
                className="flex items-start gap-4 bg-white p-6 transition-colors hover:bg-navy-50/50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-gradient text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-navy-700">{adv.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{adv.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
