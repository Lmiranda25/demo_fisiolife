import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import Contacto from '@/components/sections/Contacto'
import { stock } from '@/lib/img'

export default function ContactoPage() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Contacto"
        eyebrow="Agenda tu cita"
        title="Tu recuperación empieza aquí"
        subtitle="Déjanos tus datos o escríbenos por WhatsApp. Estamos para ayudarte a vivir sin dolor."
        bg={stock('hero.jpg')}
      />
      <Contacto />
    </PageWrapper>
  )
}
