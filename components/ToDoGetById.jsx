import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './todoGet.css'
const ToDoGetById = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    let [empdata, setempData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/employee")
            .then(res =>
                // console.log(res.data)
                setempData(res.data))
        console.log(empdata);

    }, [])
    const deleteWork = (id) => {
        const confirm=window.confirm("Are you sure ? you want to delete it ?");
        if(confirm)
        {
            fetch("http://localhost:3002/employee/"+id,
            { method: "DELETE" })
            .then((res) => {
                alert("element deleted successfully...!!!")
                // let deletedElement = empdata.filter((item)=>{return item.id!=id});
                // setempData(deletedElement);
                navigate("/")
                window.location.reload();
            })
        }
       

    }


    return (
        <div className="table">
            <table border="1px">
                <thead> <tr>
                    <th>Employee Name</th>
                    <th>Assigned Work</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>

                    {empdata.map((e, index, value) => {
                        return (<tr key={e.id}>
                            <td>{e.emploeeName}</td>
                            <td>{e.assignedWork}</td>
                            <td>{e.start}</td>
                            <td>{e.end}</td>
                            <td id="btn">
                                <Link to={`/edit/${e.id}`} className="btn11"> <button className="btn11">Edit</button>
                                </Link>
                                <button className="btn12" onClick={() => deleteWork(e.id)} id={e.id}>Delete</button>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default ToDoGetById;