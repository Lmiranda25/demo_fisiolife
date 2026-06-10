import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { STEPS } from '@/data/content'
import { stagger, fadeUp, inView } from '@/lib/motion'

// "Cómo funciona" en 3 pasos — patrón clave de conversión (elimina incertidumbre).
export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section-pad bg-navy-50/40">
      <div className="container-pro">
        <SectionTitle
          eyebrow="Cómo funciona"
          title="Tu recuperación en 3 simples pasos"
          subtitle="Sin complicaciones. Te acompañamos desde el primer mensaje hasta que vuelvas a moverte sin dolor."
        />

        <motion.div
          variants={stagger}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="relative mt-14 grid gap-8 md:grid-cols-3"
        >
          {/* Línea conectora (desktop) */}
          <div className="absolute left-1/2 top-8 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-leaf-300 to-transparent md:block" />

          {STEPS.map((step) => (
            <motion.div key={step.n} variants={fadeUp} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy-gradient font-display text-xl font-extrabold text-white shadow-soft">
                {step.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy-700">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink/65">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
