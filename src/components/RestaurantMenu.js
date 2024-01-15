import { useParams } from "react-router-dom";
import { CDN_IMG_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";
import RestuarantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  if (!restaurant) return null;

  // restuarantMenu extraction from api this we will be using to display the food menu
  const restuarantMenu =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  // Destructuring the details from restaurant card to display in page
  let {
    id,
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    areaName,
    feeDetails,
    totalRatingsString,
  } = restaurant?.cards[0]?.card?.card?.info;

  return (
    <div className="m-8 mx-28 px-20">
      <div className="relative flex justify-between text-lg mb-24 shadow-2xl p-4 px-14">
        <div className="">
          <h1 className="font-bold text-2xl mb-6">{name}</h1>
          <div className="font-semibold mb-4 bg-slate-100 w-32">
            <h4 className=" text-green-900 border p-2 border-black w-auto">
              {avgRating} stars
            </h4>
            <h4 className="text-rose-900 border p-2 border-black">
              {totalRatingsString}
            </h4>
          </div>
          <div className="font-medium text-sm p-2">
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>

            <h4>{feeDetails?.message}</h4>
          </div>
        </div>
        <div>
          <img
            data-testid="res-img"
            className="h-52 w-56"
            src={CDN_IMG_URL + cloudinaryImageId}
            alt="icon"
          />
        </div>
      </div>
      <div className="">
        <ul>
          {restuarantMenu.map((menu)=> {
            return <RestuarantMenuCard key={id} menu={menu} />;
          })}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
