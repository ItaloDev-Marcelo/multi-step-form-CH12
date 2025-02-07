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
       <section className="Form-3">
       <h2 className="form--title">Pick add-ons</h2>
           <form>
               <legend>Add-ons help enhance your gaming experience.</legend>  
              <div className="ch-row box-item">
                <input type="checkbox" name='Online service' id="ch-1" value='+$1/mo'/>
             
              <label htmlFor="ch-1">
                 <div className="ch-row">
                 <span> <strong>Online service</strong> <br />
                 Access to multiplayer games</span>
                 </div>
               </label>
               <a href="#">+$1/mo</a>
              </div>
              <div className="ch-row box-item">
              <input type="checkbox" name='Larger storage' id="ch-2" value='+$2/mo'/>
              
              <label htmlFor="ch-2">
                 <div className="ch-row">
                 <span> <strong>Larger storage</strong> <br />
                 Extra 1TB of cloud save</span>
                 </div>
               </label>
               <a href="#">+$2/mo</a>
              </div>
              <div className="ch-row box-item">
              <input type="checkbox" name='Customizable Profile' id="ch-3" value='+$2/mo'/>
              
              <label htmlFor="ch-3">
               <div className="ch-row">
               <span> <strong>Customizable Profile</strong> <br />
                 Custom theme on your profile</span>
               </div>
               </label>
               <a href="#">+$2/mo</a>
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