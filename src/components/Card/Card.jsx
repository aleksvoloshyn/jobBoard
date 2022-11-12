import { NavLink } from 'react-router-dom'
import { getDaysPassed } from '../../services/getDaysPassed'
import sprite from './../../images/sprite.svg'
import avatar from './../../images/avatar.png'
import Star from '../Star/Star'

const Card = ({ tasks }) => {
  return (
    <ul className="jobItem contents font-sans bg-mobile rounded-lg drop-shadow-mobile h-mobile mb-2 px-4 pb-7">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="jobItem flex font-sans bg-mobile rounded-lg drop-shadow-mobile  mb-2 px-4 pb-7"
          >
            {/* left side of the card */}
            <div className="left pt-14 mr-5">
              <img
                src={avatar}
                alt="avatar"
                className="h-avatarMob  rounded-full 
           "
                style={{ minWidth: '66px' }}
              />
            </div>

            {/* right side of the card */}
            <div className="right  pt-4 ">
              {/* raiting & posted days ago */}
              <div className="top flex justify-between items-baseline mb-4">
                <div className="flex ">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className=" text-secondary text-sm">
                  Posted {getDaysPassed(task.createdAt)} days ago
                </div>
              </div>
              {/* title */}
              <h1 className="font-normal text-lg leading-6  text-left mb-1.5">
                <NavLink to={`${task.id}`}>{task.title}</NavLink>
              </h1>
              {/* text */}
              <p className="text-left  text-lg leading-6 text-secondary mb-2">
                {task.name} •{' '}
                {task.benefits.map((benifit) => {
                  return benifit + ' '
                })}
              </p>
              {/* adress */}
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
