import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Container from '../Container'
import { getTasks } from '../../services/tasksApi'
// import contactsMob from './../../images/contacts_mob.png'
import sprite from './../../images/sprite.svg'

const Detailedjob = () => {
  const { id } = useParams()
  const [details, setDetails] = useState({})
  const [description, setDescription] = useState('')
  const [responsopilities, setResponsopilities] = useState('')
  const [compensation, setCompensation] = useState('')
  const [pictures, setPictures] = useState([])
  const [employmenttype, setEmploymenttype] = useState([])
  const [benefits, setBenefits] = useState([])
  const [geolocation, setGeolocation] = useState({})
  //  AIzaSyBylNKLaUBKxSFmNzBlJA1fZ3xEvkaz8xk
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
          task[0].description.split('Compensation & Benefits:')[1]
        )
        setPictures(task[0].pictures)
        setEmploymenttype(task[0].employment_type)
        setBenefits(task[0].benefits)
        setGeolocation(task[0].location)
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
          <li>Save to my list</li>
          <li>Share</li>
        </ul>
        <h3 className="text-24px font-bold leading-30px mb-5px">
          {details.title}{' '}
        </h3>

        <div className="panelInfo mb-3.5">
          <p>posted 2 days ago</p>
          <div className="salaryInfo">
            <p>Brutto, per year</p>
            <p>€ {details.salary}</p>
          </div>
        </div>

        <div className="description text-detSecText">
          <p className="text-18px leading-24px mb-43px">{description}</p>

          <h4 className="font-bold text-xl mb-12px">Responsopilities: </h4>
          <p className="text-18px leading-24px mb-43px">{responsopilities}</p>
          <h4 className="font-bold text-xl mb-12px">
            Compensation & Benefits:
          </h4>
          <p className="text-18px leading-24px mb-43px">{compensation}</p>
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
        <h4>Employment type</h4>
        <ul>
          {' '}
          {employmenttype.map((type, ind) => {
            return <li key={ind}>{type}</li>
          })}
        </ul>
        <h4>Benefits</h4>
        <ul>
          {' '}
          {benefits.map((benefit, ind) => {
            return <li key={ind}>{benefit}</li>
          })}
        </ul>
        <h4>Contacts</h4>
        <hr />
        {/* <img src={contactsMob} alt="contacts map" /> */}
        <div className="w-mapMobile h-mapMobile rounded-lg m-auto ">
          <div className="contacts h-contMobile text-geolocation bg-geolocationBg ]">
            <p>Department name. {details.name}</p>
            <svg className="w-location h-location mr-2">
              <use href={`${sprite}#location`} />
            </svg>
            <p>{details.address}</p>
            <p>{details.phone}</p>
            <p>{details.email}</p>
          </div>
          <div className="bg-geolocationBg">
            <img
              src={`https://maps.googleapis.com/maps/api/staticmap?center=${geolocation.lat},${geolocation.long}&zoom=12&size=372x200&maptype=roadmap&key=AIzaSyASyHvDC7SCL7RencmuMJd68Zfz_InZYTw`}
              alt="location"
              className="opacity-40"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Detailedjob
