import { useNavigate } from "react-router-dom"

export default function CheckForm() {

  const navigate = useNavigate() 

     return (
         <>
      <ul>
         <li className="navagation1">1</li>
         <li className="navagation2">2</li>
         <li className="navagation3 active">3</li>
         <li className="navagation4">4</li>
      </ul>
           <h2>Pick add-ons</h2>
           <form>
               <legend>Add-ons help enhance your gaming experience.</legend>  
               <label htmlFor="ch-1">
               <input type="checkBox" name='Online service' id="ch-1" value='+$1/mo'/>
                 <span> <strong>Online service</strong>
                 Access to multiplayer games</span>
                 <a href="#">+$1/mo</a>
               </label>
               <label htmlFor="ch-2">
               <input type="checkBox" name='Larger storage' id="ch-2" value='+$2/mo'/>
                 <span> <strong>Larger storage</strong>
                 Extra 1TB of cloud save</span>
                 <a href="#">+$2/mo</a>
               </label>
               <label htmlFor="ch-3">
               <input type="checkBox" name='Customizable Profile' id="ch-3" value='+$2/mo'/>
                 <span> <strong>Customizable Profile</strong>
                 Custom theme on your profile</span>
                 <a href="#">+$2/mo</a>
               </label>
           </form>
           <div className="Navbar">
           <button  onClick={() => navigate('/form-step1/form-step2')} className="btn-gray">Go back</button>
           <button  onClick={() => navigate('/form-step1/form-step2/form-step3/form-step4')} className="btn-Dark-Blue">Next Step</button>
       </div>
         </>
     )
}