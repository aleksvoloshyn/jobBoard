import PropTypes from 'prop-types'
import sprite from './../../images/sprite.svg'
const Contacts = ({ name, address, email, phone, lat, long, widthClass }) => {
  return (
    <div className={widthClass}>
      <div className="contacts h-contMobile text-geolocation bg-geolocationBg pt-8 pl-16 rounded-t-xl">
        <p className="font-bold"> Department name.</p>{' '}
        <p className="font-bold mb-4"> {name}</p>
        <span className="address flex mb-1.5">
          <svg className="w-location h-location mr-2.5">
            <use href={`${sprite}#location`} />
          </svg>
          <p>{address}</p>
        </span>
        <p className="mr-2.5">{phone}</p>
        <p>{email}</p>
      </div>

      <div className="bg-geolocationBg h-googleMobile rounded-b-xl">
        {/* <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=12&size=372x230&maptype=roadmap&key=AIzaSyASyHvDC7SCL7RencmuMJd68Zfz_InZYTw`}
          alt="location"
          className="opacity-40 "
        /> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d176360.46943550903!2d31.290539!3d51.49578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46d5489287a50f97%3A0x16d9de5c19e6a614!2z0KfQtdGA0L3QuNCz0L7Qsiwg0KfQtdGA0L3QuNCz0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxNDAwMA!5e1!3m2!1sru!2sua!4v1679476333777!5m2!1sru!2sua"
          width="372"
          height="300"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>{' '}
      </div>
    </div>
  )
}

Contacts.propTypes = {
  tasks: PropTypes.array,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  lat: PropTypes.number,
  long: PropTypes.number,
  widthClass: PropTypes.string,
}

export default Contacts
