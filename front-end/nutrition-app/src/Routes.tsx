import { Route, Routes } from "react-router-dom"
import App from "./App"

export const MyRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
        

    )
}