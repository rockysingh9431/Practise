import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  if (!restaurant) return null;

  // restuarantMenu extraction from api this we will be using to display the food menu
  const restuarantMenu =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      .card?.itemCards;

  // Destructuring the details from restaurant card to display in page
  let {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    areaName,
    costForTwoMessage,
  } = restaurant?.cards[0]?.card?.card?.info;
  
  return (
    <div className="restaurant-menu">
      <div className="restaurantDetails">
        <h1>{"Restaurant Id: " + resId}</h1>
        <h4>{name}</h4>
        <img src={CDN_IMG_URL + cloudinaryImageId} alt="icon" />
        <h4>{avgRating}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{areaName}</h4>
        <h4>{costForTwoMessage}</h4>
      </div>
      <div className="menu">
        <ul>
          {restuarantMenu.map((menu) => {
            return <li key={menu.card.info.id}>{menu.card.info.name}hi</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
