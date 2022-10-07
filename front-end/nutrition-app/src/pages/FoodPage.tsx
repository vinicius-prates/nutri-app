import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { useParams } from "react-router-dom"
import { Food } from "../components/LandingPage"
import { useEffect, useState } from "react"
import axios from "axios"

export const FoodPage = () => {
    
    const [Food, setFood] = useState<Food>()
    const {id} = useParams()
    const url  = `http://localhost:8000/api/foods/${id}/`
    
    useEffect (() => {
        axios.get(url).then(res => setFood(res.data))
        
    },[])
    return(

        <div>
            <NavBar/>
                <div className="bg-[#323232] text-[whitesmoke] flex flex-col gap-2">
                    
                    <img src={Food?.food_image} className="bg-center bg-contain object-cover w-full lg:w-[50%]"></img>
                    <h1 className="text-center text-2xl font-bold"> {Food?.food_name} </h1>
                    <h2 className="text-2xl font-bold text-green-400 mx-4">R$ {Food?.food_price}</h2>
                    <h3 className="mx-4 text-2xl">{Food?.calories_per_serving} kcal</h3>
                    <p className="mx-4">{Food?.food_description}</p>
                    <a className="text-right mx-4 text-lg italic  text-yellow-400 font-bold" href={Food?.recipe_link}>Recipe link</a>
                    <p className="text-right mx-4 text-lg italic opacity-50">created at: {Food?.created_at}</p>
                </div>
            <Footer/>
        </div>
    )
}