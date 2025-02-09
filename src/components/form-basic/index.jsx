import { useNavigate } from "react-router-dom"
import bg from "../../assets/images/bg-sidebar-desktop.svg"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react"
import { GlobalFormContext } from "../../context/GlobalFormContext"



export default function BasicForm() {

  const {register, handleSubmit} = useForm()
  const [data, setData] = useState(false) 
  const navigate = useNavigate() 
  const {setFormMultStepData} = useContext(GlobalFormContext) 

  function hundleForm(formData) {
       setData(formData)
       setFormMultStepData([formData])
  }

    return (
      <div className="form-container">
      <div className="container-img">
        
                    <img src={bg} className="bg" />
          <ul>
         <li className="navagation active">1</li>
         <li className="navagation">2</li>
         <li className="navagation">3</li>
          <li className="navagation">4</li>
      </ul>
      </div>
       
      <section className="Form-0">
       <div className="form-area">
       <h1 className="form--title">Personal info</h1>
       <form onSubmit={handleSubmit(hundleForm)} id="formData"> 
           <legend id="sp1"> Please provide your name, email address, and phone number.</legend>

           <div>
            
           <label htmlFor="name">Name</label>
           <input type="text"   {...register('yourName', {
            required: true
           })} name="yourName" id='name' className='basic' placeholder="e.g. Stephen King" />
          
           </div>
          
          <div>
          <label htmlFor="email">Email Address</label>
           <input type="email" {...register('email', {
            required: true
           })} name="email" id='email' className='basic' placeholder="e.g. stephenking@lorem.com" />
          
          </div>
           
          <div>
          <label htmlFor="tell">Phone Number</label>
           <input type="tell" {...register('tell', {
            required: true
           })}  name="tell" id='tell' className='basic' placeholder="e.g. +1 234 567 890" />
       
          </div> 
          
       </form>
       <div className="Navbar">
     {  data ? <button type="submit" onClick={() => navigate( '/form-step1/form-step2')}  className="btn-Dark-Blue">Next Step</button>
       : <button type="submit" form="formData" className="btn-Dark-Blue">Next Step</button>
       }
          </div>
       </div>
       
      </section>
      </div>
     
    )
}