import React, { useEffect, useState } from "react";
import RezepteCards from "./RezepteCards";

function RezepteListeArea() {
  const [filteredCategory,setFilteredCategory] = useState([]);



  async function getCategoryItems(e) {
    const value = e.target.value;

    if(value==="All"){      

     await fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((res) => setFilteredCategory(res));

    }else{
     await fetch(`http://localhost:3000/category/${value}`)
        .then((res) => res.json())
        .then((res) => setFilteredCategory(res));

    }

  }




  console.log(filteredCategory);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-around m-3">
        <button
          onClick={getCategoryItems}
          value="All"
          className="btn btn-dark shadow"
        >
          All
        </button>
        <button
          onClick={getCategoryItems}
          value="Lunch"
          className="btn btn-dark shadow"
        >
          Lunch
        </button>
        <button
          onClick={getCategoryItems}
          value="Breakfast"
          className="btn btn-dark shadow"
        >
          Breakfast
        </button>
        <button
          onClick={getCategoryItems}
          value="Orientalisch"
          className="btn btn-dark shadow"
        >
          Orientalisch
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {filteredCategory.map((rezept, index) => {
          return <RezepteCards rezept={rezept} />;
        })}
      </div>
    </div>
  );
}

export default RezepteListeArea;
