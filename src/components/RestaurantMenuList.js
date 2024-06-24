import BaseUrls from "../../ultis/BaseUrls";

const RestaurantMenuListItem = (props) => {
  const { id, imageId, ratings, defaultPrice, name, price, description } =
    props?.cardItems?.card?.info;
  return (
    <div className="mx-10 py-5 border-b-2 flex justify-between">
      <div className="mx-10 py-5 border-b-2">
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
      <div className="max-w-28 h-28 bg-green-200 overflow-hidden rounded-lg">
        <img src={`${BaseUrls.MENU_DETAILS_IMAGE_URL}${imageId}`} />
      </div>
    </div>
  );
};
export default RestaurantMenuListItem;
