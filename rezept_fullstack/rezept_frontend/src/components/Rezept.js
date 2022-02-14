import React from 'react'
import './Rezept.css';

function Rezept() {

  function addReceipt(e) {
    e.preventDefault();
  }
  return (
    <main>
      <h1>Füge dein Lieblingsrezept hinzu.</h1>
      <form>
        <div class="form-control">
          <label htmlFor="name">Rezeptname</label>
          <input type="text" id="name" name="name" required />
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
        <button onclick={addReceipt}>Rezept hinzufügen</button>
      </form>
    </main>
  );
}

export default Rezept