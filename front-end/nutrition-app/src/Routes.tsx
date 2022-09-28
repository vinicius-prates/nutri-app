import { Route, Routes } from "react-router-dom"
import App from "./App"

export const myRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
        

    )
}