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
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=12&size=372x230&maptype=roadmap&key=AIzaSyASyHvDC7SCL7RencmuMJd68Zfz_InZYTw`}
          alt="location"
          className="opacity-40 "
        />
      </div>
    </div>
  )
}

export default Contacts
