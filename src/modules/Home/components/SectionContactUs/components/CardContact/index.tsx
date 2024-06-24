import { CardContactUsProps } from './models/type'
import { MdArrowOutward } from 'react-icons/md'

const CardContact = ({ title, className, subtitle }: CardContactUsProps) => {
  return (
    <div
      className={`${className} flex flex-col justify-between p-8 text-primaryBlue h-[318px] text-wrap overflow-hidden text-ellipsis`}
    >
      <div className="w-full flex justify-end">
        <MdArrowOutward size={32} className="text-primaryTosca self-end" />
      </div>
      <div className="text-left flex flex-col items-start text-wrap">
        <h2 className="mt-[18px] break-words w-full">{title}</h2>
        <p className="text-primaryTosca font-bold tracking-wider">{subtitle}</p>
      </div>
    </div>
  )
}

export default CardContact
