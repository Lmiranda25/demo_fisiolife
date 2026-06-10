import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import { SERVICES, CATEGORIES, type Category } from '@/data/services'
import { whatsappLink } from '@/lib/constants'
import { stagger, fadeUp, inView } from '@/lib/motion'

type Filter = Category | 'todos'

// Grid de servicios filtrable. Funcionalidad de conversión.
export default function Servicios() {
  const [filter, setFilter] = useState<Filter>('todos')
  const items = SERVICES.filter((s) => filter === 'todos' || s.category === filter)

  return (
    <section id="servicios" className="section-pad bg-paper">
      <div className="container-pro">
        <SectionTitle
          eyebrow="Nuestros servicios"
          title="Tratamientos para cada necesidad"
          subtitle="Desde terapia manual hasta fisioterapia instrumental y deportiva. Encuentra lo que tu cuerpo necesita."
        />

        {/* Filtros */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                filter === c.key ? 'text-white' : 'text-ink/60 hover:text-navy-600'
              }`}
            >
              {filter === c.key && (
                <motion.span layoutId="serv-filter" className="absolute inset-0 -z-10 rounded-full bg-navy-gradient" />
              )}
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          variants={stagger}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((s) => {
              const Icon = s.icon
              return (
                <motion.article
                  layout
                  key={s.title}
                  variants={fadeUp}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-navy-100/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-600 transition group-hover:bg-leaf-gradient group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy-700">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{s.desc}</p>
                  <a
                    href={whatsappLink(`Hola Fisiolife, me interesa el servicio de "${s.title}".`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-600 transition group-hover:gap-3"
                  >
                    Consultar
                    <span>→</span>
                  </a>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
