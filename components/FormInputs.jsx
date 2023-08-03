import './FormInp.css'
import { useState } from 'react';
const FormInputs = (props) => {
    let [focused,setFocused]=useState(false);
    
    const {label, id,onChange,errorMessage,...inputprops}=props;
    console.log(props);
    
   
    return ( 
        <div className="formInput"> 
            <label htmlFor="">{label}</label>
            <input {...inputprops}  onChange={onChange} onBlur={()=>{setFocused(true)}} focused={focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
     );
}
 
export default FormInputs;