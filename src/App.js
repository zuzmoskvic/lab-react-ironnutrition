import { useState } from 'react';
import './App.css';
import foodsData from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App () {
  const [foods, setFoods] = useState(foodsData);
  const [searchValue, setSearchValue] = useState("");

  const addNewFood = (newFood) => {
      const adjustedFoodArray = [...foods, newFood];
      setFoods(adjustedFoodArray);
  }


  return <div className="App">
    <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
    <AddFoodForm addNewFood={addNewFood}/>
    <FoodBox foods={foods} searchValue={searchValue}/>
  </div>;
}
export default App;