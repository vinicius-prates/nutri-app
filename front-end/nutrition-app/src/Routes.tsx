import { Route, Routes } from "react-router-dom"
import App from "./App"
import { AddNewFood } from "./pages/AddNewFood"
import { FoodPage } from "./pages/FoodPage"

export const MyRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/add-new-food" element={<AddNewFood/>}/>
            <Route path="/food/:id" element={<FoodPage/>}/>
        </Routes>
        

    )
}