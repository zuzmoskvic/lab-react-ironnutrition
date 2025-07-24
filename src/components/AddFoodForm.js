import { useState } from "react";

function AddFoodForm(props){
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState(0);
    const [servings, setServings] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = { name, calories, image, servings };
        props.addNewFood(newFood);

        setName("");
        setImage("");
        setCalories(0);
        setServings(0);
    };

    return (
        <div>
            <h1>Add Food Entry</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input value={name} type="text" onChange={e => setName(e.target.value)} />

                <label>Image</label>
                <input value={image} type="url" onChange={e => setImage(e.target.value)} />

                <label>Calories</label>
                <input value={calories} type="number" onChange={e => setCalories(e.target.value)} />

                <label>Servings</label>
                <input value={servings} type="number" onChange={e => setServings(e.target.value)} />

                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default AddFoodForm;