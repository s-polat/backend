import React from "react";

function RezepteCards({rezept}) {
  return (
    <div>
      <div className="card m-1" style={{width:"18rem"}}>
        <img src={rezept.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{rezept.name}</h5>
          <div>
          <span class="badge rounded-pill bg-primary m-1">{rezept.category}</span>
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
