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
    food_description: string
    recipe_link: string
}

export const LandingPage = () => {
    const urlCat = "http://localhost:8000/api/categories/"
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


    const [ choiceCategory, setChoiceCategory] = useState<number | string>('All')
    const [choicePrice, setChoicePrice] = useState<number>(0)
    
    const setFilterCategory = (evt:any) => {        
        setChoiceCategory(evt.target.value)
        setChoicePrice(0)
    }

    const setFilterPrice = (evt:any) => {
        
        if (evt.target.value == 0){
            setChoicePrice(0)
        }else if (evt.target.value == 1) {
            setChoicePrice(49)
        }else if (evt.target.value == 2){
            setChoicePrice(99)
        }else if(evt.target.value == 3){
            setChoicePrice(199)
        }

 
        
    }
 
 
    return(
        <div className="bg-[#323232]  py-10 min-h-screen">

            <h1 className="text-3xl text-[whitesmoke] font-bold py-4 text-center">FoodS!</h1>

            <div className=" flex flex-row self-center justify-center text-xl gap-4 ">
                 <select onChange={setFilterCategory}  className="focus:outline-none cursor-pointer bg-[#707070] text-[whitesmoke] p-2 rounded-lg">
                    <option key={999999} value={'All'}>All</option>
                 {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.id}>
                  {cat.category}
                </option>
              );
            })}
                </select>
                <select onChange={setFilterPrice} className="focus:outline-none cursor-pointer bg-[#707070] text-[whitesmoke] p-2 rounded-lg">
                    <option value={0}>All prices</option>
                    <option value={1}>More than R$50</option>
                    <option value={2}>More than R$100</option>
                    <option value={3}>More than R$200</option>
               
                </select>
                </div>
            <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-12 py-10 ">
                {apiData.filter((food) => food.food_price > choicePrice  && food.category == choiceCategory 
                || food.food_price > choicePrice && choiceCategory == 'All'
                  ).map(item => (
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