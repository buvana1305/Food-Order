import { useContext, useState } from "react";
import RestaurantMenuListItem from "./RestaurantMenuList";
import RestaurantSubCategory from "./RestaurantSubCategory";

const RestaurantSub = (props) => {
  const category = props.category;

  const expandHideCategoryIndexParameter =
    props.expandHideCategoryIndexParameters;
  const expandFunction = props.expandFunction;
  const [expandHideSubCategoryIndex, setExpandHideSubCategoryIndex] =
    useState(0);

  const showTopDetails = () => {
    expandFunction();
  };

  return (
    <div
      className="shadow-lg shadow-gray-300 mb-5 cursor-pointer"
      key={category.card.card.title}
    >
      <div className="flex justify-between bg-gray-300 py-2 px-5">
        <p className="font-semibold text-lg block" onClick={showTopDetails}>
          {category.card.card.title}
          {category.card.card?.itemCards?.length
            ? "(" + category.card.card?.itemCards?.length + ")"
            : " "}
          ;
        </p>
        <p>⏬</p>
      </div>
      {expandHideCategoryIndexParameter ? (
        <div>
          {category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
            <div>
              {category.card.card.categories.map((subcategory, index) => {
                return (
                  <RestaurantSubCategory
                    expandHideSubCategoryIndexParameters={
                      expandHideSubCategoryIndex === index ? true : false
                    }
                    expandFunction1={() =>
                      setExpandHideSubCategoryIndex(
                        expandHideSubCategoryIndex === index ? null : index
                      )
                    }
                    key={subcategory.title}
                    subcategory={subcategory}
                  />
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
