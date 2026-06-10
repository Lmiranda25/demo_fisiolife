import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { CONSULT_TYPES } from '@/data/content'
import { whatsappLink } from '@/lib/constants'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

// Selector de tipo de consulta → arma WhatsApp con contexto. Funcionalidad estrella.
export default function SelectorConsulta() {
  const [active, setActive] = useState(0)
  const consult = CONSULT_TYPES[active]

  return (
    <section className="section-pad bg-paper">
      <div className="container-pro">
        <SectionTitle
          eyebrow="Tipos de consulta"
          title="Elige cómo quieres atenderte"
          subtitle="Adaptamos la fisioterapia a tu estilo de vida. Selecciona una opción y agenda al instante."
        />

        <div className="mx-auto mt-12 max-w-5xl">
          {/* Selector de pestañas */}
          <div className="flex flex-col gap-2 rounded-2xl bg-navy-50 p-2 sm:flex-row">
            {CONSULT_TYPES.map((c, i) => (
              <button
                key={c.key}
                onClick={() => setActive(i)}
                className={`relative flex-1 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                  active === i ? 'text-white' : 'text-navy-600 hover:bg-white/60'
                }`}
              >
                {active === i && (
                  <motion.span layoutId="consult-tab" className="absolute inset-0 -z-10 rounded-xl bg-navy-gradient" />
                )}
                {c.title}
              </button>
            ))}
          </div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={consult.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="mt-6 grid gap-8 overflow-hidden rounded-3xl bg-white p-3 shadow-soft ring-1 ring-navy-100 md:grid-cols-2"
            >
              <div className="overflow-hidden rounded-2xl">
                <img src={consult.image} alt={consult.title} className="h-56 w-full object-cover md:h-full" />
              </div>
              <div className="p-4 sm:p-6">
                <span className="eyebrow">Consulta {consult.title}</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-navy-700">{consult.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{consult.desc}</p>
                <ul className="mt-5 space-y-2.5">
                  {consult.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink/80">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-leaf-gradient text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(consult.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-[#25D366] mt-7 w-full text-white hover:brightness-105 sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Agendar consulta {consult.title.toLowerCase()}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
