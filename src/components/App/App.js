import { Route, Routes } from 'react-router-dom'
import Joblist from '../Joblist/Joblist'
import Detailedjob from '../Detailedjob'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Joblist />} />
        <Route path="/:id" element={<Detailedjob />} />
      </Routes>
    </div>
  )
}

export default App
