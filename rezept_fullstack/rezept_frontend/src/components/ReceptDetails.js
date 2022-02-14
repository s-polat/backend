import React, {useEffect, useState} from 'react';
import './ReceptDetails.css';
function ReceptDetails(props) {
  // kommt ein Objekt an mit Titel, Beschreibung, Zutaten, Zubereitungszeit, Kategorie, Bild
  const { title, description, ingredients, preparationTime, category, image } =
    props.recept;
  // title = string
  // description = string
  // ingredients = object
  // preparationTime = string
  // category = array
  // image = string (url)
  function categoryLink() {
    return data.category.map((cat) => {
      return (
        <a href="#">
          <span key={cat}>{cat}</span>
        </a>
      );
    });
  }

  const [data, setData] = useState({});
  let id = "620a5ab0b606c5583ed172b5";

  useEffect(() => {
    const recipesDB = `http://localhost:4000/recipes/:${id}`;
    
    
    fetch(recipesDB)
    .then((res) => res.json())
    .then((res) => {
    /* const randomNum = Math.floor(Math.random() * res.results.length)
    setCharacter({char:res.results[randomNum].name, pict:res.results[randomNum].image}) */
    
    setData({res});
    console.log(res);
    })
    .catch(() => {
    alert('404 🙃')
    
    });
    
    
    },); 


  return (
    <div className="container-recept">
      <h1>{data.title}</h1>
      <p>Preparation time: {data.preparationTime}</p>
      <img src={data.image} alt="" className="image" />
      <h2>Ingredients</h2>
      <ul className="ingredientsList">
        {Object.keys(data.ingredient).map((key) => {
          return (
            <li key={key}>
              {key}: {data.ingredient[key]}
            </li>
          );
        })}
      </ul>
      <h2>Description</h2>
      <p>{data.description}</p>
      <h3>Category</h3>
      <p>{categoryLink()}</p>
    </div>
  );
}

export default ReceptDetails;
