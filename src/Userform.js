import './App.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Userform() {
  const [data, setData] = useState({
    name: "",
    tech: "",
    email: "",
    ranking: ""
  })
  const navigate = useNavigate();
  const [store, setStore] = useState([])
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handlesubmit = (e) => {
    e.preventDefault();
    setStore([...store, { ...data }])
    setData({
      name: "",
      tech: "",
      email: "",
      ranking: ""
    })

    axios.post("https://backend-api-murex.vercel.app/api", data)
      .then((res) => { console.log(res) })
      .catch((err) => {
        alert(err)
      })
    navigate("./Alldetail")
  }
  return (
    <div className='main_div1user'>

      <div className="main_div2" >
        <h1 className="App">Please Submit your Stack Ranking</h1>
        <form onSubmit={handlesubmit} method="post" action="/Alldetail">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={data.name} required onChange={handlechange} className="form-control" id="name" placeholder="Enter Full name" />

          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id='email' className="form-control" aria-describedby="emailHelp" type="email" name="email" value={data.email} placeholder="Enter last email..." required onChange={handlechange} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group ">
            <label htmlFor="ranking">Ranking:</label>
            <input className="form-control" id="ranking" type="number" name="ranking" value={data.ranking} placeholder="Enter your number..." required onChange={handlechange} />
          </div>
          <div className="form-group ">
            <label htmlFor="tech">Technology</label>
            <textarea name='tech' value={data.tech} className="form-control" onChange={handlechange} id="tech" placeholder="write your Technology" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>



        </form>
      </div>
    </div>

  );
}
export default Userform;
