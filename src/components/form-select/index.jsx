import { useNavigate } from "react-router-dom"
import Arcade from '../../assets/images/icon-arcade.svg';
import Advanced from '../../assets/images/icon-advanced.svg';
import Pro from '../../assets/images/icon-pro.svg';
import bg from "../../assets/images/bg-sidebar-mobile.svg"

import { useContext, useState } from "react"
import { GlobalFormContext } from "../../context/GlobalFormContext"
import { useForm } from "react-hook-form";
export default function SelectForm() {
   
   const navigate = useNavigate()

   const {register, handleSubmit, formState: {errors}, reset} = useForm()  
   const [data, setData ] = useState(false)
   
   const {setDataForm1} = useContext(GlobalFormContext) 

   function hundleFormData(formData) {
        setData(formData)
        setDataForm1(formData)
   }
 

    return (
      <>
      <div className="container-img">
                         <img src={bg} alt='' />
                         <ul>
         <li className="navagation">1</li>
         <li className="navagation active">2</li>
         <li className="navagation">3</li>
         <li className="navagation">4</li>
      </ul>
                     </div>
     
       <section className="form-2">
       <h2 className="form--title form-title-2-fix">Select your plan</h2>
       <form id="selectme" onSubmit={handleSubmit(hundleFormData)}>

           <legend>You have the option of monthly or yearly billing.</legend>
           <div id='select--container'>
              <div className="selected">
              <label {...register('select ', {
            required: true
           })}>
                 <img src={Arcade} alt='' />
                 <input type="radio"  name='selectMe' value='$9/mo'/>
                 
              </label>
              <p> <span className="radio--title">Arcade</span> <br />
                 <small>$9/mo</small></p>
              </div>
             <div className="selected">
             <label {...register('select ', {
            required: true
           })}>
                 <img src={Advanced} alt='' />
                 <input type="radio"   name='selectMe' value='$12/mo'/>
                 
              </label>
              <p> <span className="radio--title">Advanced</span>  <br />
                 <small>$12/mo</small></p>
             </div>
             <div className="selected">
             <label {...register('select ', {
            required: true
           })}>
                 <img src={Pro} alt=''/>
                 <input type="radio"   name='selectMe' value='$15/mo'/>
              </label>
              <p> <span className="radio--title">Pro</span><br />
              <small>$15/mo</small></p>
             </div>
           </div>
           <div className="row">
           <p id="Month">Monthly</p>
           <label className="lb" htmlFor="swicth-toogle">
              <input type="checkbox" name='switch' id="swicth-toogle" />
           </label>
           <p id="Year"> Yearly</p>  
           </div>
           
       </form>
       <div className="Navbar">
       <button onClick={() => navigate('/form-step1')} className="btn-gray">Go back</button>
         {data ?  <button type="submit" form="selectme" className="btn-gray">Next Step</button>
           : <button  onClick={() => navigate('/form-step1/form-step2/form-step3')} className="btn-Dark-Blue">Next Step</button>
     
          } 
       </div>
       </section>
      </>
    )
}