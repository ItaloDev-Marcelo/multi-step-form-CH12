import { useNavigate } from "react-router-dom"

export default function SelectForm() {
   
   const navigate = useNavigate()

    return (
      <>
      <ul>
         <li className="navagation1">1</li>
         <li className="navagation2 active">2</li>
         <li className="navagation3">3</li>
         <li className="navagation4">4</li>
      </ul>
       <h2>Select your plan</h2>
       <form>
           <legend>You have the option of monthly or yearly billing.</legend>
           <div id='select--container'>
              <label>
                 <input type="radio" name='selectMe' value='$9/mo'/>
                 <span> Arcade
                 $9/mo</span>
              </label>
              <label>
                 <input type="radio" name='selectMe' value='$12/mo'/>
                 <span> Advanced
                 $12/mo</span>
              </label>
              <label>
                 <input type="radio" name='selectMe' value='$15/mo'/>
                 <span>Pro
                 $15/mo</span>
              </label>
           </div>
           <label htmlFor="swicth-toogle">
            <span id="Month">Monthly</span>
              <input type="checkbox" name='switch' id="swicth-toogle" />
            <span id="Year"> Yearly</span>  
           </label>
       </form>
       <div className="Navbar">
           <button  onClick={() => navigate('/form-step1')} className="btn-gray">Go back</button>
           <button  onClick={() => navigate('/form-step1/form-step2/form-step3')} className="btn-Dark-Blue">Next Step</button>
       </div>
      </>
    )
}