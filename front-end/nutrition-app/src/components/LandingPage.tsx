 import axios from "axios"
import { useEffect, useState } from "react"
export const LandingPage = () => {

    const getAllData = () => {
        axios.get(url).then((res) =>  {
            setApiData(res.data)
        }).catch(error => console.error(`Error: ${error}`))

        
    }

    const url  = "http://localhost:8000/api/foods/"
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        getAllData()

    }, [])

    
    return(
        <div className="bg-[#323232] h-screen ">

            <h1 className="text-3xl text-[whitesmoke] font-bold py-4 text-center">FoodS!</h1>
            <div>
                {apiData.filter(item => item.category == 1).map((item, index ) => (
                <div key={index}>
                    <h1 className="text-white font-bold">{item.food_name}</h1>
                    <h2 className="text-[#606060] font-thin">R$ {item.food_price}</h2>
                    <h2 className="text-[#606060] font-thin">{item.calories_per_serving} kcal</h2>
                    </div>))}
            </div>
        </div>
    )
}