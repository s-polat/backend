import './App.css';
import ReceptDetails from './components/ReceptDetails.js';
import Startseite from './components/Startseite';
import Rezept from './components/Rezept';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'

function App() {
  const recept = {
    title: 'pizza',
    description: 'lorem ipsum',
    preparationTime: '30 min',
    category: ['pizza', 'fastfood', 'italian'],
    ingredients: { teig: 1, tomaten: 2, käse: 3 },
    image:
      'https://www.bofrost.de/medias/01781-DE-pizza-con-salame-pic1.jpg-W920xH575R1.6?context=bWFzdGVyfHByb2R1Y3QtaW1hZ2VzfDM5MzgwOXxpbWFnZS9qcGVnfHByb2R1Y3QtaW1hZ2VzL2gwMC9oOTkvOTE3MDI5ODczMjU3NC5qcGd8OGY3OTZlZDc4MTI1YzA3OTliMjMwMTA4ODE4YTg4NDYxZTIyYTYxZGRjN2I0NWZhNzlhM2UxNzdlMDQxYmM4ZA',
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/recipes/:id' element={<ReceptDetails recept={recept}/>} />
          
        <Route path='/' element={<Startseite/>} />
        <Route path='/add' element={<Rezept />} />
          
        
      </Routes>
    </div>
  );
}

export default App;
