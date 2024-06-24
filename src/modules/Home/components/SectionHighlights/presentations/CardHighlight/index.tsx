import { CardHighlightProps } from './models/type'
import { MdArrowUpward } from 'react-icons/md'
const CardHighlight = ({
  className = '',
  subtitle = ''
}: CardHighlightProps) => {
  return (
    <div className={`${className} p-8 pl-auto text-primaryBlue`}>
      <div className=" text-right flex flex-col items-end">
        <MdArrowUpward size={24} className="text-primaryTosca self-end" />
        <h2 className="text-[64px] leading-[1.195] mt-[18px]">8,23T</h2>
        <p className="text-primaryTosca font-bold tracking-wider">{subtitle}</p>
      </div>
    </div>
  )
}

export default CardHighlight
