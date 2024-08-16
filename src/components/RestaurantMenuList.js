import BaseUrls from "../../ultis/BaseUrls";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/CartSlice";
const RestaurantMenuListItem = (props) => {
  const { id, imageId, ratings, defaultPrice, name, price, description } =
    props?.cardItems?.card?.info;
  const dispatch = useDispatch();
  const addItemsToCart = () => {
    console.log("called");
    dispatch(addItem(props.cardItems));
  };
  const removeCartItem = () => {
    dispatch(removeItem(props.cardItems));
  };
  const type = props.type;
  return (
    <div className="mx-10 py-5 border-b-2 flex justify-between">
      <div className="w-8/12">
        <p className="font-semibold text-lg">{name}</p>
        <p className="font-semibold text-lg">
          ₹ {(price ? price : defaultPrice) / 100}
        </p>
        <p className="text-gray-400 text-base">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline"
            fill="green"
            width="20.088"
            height="20.087"
          >
            <path d="M10.044 20.087A10.044 10.044 0 1 0 0 10.043a10.044 10.044 0 0 0 10.044 10.044zM8.534 8.193l1.4-4.313 1.4 4.313h4.533L12.2 10.858l1.4 4.312-3.666-2.665-3.666 2.665 1.4-4.312L4 8.193z" />
          </svg>{" "}
          {ratings.aggregatedRating.rating
            ? ratings.aggregatedRating.rating
            : "No Rating"}
        </p>

        <p className="text-gray-400 text-base">{description}</p>
      </div>
      <div className="w-2/12 max-w-28 h-28 bg-green-200 overflow-hidden rounded-lg relative">
        <button
          className="px-2 py-1 bg-black left-1/4 bottom-0  text-white rounded-lg absolute"
          onClick={addItemsToCart}
        >
          Add+
        </button>
        <img src={`${BaseUrls.MENU_DETAILS_IMAGE_URL}${imageId}`} />
      </div>
      {type === "cart" ? (
        <div className="w-2/12 flex justify-center items-center">
          <button
            className="bg-black rounded-lg text-white px-3 py-1"
            onClick={removeCartItem}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};
export default RestaurantMenuListItem;
