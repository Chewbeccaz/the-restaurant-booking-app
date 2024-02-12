import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
 ;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "https://school-restaurant-api.azurewebsites.net/restaurant/create",
        {
          name: "Hollywood Harvest",
          address: {
            street: "Drottninggatan 1",
            zip: "123 45",
            city: "Stockholm",
          },
        }
      );
      console.log(response.data);
    };
    fetchData();
  }, []);

  return <h1>Home</h1>;
};

export const resturantId = "65c937170082009f7aa42577";

//   const fetchData = async () => {
// const response = await axios.get(
//     `https://school-restaurant-api.azurewebsites.net/restaurant/${resturantId}`
//   );
//   console.log(response.data);
// };
