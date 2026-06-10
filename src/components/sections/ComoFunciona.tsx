import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { STEPS } from '@/data/content'
import { stock } from '@/lib/img'
import { stagger, fadeUp, inView } from '@/lib/motion'

// "Cómo funciona" en 3 pasos — patrón clave de conversión (elimina incertidumbre).
// Banda oscura con imagen de fondo (textura del rubro) para dar ritmo visual.
export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="section-pad relative overflow-hidden">
      {/* Fondo con imagen muy sutil + overlay navy fuerte para legibilidad total */}
      <div className="absolute inset-0 -z-10 bg-navy-900">
        <img src={stock('pattern-bg.jpg')} alt="" className="h-full w-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/95 via-navy-800/95 to-navy-900/97" />
      </div>
      <div className="absolute -right-16 top-10 -z-10 h-72 w-72 animate-blob bg-leaf-500/15 blur-3xl" />

      <div className="container-pro">
        <SectionTitle
          eyebrow="Cómo funciona"
          title="Tu recuperación en 3 simples pasos"
          subtitle="Sin complicaciones. Te acompañamos desde el primer mensaje hasta que vuelvas a moverte sin dolor."
          light
        />

        <motion.div
          variants={stagger}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="relative mt-14 grid gap-8 md:grid-cols-3"
        >
          {/* Línea conectora (desktop) */}
          <div className="absolute left-1/2 top-8 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-leaf-400/60 to-transparent md:block" />

          {STEPS.map((step) => (
            <motion.div key={step.n} variants={fadeUp} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-leaf-gradient font-display text-xl font-extrabold text-white shadow-glow">
                {step.n}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-navy-50/80">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
