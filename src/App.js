import { useState } from 'react';
import './App.css';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App () {
  const [foods, setFoods] = useState(foodsData);
  
  const addNewFood = (newFood) => {
      const adjustedFoodArray = [...foods, newFood];
      setFoods(adjustedFoodArray);
  }


  return <div className="App">
    <AddFoodForm addNewFood={addNewFood}/>
    <FoodBox foods={foods}/>
  </div>;
}
export default App;