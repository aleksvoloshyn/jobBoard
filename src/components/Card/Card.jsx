import { NavLink } from 'react-router-dom'
import { getDaysPassed } from '../../services/getDaysPassed'
import sprite from './../../images/sprite.svg'
import avatar from './../../images/avatar.png'
import Star from '../Star/Star'

const Card = ({ tasks }) => {
  return (
    <ul className="jobItem contents font-sans bg-mobile rounded-lg drop-shadow-mobile h-mobile mb-2 px-4 pb-27px">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="jobItem flex font-sans bg-mobile rounded-lg drop-shadow-mobile  mb-2 px-4 pb-27px"
          >
            <div className="left pt-54px mr-19px">
              <img
                src={avatar}
                alt="avatar"
                className="h-avatar  rounded-[50%]
           "
                style={{ minWidth: '66px' }}
              />
            </div>
            <div className="right  pt-17px ">
              <div className="top flex justify-between items-baseline mb-17px">
                <div className="flex mr-90px">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className=" text-secondary text-sm">
                  Posted {getDaysPassed(task.createdAt)}
                  days ago
                </div>
              </div>
              <h1 className="font-normal text-18px leading-24px  text-left mb-5px">
                <NavLink to={`${task.id}`}>{task.title}</NavLink>
              </h1>
              <p className="text-left text-base text-18px leading-25px text-secondary mb-7px">
                {task.name} •{' '}
                {task.benefits.map((benifit) => {
                  return benifit + ' '
                })}
              </p>

              <div className="flex items-center">
                {' '}
                <svg className="w-location h-location mr-2">
                  <use href={`${sprite}#location`} />
                </svg>{' '}
                <p className="text-secondary">{task.address}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default Card
