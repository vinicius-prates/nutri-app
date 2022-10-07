 import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "./Card"
import { useNavigate } from "react-router-dom";

export interface Food {
    id: number
    food_image: string
    food_name: string
    food_price: number
    calories_per_serving: number
    created_at: string
    category: number
}

export const LandingPage = () => {

    const url  = "http://localhost:8000/api/foods/"
    const navigate = useNavigate();

    const getAllData = () => {
        axios.get(url).then((res) =>  {
            setApiData(res.data)
        }).catch(error => console.error(`Error: ${error}`))
        
    }

    const [apiData, setApiData] = useState<Food[]>([]);
    useEffect(() => {
        getAllData()
        axios.get(urlCat).then((res) => setCategories(res.data));

       
    },[])

    const [categories, setCategories] = useState<
    { id: number; category: string }[]
     >([]);

    const urlCat = "http://localhost:8000/api/categories/"

    const [ choiceCategory, setChoiceCategory] = useState<number | string>('All')

    const setFilterCategory = (evt:any) => {        
        setChoiceCategory(evt.target.value)
    }

    return(
        <div className="bg-[#323232]  py-10 ">

            <h1 className="text-3xl text-[whitesmoke] font-bold py-4 text-center">FoodS!</h1>

            <div className=" flex flex-row self-center justify-center text-xl">
                 <select onChange={setFilterCategory} className="focus:outline-none cursor-pointer bg-[#707070] text-[whitesmoke] p-2 rounded-lg">
                    <option key={999999} value={'All'}>All</option>
                 {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.category}

                </option>
              );
            })}

                </select>
                </div>
            <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap ">
                {apiData.filter(food => food.category == choiceCategory || choiceCategory == 'All').map(item => (
                <div onClick={() => navigate(`/food/${item.id}`)} key={item.id} className="cursor-pointer">
                    
                    <Card 
                    food_image={item.food_image}  
                    food_name={item.food_name}
                    food_price={item.food_price}
                    calories_per_serving={item.calories_per_serving}
                    created_at={item.created_at}
                         />
                    </div>))}
            </div>
        </div>
    )
}