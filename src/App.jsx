import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import PromoBanner from './components/PromoBanner.jsx'
import Servicios from './components/Servicios.jsx'
import ComoReservar from './components/ComoReservar.jsx'
import SobreNosotros from './components/SobreNosotros.jsx'
import Testimonios from './components/Testimonios.jsx'
import Ubicacion from './components/Ubicacion.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFab from './components/WhatsAppFab.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-fondo text-malva">
      <Navbar />
      <main>
        <Hero />
        <PromoBanner />
        <Servicios />
        <ComoReservar />
        <SobreNosotros />
        <Testimonios />
        <Ubicacion />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
