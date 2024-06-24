import { MdArrowForward } from 'react-icons/md'
import { CardProductProps } from './models/types'
const CardProduct = ({ code, name }: CardProductProps) => {
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-[200px] h-[286px] md:basis-[380px] md:h-[486px] md:max-w-[380px] max-w-[200px] flex flex-col justify-between items-end bg-primaryBlue rounded-[5px] p-8">
      <MdArrowForward size={32} className="text-primaryTosca" />
      <div className="text-right text-wrap">
        <h2 className=" text-4xl md:text-[64px] leading-[1.195] text-white font-semibold break-all">
          {code}
        </h2>
        <p className="text-primaryTosca font-bold tracking-wider">{name}</p>
      </div>
    </div>
  )
}

export default CardProduct
