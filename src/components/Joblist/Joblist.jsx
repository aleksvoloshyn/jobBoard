import { getTasks } from '../../services/tasksApi'
import { useEffect, useState } from 'react'
import Container from '../Container'
import Card from '../Card'
import Paginator from '../Paginator'
import Loader from '../Loader'

const Joblist = () => {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getTasks()
      .then((data) => {
        setTasks(data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="jobList ">
      <Container>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Card tasks={tasks} />
            <Paginator />
          </>
        )}
      </Container>
    </div>
  )
}

export default Joblist
