// src/App.js
import { useState } from 'react';
import './App.css';
import foodsData from "./foods.json";

function App () {
  const [foods, setFoods] = useState(foodsData);
  return <div className="App">
    { foods.map((food)=>{
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={100} />
          </div>
        )
    }
    )}

  </div>;
}
export default App;