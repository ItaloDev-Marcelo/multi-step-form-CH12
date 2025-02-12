import thanks from '../assets/images/icon-thank-you.svg'


export default function ThankYou() {
    return (
        <article>
            <img src={thanks} alt='' />
             <h6>Thank you!</h6>
             <p> Thanks for confirming your subscription! We hope you have fun 
             using our platform. If you ever need support, please feel free 
             to email us at support@loremgaming.com.</p>
        </article>
    )
}