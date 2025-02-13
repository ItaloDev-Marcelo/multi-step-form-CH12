import { useNavigate } from "react-router-dom"
import bg from "../../assets/images/bg-sidebar-desktop.svg"
import { useContext, useState } from "react"
import { GlobalFormContext } from "../../context/GlobalFormContext"
import ThankYou from "../../page/thanks";

export default function Result() {

  const navigate = useNavigate();
  const { formMultStepData } = useContext(GlobalFormContext);
  let FormSelected = formMultStepData[1]?.select ? [formMultStepData[1]?.select] : [''];
  let FormCheckList = formMultStepData[2]?.checkList || [];
  const mix = [...FormCheckList];
  const mix2 = [...FormSelected];
  const mix3 = [...FormCheckList, ...FormSelected];
  const data01 = convertData(mix);
  const data02 = convertData(mix2);
  const data03 = convertData(mix3);
  const [showTime , setShowTime] = useState(false)



  function convertData(formStep) {
    let FormData = formStep && formStep.map((item) => {
      let num = item.match(/\d+/g)
      const [name, price] = item.split(" +$")
      return { name: name.trim(), price: `${num}`, type: price.slice(2).replace('0', '') }
    })
    return FormData
  }

  function submitData() {
    setShowTime(!showTime)
  }



  const item = data01.map(item => {
    return (
      <div className="bottom">
        <p className="gray-txt">{item.name} </p>
        <p className="black-me">+${item.price}/{item.type}</p>
      </div>
    )
  })

  const item2 = data02.map(item => {
    return (
      <div>
        <div className="top">
          <div>
            <h4 className="top-title">{item.name} <span>{item.type == 'mo' ? '(Monthly)' : '(Yearly)'}</span> </h4>
            <a href="#">Change</a>
          </div>
          <p className="top-txt">${item.price}/{item.type}</p>
        </div>
        <hr />
      </div>
    )
  })

  const re = data03.map(item => Number(item.price)).
    reduce((sum, num) => {
      return sum + num
    }, 0)

  return (
   <>
   {!showTime ? <div className="form-container" >
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
          <p className="navagation active ">4</p>
          <div className="navagation-info">
            <p className="gray-step-txt">Step 4</p>
            <p><strong>SUMMARY</strong></p>
          </div>
          </div>

        </div>

      </div>
      <section className="Form-3 form3-fix">
        <h3 className="form--title">Finish form</h3>
        <h4 className="sub-title">Double-check everything looks OK before confirming.</h4>
        <article className="mini-form">
          {item2}
          {item}
        </article>
        <div className="total">
          <h5 className="gray-txt">Total (per {data03[2] == 'mo' ? 'month' : 'year'})  </h5>
          <p className="blue-txt">+${re}/{data03[2] == 'mo' ? 'mo' : 'yr'}</p>
        </div>
      </section>
      <div className="Navbar">
        <button onClick={() => navigate('/form-step1/form-step2/form-step3')} className="btn-Dark-Blue">Go back</button>
        <button onClick={submitData} className="btn-Dark-Blue">Confirm</button>
      </div>
    </div > :
     <ThankYou/>
  }
   
     

   </>
  )
}