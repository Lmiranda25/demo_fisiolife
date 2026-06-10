import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/layout/WhatsAppFloat'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import Servicios from './components/sections/Servicios'
import ComoFunciona from './components/sections/ComoFunciona'
import SelectorConsulta from './components/sections/SelectorConsulta'
import Cobertura from './components/sections/Cobertura'
import Testimonios from './components/sections/Testimonios'
import Staff from './components/sections/Staff'
import Contacto from './components/sections/Contacto'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Servicios />
        <ComoFunciona />
        <SelectorConsulta />
        <Cobertura />
        <Testimonios />
        <Staff />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
