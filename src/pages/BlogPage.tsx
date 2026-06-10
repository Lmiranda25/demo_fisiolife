import PageWrapper from '@/components/layout/PageWrapper'
import PageHero from '@/components/ui/PageHero'
import Blog from '@/components/sections/Blog'
import { stock } from '@/lib/img'

export default function BlogPage() {
  return (
    <PageWrapper>
      <PageHero
        crumb="Blog"
        eyebrow="Blog & consejos"
        title="Aprende a cuidar tu cuerpo"
        subtitle="Artículos prácticos sobre salud, prevención y recuperación escritos por nuestro equipo."
        bg={stock('blog-ejercicio.jpg')}
      />
      <Blog />
    </PageWrapper>
  )
}
