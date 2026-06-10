import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import Servicios from '@/components/sections/Servicios'
import ComoFunciona from '@/components/sections/ComoFunciona'
import SelectorConsulta from '@/components/sections/SelectorConsulta'
import { stock } from '@/lib/img'

export default function ServiciosPage() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Servicios"
        eyebrow="Nuestros servicios"
        title="Tratamientos para cada necesidad"
        subtitle="Explora todos nuestros servicios de fisioterapia y elige cómo quieres atenderte."
        bg={stock('deportiva.jpg')}
      />
      <Servicios />
      <ComoFunciona />
      <SelectorConsulta />
    </PageWrapper>
  )
}
