import React, { useEffect, useState } from 'react'
import axios from "axios";
import "./App.css";
import { useNavigate } from "react-router-dom"
// import { useParams } from 'react-router-dom';
const Alldetail = () => {
    const navigate = useNavigate();
    const [storedata, setStoredata] = useState([]);
    

    useEffect(() => {
        axios.get("https://backend-api-murex.vercel.app/getalldetails")
            .then((res) => res.data)
            .then(res => { setStoredata(res) })
    }, [storedata])
    // console.log(storedata)
    // consz
    const deletemanyfunc = () => {
        alert("All The Data Will be Deleted");
        fetch('https://backend-api-murex.vercel.app/deletemany', {
            method: 'DELETE'
        })
            .then((response) => response.json())
    }
    const deletefunc = (id) => {
        console.log(id)
        alert("All The Data Will be Deleted");
        fetch(`https://backend-api-murex.vercel.app/delete/${id}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            // .then(res => { setStoredata(res) })
    }



    return (

        <div className='main_div'>
            <div className='second_div'>
                <h1 className='head'>All Users Details</h1>
                <button className='btn' onClick={deletemanyfunc}>Delete the all the user</button>
                <button className='btn' onClick={() => { navigate("/") }} >Goback</button>
            </div>
            <table className='table' border="2px" width="100%">
                <tr>
                    <th>Name</th>
                    <th>Ranking</th>
                    <th>Email I'D</th>
                    <th>Stack</th>
                    
                    <th>Delete</th>
                </tr>
                {storedata.map((e) => {
                    return (
                        <tr key={e._id}>
                            <td>{e.name}</td>
                            <td>{e.ranking}</td>
                            <td>{e.email}</td>
                            <td>{e.tech}</td>
                            
                            <td><button className='btn1' onClick={() => { deletefunc(e._id.toString()) }}>Delete</button></td>
                        </tr>

                    )

                })}


            </table>


        </div>
    )
}

export default Alldetail