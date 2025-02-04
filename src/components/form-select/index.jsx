
export default function SelectForm() {
    return (
      <>
       <h2>Select your plan</h2>
       <form>
           <legend>You have the option of monthly or yearly billing.</legend>
           <div id='select--container'>
              <label>
                 <input type="radio" name='selectMe' value='$9/mo'/>
                 <span> Arcade
                 $9/mo</span>
              </label>
              <label>
                 <input type="radio" name='selectMe' value='$12/mo'/>
                 <span> Advanced
                 $12/mo</span>
              </label>
              <label>
                 <input type="radio" name='selectMe' value='$15/mo'/>
                 <span>Pro
                 $15/mo</span>
              </label>
           </div>
           <label htmlFor="swicth-toogle">
            <span id="Month">Monthly</span>
              <input type="checkbox" name='switch' id="swicth-toogle" />
            <span id="Year"> Yearly</span>  
           </label>
       </form>
      </>
    )
}