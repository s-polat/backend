import React from 'react';
import { Link } from "react-router-dom";

export default function Navigation() {
  return(
       <div className='d-flex justify-content-center align-items-center m-3'>

           <Link to='/records'>
                <h4 className=' mx-3'> All of Records</h4>
           </Link>
           <Link to='/addRecord'>
           <h4  className=' mx-3'> Add a Record</h4>
           </Link>
           <Link to='/register'>
           <h4  className=' mx-3'>Register</h4>
           </Link>


       </div>
);
}
