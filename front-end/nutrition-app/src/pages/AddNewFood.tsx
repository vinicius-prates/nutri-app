import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

export const AddNewFood = () => {

    const url = "http://localhost:8000/api/foods/"

    
    return(
        <div>
            <NavBar/>
            <div className="bg-[#323232] ">
                <form>
                    <input placeholder="Name" type="text" className=""></input>
                    <input placeholder="Price" type="number" className=""></input>
                    <input placeholder="Calories" type="number" className=""></input>
                    <textarea placeholder="Description"  className=""></textarea>
                    <input placeholder="recipe link"  type="text" className=""></input>
                </form>
            </div>
            <Footer/>
        </div>
    )
}