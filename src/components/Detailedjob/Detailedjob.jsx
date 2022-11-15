import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../Container'
import Contacts from '../Contacts'
import Button from '../Button'
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

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="jobDetails pb-9 px-4 pt-6 text-left bg-[white] text-detPrText">
          <h2 className="font-bold text-3xl leading-9 mb-3">Job Details</h2>
          <hr className="text-hr opacity-10 mb-6" />

          {/* user Panel */}
          <ul className="userPanel flex mb-8">
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

          <h3 className="text-2xl font-bold leading-3xl mb-1">
            {details.title}{' '}
          </h3>
          <div className="panelInfo mb-3.5 flex justify-between items-center">
            <p className="text-xs opacity-60 text-detSecText">
              posted {getDaysPassed(details.createdAt)} days ago
            </p>
            <div className="salaryInfo flex flex-col items-end">
              <p>Brutto, per year</p>
              <p className="font-bold text-xl">€ {salary}</p>
            </div>
          </div>
          <div className="description text-detSecText">
            <p className="text-lg leading-6 mb-11">{description}</p>

            <h4 className="font-bold text-xl mb-3">Responsopilities: </h4>
            <p className="text-lg leading-6 mb-11">{responsopilities}</p>
            <h4 className="font-bold text-xl mb-3">Compensation & Benefits:</h4>

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

          <Button title={'APPLY NOW'} />

          <h3 className="text-3xl mb-2.5 font-bold">Attached images</h3>
          <hr className=" mb-2.5 text-hr opacity-10" />
          <ul className="flex justify-between gap-2 mb-16 ">
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
          <h4 className="text-3xl mb-2.5 font-bold">Contacts</h4>
          <hr className="text-hr opacity-10 mb-5" />
          {/* <img src={contactsMob} alt="contacts map" /> */}
          <Contacts
            name={details.name}
            address={details.address}
            email={details.email}
            phone={details.phone}
            lat={geolocation.lat}
            long={geolocation.long}
            widthClass={'w-mapMobile m-auto'}
          />
        </div>
      )}
    </Container>
  )
}

export default Detailedjob
