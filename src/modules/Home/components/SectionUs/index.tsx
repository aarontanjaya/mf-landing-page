import { Button } from '@mui/material'
import { MdArrowForward } from 'react-icons/md'

const SectionUs = () => {
  return (
    <section className="rounded bg-primaryBlue flex text-center max-w-[1200px] mx-auto px-[60px]">
      <div className="w-full">
        <div className="pt-[140px] text-left max-w-[463px] pb-[110px]">
          <p className="text-primaryGray">LOREM IPSUM</p>
          <h1 className="text-white mt-2">What we are?</h1>
          <p className="text-white text-2xl leading-[1.195] tracking-wider mt-4">
            Mauris bibendum, odio sit amet blandit luctus, ex ex ultrices massa,
            id aliquet dui justo non sapien. Vestibulum hendrerit efficitur
            justo sit amet tincidunt. Nunc ut elementum risus.
          </p>
          <div className="mt-16 flex flex-row items-center">
            <Button
              sx={{
                padding: 0,
                marginRight: '14px',
                height: '100%'
              }}
            >
              <p className="text-primaryTosca font-bold leading-4">See More</p>
            </Button>
            <MdArrowForward size={24} className="text-primaryTosca" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionUs
