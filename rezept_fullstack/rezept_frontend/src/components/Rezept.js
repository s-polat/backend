import React from 'react'
import './Rezept.css';


function Rezept() {

  async function addReceipt(e) {
    e.preventDefault();
    const rawResponse = await fetch('http://localhost:3000/add', {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: e.target.title.value,
        image: e.target.foto.value,
        description: e.target.description.value,
        ingredients: {},
        category: '',
        preparationTime: '30 min.'})
      });
      const content = await rawResponse.json();
      
      console.log(content);
  }
  return (
    <main>
      <h1>Füge dein Lieblingsrezept hinzu.</h1>
      <form onSubmit={addReceipt}> 
        <div class="form-control">
          <label htmlFor="name">Rezeptname</label>
          <input type="text" id="name" name="title" required />
        </div>
        <div class="form-control">
          <label htmlFor="address">Zutaten</label>
          <ol>
            <li>
              <input
                className="form-control"
                type="text"
                id="address"
                name="ingredient1"
                required
              />
            </li>
            <li>
              <input
                className="form-control"
                type="text"
                id="address"
                name="ingredient2"
                required
              />
            </li>
            <li>
              <input
                className="form-control"
                type="text"
                id="address"
                name="ingredient3"
                required
              />
            </li>
          </ol>
        </div>

        <div class="form-control"></div>
        <div class="form-control">
          <label htmlFor="description">Anleitung</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Adresse hinzufügen</label>
          <input type="text" id="foto" name="foto" />
        </div>
        <h5>Empfohlen von: </h5>
        <button>Rezept hinzufügen</button>
      </form>
    </main>
  );
}

export default Rezept