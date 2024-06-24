import { MdOutlineLocationOn } from 'react-icons/md'
const Footer = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={`${className} w-full flex flex-row flex-wrap  md:grid md:grid-cols-[2fr_1fr_1fr_1fr]`}
      {...props}
    >
      <div className="text-left">
        <h4 className="mb-[33px]">PT Henan Putihrai Asset Management</h4>
        <div className="flex flex-row">
          <MdOutlineLocationOn size={24} />
          <p className="ml-6 max-w-[255px] text-xl leading-[1.195] font-light">
            Tamara Center, 7th Floor Jl. Jend Sudirman Kav 24, Jakarta
          </p>
        </div>
      </div>
      <div className="text-left mt-6 md:mt-0 mr-1 md:mx-0">
        <h4 className="mb-[33px]">Bantuan</h4>
        <div className="flex flex-col gap-[23px]">
          <a className="text-black text-xl leading-[1.195] font-light">FAO</a>
          <a className="text-black text-xl leading-[1.195] font-light">
            Hubungi Kami
          </a>
          <a className="text-black text-xl leading-[1.195] font-light">
            Syarat & Ketentuan
          </a>
          <a className="text-black text-xl leading-[1.195] font-light">
            Kebijakan Privasi
          </a>
        </div>
      </div>
      <div className="text-left mt-6 md:mt-0 mr-1 md:mx-0">
        <h4 className="mb-[33px]">Bantuan</h4>
        <div className="flex flex-col gap-[23px]">
          <a className="text-black text-xl leading-[1.195] font-light">FAO</a>
          <a className="text-black text-xl leading-[1.195] font-light">
            Hubungi Kami
          </a>
          <a className="text-black text-xl leading-[1.195] font-light">
            Syarat & Ketentuan
          </a>
          <a className="text-black text-xl leading-[1.195] font-light">
            Kebijakan Privasi
          </a>
        </div>
      </div>
      <div className="text-left mt-6 md:mt-0 mr-1 md:mx-0">
        <h4 className="mb-[33px]">Bantuan</h4>
        <div className="flex flex-col gap-[23px]">
          <a className="text-black text-xl leading-[1.195] font-light">FAO</a>
          <a className="text-black text-xl leading-[1.195] font-light">
            Hubungi Kami
          </a>
          <a className="text-black text-xl leading-[1.195] font-light">
            Syarat & Ketentuan
          </a>
          <a className="text-black text-xl leading-[1.195] font-light">
            Kebijakan Privasi
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
