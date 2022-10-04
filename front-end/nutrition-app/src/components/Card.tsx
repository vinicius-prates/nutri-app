
interface CardProps {
    food_image: string
    food_name: string
    food_price: number
    calories_per_serving: number
    created_at: string
}

export const Card = (props: CardProps) => {


    return(
        <div className="w-[20rem] lg:w-[40rem]  bg-[whitesmoke] flex flex-col lg:flex-row gap-4 my-8 mx-8  rounded-xl">
            <div>
                <img src={props.food_image} className=" bg-center bg-contain object-cover rounded-t-lg lg:rounded-lg w-[20rem] h-[16rem] " alt="food image"/>
            </div>
            <div className="p-4 flex-col :p-2 lg:gap-8 ">
                <h1 className="text-2xl font-bold  italic">{props.food_name}</h1>
                <h2 className="text-lg font-bold text-green-600">R${props.food_price}</h2>
                <h2 className="text-lg">{props.calories_per_serving} kcal</h2>
                <h3 className=" text-sm italic opacity-50">added: {props.created_at}</h3>
            </div>
        </div>
    )
}