import { Food } from "../models/MenuClass";
export const Menu = () => {
    const dish: Food[] = [ 
            new Food(
                "När lammen tystnar",
                "Lammsnittar",
                "Lammlever som serveras med favabönor",
                "Chianti",
                "Passande efterrätt",
                1991),
            new Food (
                "Gudfadern",
                "Carpaccio",
                "Pasta i tomatsås med köttbullar",
                "Bardolino",
                "Cannoli",
                1972),
            new Food(
                "Jurassic Park",
                "Chilensk havsabborre",
                "Grillad kyckling med grönsaker",
                "Perrier-Jouët Belle Époque",
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
            <><section className="menu-section">
            <h3 className="foodName">{food.name}</h3>

            <div className="menu">

            <p>Förrätt: {food.dishOne}</p>
            <p>Huvudrätt: {food.dishTwo}</p>
            <p>Rekommenderad dryck: {food.drink}</p>
            <p>Efterrätt: {food.dishThree}</p>

            </div>
            <p className="price">Pris: {food.price} SEK</p>
            </section>
            </>
        );
    });
    return <>
    <h2>Välj något av våra filminspirerade paket:</h2>
    {foodsHtml}</>
};