import { Link } from 'react-router-dom';
import FoodLogo from '../assets/finger-food.png';

export const NavBar = () => {

    return(
        <div className="flex flex-row bg-[#252525] place-content-between px-6 py-6 ">
            <div className="bg-[#252525]">
                <Link to="/"><img src={FoodLogo} className="w-16"/></Link>
            </div>
            <div className="flex flex-row ">
                <a className="text-[whitesmoke] self-center font-extrabold">ADD NEW</a>
            </div>
        </div>
    )
}