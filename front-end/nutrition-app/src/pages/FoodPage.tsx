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
    console.log(Food)
    return(

        <div>
            <NavBar/>
                {id}
            <Footer/>
        </div>
    )
}