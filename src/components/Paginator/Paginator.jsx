const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]

const Paginator = () => {
  return (
    <div className="flex">
      <ul className=" flex font-sans bg-mobile rounded-lg drop-shadow-mobile  mb-17px mt-26px px-4 py-9px w-[100%] justify-center">
        {pages.map((page, ind) => {
          return (
            page <= 5 && (
              <li
                key={ind}
                className="mr-4 text-16px leading-19px font-[700] text-pages cursor-pointer"
              >
                {page}
              </li>
            )
          )
        })}
        <li className="mr-4 text-16px leading-19px font-[700] text-pages ">
          ...
        </li>
        <li className="mr-4 text-16px leading-19px font-[700] text-pages cursor-pointer">
          {pages[pages.length - 1]}
        </li>
      </ul>
    </div>
  )
}

export default Paginator
