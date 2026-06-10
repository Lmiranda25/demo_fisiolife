import { Link } from 'react-router-dom'
import { Phone, Facebook, Youtube, MapPin } from 'lucide-react'
import { CONTACT, SOCIALS, NAV_LINKS, whatsappLink } from '@/lib/constants'
import { reciclada } from '@/lib/img'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white">
      <div className="container-pro grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-flex rounded-xl bg-white px-4 py-3">
            <img src={reciclada('logo.png')} alt="Fisiolife" className="h-9 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-50/80">
            Fisioterapia integral en Lima. Cada dolor tiene una historia y una solución posible.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-leaf-500"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={SOCIALS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-leaf-500"
            >
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold">Navegación</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-50/80">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-leaf-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold">Contacto</h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-50/80">
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-leaf-400" />
              <span>{CONTACT.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-leaf-400" />
              <span>{CONTACT.city} · Consultas presenciales, online y a domicilio</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold">Tu recuperación empieza aquí</h4>
          <p className="mt-4 text-sm text-navy-50/80">Da el primer paso hoy mismo.</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-105"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Agenda por WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro flex flex-col items-center justify-between gap-2 py-5 text-xs text-navy-50/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Fisiolife — Fisioterapia Integral. Todos los derechos reservados.</p>
          <p>Tu salud, nuestro compromiso.</p>
        </div>
      </div>
    </footer>
  )
}
