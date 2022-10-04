import axios from "axios";
import { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Link } from 'react-router-dom';
import FoodLogo from '../assets/finger-food.png';

// DTO == Data transfer object(name given to the JSON)
interface FoodPostDTO {
  food_name: string;
  food_price: number;
  calories_per_serving: number;
  food_description: string;
  recipe_link: string;
  food_image: File | null;
  category: number;
}

export const AddNewFood = () => {
  const [categories, setCategories] = useState<
    { id: number; category: string }[]
  >([]);
  const [newFoodData, setNewFoodData] = useState<FoodPostDTO>({
    food_name: "",
    food_price: 0,
    calories_per_serving: 0,
    food_description: "",
    recipe_link: "",
    food_image: null,
    category: 1,
  });

  const url = "http://localhost:8000/api/categories/";
  const foodsUrl = "http://localhost:8000/api/foods/";

  useEffect(() => {
    axios.get(url).then((res) => setCategories(res.data));
  }, []);

  const addFood = async (e: any) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("food_name", newFoodData.food_name);
    formdata.append("food_price", newFoodData.food_price.toString());
    formdata.append(
      "calories_per_serving",
      newFoodData.calories_per_serving.toString()
    );
    formdata.append("food_description", newFoodData.food_description);
    formdata.append("recipe_link", newFoodData.recipe_link);
    formdata.append("food_image", newFoodData.food_image!);
    formdata.append("category", newFoodData.category.toString());

    const { data } = await axios.post(foodsUrl, formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(data);
  };

  const onInputChange = (evt: any) => {
    setNewFoodData({ ...newFoodData, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="bg-gradient-to-br  from-blue-500 via-red-400 to-yellow-400 h-full lg:h-screen">
       <div className="">
                <Link to="/"><img src={FoodLogo} className="w-24 pt-6 pl-6"/></Link>
            </div>
      <div className=" flex justify-center py-10">
        <form className="flex flex-col w-[80%] lg:w-[40%] justify-center align-center gap-8  p-6 bg-[#101010] text-white rounded-lg" onSubmit={addFood}>
          <h1 className="text-center text-2xl "> FoodS!</h1>
          <input
            placeholder="Name"
            name="food_name"
            onChange={onInputChange}
            type="text"
            className="border-b-2 focus:outline-none px-2 py-1 text-black rounded-md"
          ></input>
          <input
            placeholder="Price"
            type="number"
            name="food_price"
            onChange={onInputChange}
            className="border-b-2 focus:outline-none px-2 py-1 text-black rounded-md"
          ></input>
          <input
            placeholder="Calories"
            type="number"
            name="calories_per_serving"
            onChange={onInputChange}
            className="border-b-2 focus:outline-none px-2 py-1 text-black rounded-md"
          ></input>
          <textarea
            placeholder="Description"
            name="food_description"
            onChange={onInputChange}
            className="border-b-2 focus:outline-none px-2 py-1 text-black rounded-md h-80 lg:h-40 resize-none"
          ></textarea>
          <input
            placeholder="recipe link"
            name="recipe_link"
            onChange={onInputChange}
            type="text"
            className="border-b-2 focus:outline-none px-2 py-1 text-black rounded-md"
          ></input>
          <input
            type="file"
            onChange={(evt) =>
              setNewFoodData({
                ...newFoodData,
                food_image: evt.target.files![0],
              })
            }
            className="focus:outline-none px-2 py-1 rounded-md"
          ></input>
          <select name="category" onChange={onInputChange} className="text-black px-2 py-1 focus:outline-none rounded-md">
            {categories.map((cat) => {
              return (
                <option value={cat.id} key={cat.id}>
                  {cat.category}
                </option>
              );
            })}
          </select>
          <button type="submit" className="bg-[#323232] py-4 rounded-lg font-bold  lg:self-center hover:bg-gradient-to-r   transition duration-500 from-blue-500 via-red-400 to-yellow-400  lg:w-[50%]"> Add Food</button>
        </form>
      </div>
    </div>
  );
};
