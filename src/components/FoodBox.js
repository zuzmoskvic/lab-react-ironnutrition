function FoodBox({foods, searchValue}) {
  return <>
    { foods
    .filter((food)=>{
      return food.name.toLowerCase().includes(searchValue.toLowerCase())
      })
    .map((food) => {
        return (
        <div>
            <div><h1>{food.name}</h1></div>
            <div>
                <img src={food.image} width={100} alt={food.name}/>
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>Total Calories: {food.calories * food.servings} kcal</p>
                <button>Delete</button>
            </div>
        </div>)
    })}
  </>
}
export default FoodBox;