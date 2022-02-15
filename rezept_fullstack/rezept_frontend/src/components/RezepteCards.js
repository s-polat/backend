import React from "react";

function RezepteCards({rezept}) {
  return (
    <div>
      <div className="card m-1" style={{width:"18rem"}}>
        <img src={rezept.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{rezept.title}</h5>
          <div>
          {rezept.category.map((item)=>{return  <span class="badge rounded-pill bg-primary m-1">  {item} </span>})} 
          </div>
         
          <a href="#" className="btn btn-primary">
            Go to recipe
          </a>
        </div>
      </div>
    </div>
  );
}

export default RezepteCards;
