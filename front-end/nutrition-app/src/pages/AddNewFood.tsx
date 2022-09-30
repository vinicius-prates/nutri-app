import axios from "axios"
import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"


// DTO == Data transfer object(name given to the JSON)
interface FoodPostDTO {
    food_name: string
    food_price: number
    calories_per_serving: number
    food_description: string
    recipe_link: string
    food_image: File | null
    category: number
}

export const AddNewFood = () => {

    const [categories, setCategories] = useState<{id: number, category: string}[]>([]);
    const [newFoodData, setNewFoodData] = useState<FoodPostDTO>({
        food_name: "",
        food_price: 0,
        calories_per_serving: 0,
        food_description: "",
        recipe_link: "",
        food_image: null,
        category: 0
    })
    
    
    const url = "http://localhost:8000/api/categories/"
    const foodsUrl = "http://localhost:8000/api/foods/"

    useEffect(() => {
        axios.get(url).then(res => setCategories(res.data))
    },[])

    const addFood = async (e: any) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('food_name', newFoodData.food_name)
        formdata.append('food_price', newFoodData.food_price.toString())
        formdata.append('calories_per_serving', newFoodData.calories_per_serving.toString())
        formdata.append('food_description', newFoodData.food_description)
        formdata.append('recipe_link', newFoodData.recipe_link)
        formdata.append('food_image', newFoodData.food_image!)
        formdata.append('category', newFoodData.category.toString())

        const { data } = await axios.post(foodsUrl, formdata, { headers: { "Content-Type": "multipart/form-data" } })
        console.log(data)
    }

    const onInputChange = (evt: any) => {
        setNewFoodData({...newFoodData, [evt.target.name]: evt.target.value})
    }
    
    return(
        <div>
            <NavBar/>
            <div className="bg-[#323232] ">
                <form className="flex flex-col" onSubmit={addFood}>
                    <input placeholder="Name" name="food_name" onChange={onInputChange} type="text" className=""></input>
                    <input placeholder="Price" type="number" name="food_price" onChange={onInputChange} className=""></input>
                    <input placeholder="Calories" type="number" name="calories_per_serving" onChange={onInputChange} className=""></input>
                    <textarea placeholder="Description" name="food_description" onChange={onInputChange}   className=""></textarea>
                    <input placeholder="recipe link"  name="recipe_link"  onChange={onInputChange} type="text" className=""></input>
                    <input type="file" onChange={evt => setNewFoodData({...newFoodData, food_image: evt.target.files![0] })}></input>
                    <select name="category" onChange={onInputChange}>
                        {categories.map(cat => {
                            return <option value={cat.id} key={cat.id}>{cat.category}</option>
                        })}
                    </select>
                    <button type="submit"> Add Food</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}