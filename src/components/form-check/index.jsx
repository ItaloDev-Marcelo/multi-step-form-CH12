export default function CheckForm() {
     return (
         <>
           <h2>Pick add-ons</h2>
           <form>
               <legend>Add-ons help enhance your gaming experience.</legend>  
               <label htmlFor="ch-1">
               <input type="checkBox" name='Online service' id="ch-1" value='+$1/mo'/>
                 <span> <strong>Online service</strong>
                 Access to multiplayer games</span>
                 <a href="#">+$1/mo</a>
               </label>
               <label htmlFor="ch-2">
               <input type="checkBox" name='Larger storage' id="ch-2" value='+$2/mo'/>
                 <span> <strong>Larger storage</strong>
                 Extra 1TB of cloud save</span>
                 <a href="#">+$2/mo</a>
               </label>
               <label htmlFor="ch-3">
               <input type="checkBox" name='Customizable Profile' id="ch-3" value='+$2/mo'/>
                 <span> <strong>Customizable Profile</strong>
                 Custom theme on your profile</span>
                 <a href="#">+$2/mo</a>
               </label>
           </form>
         </>
     )
}