import { useNavigate } from "react-router-dom"


export default function BasicForm() {

  const navigate = useNavigate() 
    return (
      <>
        <ul>
         <li className="navagation active">1</li>
         <li className="navagation">2</li>
         <li className="navagation">3</li>
         <li className="navagation">4</li>
      </ul>
      <section>
       <div className="form-area">
       <h1 className="form--title">Personal info</h1>
       <form>
           <legend> Please provide your name, email address, and phone number.</legend>
           <label htmlFor="name">Name</label>
           <input type="text" name="name" id='name' placeholder="e.g. Stephen King" />
           <label htmlFor="email">Email Address</label>
           <input type="email" name="email" id='email' placeholder="e.g. stephenking@lorem.com" />
           <label htmlFor="tell">Phone Number</label>
           <input type="tell" name="tell" id='tell' placeholder="e.g. +1 234 567 890" />
       </form>
       </div>
       <div className="Navbar">
           <button  onClick={() => navigate('/form-step1/form-step2')} className="btn-Dark-Blue">Next Step</button>
       </div>
      </section>
      </>
     
    )
}