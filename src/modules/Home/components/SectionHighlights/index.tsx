import HighlightStats from './presentations/HighlightStats'

const SectionHighlights = () => {
  return (
    <section className="bg-white flex flex-col py-[112px] text-center mx-4 max-w-[1200px] md:mx-auto">
      <div className="mt-[50px] flex flex-col items-center mx-auto">
        <h1 className=" text-primaryBlue">
          We’ve helped our investors in a big way.
        </h1>
        <h3 className="font-light tracking-wider mt-3.5">
          Mauris bibendum, odio sit amet blandit luctus, ex ex ultrices massa,
          id aliquet dui justo non sapien
        </h3>
      </div>
      <HighlightStats className="mt-20" />
    </section>
  )
}

export default SectionHighlights
