import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../ultis/userContext";
import BaseUrls from "../../ultis/BaseUrls";

const RestaurantComponents = (props) => {
  const userDetails = useContext(UserContext);
  const {
    id,
    name,
    sla,
    avgRating,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
  } = props.resData.info;
  return (
    <div className="rest-container w-[200]  mr-8 mb-8 rounded-2xl">
      <div className="img-cont w-full h-[170] m-auto overflow-hidden rounded-2xl">
        <img
          className="img"
          src={`${BaseUrls.RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
          alt="restaurantimg"
        />
      </div>

      <Link to={`/details/${id}`}>
        <h3 className="font-semibold mt-4">{name}</h3>
      </Link>
      <p className="font-semibold">
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
        {avgRating}
        <span className="ml-4">{sla.slaString}</span>
      </p>

      <p className="break-words">{cuisines.join(",")}</p>
      <p className="">{`${locality} ${areaName}`}</p>
      <p>Created By:{userDetails.loggedName}</p>
    </div>
  );
};
export default RestaurantComponents;

export const RecommendedRestaurant = (RestaurantComponents) => {
  return (props) => {
    return (
      <div>
        <label className="bg-red-400 text-white px-2 absolute">
          Recommended
        </label>
        <RestaurantComponents {...props} />
      </div>
    );
  };
};
