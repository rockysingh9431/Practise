import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const api = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.627981&lng=77.3648567&restaurantId=40406"
    );
    const json = await api.json();
    const restaurantDetails = json?.data;
    setRestaurant(restaurantDetails);
  }

  if (!restaurant) return null;

  // restuarantMenu extraction from api this we will be using to display the menu
  const restuarantMenu =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      .card?.itemCards;

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
