import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EditToDo = () => {
    let emploeeName = useRef();
    let assignedWork = useRef();
    let start = useRef();
    let end = useRef();
    let {id}=useParams();
    let navigate=useNavigate();
    useEffect(()=>{
        fetch("http://localhost:3002/employee/"+id)
        .then((res)=>{return res.json() })
        .then((data)=>{
           emploeeName.current.value=data.emploeeName; 
           assignedWork.current.value=data.assignedWork;
           start.current.value=data.start;
           end.current.value=data.end;
        })
    },[id])

    const handleForm = (e) => {
        e.preventDefault();
        let editWork = {
            emploeeName: emploeeName.current.value,
            assignedWork: assignedWork.current.value,
            start: start.current.value,
            end: end.current.value
        }
         
         fetch("http://localhost:3002/employee/"+id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editWork)
        })
        .then(()=>{
            alert(" work details are updated succesfully...")
          navigate('/get')
          window.location.reload();
        })
    }
    return (
        <div className="todo">
            <h1>Edit List</h1>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Employee Name" ref={emploeeName} />
                <input type="text" placeholder=" Assigned work" ref={assignedWork} />
                <label htmlFor="date1">Start Date</label><input type="date" name="" id="date1" ref={start} />
                <label htmlFor="date2">Ending Date</label><input type="date" name="" id="date2" ref={end} />
                <button >Submit</button>
            </form>
        </div>
    );
}

 
export default EditToDo;