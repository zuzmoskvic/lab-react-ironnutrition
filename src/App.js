import { useState } from 'react';
import './App.css';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';

function App () {
  const [foods, setFoods] = useState(foodsData);
  const [name, setName] = useState("");
  const [food, setFood] = useState({});

  return <div className="App">

    <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
    }} />

    { foods.map((food)=>{
        return (
          <div>
            <p> {food.name} </p>
            <img src={food.image} width={100} alt={food.name}/>
          </div>
        )
    }
    )}

  </div>;
}
export default App;