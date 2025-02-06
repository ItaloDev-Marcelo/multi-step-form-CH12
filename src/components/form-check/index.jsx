import { useNavigate } from "react-router-dom"

export default function CheckForm() {

  const navigate = useNavigate() 

     return (
         <>
      <ul>
         <li className="navagation">1</li>
         <li className="navagation">2</li>
         <li className="navagation active">3</li>
         <li className="navagation">4</li>
      </ul>
       <section>
       <h2 className="form--title">Pick add-ons</h2>
           <form>
               <legend>Add-ons help enhance your gaming experience.</legend>  
              <div className="ch-row">
                <input type="checkBox" name='Online service' id="ch-1" value='+$1/mo'/>
             
              <label htmlFor="ch-1">
                 <span> <strong>Online service</strong>
                 Access to multiplayer games</span>
                 <a href="#">+$1/mo</a>
               </label>
               
              </div>
              <div className="ch-row">
              <input type="checkBox" name='Larger storage' id="ch-2" value='+$2/mo'/>
              
              <label htmlFor="ch-2">
                 <span> <strong>Larger storage</strong>
                 Extra 1TB of cloud save</span>
                 <a href="#">+$2/mo</a>
               </label>
               
              </div>
              <div className="ch-row">
              <input type="checkBox" name='Customizable Profile' id="ch-3" value='+$2/mo'/>
              
              <label htmlFor="ch-3">
                 <span> <strong>Customizable Profile</strong>
                 Custom theme on your profile</span>
                 <a href="#">+$2/mo</a>
               </label>
               
              </div>
           </form>
           <div className="Navbar">
           <button  onClick={() => navigate('/form-step1/form-step2')} className="btn-gray">Go back</button>
           <button  onClick={() => navigate('/form-step1/form-step2/form-step3/form-step4')} className="btn-Dark-Blue">Next Step</button>
       </div>
       </section>
         </>
     )
}