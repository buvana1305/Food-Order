import { useEffect, useState } from "react";
import BaseUrls from "../../ultis/BaseUrls";
const UseRestaurantList = () => {
  useEffect(() => {
    console.log("use effect called");
    fetchComponents();
  }, []);
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const fetchComponents = async () => {
    const data1 = await fetch(BaseUrls.RestaurantUrls);
    const restaurantJSON = await data1.json();

    const restaurantData =
      restaurantJSON.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurantDetails(restaurantData);
  };
  return restaurantDetails;
};
export default UseRestaurantList;
