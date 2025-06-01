import AboutProductsServices from './components/AboutProductsServices'
import AluminiumSytemsDesc from './components/AluminiumSystemDesc'
import AluminiumSystems from './components/AluminiumSystems'
import BespokeSystem from './components/BespokeSystem'
import Faq from './components/Faq'
import Footer from './components/Footer'
import InfoRayfitout from './components/InfoRayfitout'
import Line from './components/Line'
import Materials from './components/Materials'
import Nav from './components/Nav'
import OtherServices from './components/OtherServices'
import OurAluminiumSystem from './components/OurAluminiumSystem'
import OurProductsAndServices from './components/OurProductsAndServices'
import ProductsVideo from './components/ProductsVideo'
import ProjectInMind from './components/ProjectInMind'

const App = () => {
  return (
    <div className='flex flex-col h-screen font-montserrat'>
      <Nav />
      <AluminiumSystems />
      <AluminiumSytemsDesc />
      <Line />
      <OurAluminiumSystem />
      <Line />
      <OurProductsAndServices />
      <AboutProductsServices />
      <Line />
      <BespokeSystem />
      <ProductsVideo />
      <Line />
      <Materials />
      <Line />
      <ProjectInMind />
      <Faq />
      <Line />
      <OtherServices />
      <Line />
      <InfoRayfitout />
      <Line />
      <Footer />
    </div>
  )
}

export default App
