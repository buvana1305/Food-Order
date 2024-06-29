import RestaurantMenuListItem from "./RestaurantMenuList";
const RestaurantSubCategory = (props) => {
  const subcategory = props.subcategory;
  const expandHideSubCategoryIndexParameter =
    props.expandHideSubCategoryIndexParameters;
  const expandFunction1 = props.expandFunction1;
  const showSubItem = () => {
    expandFunction1();
  };

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
      {expandHideSubCategoryIndexParameter ? (
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
};
export default RestaurantSubCategory;
