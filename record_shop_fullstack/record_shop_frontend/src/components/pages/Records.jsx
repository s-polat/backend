import React from "react";
import Navigation from "../Navigation";

function Records({ records }) {
  return (
    <div>
      <Navigation />
      <h1 className="text-center">All of Record</h1>
      <div className="d-flex justify-content-around align-items-center flex-wrap">
        
          {records.map((record, index) => {
            return (
              
                <div key={index} className="card m-5" style={{width: "18rem"}}>
                  <img src={record.cover} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Record Name: {record.title}</h5>
                    <p className="card-text">
                      Artist: {record.artist}
                    </p>
                    <p className="card-text">
                      Year: {record.year}
                    </p>
                    <p className="card-text">
                      Price: {record.price}€
                    </p>
                    
                  </div>
                </div>
              
            );
          })}
        
      </div>
    </div>
  );
}

export default Records;
