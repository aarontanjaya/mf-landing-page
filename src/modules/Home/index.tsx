import SectionBanner from './components/SectionBanner'
import SectionContactUs from './components/SectionContactUs'
import SectionFooter from './components/SectionFooter'
import SectionHighlights from './components/SectionHighlights'
import SectionUs from './components/SectionUs'

const HomePage = () => {
  return (
    <>
      <SectionBanner />
      <SectionUs />
      <SectionHighlights />
      <SectionContactUs />
      <SectionFooter />
    </>
  )
}

export default HomePage
