import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Joblist from '../Joblist/Joblist'
import Detailedjob from '../Detailedjob'
import './App.css'

const Joblist = lazy(() => import('../Joblist/Joblist'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="/" element={<Joblist />} />
          <Route path="/:id" element={<Detailedjob />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
