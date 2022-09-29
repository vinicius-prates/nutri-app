export const Card = (props:any) => {

    return(
        <div className="w-[20rem] bg-[whitesmoke] flex flex-row gap-12 mx-8">
            <div>
                <img src={props.food_image} alt="food image"/>
            </div>
            <div className="">
                <h1 className="text-lg">{props.food_name}</h1>
                <h2 className="text-sm">R${props.food_price}</h2>
                <h2>{props.calories_per_serving} kcal</h2>
                <h3 className="text-right">{props.created_at}</h3>
            </div>
        </div>
    )
}