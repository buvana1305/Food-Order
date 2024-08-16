import { useParams } from "react-router-dom";
import useRestaurantMenuList from "../custom-hook/userestaurantmenulist";

import RestaurantCategory from "./RestauarntCategory";
import { useState } from "react";

const RestaurantOverview = () => {
  let { id } = useParams();
  const menuDetails = useRestaurantMenuList(id);

  const restaurantName = menuDetails.restaurantName;
  const [expandHideCategoryIndex, setExpandHideCategoryIndex] = useState(0);
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
    <div className="w-10/12 m-auto font-semibold text-2xl my-4 text-center">
      <h1>{restaurantName}</h1>
      <hr />
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            category={category}
            expandHideCategoryIndexParameters={
              expandHideCategoryIndex === index ? true : false
            }
            expandFunction={() =>
              setExpandHideCategoryIndex(
                expandHideCategoryIndex === index ? null : index
              )
            }
          />
        );
      })}
    </div>
  ) : (
    <div className="w-8/12 my-6 m-auto">
      <h1 className="my-4 h-20  text-center text-2xl font-semibold">
        Loading......
      </h1>
    </div>
  );
};

export default RestaurantOverview;
