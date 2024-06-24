import { AdvancedMarker, Map } from '@vis.gl/react-google-maps'
import ListContacts from './components/ListContacts'
const SectionContactUs = () => {
  return (
    <section className="bg-white flex flex-col py-[112px] pb-[100px] max-w-[1200px] text-center mx-4 md:mx-auto">
      <div className="flex flex-col items-left w-full text-start mb-[100px] md:mx-6">
        <h2 className="text-primaryTosca font-medium">Wanna Invest?</h2>
        <h1 className="text-primaryBlue mt-2">Contact Us</h1>
      </div>
      <div className="h-[600px] w-full">
        <Map
          defaultZoom={15.9}
          defaultCenter={{
            lat: -6.211854250269233,
            lng: 106.82140024566363
          }}
          mapId={process.env.REACT_APP_GOOGLE_MAPS_ID}
        >
          <AdvancedMarker
            key="ho"
            position={{ lat: -6.211854250269233, lng: 106.82140024566363 }}
          />
        </Map>
      </div>
      <div className="w-full bg-secondaryGray text-left py-[19px] pl-7">
        <p className="text-[18px] leading-[1.195] text-primaryBlue font-medium">
          Tamara Center Lantai 7, Jl. Jend. Sudirman Kav. 24 Jakarta Pusat
        </p>
      </div>
      <ListContacts />
    </section>
  )
}

export default SectionContactUs
