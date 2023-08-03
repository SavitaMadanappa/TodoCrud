import { useRef } from 'react';
import './todo.css'
import { useNavigate } from 'react-router-dom';
const ToDoListForm = () => {
    let emploeeName = useRef();
    let assignedWork = useRef();
    let start = useRef();
    let end = useRef();
    let navigate=useNavigate();

    const handleForm = (e) => {
        e.preventDefault();
        let newWork = {
            emploeeName: emploeeName.current.value,
            assignedWork: assignedWork.current.value,
            start: start.current.value,
            end: end.current.value,
        }
        console.log(newWork);
        fetch("http://localhost:3002/employee", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newWork)
        })
        .then(()=>{
            alert("new work assined succesfully...")
         //  navigate("/get")
         window.location.reload();

        })
    }


    return (
        <div className="todo">
            <h1>ToDo List</h1>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Employee Name" ref={emploeeName}  required/>
                <input type="text" placeholder=" Assigned work" ref={assignedWork} required/>
                <label htmlFor="date1">Start Date</label><input type="date" name="" id="date1" ref={start} required />
                <label htmlFor="date2">Ending Date</label><input type="date" name="" id="date2" ref={end} required/>
                <button >Submit</button>
            </form>
        </div>
    );
}

export default ToDoListForm;