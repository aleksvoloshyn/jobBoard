import { v4 as uuidv4 } from 'uuid'

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const Paginator = () => {
  return (
    <div className="flex">
      <ul className=" flex font-sans bg-mobile rounded-lg drop-shadow-mobile  mb-6 mt-26px px-4 py-2 w-full justify-center">
        {pages.map((page) => {
          return (
            page <= 5 && (
              <li
                key={uuidv4()}
                className="text-pages mr-4 text-4 leading-5 font-bold  cursor-pointer"
              >
                {page}
              </li>
            )
          )
        })}
        <li className="text-pages mr-4 text-4 leading-5 font-bold ">...</li>
        <li className="text-pages mr-4 text-4 leading-5 font-bold  cursor-pointer">
          {pages[pages.length - 1]}
        </li>
      </ul>
    </div>
  )
}

export default Paginator
