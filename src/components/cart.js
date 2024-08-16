import { useSelector } from "react-redux";
import RestaurantMenuListItem from "./RestaurantMenuList";

const CartList = () => {
  const cartSelector = useSelector((state) => {
    return state.cart.items;
  });
  return (
    <div className="w-8/12 my-6 m-auto">
      <h1 className="my-4 h-20  text-center text-2xl font-semibold">
        Cart-({cartSelector.length})
      </h1>

      <hr />
      {cartSelector.map((item) => {
        return (
          <RestaurantMenuListItem
            type="cart"
            key={item.card.info.id}
            cardItems={item}
          />
        );
      })}
    </div>
  );
};
export default CartList;
