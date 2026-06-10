import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Star } from 'lucide-react'
import { whatsappLink } from '@/lib/constants'
import { stock } from '@/lib/img'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Hero() {
  const goServices = () => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-hero-gradient">
      {/* Imagen sutil + blobs animados */}
      <div className="absolute inset-0 -z-10">
        <img src={stock('hero.jpg')} alt="" className="h-full w-full object-cover opacity-20" />
      </div>
      <div className="absolute -left-20 top-20 -z-10 h-72 w-72 animate-blob bg-leaf-500/20 blur-3xl" />
      <div className="absolute -right-10 bottom-10 -z-10 h-80 w-80 animate-blob bg-navy-400/20 blur-3xl [animation-delay:2s]" />

      <div className="container-pro grid items-center gap-10 pt-28 pb-16 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-leaf-300 backdrop-blur"
          >
            <ShieldCheck className="h-4 w-4" />
            +15 años · Protocolos de bioseguridad
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 font-display text-3xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl"
          >
            Cada dolor tiene una historia y una{' '}
            <span className="bg-leaf-gradient bg-clip-text text-transparent">solución posible</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-navy-50/90 sm:text-lg"
          >
            Fisioterapia integral en Lima. Recupérate sin dolor con un plan personalizado, en consulta
            presencial, online o en la comodidad de tu hogar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-leaf">
              <WhatsAppIcon className="h-5 w-5" />
              Agenda tu cita
            </a>
            <button
              onClick={goServices}
              className="btn border-2 border-white/40 text-white hover:bg-white hover:text-navy-700"
            >
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex items-center gap-3 text-sm text-navy-50/80"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-leaf-400 text-leaf-400" />
              ))}
            </div>
            <span>Pacientes recuperados en toda Lima</span>
          </motion.div>
        </div>

        {/* Tarjeta visual animada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="hidden lg:block"
        >
          <div className="relative ml-auto w-fit">
            <div className="absolute -inset-6 -z-10 animate-blob bg-leaf-500/25 blur-2xl" />
            <img
              src={stock('online.jpg')}
              alt="Sesión de fisioterapia"
              className="animate-float rounded-[2rem] shadow-soft"
              style={{ width: 420, height: 480, objectFit: 'cover' }}
            />
            <div className="absolute -bottom-5 -left-6 rounded-2xl bg-white px-5 py-3 shadow-card">
              <p className="font-display text-2xl font-bold text-navy-600">+15</p>
              <p className="text-xs text-ink/60">años de experiencia</p>
            </div>
            <div className="absolute -right-5 top-8 rounded-2xl bg-leaf-gradient px-4 py-3 text-white shadow-glow">
              <p className="text-sm font-bold">A domicilio</p>
              <p className="text-xs opacity-90">en toda Lima</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-2 w-1 rounded-full bg-white"
          />
        </div>
      </div>
    </section>
  )
}
