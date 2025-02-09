import { useNavigate } from "react-router-dom"
import bg from "../../assets/images/bg-sidebar-mobile.svg"
import { useContext, useEffect, useState} from "react"
import { GlobalFormContext } from "../../context/GlobalFormContext"
import { useForm } from "react-hook-form"
export default function CheckForm() {

  const navigate = useNavigate() 

   const {register, watch, handleSubmit} = useForm() ;
   const [data, setData] = useState(false) 
   const [checkList, setCheckList] = useState([]) 
   const { toggle, formMultStepData, setFormMultStepData } = useContext(GlobalFormContext) ;
   const check = watch("checkMe", []) 
  
   useEffect(() => {
     setCheckList(check)
   }, [check])

   console.log('this is in checkList ' , checkList)
   console.log('this is in watch checkMe', check)


   

   function getCheckBox()  {
      setData(!data) 
      setFormMultStepData([...formMultStepData, {checkList}])
   }

  
     return (
         <>
          <div className="container-img">
                   <img src={bg} alt='' />
                   <ul>
         <li className="navagation">1</li>
         <li className="navagation">2</li>
         <li className="navagation active">3</li>
         <li className="navagation">4</li>
      </ul>
          </div>
     
       <section className="Form-3">
       <h2 className="form--title">Pick add-ons</h2>
           <form onSubmit={handleSubmit(getCheckBox)} id='forma'>
               <legend>Add-ons help enhance your gaming experience.</legend>  
              <div className="ch-row box-item">
                <input type="checkbox" {...register('checkMe')} name='checkMe' id="ch-1"  value={toggle ? '+$10/yr' : '+$1/mo'}/>
             
              <label htmlFor="ch-1">
                 <div className="ch-row">
                  <span> <strong>Online service</strong> <br />
                 Access to multiplayer games</span>
                 </div>
               </label>
               
                <a href="#">+$1{toggle ? '0' : null}/mo</a>
              </div>
              <div className="ch-row box-item">
              <input type="checkbox" {...register('checkMe')} name='checkMe' id="ch-2" value={toggle ? '+$20/yr' : '+$2/mo'}/>
              
              <label htmlFor="ch-2">
                 <div className="ch-row">
                 <span> <strong>Larger storage</strong> <br />
                 Extra 1TB of cloud save</span>
                 </div>
               </label>
               <a href="#">+$2{toggle ? '0' : null} /mo</a>
              </div>
              <div className="ch-row box-item">
              <input type="checkbox" {...register('checkMe')} name='checkMe' id="ch-3"  value={toggle ? '+$2yr/mo' : '+$2/mo'}/>
              
              <label htmlFor="ch-3">
               <div className="ch-row">
               <span> <strong>Customizable Profile</strong> <br />
                 Custom theme on your profile</span>
               </div>
               </label>
               <a href="#">+$2{toggle ? '0' : null}/mo</a>
              </div>
           </form>
           <div className="Navbar">
           <button  onClick={() => navigate('/form-step1/form-step2')} className="btn-gray">Go back</button>
           {!data ?  <button type="submit"  form="forma" className="btn-Dark-Blue">Next Step</button> 
      :  <button onClick={() => navigate('/form-step1/form-step2/form-step3/form-step4')}  className="btn-Dark-Blue">Next Step</button> 
    }
            </div>
       </section>
         </>
     )
}

