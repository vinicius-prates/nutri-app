 import axios from "axios"
import { useEffect, useState } from "react"
import { Card } from "./Card"
export const LandingPage = () => {

    const url  = "http://localhost:8000/api/foods/"

    const getAllData = () => {
        axios.get(url).then((res) =>  {
            setApiData(res.data)
        }).catch(error => console.error(`Error: ${error}`))

        
    }

    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        getAllData()

    }, [])

    
    return(
        <div className="bg-[#323232] h-screen ">

            <h1 className="text-3xl text-[whitesmoke] font-bold py-4 text-center">FoodS!</h1>
            <div>
                {apiData.map((item, index ) => (
                <div key={index}>
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