import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Container from '../Container'
import Contacts from '../Contacts'

import Loader from '../Loader'
import { getTasks } from '../../services/tasksApi'
import { getDaysPassed } from '../../services/getDaysPassed'
import sprite from './../../images/sprite.svg'

const Detailedjob = () => {
  const { id } = useParams()
  const [isLoading, setIsloading] = useState(true)
  const [details, setDetails] = useState({})
  const [description, setDescription] = useState('')
  const [responsopilities, setResponsopilities] = useState('')
  const [compensation, setCompensation] = useState([])
  const [pictures, setPictures] = useState([])
  const [employmenttype, setEmploymenttype] = useState([])
  const [benefits, setBenefits] = useState([])
  const [geolocation, setGeolocation] = useState({})
  const [salary, setSalary] = useState('')

  useEffect(() => {
    getTasks()
      .then((data) => {
        return [...data].filter((task) => task.id === id)
      })
      .then((task) => {
        setDescription(task[0].description.split('Responsopilities:')[0])
        setResponsopilities(
          task[0].description
            .split('Responsopilities:')[1]
            .split('Compensation & Benefits:')[0]
        )
        setCompensation(
          task[0].description
            .split('Compensation & Benefits:')[1]
            .split('.')
            .filter((el) => el !== '\n\n')
        )
        setPictures(task[0].pictures)
        setEmploymenttype(task[0].employment_type)
        setBenefits(task[0].benefits)
        setGeolocation(task[0].location)
        setSalary(task[0].salary.replaceAll('k', ' 000'))
        setDetails(...task)
      })
      .finally(() => {
        setIsloading(false)
      })
  }, [id])

  const navigate = useNavigate()

  return (
    <div className="bg-[white] pb-60">
      {' '}
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="jobDetails pb-9 desktop:pb-0 desktop:mb-24 px-4 pt-6 text-left bg-[white] text-detPrText desktop:flex desktop:gap-20 justify-center ">
            <div className="maininfo desktop:w-[793px]">
              {' '}
              <div className="detailsHeader desktop:flex justify-between items-baseline  flex-wrap ]">
                {' '}
                <h2 className="font-bold text-3xl leading-9 mb-3 order-1">
                  Job Details
                </h2>
                <hr className="text-hr opacity-10 mb-6 order-3 w-full desktop:mb-10" />
                {/* user Panel */}
                <ul className="userPanel flex mb-8 desktop:mb-0 order-2">
                  <li className="flex mr-9 cursor-pointer">
                    <svg className="starempty w-star h-star mr-3 ">
                      <use href={`${sprite}#starempty`} />
                    </svg>{' '}
                    <p>Save to my list</p>
                  </li>
                  <li className="flex cursor-pointer">
                    <svg className="share w-share h-share mr-2.5">
                      <use href={`${sprite}#share`} />
                    </svg>{' '}
                    <p>Share</p>
                  </li>
                </ul>
              </div>
              <button className="text-[white]  mobile:mx-auto desktop:mr-auto desktop:ml-0 mb-8 text-xs bg-applbutton h-button   w-32 mobile:hidden desktop:flex flex justify-center items-center rounded-lg">
                APPLY NOW
              </button>
              {/*  */}
              <div className="flex justify-between">
                {' '}
                <h3 className="text-2xl font-bold leading-3xl mb-1 desktop:w-[501px] desktop:mr-14">
                  {details.title}
                </h3>
                <div className="salaryInfo desktop:flex desktop:flex-col desktop:items-start desktop:w-[161px] mobile:hidden ">
                  <p className="order-2 ">Brutto, per year</p>
                  <p className="font-bold text-xl order-1">€ {salary}</p>
                </div>
              </div>
              <div className="panelInfo mobile:mb-3.5  desktop:mb-[7px] flex justify-between items-center">
                <p className="text-xs opacity-60 text-detSecText ">
                  posted {getDaysPassed(details.createdAt)} days ago
                </p>
                <div className="salaryInfo flex flex-col items-end desktop:hidden">
                  <p>Brutto, per year</p>
                  <p className="font-bold text-xl">€ {salary}</p>
                </div>
              </div>
              {/*  */}
              <div className="description text-detSecText">
                <p className="text-lg leading-6 mb-11">{description}</p>

                <h4 className="font-bold text-xl mb-3">Responsopilities: </h4>
                <p className="text-lg leading-6 mb-11">{responsopilities}</p>
                <h4 className="font-bold text-xl mb-3">
                  Compensation & Benefits:
                </h4>

                <ul className="text-lg leading-6 mb-11">
                  {compensation.map((benefit, ind) => {
                    return (
                      <li key={ind} className=" ml-6 list-square">
                        {benefit}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <button className="text-[white]  mobile:mx-auto desktop:mr-auto desktop:ml-0 mb-32 desktop:mb-20 text-xs bg-applbutton h-button  w-32 mobile:flex desktop:flex flex justify-center items-center rounded-lg">
                APPLY NOW
              </button>
              <div className=" desktop:flex flex-col">
                <div className="attachedImages order-2">
                  {' '}
                  <h3 className="text-3xl mb-2.5 font-bold">Attached images</h3>
                  <hr className=" mb-2.5 text-hr opacity-10" />
                  <ul className="flex justify-between gap-2 mb-16 desktop:mb-0 ">
                    {pictures.map((pic, ind) => {
                      return (
                        <li key={ind}>
                          {' '}
                          <img
                            src={pic}
                            alt="gob detail"
                            className="rounded-[8%] drop-shadow-mobile"
                          />
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className="additinfo order-1">
                  <h3 className="text-3xl mb-2.5 font-bold">Additional info</h3>
                  <hr className="text-hr opacity-10 mb-6" />
                  <h4 className="text-xl mb-2.5">Employment type</h4>
                  <ul className="mb-5 flex gap-2">
                    {employmenttype.map((type, ind) => {
                      return (
                        <li
                          key={ind}
                          className="w-32 h-12 border-solid border border-butEmplTypeBrdr rounded-lg bg-butEmplType text-butEmplTypeTxt flex justify-center items-center font-bold"
                        >
                          {type}
                        </li>
                      )
                    })}
                  </ul>
                  <h4 className="text-xl mb-2.5 ">Benefits</h4>
                  <ul className="mb-16 flex justify-start">
                    {benefits.map((benefit, ind) => {
                      return (
                        <li
                          key={ind}
                          className=" mr-1.5 px-3.5 h-14 border-solid border rounded-lg bg-butBeniBg border-butBeniBrdr text-butBeniTxt flex justify-center items-center font-bold"
                        >
                          {benefit}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <h4 className="text-3xl mb-2.5 font-bold desktop:hidden">
                Contacts
              </h4>
              <hr className="text-hr opacity-10 mb-5 desktop:hidden" />
              {/* <img src={contactsMob} alt="contacts map" /> */}
            </div>
            <Contacts
              name={details.name}
              address={details.address}
              email={details.email}
              phone={details.phone}
              lat={geolocation.lat}
              long={geolocation.long}
              widthClass={'w-mapMobile m-auto desktop:m-inh  '}
            />
          </div>
        )}

        {!isLoading && (
          <button
            onClick={() => {
              navigate('../')
            }}
            className="mobile:hidden bg-[#E4E5EA] border-0 desktop:flex w-[213px] h-[50px] text-xs font-bold justify-center items-center text-[#3A4562]  rounded-lg"
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-5"
            >
              <path
                d="M9.66053 0.401157C10.1272 0.915451 10.108 1.72975 9.61804 2.21833L3.37247 8.69844C3.21164 8.8613 3.21164 9.13559 3.37247 9.29845L9.62137 15.7786C10.1105 16.2671 10.128 17.0814 9.66053 17.5957C9.19305 18.1186 8.41725 18.1357 7.92894 17.6386L0.390931 9.96703C-0.114047 9.45274 -0.13238 8.61272 0.350933 8.08129L7.92894 0.358299C8.41809 -0.138852 9.19389 -0.113138 9.66053 0.401157Z"
                fill="#384564"
              />
            </svg>
            RETURN TO JOB BOARD
          </button>
        )}
      </Container>
    </div>
  )
}

export default Detailedjob
