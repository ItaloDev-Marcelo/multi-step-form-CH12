import { useNavigate } from "react-router-dom"
import bg from "../../assets/images/bg-sidebar-mobile.svg"

export default function BasicForm() {

  const navigate = useNavigate() 
    return (
      <>
      <div className="container-img">
          <img src={bg} alt='' />
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
       <form>
           <legend id="sp1"> Please provide your name, email address, and phone number.</legend>
           <div>
            
           <label htmlFor="name">Name</label>
           <input type="text" name="name" id='name' className='basic' placeholder="e.g. Stephen King" />
          
           </div>
          
          <div>
          <label htmlFor="email">Email Address</label>
           <input type="email" name="email" id='email' className='basic' placeholder="e.g. stephenking@lorem.com" />
          
          </div>
           
          <div>
          <label htmlFor="tell">Phone Number</label>
           <input type="tell" name="tell" id='tell' className='basic' placeholder="e.g. +1 234 567 890" />
       
            </div> 
           </form>
       </div>
       <div className="Navbar">
           <button  onClick={() => navigate('/form-step1/form-step2')} className="btn-Dark-Blue">Next Step</button>
       </div>
      </section>
      </>
     
    )
}