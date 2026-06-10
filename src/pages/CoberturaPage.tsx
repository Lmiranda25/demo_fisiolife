import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import Cobertura from '@/components/sections/Cobertura'
import SelectorConsulta from '@/components/sections/SelectorConsulta'
import { stock } from '@/lib/img'

export default function CoberturaPage() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Cobertura"
        eyebrow="Atención a domicilio"
        title="Llevamos la fisioterapia a tu hogar"
        subtitle="Atendemos en los principales distritos de Lima con todos los protocolos de bioseguridad."
        bg={stock('domicilio.jpg')}
      />
      <Cobertura />
      <SelectorConsulta />
    </PageWrapper>
  )
}
