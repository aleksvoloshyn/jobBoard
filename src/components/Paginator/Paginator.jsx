import { v4 as uuidv4 } from 'uuid'
import sprite from './../../images/sprite.svg'

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const Paginator = () => {
  return (
    <div className="desktop:flex desktop:w-515px desktop:m-auto desktop:mt-10 ">
      <div className="leftarr flex items-center mobile:hidden">
        {' '}
        <svg className="w-5 h-5 ">
          <use href={`${sprite}#arrowleft`} />
        </svg>
        <svg className="w-px h-5">
          <use href={`${sprite}#iconseparator`} />
        </svg>
      </div>
      <ul className=" flex font-sans bg-mobile rounded-lg drop-shadow-mobile  mb-6 mt-26px px-4 py-2 w-full justify-center">
        {pages.map((page) => {
          return (
            page <= 5 && (
              <li
                key={uuidv4()}
                className="text-pages mr-4 text-4 leading-5 font-bold  cursor-pointer desktop:text-xl"
              >
                {page}
              </li>
            )
          )
        })}
        <li className="text-pages mr-4 text-4 leading-5 font-bold desktop:text-xl">
          ...
        </li>
        <li className="text-pages mr-4 text-4 leading-5 font-bold  cursor-pointer desktop:text-xl">
          {pages[pages.length - 1]}
        </li>
      </ul>
      <div className="righttarr mobile:hidden">
        {' '}
        <svg className="w-px h-5">
          <use href={`${sprite}#iconseparator`} />
        </svg>
        <svg className="w-5 h-5">
          <use href={`${sprite}#arrowright`} />
        </svg>
      </div>
    </div>
  )
}

export default Paginator
