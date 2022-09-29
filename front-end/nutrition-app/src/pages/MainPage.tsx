import '../App.css'
import { Footer } from '../components/Footer'
import { LandingPage } from '../components/LandingPage'
import { NavBar } from '../components/NavBar'

export const MainPage  = () => {
    return(
        <div>
            <NavBar/>
            <LandingPage/>
            <Footer/>
        </div>
    )
}