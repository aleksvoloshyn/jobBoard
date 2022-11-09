import sprite from './../../images/sprite.svg'
import avatar from './../../images/avatar.png'

const Card = () => {
  return (
    <div className="flex jobItem bg-mobile rounded-lg drop-shadow-mobile h-mobile mb-2 px-4 pb-27px">
      <div className="left pt-45px mr-19px">
        <img
          src={avatar}
          alt="avatar"
          className="h-avatar  rounded-[50%]
           "
          style={{ minWidth: '66px' }}
        />
      </div>

      <div className="right  pt-9px ">
        <div className="top flex justify-between items-baseline mb-17px">
          <div className="flex mr-100px">
            <svg className="w-2.5 h-2.5">
              <use href={`${sprite}#star`} />
            </svg>{' '}
            <svg className="w-2.5 h-2.5">
              <use href={`${sprite}#star`} />
            </svg>{' '}
            <svg className="w-2.5 h-2.5">
              <use href={`${sprite}#star`} />
            </svg>{' '}
            <svg className="w-2.5 h-2.5">
              <use href={`${sprite}#star`} />
            </svg>{' '}
            <svg className="w-2.5 h-2.5">
              <use href={`${sprite}#star`} />
            </svg>{' '}
          </div>
          <div className="font-proxima text-secondary text-sm">
            Posted 2 days ago
          </div>
        </div>
        <h1 className="font-normal text-lg text-left mb-5px">
          Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d)
        </h1>
        <p className="text-left text-base text-secondary mb-7px">
          Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
        </p>

        <div className="flex items-center">
          {' '}
          <svg className="w-location h-location mr-2">
            <use href={`${sprite}#location`} />
          </svg>{' '}
          <p className="text-secondary">Vienna, Austria</p>
        </div>
      </div>
    </div>
  )
}

export default Card
