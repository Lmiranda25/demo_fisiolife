import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowRight, X } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { POSTS, type Post } from '@/data/blog'
import { whatsappLink } from '@/lib/constants'
import { stagger, fadeUp, inView } from '@/lib/motion'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

// Blog dinámico (simula SEO): grid filtrable por categoría + modal de lectura.
export default function Blog() {
  const [active, setActive] = useState<Post | null>(null)

  const categories = ['Todos', ...Array.from(new Set(POSTS.map((p) => p.category)))]
  const [cat, setCat] = useState('Todos')
  const posts = POSTS.filter((p) => cat === 'Todos' || p.category === cat)

  return (
    <section id="blog" className="section-pad bg-navy-50/40">
      <div className="container-pro">
        <SectionTitle
          eyebrow="Blog & consejos"
          title="Aprende a cuidar tu cuerpo"
          subtitle="Artículos prácticos sobre salud, prevención y recuperación, escritos por nuestro equipo de fisioterapeutas."
        />

        {/* Filtros de categoría */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                cat === c ? 'text-white' : 'text-ink/60 hover:text-navy-600'
              }`}
            >
              {cat === c && (
                <motion.span layoutId="blog-filter" className="absolute inset-0 -z-10 rounded-full bg-navy-gradient" />
              )}
              {c}
            </button>
          ))}
        </div>

        {/* Grid de artículos */}
        <motion.div
          layout
          variants={stagger}
          initial={inView.initial}
          whileInView={inView.whileInView}
          viewport={inView.viewport}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {posts.map((p) => (
              <motion.article
                layout
                key={p.slug}
                variants={fadeUp}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                onClick={() => setActive(p)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-navy-100/60"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-leaf-gradient px-3 py-1 text-[11px] font-bold uppercase text-white">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3 text-xs text-ink/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {p.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {p.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-navy-700">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65 line-clamp-3">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-600 transition group-hover:gap-3">
                    Leer artículo
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal de lectura */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-navy-900/60 p-4 backdrop-blur-sm sm:p-8"
          >
            <motion.article
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-4 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-soft"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink/60 shadow-card transition hover:text-ink"
                aria-label="Cerrar"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-56 overflow-hidden sm:h-64">
                <img src={active.cover} alt={active.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <span className="rounded-full bg-leaf-gradient px-3 py-1 text-[11px] font-bold uppercase text-white">
                    {active.category}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white">{active.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 text-xs text-ink/50">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> {active.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" /> {active.readTime} de lectura
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {active.body.map((para, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-ink/75">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl bg-navy-50 p-5 text-center">
                  <p className="font-display font-bold text-navy-700">¿Tienes este problema?</p>
                  <p className="mt-1 text-sm text-ink/65">Agenda una evaluación y empieza tu recuperación.</p>
                  <a
                    href={whatsappLink(`Hola Fisiolife, leí el artículo "${active.title}" y quiero agendar una cita.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-[#25D366] mt-4 text-white hover:brightness-105"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Agendar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
