 import axios from "axios"
import { useEffect } from "react"
export const LandingPage = () => {

    const url  = "http://localhost:8000/api/foods/"

    useEffect(() => {

        axios.get(url).then(res => console.log(res.data))
    }, [])

    return(
        <div className="bg-[#323232] h-screen ">

            <h1 className="text-3xl text-[whitesmoke] font-bold py-4 text-center">FoodS!</h1>
            <div>
                
            </div>
        </div>
    )
}