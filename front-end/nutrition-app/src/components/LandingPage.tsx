 import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "./Card"

interface Food {
    id: number
    food_image: string
    food_name: string
    food_price: number
    calories_per_serving: number
    created_at: string
}

export const LandingPage = () => {

    const url  = "http://localhost:8000/api/foods/"

    const getAllData = () => {
        axios.get(url).then((res) =>  {
            setApiData(res.data)
        }).catch(error => console.error(`Error: ${error}`))
        
    }

    const [apiData, setApiData] = useState<Food[]>([]);
    useEffect(() => {
        getAllData()
       
    },[])

    
    return(
        <div className="bg-[#323232]  py-10 ">

            <h1 className="text-3xl text-[whitesmoke] font-bold py-4 text-center">FoodS!</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap ">
                {apiData.map(item => (
                <div key={item.id}>
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