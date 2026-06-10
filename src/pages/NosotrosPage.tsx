import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import Staff from '@/components/sections/Staff'
import TrustBar from '@/components/sections/TrustBar'
import Testimonios from '@/components/sections/Testimonios'
import { stock } from '@/lib/img'

export default function NosotrosPage() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Nosotros"
        eyebrow="Nuestro equipo"
        title="Profesionales comprometidos con tu recuperación"
        subtitle="Más de 15 años de experiencia, evidencia científica y un trato humano que marca la diferencia."
        bg={stock('online.jpg')}
      />
      <Staff />
      <div className="bg-paper pb-4 pt-16">
        <TrustBar />
      </div>
      <Testimonios />
    </PageWrapper>
  )
}
