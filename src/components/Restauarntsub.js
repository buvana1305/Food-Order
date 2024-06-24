import { useState } from "react";
import RestaurantMenuListItem from "./RestaurantMenuList";

const RestaurantSub = (props) => {
  const category = props.category;
  const [showTop, setShowTop] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const showTopDetails = () => {
    setShowTop(!showTop);
  };
  let showSubItem = () => {
    setShowSub(!showSub);
  };
  return (
    <div
      className="shadow-lg shadow-gray-300 mb-5 cursor-pointer"
      onClick={showTopDetails}
      key={category.card.card.title}
    >
      <div className="flex justify-between bg-gray-300 py-2 px-5">
        <p className="font-semibold text-lg">
          {category.card.card.title}
          {category.card.card?.itemCards?.length
            ? "(" + category.card.card?.itemCards?.length + ")"
            : " "}
          ;
        </p>
        <p>⏬</p>
      </div>
      {showTop ? (
        <div>
          {category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
            <div>
              {category.card.card.categories.map((subcategory) => {
                return (
                  <div className="mx-7 my-4">
                    <div
                      className="px-2 py-2  flex justify-between bg-gray-200 cursor-pointer"
                      onClick={showSubItem}
                    >
                      <p
                        className="font-semibold text-lg bg-gray-200 px-2 py-2"
                        key={subcategory.title}
                      >
                        {subcategory.title}
                      </p>
                      <p>🔽</p>
                    </div>
                    {showSub ? (
                      <div>
                        {subcategory.itemCards.map((categoryItem) => {
                          return (
                            <RestaurantMenuListItem
                              key={categoryItem.card.info.id}
                              cardItems={categoryItem}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            category.card.card.itemCards.map((item) => {
              return (
                <RestaurantMenuListItem
                  key={item.card.info.id}
                  cardItems={item}
                />
              );
            })
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default RestaurantSub;
