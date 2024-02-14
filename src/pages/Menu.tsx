import { Food } from "../models/MenuClass";
export const Menu = () => {
    const dish: Food[] = [ 
            new Food(
                "När lammen tystnar",
                "",
                "Lammlever som serveras med favabönor",
                "Chiantivin",
                "Passande efterrätt",
                1991),
            new Food (
                "Gudfadern",
                "Vitlöksbröd",
                "Pasta i tomatsås med köttbullar",
                "Bardolino",
                "Cannoli",
                1972),
            new Food(
                "Jurassic Park",
                "Sallad",
                "Grillad kyckling med grönsaker",
                "Regnvatten",
                "Green jello",
                1993
            ),
            new Food(
                "Stekta gröna tomater",
                "Stekta, gröna tomater",
                "Stek direkt från grillen, serveras med coleslaw",
                "Budweiser",
                "Honungsmarinerade tomater",
                1991),
    ];
    
    const foodsHtml = dish.map((food) => {
        return (
            <><div>
            <h3>{food.name}</h3>
            <div className="menu">

            <p>Förrätt: {food.dishOne}</p>
            <p>Huvudrätt: {food.dishTwo}</p>
            <p>Rekommenderad dryck: {food.drink}</p>
            <p>Efterrätt: {food.dishThree}</p>
            <p>Pris: {food.price} SEK</p>
            </div>
            </div>
            </>
        );
    });
    return <>{foodsHtml}</>
};