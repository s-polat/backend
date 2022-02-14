import React, { useEffect, useState } from 'react'
import RezepteCards from './RezepteCards';

function RezepteListeArea() {

    const [allRezepte, setAllRezepte] = useState([]);

    useEffect(() => {
      fetch("/api/allRezepte.json")
        .then((res) => res.json())
        .then((res) => setAllRezepte(res));
    }, []);

  return (
    <div className='d-flex flex-column' >

    <div className='d-flex justify-content-around m-3'>
        <button className='btn btn-dark shadow'>All</button>
        <button className='btn btn-dark shadow'>Lunch</button>
        <button className='btn btn-dark shadow'>Breakfast</button>
        <button className='btn btn-dark shadow'>Schake</button>
    </div>

    <div className='d-flex justify-content-center align-items-center flex-wrap'>

        {
            allRezepte.map((rezept,index)=>{

                return(
                    <RezepteCards rezept = {rezept}/>
                )
            })
        }

        </div>

    </div>
  )
}

export default RezepteListeArea