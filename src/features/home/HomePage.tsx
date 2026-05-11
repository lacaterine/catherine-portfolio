import HeroSection from './HeroSection'
import ProjectsSection from '../projects/ProjectsSection'
import AboutSection from '../about/AboutSection'
import SkillsSection from '../skills/SkillsSection'
import ContactSection from '../contact/ContactSection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default HomePage