import { useNavigate } from "react-router-dom"
import bg from "../../assets/images/bg-sidebar-desktop.svg"
import { useContext } from "react"
import { GlobalFormContext } from "../../context/GlobalFormContext"

export default function Result() {

  const navigate = useNavigate()
  const {formMultStepData} = useContext(GlobalFormContext);

  let FormSelected = formMultStepData[1]?.select ? [formMultStepData[1]?.select] : ['']  ;
  let FormCheckList = formMultStepData[2]?.checkList || [];
  let mix = [...FormCheckList]
  let mix2 = [...FormSelected]
  let mix3 = [...FormCheckList, ...FormSelected]
  
  function convertData(formStep) {
      let FormData = formStep && formStep.map((item) => {
      let num = item.match(/\d+/g)
      const [name, price] = item.split(" +$")
      return {name: name.trim(), price: `${num}`, type: price.slice(2).replace('0','')}
    })
    return  FormData
  }

  let data01 =  convertData(mix);
  let data02 =  convertData(mix2);
  let data03 =  convertData(mix3);

  console.log(data01)

  const item = data01.map(item => {
     return (
        <div className="bottom">
          <p>{item.name} </p>
          <p>{item.price}/{item.type}</p>
        </div>
     )
  }) 



const re = data03.map(item => Number(item.price)).
reduce((sum, num) => {
    return sum + num
},0)

console.log(re)


  const item2 = data02.map(item => {
    return (
       <div>
        <div className="top">
         <div>
         <h4>{item.name} <span>{item.type == 'mo' ? '(Monthly)' : '(Yearly)'}</span> </h4>
         <a href="#">Change</a>
         </div>
         <p>{item.price}/{item.type}</p>
        
       </div>
       <hr />
       </div>
    )
 }) 


 
  return (
    <div className="form-container" >
      <div className="container-img">
        <img src={bg} className="bg" />
        <ul>
          <li className="navagation">1</li>
          <li className="navagation">2</li>
          <li className="navagation">3</li>
          <li className="navagation active">4</li>
        </ul>
      </div>
      <section className="Form-3">
      <h3 className="form--title">Finish form</h3>
      <h4 className="sub-title">Double-check everything looks OK before confirming.</h4>
       <article className="mini-form">
       {item2}
       {item}
       </article>
        <div className="total">
          <h5>total per {data03[2] == 'mo' ? 'month' : 'year'} </h5>
          <p>${re}/{data03[2] == 'mo' ? 'mo' : 'yr'}</p>
        </div>
      </section>
      <div className="Navbar">
     <button onClick={() => navigate('/form-step1/form-step2/form-step3')} className="btn-Dark-Blue">Go back</button> 
     <button type="submit" form="forma" className="btn-Dark-Blue">Next Step</button>
     </div>
    </div >
  )
}