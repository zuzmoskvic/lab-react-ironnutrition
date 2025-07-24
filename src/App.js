import { useState } from 'react';
import './App.css';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';

function App () {
  const [foods, setFoods] = useState(foodsData);

  return <div className="App">

    <FoodBox foods={foods}/>

  </div>;
}
export default App;