import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { getDaysPassed } from '../../services/getDaysPassed'
import sprite from './../../images/sprite.svg'
import avatar from './../../images/avatar.png'
import Star from '../Star/Star'

const Cards = ({ tasks }) => {
  return (
    <ul className="jobItems contents font-sans bg-mobile rounded-lg drop-shadow-mobile h-mobile mb-2 px-4 pb-7  ">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="jobItem flex font-sans bg-mobile rounded-lg drop-shadow-mobile  mb-2 px-4 pb-7 "
          >
            {/* left side of the card */}
            <div className="left pt-14 mr-5 desktop:mr-7 desktop:pt-5 ">
              <img
                src={avatar}
                alt="avatar"
                className="h-avatarMob  rounded-full desktop:h-avatarDesktop "
                style={{ minWidth: '66px' }}
              />
            </div>

            {/* right side of the card */}
            <div className="right  pt-4 flex flex-col desktop:flex-row-reverse desktop:w-full desktop:justify-between ">
              {/* raiting & posted days ago */}
              <div className="top flex justify-between items-baseline mb-4 desktop:items-center desktop:mb-0 ">
                <div className="flex desktop:mr-8 ">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className=" text-secondary text-sm desktop:text-base desktop:flex desktop:h-full desktop:justify-between desktop:flex-col desktop:items-end ">
                  <svg className="desktop:block w-bookmark h-bookmark desktop:mb-4 mobile:hidden">
                    <use href={`${sprite}#bookmark`} />
                  </svg>{' '}
                  <p>Posted {getDaysPassed(task.createdAt)} days ago</p>
                </div>
              </div>
              {/* title */}
              <div>
                <h1 className="font-normal desktop:font-bold text-lg desktop:text-xl leading-6  text-left mb-1.5 desktop:text-xl desktop:mb-2">
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
            </div>
          </li>
        )
      })}
    </ul>
  )
}
Cards.propTypes = {
  tasks: PropTypes.array,
}
export default Cards
