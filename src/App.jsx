import './style.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import SelectForm from './components/form-select'
import BasicForm from './components/form-basic'
import CheckForm from './components/form-check'
import Result from './components/form-finish'

function App() {
  
  

  return (
    <>
      <Routes>
          <Route path="/" element={<Navigate to="/form-step1" /> } />
          <Route path='/form-step1' element={<BasicForm/>} />
          <Route path='/form-step1/form-step2' element={<SelectForm/>} />
          <Route path='/form-step1/form-step2/form-step3' element={<CheckForm/>}/>
          <Route path='/form-step1/form-step2/form-step3/form-step4' element={<Result/>}/>
      </Routes>
    </>
  )
}

export default App
