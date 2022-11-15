import { v4 as uuidv4 } from 'uuid'
import sprite from './../../images/sprite.svg'

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const Paginator = () => {
  return (
    <div className="flex desktop:justify-between font-sans bg-mobile rounded-lg drop-shadow-mobile desktop:w-515px mx-auto mb-6 desktop:mb-14 mt-7 desktop:mt-14 px-4 py-2 w-full justify-center flex-row ">
      <div className="desktop:leftarr desktop:flex desktop:items-center desktop:border-r-px desktop:border-zinc-300 mobile:hidden">
        <svg className="w-4 h-4 cursor-pointer mr-7 hover:scale-110 ">
          <use href={`${sprite}#arrowleft`} />
        </svg>
        <svg className="w-px h-4 ">
          <use href={`${sprite}#iconseparator`} />
        </svg>
      </div>

      <ul className="flex ">
        {pages.map((page) => {
          return (
            page <= 5 && (
              <li
                key={uuidv4()}
                className="text-pages mr-4 text-4 leading-5 font-bold  cursor-pointer  desktop:text-xl hover:scale-110"
              >
                {page}
              </li>
            )
          )
        })}
        <li className="text-pages mr-4 text-4 leading-5 font-bold desktop:text-xl">
          ...
        </li>
        <li className="text-pages mr-4 text-4 leading-5 font-bold  cursor-pointer desktop:text-xl ">
          {pages[pages.length - 1]}
        </li>
      </ul>

      <div className="desktop:righttarr desktop:flex desktop:items-center mobile:hidden">
        {' '}
        <svg className="w-px h-4 ">
          <use href={`${sprite}#iconseparator`} />
        </svg>
        <svg className="w-4 h-4 cursor-pointer ml-7 hover:scale-110 focus:scale-110 ">
          <use href={`${sprite}#arrowright`} />
        </svg>
      </div>
    </div>
  )
}

export default Paginator
