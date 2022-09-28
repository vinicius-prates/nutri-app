import SneakerLogo from '../assets/sneakers.png';

export const NavBar = () => {

    return(
        <div className="flex flex-row bg-[#1B2430]">
            <div className="bg-[#1B2430]">
                <img src={SneakerLogo} className="w-16"></img>
            </div>
            <div className="flex flex-row">
                <a className="text-[whitesmoke]">ADD NEW</a>
            </div>
        </div>
    )
}