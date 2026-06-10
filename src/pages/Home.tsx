import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageWrapper from '@/components/layout/PageWrapper'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Servicios from '@/components/sections/Servicios'
import ComoFunciona from '@/components/sections/ComoFunciona'
import SelectorConsulta from '@/components/sections/SelectorConsulta'
import Testimonios from '@/components/sections/Testimonios'

// Home = resumen de la web con accesos a cada vista.
export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <TrustBar />
      <Servicios preview />
      <ComoFunciona />
      <SelectorConsulta />
      <Testimonios />

      {/* CTA hacia el resto de vistas */}
      <section className="section-pad bg-navy-50/40">
        <div className="container-pro grid gap-5 sm:grid-cols-3">
          {[
            { to: '/cobertura', title: 'Atención a domicilio', desc: 'Mira las zonas que cubrimos en Lima.' },
            { to: '/blog', title: 'Blog & consejos', desc: 'Aprende a cuidar tu cuerpo cada día.' },
            { to: '/nosotros', title: 'Nuestro equipo', desc: 'Conoce quién está detrás de Fisiolife.' },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group flex flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-navy-100/60 transition hover:-translate-y-1.5"
            >
              <h3 className="font-display text-lg font-bold text-navy-700">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink/65">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-600 transition group-hover:gap-3">
                Ver más <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  )
}
