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

   const { register, handleSubmit, formState: { errors }, reset, watch } = useForm()
   const [data, setData] = useState(false)
   const [toggleSwitch, setToggleSwitch] =  useState(false);
   const { setDataForm1,  setToggle} = useContext(GlobalFormContext)
   const result = watch('select') 

   function hundleFormData(formData) {
      setData(formData)
      setDataForm1(formData)
      setToggle(toggleSwitch)
   }

   function hundleChange() {
      setToggleSwitch(!toggleSwitch)
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
                  <div className={result == 'Arcade $9/mo' || result ==  'Arcade $90/yr' ? "selected active" : "selected"}>
                     <label htmlFor="select-01"  {...register('select', {
                        required: true
                     })}>
                        <img src={Arcade} alt='' />
                        <input type="radio" id='select-01' name='select' value={!toggleSwitch ? 'Arcade $9/mo' : 'Arcade $90/yr'} />

                     </label>
                    <div className="info-box">
                    <p> <span className="radio--title">Arcade</span> <br />
                        <small>$9{toggleSwitch ? '0/yr' : '/mo'}</small></p>
                     <p className="space">{toggleSwitch ? '2 months free' : null}</p>
                    </div>
                  </div>
                  <div className={result == 'Advanced $12/mo' || result ==  'Advanced $120/yr' ? "selected active" : "selected"}>
                     <label htmlFor="select-02" {...register('select', {
                        required: true
                     })}>
                        <img src={Advanced} alt='' />
                        <input type="radio" id='select-02' name='select'  value={!toggleSwitch ? 'Advanced $12/mo' : 'Advanced $120/yr'} />

                     </label>
                     <div className="info-box">
                     <p> <span className="radio--title">Advanced</span>  <br />
                        <small>$12{toggleSwitch ? '0/yr' : '/mo'}</small></p>
                        <p className="space">{toggleSwitch ? '2 months free' : null}</p>
                     </div>
                  </div>
                  <div className={result == 'Pro $15/mo' || result ==  'Pro $150/yr' ? "selected active" : "selected"}>
                     <label htmlFor="select-03" {...register('select', {
                        required: true
                     })}>
                        <img src={Pro} alt='' />
                        <input type="radio" id='select-03' name='select'   value={!toggleSwitch ? 'Pro $15/mo' : 'Pro $150/yr'}  />
                     </label>
                     <div className="info-box">
                     <p> <span className="radio--title">Pro</span><br />
                        <small>$15{toggleSwitch ? '0/yr' : '/mo'}/</small></p>
                        <p className="space">{toggleSwitch ? '2 months free' : null}</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <p id="Month">Monthly</p>
                  <label className="lb" htmlFor="swicth-toogle">
                     <input type="checkbox" onChange={hundleChange}  name='switch' id="swicth-toogle" />
                  </label>
                  <p id="Year"> Yearly</p>
               </div>

            </form>
            <div className="Navbar">
               <button onClick={() => navigate('/form-step1')} className="btn-gray">Go back</button>
               {!data ? <button type="submit" form="selectme" className="btn-gray">Next Step</button>
               : <button onClick={() => navigate('/form-step1/form-step2/form-step3')} className="btn-Dark-Blue">Next Step</button>

               }
            </div>
         </section>
      </>
   )
}