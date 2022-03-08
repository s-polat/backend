import React from "react";
import { useState } from "react";
import Navigation from "../Navigation";

function RecordAdd({setRecords}) {

  const BACKEND_URL_POST_HEROKU= process.env.REACT_APP_BACKEND_URL_POST_HEROKU
  const BACKEND_URL_POST_LOCAL= process.env.REACT_APP_BACKEND_URL_POST_LOCAL + '/records'

  const [addRecord, setAddRecord] = useState({
    title: "",
    artist: "",
    cover: "",
    year: "",
    price: 0,
  });

 

  function submitHandler(e){
    e.preventDefault();
    fetch(BACKEND_URL_POST_HEROKU, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addRecord),
    })

    .then(res => res.json())
    .then(data=> {
      setRecords(prevState => [...prevState, data]) //prestate aslinda bizim eski records statemiz
      alert(`${data.title} wurde nach Datenbank gespeichert`)

    });
    
    fetch(BACKEND_URL_POST_LOCAL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addRecord),
    })
     
   
    }


   function changeHandle(e){
     let dataByInput= e.target.value
    setAddRecord({...addRecord, [e.target.name]: dataByInput})
  }

  
  

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Navigation />
      <div className=" p-2 " style={{ width: "28rem" }}>
        <form onSubmit={submitHandler}>
          <h1>Add new Record</h1>
          <div className="mb-3">
            <label htmlFor="Input1" className="form-label">
              title
            </label>
            <input type="text" className="form-control" id="Input1" onChange={changeHandle} name="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="Input2" className="form-label">
              artist
            </label>
            <input type="text" className="form-control" id="Input2" onChange={changeHandle} name="artist" />
          </div>
          <div className="mb-3">
            <label htmlFor="Input3" className="form-label">
              year
            </label>
            <input type="text" className="form-control" id="Input3" onChange={changeHandle} name="year" />
          </div>
          <div className="mb-3">
            <label htmlFor="Input4" className="form-label">
              price
            </label>
            <input type="" className="form-control" id="Input4" onChange={changeHandle} name="price" />
          </div>
          <div className="mb-3">
            <label htmlFor="Input5" className="form-label">
              cover img url
            </label>
            <input type="url" className="form-control" id="Input5" onChange={changeHandle} name="cover" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default RecordAdd;
