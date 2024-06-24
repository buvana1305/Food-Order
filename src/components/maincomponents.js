import BannerComponents from "./banner";
import RestaurantListComponents from "./restaurantlist";

const MainComponents = () => {
  return (
    <div className="main mx-10">
      <BannerComponents />
      <p className="font-bold text-2xl my-5">
        Restaurants with online food delivery in Chennai
      </p>
      <RestaurantListComponents />
    </div>
  );
};
export default MainComponents;
