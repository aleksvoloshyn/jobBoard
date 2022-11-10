import { getTasks } from '../../services/tasksApi'
import { useEffect, useState } from 'react'
import Container from '../Container'
import Card from '../Card'
import Paginator from '../Paginator'

const Joblist = () => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    getTasks().then((data) => {
      setTasks(data)
    })
  }, [])

  return (
    <div className="jobList ">
      <Container>
        <Card tasks={tasks} />
        <Paginator />
      </Container>
    </div>
  )
}

export default Joblist
