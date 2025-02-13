import thanks from '../../assets/images/icon-thank-you.svg'

import bg from "../../assets/images/bg-sidebar-desktop.svg"

export default function ThankYou() {
    return (
        <>
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
        <section className="Form-3 form4-fix">
            <img src={thanks} alt='' />
             <h6>Thank you!</h6>
             <p> Thanks for confirming your subscription! We hope you have fun 
             using our platform. If you ever need support, please feel free 
             to email us at support@loremgaming.com.</p>
        </section>  
        </div>
        </>
    )
}