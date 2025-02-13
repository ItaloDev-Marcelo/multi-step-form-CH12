import './assets/css/style.css';
import './assets/css/tablet.css';
import { Navigate, Route, Routes } from 'react-router-dom'
import BasicForm from './page/BasicForm--level0'
import SelectForm from './page/SelectForm--level1'
import CheckForm from './page/CheckForm--level2'
import Result from './page/LastForm--level3'

function App() {
  return (
      <Routes>
          <Route path="/" element={<Navigate to="/form-step1" /> } />
          <Route path='/form-step1' element={<BasicForm/>} />
          <Route path='/form-step1/form-step2' element={<SelectForm/>} />
          <Route path='/form-step1/form-step2/form-step3' element={<CheckForm/>}/>
          <Route path='/form-step1/form-step2/form-step3/form-step4' element={<Result/>}/>
      </Routes>
  )
}

export default App
