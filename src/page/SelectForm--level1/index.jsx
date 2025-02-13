import Arcade from '../../assets/images/icon-arcade.svg';
import Advanced from '../../assets/images/icon-advanced.svg';
import Pro from '../../assets/images/icon-pro.svg';
import bg from "../../assets/images/bg-sidebar-desktop.svg"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { GlobalFormContext } from "../../context/GlobalFormContext"
import { useForm } from "react-hook-form";


export default function SelectForm() {

   const navigate = useNavigate();
   const { register, handleSubmit, watch } = useForm();
   const { formMultStepData, setFormMultStepData, setToggle} = useContext(GlobalFormContext);
   const [data, setData] = useState(false);
   const [toggleSwitch, setToggleSwitch] = useState(false);
   const result = watch('select');
 

   function hundleFormData(formData) {
      setData(formData)
      setFormMultStepData([...formMultStepData, formData])
      setToggle(toggleSwitch)
   }

   function hundleChange() {
      setToggleSwitch(!toggleSwitch)
   }

   return (
      <div className="form-container">
         <div className="container-img">

            <img src={bg} className="bg" />
            <div className="list--container">
        <div className="ul-row">
          <p className="navagation">1</p>
          <div className="navagation-info">
            <p className="gray-step-txt">Step 1</p>
            <p><strong>YOUR INFO</strong></p>
          </div>
        </div>


          <div className="ul-row">
          <p className="navagation active">2</p>
          <div className="navagation-info">
            <p className="gray-step-txt">Step 2</p>
            <p><strong>SELECT PLAN</strong></p>
          </div>
          </div>


          <div className="ul-row">
          <p className="navagation ">3</p>
          <div className="navagation-info">
            <p className="gray-step-txt">Step 3</p>
            <p><strong>ADD-ONS</strong></p>
          </div>
          </div>


          <div className="ul-row">
          <p className="navagation ">4</p>
          <div className="navagation-info">
            <p className="gray-step-txt">Step 4</p>
            <p><strong>SUMMARY</strong></p>
          </div>
          </div>

        </div>

         </div>

         <section className="form-2">
            <h2 className="form--title form-title-2-fix">Select your plan</h2>
            <form id="selectme" onSubmit={handleSubmit(hundleFormData)}>

               <legend className="sub-title t2">You have the option of monthly or yearly billing.</legend>
               <div id='select--container'>
                  <div className={result == 'Arcade +$9 mo' || result == 'Arcade +$90 yr' ? "selected active" : "selected"}>
                     <label htmlFor="select-01"  {...register('select', {
                        required: true
                     })}>
                        <img src={Arcade} alt='' />
                        <input type="radio" id='select-01' name='select' value={toggleSwitch ? 'Arcade +$90 yr' : 'Arcade +$9 mo'} />
                     </label>
                     <div className="info-box">
                        <p> <span className="radio--title">Arcade</span> <br /> <small>+$9{toggleSwitch ? '0/yr' : '/mo'}</small></p>
                        <p className="space">{toggleSwitch ? '2 months free' : null}</p>
                     </div>
                  </div>
                  <div className={result == 'Advanced +$12 mo' || result == 'Advanced +$120 yr' ? "selected active" : "selected"}>
                     <label htmlFor="select-02" {...register('select', {
                        required: true
                     })}>
                        <img src={Advanced} alt='' />
                        <input type="radio" id='select-02' name='select' value={toggleSwitch ? 'Advanced +$120 yr' : 'Advanced +$12 mo'} />
                     </label>
                     <div className="info-box">
                        <p> <span className="radio--title">Advanced</span>  <br />
                           <small>+$12{toggleSwitch ? '0/yr' : '/mo'}</small></p>
                        <p className="space">{toggleSwitch ? '2 months free' : null}</p>
                     </div>
                  </div>
                  <div className={result == 'Pro +$15 mo' || result == 'Pro +$150 yr' ? "selected active" : "selected"}>
                     <label htmlFor="select-03" {...register('select', {
                        required: true
                     })}>
                        <img src={Pro} alt='' />
                        <input type="radio" id='select-03' name='select' value={toggleSwitch ? 'Pro +$150 yr' : 'Pro +$15 mo'} />
                     </label>
                     <div className="info-box">
                        <p> <span className="radio--title">Pro</span><br />
                           <small>+$15{toggleSwitch ? '0/yr' : '/mo'}/</small></p>
                        <p className="space">{toggleSwitch ? '2 months free' : null}</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <p id="Month">Monthly</p>
                  <label className="lb" htmlFor="swicth-toogle">
                     <input type="checkbox" onChange={hundleChange} name='switch' id="swicth-toogle" />
                  </label>
                  <p id="Year"> Yearly</p>
               </div>

            </form>
            <div className="Navbar navbar-desk2">
               <button onClick={() => navigate('/form-step1')} className="btn-gray">Go back</button>
               {data ? <button onClick={() => navigate('/form-step1/form-step2/form-step3')} className="btn-Dark-Blue">Next Step</button> : <button type="submit" form="selectme" className="btn-Dark-Blue">Next Step</button> }
            </div>
         </section>
      </div>
   )
}