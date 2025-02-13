import bg from "../../assets/images/bg-sidebar-desktop.svg"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { GlobalFormContext } from "../../context/GlobalFormContext"
import { useForm } from "react-hook-form"

export default function CheckForm() {

  const navigate = useNavigate()
  const { register, watch, handleSubmit } = useForm();
  const { toggle, formMultStepData, setFormMultStepData } = useContext(GlobalFormContext);
  const [data, setData] = useState(false);
  const [checkList, setCheckList] = useState([]);
  const check = watch("checkMe", []);

  const [isChecked0, setIsChecked0] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  useEffect(() => {
    setCheckList(check)
  }, [check])


  function getCheckBox() {
    setData(!data)
    setFormMultStepData([...formMultStepData, {checkList}])
  }

  return (
    <div className="form-container">
      <div className="container-img">
        <img src={bg} className="bg" />
        <div className="list--container">
        <div className="ul-row">
          <p className="navagation ">1</p>
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
          <p className="navagation active ">3</p>
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
      <section className="Form-3">
        <h2 className="form--title">Pick add-ons</h2>
        <form onSubmit={handleSubmit(getCheckBox)} id='forma'>
          <legend className="sub-title t2">Add-ons help enhance your gaming experience.</legend>
          <div className="pad-t">
          <div className={isChecked0 ? "ch-row box-item active" : "ch-row box-item"} >
            <input type="checkbox" {...register('checkMe')}
             name='checkMe' id="ch-1"
             checked={isChecked0}
             onClick={() =>  setIsChecked0(!isChecked0)}
             value={toggle ? ' Online service +$10 yr' : 'Online service +$1 mo'} />
            <label htmlFor="ch-1">
              <div className="ch-row">
                <span> <strong>Online service</strong> <br />
                  Access to multiplayer games</span>
              </div>
            </label>
            <a href="#">+$1{toggle ? '0/yr' :'/mo'}</a>
          </div>
          <div className={isChecked1 ? "ch-row box-item active" : "ch-row box-item"}>
            <input type="checkbox" 
            checked={isChecked1}
            {...register('checkMe')} 
            onClick={() =>  setIsChecked1(!isChecked1)} 
            name='checkMe' id="ch-2" value={toggle ? 'Larger storage +$20 yr' : 'Larger storage +$2 mo'} />

            <label htmlFor="ch-2">
              <div className="ch-row">
                <span> <strong>Larger storage</strong> <br />
                  Extra 1TB of cloud save</span>
              </div>
            </label>
            <a href="#">+$2{toggle ? '0/yr' :'/mo'}</a>
          </div>
          <div className={isChecked2 ? "ch-row box-item active" : "ch-row box-item"}>
            <input type="checkbox"
            checked={isChecked2}
            onClick={() =>  setIsChecked2(!isChecked2)}
             {...register('checkMe')}
              name='checkMe' id="ch-3" value={toggle ? 'Customizable Profile +$20 yr' : 'Customizable Profile +$2 mo'} />

            <label htmlFor="ch-3">
              <div className="ch-row">
                <span> <strong>Customizable Profile</strong> <br />
                  Custom theme on your profile</span>
              </div>
            </label>
            <a href="#">+$2{toggle ? '0/yr' :'/mo'}</a>
          </div>
          </div>
        </form>
        <div className="Navbar navbar-desk3">
          <button onClick={() => navigate('/form-step1/form-step2')} className="btn-gray">Go back</button>
          {data ? <button onClick={() => navigate('/form-step1/form-step2/form-step3/form-step4')} className="btn-Dark-Blue">Next Step</button> :
            <button type="submit" form="forma" className="btn-Dark-Blue">Next Step</button>}
        </div>
      </section>
    </div>
  )
}

