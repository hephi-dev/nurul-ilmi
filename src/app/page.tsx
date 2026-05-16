import HeroSection from '@/components/sections/HeroSection'
import FiturSection from '@/components/sections/FiturSection'
import ProgramSection from '@/components/sections/ProgramSection'
import JadwalSection from '@/components/sections/JadwalSection'
import { PengajarSection, TestimonialSection, CtaSection } from '@/components/sections/OtherSections'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FiturSection />
      <ProgramSection />
      <JadwalSection />
      <PengajarSection />
      <TestimonialSection />
      <CtaSection />
    </>
  )
}
