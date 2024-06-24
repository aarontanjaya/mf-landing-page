import SectionBanner from './components/SectionBanner'
import SectionContactUs from './components/SectionContactUs'
import SectionFooter from './components/SectionFooter'
import SectionHighlights from './components/SectionHighlights'
import SectionProducts from './components/SectionProducts'
import SectionUs from './components/SectionUs'

const HomePage = () => {
  return (
    <>
      <SectionBanner />
      <SectionUs />
      <SectionHighlights />
      <SectionProducts />
      <SectionContactUs />
      <SectionFooter />
    </>
  )
}

export default HomePage
