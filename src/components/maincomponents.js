import BannerComponents from "./banner";
import RestaurantListComponents from "./restaurantlist";

const MainComponents = () => {
  return (
    <div className="main">
      <h3>What's On Your Mind?</h3>

      <BannerComponents />
      <RestaurantListComponents />
    </div>
  );
};
export default MainComponents;
