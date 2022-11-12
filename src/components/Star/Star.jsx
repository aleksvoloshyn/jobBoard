import sprite from './../../images/sprite.svg'
const Star = () => {
  return (
    <svg className="w-2.5 h-2.5 mr-px">
      <use href={`${sprite}#star`} />
    </svg>
  )
}

export default Star
