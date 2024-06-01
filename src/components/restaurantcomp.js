const RESTAURANT_LIST_IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantComponents = (props) => {
  const {
    name,
    sla,
    avgRating,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
  } = props.resData.info;
  return (
    <div>
      <div className="rest-container">
        <div className="img-cont">
          <img
            className="img"
            src={`${RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
            width="150"
            height="150"
            alt="restaurantimg"
          />
        </div>
        <h3>{name}</h3>
        <p>{avgRating}</p>
        <p>{sla.slaString}</p>
        <p>{cuisines.join(",")}</p>
        <p>{`${locality} ${areaName}`}</p>
      </div>
    </div>
  );
};
export default RestaurantComponents;
