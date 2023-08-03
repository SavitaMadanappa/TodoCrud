
// import { useState } from 'react';
// import axios from "axios";
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EditToDo from './components/EditToDo';
// import FormInputs from './components/FormInputs';
// import SelectInput from './components/SelectInput';



// function App() {
//   let [values, setValues] = useState({
//     employeeName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     dob: "",

//   })
//   let [data,setData]=useState([]);



//   const inputs = [
//     {
//       id: 1,
//       name: "employeeName",
//       type: "text",
//       placeholder: "Employee Name",
//       label: "Employee Name",
//       errorMessage: "required field it should be of length [3-25]",
//       required: true,
//       pattern: "^[A-Za-z]{3,25}$"


//     },
//     {
//       id: 2,
//       name: "email",
//       type: "email",
//       placeholder: "Email",
//       label: "Email",
//       required: true,
//       errorMessage: "please provide valid email"


//     },
//     {
//       id: 3,
//       name: "password",
//       type: "password",
//       placeholder: "password",
//       label: "Password",
//       required: true,
//       errorMessage: "password should be atleast 8 characters including 1 upper,1 lower,1 special and one numeric",
//       pattern: "^[A-Za-z0-9!@#$^%&*]{8,20}$"
      
      


//     },
//     {
//       id: 4,
//       name: "confirmPassword",
//       type: "password",
//       placeholder: "Confirm Password",
//       label: "Confirm Password",
//       required: true,
//       errorMessage: "please match the password",
//       pattern: values.password


//     },
//     {
//       id: 5,
//       name: "dob",
//       type: "date",
//       placeholder: "DOB",
//       label: "DOB",
//       required: true,

//     }
//   ]


  
//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value })
  
//   // console.log("datas are -->"+values);
    
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let demoVar=Object.values(values)
//    setData(demoVar);
    
//     // console.log("...hiiiii ...    "+data);
//     // fetch("http://localhost:5000/", {
//     //   method: 'POST',
//     //   headers: {
//     //            'Content-Type': 'application/json'
//     //            },
//     //   body: JSON.stringify(data)
//     // })
//     // .then(()=>{
//     //   console.log("values are--->"+data);
//     //   alert("successfully account has been created....")
//     // })
//     axios.post("http://localhost:5000/users/post",data)
//     .then((res)=>{
//       alert("created succesfully....")
//     })
//     .catch((err)=>{
//       alert(err)
//     })

//   }
  
//   return (
//     <div className="App">
//       <div className="form">
//         <form action="" onSubmit={handleSubmit}>
//           <h2>Employee Details<span><i class='bx bxs-user'></i></span></h2>
//           <hr />
//           {
//             inputs.map((input) => (
//               <FormInputs key={input.id} {...input} value={values[input.name]}  onChange={onChange} />
//             ))
//           }

          
//           <SelectInput />



//           <button>submit</button>
//         </form>
//       </div>
//     </div>
//   )


// }


// export default App;
import ToDoGetById from "./components/ToDoGetById";
import ToDoListForm from "./components/ToDoListForm";
import { useState } from 'react';
const App = () => {
  let [path,setPath]=useState()
  return ( 
    <BrowserRouter>
    <div className="main-container">

      <div><ToDoListForm/></div> 
      <div><ToDoGetById/></div>
      <Routes>
        {/* <Route path='/' element={<ToDoListForm/>}/>
        <Route path='/get' element={<ToDoGetById/>}/> */}
      <Route path='/edit/:id' element={<EditToDo/>}/>
      </Routes>
     
    </div>
    </BrowserRouter> 
    

  );
}
 
export default App;