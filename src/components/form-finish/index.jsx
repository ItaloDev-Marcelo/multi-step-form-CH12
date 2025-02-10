import { useNavigate } from "react-router-dom"
import bg from "../../assets/images/bg-sidebar-desktop.svg"
import { useContext } from "react"
import { GlobalFormContext } from "../../context/GlobalFormContext"

export default function Result() {

  const navigate = useNavigate()
  const {formMultStepData} = useContext(GlobalFormContext);
 
  return (
    <div className="form-container" >
      <div className="container-img">
        <img src={bg} className="bg" />
        <ul>
          <li className="navagation">1</li>
          <li className="navagation">2</li>
          <li className="navagation">3</li>
          <li className="navagation active">4</li>
        </ul>
      </div>
      <section className="Form-3">
      <h3 className="form--title">Finish form</h3>
      <h4 className="sub-title">Double-check everything looks OK before confirming.</h4>
    
      </section>
      <div className="Navbar">
     <button onClick={() => navigate('/form-step1/form-step2/form-step3')} className="btn-Dark-Blue">Go back</button> 
     <button type="submit" form="forma" className="btn-Dark-Blue">Next Step</button>
     </div>
    </div >
  )
}