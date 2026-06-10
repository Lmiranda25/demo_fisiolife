import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, whatsappLink } from '@/lib/constants'
import { reciclada } from '@/lib/img'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // En páginas internas el navbar siempre va sólido (no hay hero oscuro).
  const isHome = pathname === '/'
  const solid = scrolled || !isHome || open

  useEffect(() => setOpen(false), [pathname])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        solid ? 'bg-white/90 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-pro flex h-18 items-center justify-between">
        <Link to="/" className="flex items-center py-2" aria-label="Inicio">
          <span
            className={`inline-flex items-center rounded-lg transition-all duration-300 ${
              solid ? 'bg-transparent p-0' : 'bg-white px-3 py-1.5 shadow-sm'
            }`}
          >
            <img src={reciclada('logo.png')} alt="Fisiolife" className="h-8 w-auto sm:h-9" />
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    solid
                      ? isActive
                        ? 'text-navy-600'
                        : 'text-ink/80 hover:text-navy-600'
                      : 'text-white/90 hover:text-leaf-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && solid && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-leaf-gradient"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-leaf hidden lg:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Agenda tu cita
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`rounded-lg p-2 lg:hidden ${solid ? 'text-navy-700' : 'text-white'}`}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white shadow-card lg:hidden"
          >
            <ul className="container-pro flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-base font-medium ${
                        isActive ? 'bg-navy-50 text-navy-600' : 'text-ink/80'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-leaf w-full">
                  <WhatsAppIcon className="h-4 w-4" />
                  Agenda tu cita
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
