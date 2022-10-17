import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"
import { Navigate, useParams } from "react-router-dom"
import { Food } from "../components/LandingPage"
import { useEffect, useState } from "react"
import axios from "axios"
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useNavigate } from "react-router-dom";


export const FoodPage = () => {
    const navigate =  useNavigate();
    
    const [Food, setFood] = useState<Food>()
    const {id} = useParams()
    const url  = `http://localhost:8000/api/foods/${id}/`
    
    useEffect (() => {
        axios.get(url).then(res => setFood(res.data))
        
        
    },[])


    const confirmDelete = () => {
        Confirm.show(
            'Confirm Delete', 
            'Do you want to delete this food?',
            'Yes',
            'No',
            () => {
                axios.delete(url)
                Report.success('Food deleted!', '', 'OK!');
                navigate('/')
                window.location.reload()


            },
            () => {
                Report.info('Food Delete canceled', '', 'OK!');
                
            })

    }

    return(

        <div>
            <NavBar/>
                <div className="bg-[#323232] text-[whitesmoke] flex flex-col gap-8 py-10 lg:flex-row  item-center">
                    <div className="flex flex-col lg:flex-col self-center  lg:w-[50%] mx-2 lg:mx-[auto] ">

                        <img src={Food?.food_image} className="bg-center bg-contain object-cover w-full lg:w-[700px] lg:h-[600px] rounded-3xl mx-auto"/>
                    <div className="text-left m-10 flex flex-col lg:gap-4 ">
                    <h1 className=" text-2xl font-bold"> {Food?.food_name} </h1>
                    <div className="flex flex-col  text-left lg:gap-6">
                        <h2 className="text-2xl lg:text-4xl mb-2 font-bold text-green-400 lg:mx-0">R$ {Food?.food_price}</h2>
                        <h3 className="mx-4 text-2xl lg:text-3xl lg:align-end lg:mx-0">{Food?.calories_per_serving} kcal</h3>
                    </div>
                    <div className="flex flex-col ">
                        <p className="mx-4 lg:text-xl lg:mb-10">{Food?.food_description}</p>
                        <a className="text-right mx-4 text-lg italic   text-yellow-400 font-bold lg:mx-0" href={Food?.recipe_link}>Recipe link</a>
                        <p className="text-right mx-4 text-lg italic opacity-50 lg:mx-0">created at: {Food?.created_at}</p>
                        <button className="text-center mx-4 text-xl opacity-50 hover:opacity-100 mt-4 cursor-pointer text-red-500 duration-150 " onClick={confirmDelete}>Delete food</button>
                    </div>
                    </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}