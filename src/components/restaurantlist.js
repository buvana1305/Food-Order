import RestaurantComponents from "./restaurantcomp";
import * as restaurantData from "../../assets/data/restaurant.json";

const restaurantListData =
  restaurantData.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

const RestaurantListComponents = () => {
  return (
    <div className="rest-img-container">
      {restaurantListData.map((restData) => {
        return <RestaurantComponents resData={restData} />;
      })}
    </div>
  );
};
export default RestaurantListComponents;
