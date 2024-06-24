import { useParams } from "react-router-dom";
import useRestaurantMenuList from "../custom-hook/userestaurantmenulist";

import RestaurantSub from "./Restauarntsub";
// import RestaurantMenuListItem from "./RestaurantMenuList";

const RestaurantOverview = () => {
  let { id } = useParams();
  const menuDetails = useRestaurantMenuList(id);
  // const restaurantMenuList = menuDetails.menuList;
  const restaurantName = menuDetails.restaurantName;
  const cardList = menuDetails.cardDetails;
  const categories = cardList.filter((category) => {
    return (
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  return cardList.length ? (
    <div className="main-cont w-10/12 m-auto">
      <h1>{restaurantName}</h1>
      {categories.map((category) => {
        return (
          <RestaurantSub key={category.card.card.title} category={category} />
        );
      })}
    </div>
  ) : (
    <h1>Loading......</h1>
  );
};

export default RestaurantOverview;
