import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Programs from './components/Programs'
import WhyChooseUs from './components/WhyChooseUs'
import Trainers from './components/Trainers'
import Gallery from './components/Gallery'
import Community from './components/Community'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <Stats />
      <Pricing />
      <Programs />
      <WhyChooseUs />
      <Trainers />
      <Gallery />
      <Community />
      <FAQ />
      <Footer />
    </div>
  )
}
