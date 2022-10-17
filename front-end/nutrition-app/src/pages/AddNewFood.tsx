import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import FoodLogo from '../assets/finger-food.png';
import { Notify } from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

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
  const navigate = useNavigate();

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
    navigate("/")
  };

  const onInputChange = (evt: any) => {
    setNewFoodData({ ...newFoodData, [evt.target.name]: evt.target.value });
  };



  const validateNewFoodForm = (evt:any) => {
        evt.preventDefault()

        if (newFoodData.food_name.length <= 0){
          Notify.failure("Name field is empty!", {position : "center-top"})  
          return 
        }

        if (newFoodData.food_price <= 0 ){
          Notify.failure("The food price can't be lower than R$1", {position : "center-top"})
          return
        }

        if (newFoodData.calories_per_serving < 0){
          Notify.failure("At least 0 kcal", {position : "center-top"})
          return
        }

        if (newFoodData.food_description.length <= 0) {
          Notify.failure("Description field is empty!", {position : "center-top"})
          return
        }

        if (newFoodData.recipe_link.length <= 0) {
          Notify.failure("Recipe link field is empty!", {position : "center-top"})
          return
        }

        if (newFoodData.food_image == null) {
          Notify.failure("You need to upload a file!", {position : "center-top"})
          return
        }

        Report.success('New food added', 'Check it at the home page!', 'Done.')
        addFood(evt)
    
  }

  return (
    <div className="bg-gradient-to-br  from-blue-500 via-red-400 to-yellow-400 h-full ">
       <div className="">
                <Link to="/"><img src={FoodLogo} className="w-24 pt-6 pl-6"/></Link>
            </div>
      <div className=" flex justify-center py-10">
        <form className="flex flex-col w-[80%] lg:w-[40%] justify-center align-center gap-8  p-6 bg-[#101010] text-white rounded-3xl" onSubmit={validateNewFoodForm}>
          <h1 className="text-center text-2xl "> FoodS!</h1>
          <input
            placeholder="Name"
            name="food_name"
            onChange={onInputChange}
            type="text"
            className="border-b-2 border-slate-600 bg-[#323232] focus:outline-none px-2 py-1 text-[whitesmoke] rounded-t-md"
          ></input>
          <input
            placeholder="Price"
            type="number"
            name="food_price"
            onChange={onInputChange}
            className="border-b-2 border-slate-600 bg-[#323232] focus:outline-none px-2 py-1 text-[whitesmoke] rounded-t-md"
          ></input>
          <input
            placeholder="Calories"
            type="number"
            name="calories_per_serving"
            onChange={onInputChange}
            className="border-b-2 border-slate-600 bg-[#323232]  focus:outline-none px-2 py-1 text-[whitesmoke] rounded-t-md"
          ></input>
          <textarea
            placeholder="Description"
            name="food_description"
            onChange={onInputChange}
            className="border-b-2 border-slate-600 bg-[#323232] focus:outline-none px-2 py-1 text-[whitesmoke] rounded-t-md h-80 lg:h-40 resize-none"
          ></textarea>
          <input
            placeholder="recipe link"
            name="recipe_link"
            onChange={onInputChange}
            type="text"
            className="border-b-2 border-slate-600 bg-[#323232] focus:outline-none px-2 py-1 text-[whitesmoke] rounded-t-md"
          ></input>
          <input
            type="file"
            onChange={(evt) =>
              setNewFoodData({
                ...newFoodData,
                food_image: evt.target.files![0],
              })
            }
            className="focus:outline-none px-2 py-1 lg:self-center"
          ></input>
          <select name="category" onChange={onInputChange} className="text-[whitesmoke] cursor-pointer px-2 py-1 border-slate-600 bg-[#323232] focus:outline-none rounded-t-md">
            {categories.map((cat) => {
              return (
                <option value={cat.id} key={cat.id}>
                  {cat.category}
                </option>
              );
            })}
          </select>
          <button type="submit" className="bg-blue-600 py-4 rounded-full font-bold  lg:self-center  hover:bg-[#323232] duration-300 lg:w-[50%]"> Add Food</button>
        </form>
      </div>
    </div>
  );
};
