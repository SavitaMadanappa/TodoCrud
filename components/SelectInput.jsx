import './selectTag.css'
const SelectInput = (props) => {
    const  states = [
        {
            "name" :"Andaman and Nicobar Islands"
        },
        {
            "name" :"Andhra Pradesh"
        },
        {
            "name" :"Arunachal Pradesh"
        },
        {
            "name" :"Assam"
        },
        {
            "name" :"Bihar"
        },
        {
            "name" :"Chandigarh"
        },
        {
            "name" :"Chhattisgarh"
        },
        {
            "name" :"Dadra and Nagar Haveli"
        },
        {
            "name" :"Daman and Diu"
        },
        {
            "name" :"Delhi"
        },
        {
            "name" :"Goa"
        },
        {
            "name" :"Gujarat"
        },
        {
            "name" :"Haryana"
        },
        {
            "name" :"Himachal Pradesh"
        },
        {
            "name" :"Jammu and Kashmir"
        },
        {
            "name" :"Jharkhand"
        },
        {
            "name" :"Karnataka"
        },
        {
            "name" :"Kerala"
        },
        {
            "name" :"Ladakh"
        },
        {
            "name" :"Lakshadweep"
        },
        {
            "name" :"Madhya Pradesh"
        },
        {
            "name" :"Maharashtra"
        },
        {
            "name" :"Manipur"
        },
        {
            "name" :"Meghalaya"
        },
        {
            "name" :"Mizoram"
        },
        {
            "name" :"Nagaland"
        },
        {
            "name" :"Odisha"
        },
        {
            "name" :"Puducherry"
        },
        {
            "name" :"Punjab"
        },
        {
            "name" :"Rajasthan"
        },
        {
            "name" :"Sikkim"
        },
        {
            "name" :"Tamil Nadu"
        },
        {
            "name" :"Telangana"
        },
        {
            "name" :"Tripura"
        },
        {
            "name" :"Uttar Pradesh"
        },
        {
            "name" :"Uttarakhand"
        },
        {
            "name":"West Bengal"
        }
    ]
    return ( 
        <div className="selectinp">
          <fieldset id='field'>
            <legend>Address</legend>
            <select name="" id="">
                <option value="">--state--</option>
                {
                    states.map((state)=>(<option key={states.name}>{state.name}</option>))
                }
            </select>
          <input placeholder="City" id="city" type='text'/>
          
          </fieldset>
        </div>
     );
}
 
export default SelectInput;