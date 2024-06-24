import CardContact from '../CardContact'
import { CONTACTS } from './models/constants'

const ListContacts = ({
  className = '',
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={`${className} grid grid-rows-1 md:grid-cols-3 mt-[50px]`}
      {...props}
    >
      {CONTACTS.map((props, idx) => (
        <CardContact key={`contact-${idx}`} {...props} />
      ))}
    </div>
  )
}

export default ListContacts
