import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Container from '../Container'
import { getTasks } from '../../services/tasksApi'
import { getDaysPassed } from '../../services/getDaysPassed'
// import contactsMob from './../../images/contacts_mob.png'
import sprite from './../../images/sprite.svg'

const Detailedjob = () => {
  const { id } = useParams()
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
  }, [id])

  return (
    <Container>
      <div className="jobDetails pb-37px px-15px pt-24px text-left bg-[white] text-detPrText">
        <h2 className="font-bold text-28px leading-34.1px mb-12px">
          Job Details
        </h2>
        <hr className="text-hr opacity-10 mb-24px" />

        <ul className="userPanel flex mb-32px">
          <li className="flex mr-32px">
            <svg className="starempty w-location h-location ">
              <use href={`${sprite}#location`} />
            </svg>{' '}
            <p>Save to my list</p>
          </li>
          <li className="flex">
            <svg className="share w-location h-location">
              <use href={`${sprite}#share`} />
            </svg>{' '}
            <p>Share</p>
          </li>
        </ul>

        <h3 className="text-24px font-bold leading-30px mb-5px">
          {details.title}{' '}
        </h3>
        <div className="panelInfo mb-3.5 flex justify-between items-center">
          <p className="text-13px opacity-60 text-detSecText">
            posted {getDaysPassed(details.createdAt)} days ago
          </p>
          <div className="salaryInfo flex flex-col items-end">
            <p>Brutto, per year</p>
            <p className="font-bold text-xl">€ {salary}</p>
          </div>
        </div>
        <div className="description text-detSecText">
          <p className="text-18px leading-24px mb-43px">{description}</p>

          <h4 className="font-bold text-xl mb-12px">Responsopilities: </h4>
          <p className="text-18px leading-24px mb-43px">{responsopilities}</p>
          <h4 className="font-bold text-xl mb-12px">
            Compensation & Benefits:
          </h4>

          <ul className="text-18px leading-24px mb-43px">
            {compensation.map((benefit, ind) => {
              return (
                <li key={ind} className=" ml-22px list-square">
                  {benefit}
                </li>
              )
            })}
          </ul>

          {/* <p className="text-18px leading-24px mb-43px">{compensation}</p> */}
        </div>
        <button className="text-[white] mb-135px text-xs bg-applbutton h-button m-auto w-[127px] flex justify-center items-center rounded-lg">
          {' '}
          APPLY NOW
        </button>
        <h3 className="text-28px mb-2.5 font-bold">Attached images</h3>
        <hr className=" mb-2.5 text-hr opacity-10" />
        <ul className="flex justify-between gap-2 mb-64px ">
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
        <h3 className="text-28px mb-2.5 font-bold">Additional info</h3>
        <hr className="text-hr opacity-10 mb-24px" />
        <h4 className="text-xl mb-2.5">Employment type</h4>
        <ul className="mb-5 flex gap-2">
          {employmenttype.map((type, ind) => {
            return (
              <li
                key={ind}
                className="w-122px h-50px border-solid border border-butEmplTypeBrdr rounded-lg bg-butEmplType text-butEmplTypeTxt flex justify-center items-center font-bold"
              >
                {type}
              </li>
            )
          })}
        </ul>

        <h4 className="text-xl mb-2.5 ">Benefits</h4>
        <ul className="mb-64px flex justify-start">
          {benefits.map((benefit, ind) => {
            return (
              <li
                key={ind}
                className=" mr-5px px-13px h-50px border-solid border rounded-lg bg-butBeniBg border-butBeniBrdr text-butBeniTxt flex justify-center items-center font-bold"
              >
                {benefit}
              </li>
            )
          })}
        </ul>
        <h4 className="text-28px mb-2.5 font-bold">Contacts</h4>
        <hr className="text-hr opacity-10 mb-22px" />
        {/* <img src={contactsMob} alt="contacts map" /> */}
        <div className="w-mapMobile   m-auto ">
          <div className="contacts h-contMobile text-geolocation bg-geolocationBg pt-32px pl-62px rounded-t-xl">
            <p className="font-bold"> Department name.</p>{' '}
            <p className="font-bold mb-17px"> {details.name}</p>
            <span className="address flex mb-1.5">
              <svg className="w-location h-location mr-2.5">
                <use href={`${sprite}#location`} />
              </svg>
              <p>{details.address}</p>
            </span>
            <p className="mr-2.5">{details.phone}</p>
            <p>{details.email}</p>
          </div>

          <div className="bg-geolocationBg h-googleMobile rounded-b-xl">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${geolocation.lat},${geolocation.long}&zoom=12&size=372x230&maptype=roadmap&key=AIzaSyASyHvDC7SCL7RencmuMJd68Zfz_InZYTw`}
              alt="location"
              className="opacity-20"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Detailedjob
