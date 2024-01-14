import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div>
      <h1 className="font-bold text-3xl">This is Cart Component</h1>
      <div className="flex flex-wrap m-2">
        {cartItems.map((items) => (
          <FoodItem key={items.id} {...items} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
