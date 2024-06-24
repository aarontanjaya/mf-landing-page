import Disclaimer from './components/Disclaimer'
import Footer from './components/Footer'

const SectionFooter = () => {
  return (
    <section className="bg-white flex flex-col py-[100px] pb-[117px] max-w-[1200px] text-center mx-4 md:mx-6 lg:mx-auto">
      <Disclaimer className="mb-[72px]" />
      <Footer />
    </section>
  )
}

export default SectionFooter
