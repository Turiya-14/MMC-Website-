import AgencyIntro from '../components/home/AgencyIntro'
import CapabilitiesTicker from '../components/home/CapabilitiesTicker'
import FinalCTASection from '../components/home/FinalCTASection'
import HeroSection from '../components/home/HeroSection'
import MandatesSection from '../components/home/MandatesSection'
import ProcessSection from '../components/home/ProcessSection'
import SelectedWorkSection from '../components/home/SelectedWorkSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <CapabilitiesTicker />
      <AgencyIntro />
      <MandatesSection />
      <SelectedWorkSection />
      <ProcessSection />
      <FinalCTASection />
    </>
  )
}
