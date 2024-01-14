import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const dispatch = useDispatch();
  if (!restaurant) return null;

  const addToCart = (menu) => {
    dispatch(addItem(menu));
  };
  // restuarantMenu extraction from api this we will be using to display the food menu
  const restuarantMenu =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  // Destructuring the details from restaurant card to display in page
  let {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    areaName,
    costForTwoMessage,
    deliveryTime,
  } = restaurant?.cards[0]?.card?.card?.info;

  return (
    <div className="flex justify-center m-8">
      <div className="text-lg">
        <h1 className="font-bold text-2xl">{"Restaurant Id: " + resId}</h1>
        <h4>{name}</h4>
        <img
          data-testid="res-img"
          className="h-72 w-72"
          src={CDN_IMG_URL + cloudinaryImageId}
          alt="icon"
        />
        <h4>{avgRating} stars</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>{costForTwoMessage}</h4>
        <h4>{deliveryTime}</h4>
      </div>

      <div className="ml-8">
        <ul >
          {restuarantMenu.map((menu) => {
            return (
              <div
                key={menu.card.info.id}
                className="h-auto max-w-lg flex justify-between"
              >
                <li data-testid="menu-items">{menu.card.info.name}</li>
                <button data-testid="add-btn"
                  className="bg-emerald-700 rounded-md text-white p-1 m-3"
                  onClick={() => addToCart(menu.card.info)}
                >
                  add<strong>+</strong>
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
