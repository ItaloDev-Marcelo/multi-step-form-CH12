import thanks from '../assets/images/icon-thank-you.svg'

import bg from "../assets/images/bg-sidebar-desktop.svg"

export default function ThankYou() {
    return (
        <>
             <div className="container-img">
                <img src={bg} className="bg" />
                <ul>
          <li className="navagation">1</li>
          <li className="navagation">2</li>
          <li className="navagation">3</li>
          <li className="navagation active">4</li>
        </ul>
              </div>
        <section className="Form-3 form4-fix">
            <img src={thanks} alt='' />
             <h6>Thank you!</h6>
             <p> Thanks for confirming your subscription! We hope you have fun 
             using our platform. If you ever need support, please feel free 
             to email us at support@loremgaming.com.</p>
        </section>
        </>
    )
}