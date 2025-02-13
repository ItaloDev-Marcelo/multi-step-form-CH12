import bg from "../../assets/images/bg-sidebar-desktop.svg"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react"
import { GlobalFormContext } from "../../context/GlobalFormContext"



export default function BasicForm() {
 
  const navigate = useNavigate()
  const { register, handleSubmit, formState: {errors} } = useForm()
  const { setFormMultStepData } = useContext(GlobalFormContext)
  const [data, setData] = useState(false)
 

  function hundleForm(formData) {
    setData(formData)
    setFormMultStepData([formData])
  }

  return (
    <div className="form-container">
      <div className="container-img">

        <img src={bg} className="bg" />
      

        <div className="list--container">
        <div className="ul-row">
          <p className="navagation active">1</p>
          <div className="navagation-info">
            <p className="gray-step-txt">Step 1</p>
            <p><strong>YOUR INFO</strong></p>
          </div>
        </div>


          <div className="ul-row">
          <p className="navagation">2</p>
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

      <section className="Form-0">
        <div className="form-area">
          <h1 className="form--title">Personal info</h1>
          <form onSubmit={handleSubmit(hundleForm)} id="formData">
            <legend id="sp1" className="sub-title"> Please provide your name, email address, and phone number.</legend>

            <div>
              <div className="row-input "><label htmlFor="name">Name</label> {errors.yourName ? <p className="Error-txt">This field is required</p>  : null} </div>
              <input type="text" style={{outlineColor: errors.yourName ? 'red' : ' #9699ab'}}  {...register('yourName', {
                required: true
              })} name="yourName" id='name' className='basic' placeholder="e.g. Stephen King" />
            </div>


            <div>
              <div className="row-input "><label htmlFor="email">Email Address</label> {errors.email ? <p className="Error-txt">This field is required</p>  : null} </div>
           
              <input type="email" style={{outlineColor: errors.email ? 'red' : ' #9699ab'}}   {...register('email', {
                required: true
              })} name="email" id='email' className='basic' placeholder="e.g. stephenking@lorem.com" />

            </div>

            <div>
            <div className="row-input "><label htmlFor="tell">Phone Number</label> {errors.tell ? <p className="Error-txt">This field is required</p>  : null} </div>
              <input type="tell"  style={{outlineColor: errors.tell ? 'red' : ' #9699ab'}}   {...register('tell', {
                required: true
              })} name="tell" id='tell' className='basic' placeholder="e.g. +1 234 567 890" />

            </div>

          </form>
          <div className="Navbar">
            {data ? <button onClick={() => navigate('/form-step1/form-step2')} className="btn-Dark-Blue">Next Step</button>
              : <button type="submit" form="formData" className="btn-Dark-Blue">Next Step</button>
            }
          </div>
        </div>

      </section>
    </div>

  )
}