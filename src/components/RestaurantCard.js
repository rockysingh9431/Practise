import { CDN_IMG_URL } from "../config";
import {useContext} from "react";
import UserContext from "../utils/UserContext";
const Restaurantcard = (restaurant) => {
  const {user}=useContext(UserContext);
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    totalRatingsString,
  } = restaurant;
  return (
    <>
      <div className="h-auto w-56 bg-orange-50 shadow-lg mx-2 mb-4">
        <div id="image-container" className="h-44">
          <img
            className="h-44 w-56 p-2 hover:h-40 hover:w-52 rounded-xl"
            src={CDN_IMG_URL + cloudinaryImageId}
            alt="icon"
          />
        </div>
        <div id="restaurantDetails" className="p-2">
          <h4 className="font-semibold text-lg">
            {name.length > 17 ? name.slice(0, 17) + "..." : name}
          </h4>
          <div className="rating flex justify-between text-gray-800">
            <span>{avgRating} stars</span>
            <span className="mr-2">{totalRatingsString}</span>
          </div>
          <h4 className="text-gray-800">
            {cuisines.join(", ").length > 20
              ? cuisines.join(", ").slice(0, 20) + "..."
              : cuisines.join(", ")}
          </h4>
          <h4 className="text-gray-800">
            Time to Reach{" - "}
            {sla?.deliveryTime} minutes
          </h4>
          <h4 className="text-gray-800 font-medium">{user.name}</h4>
          <h4 className="text-gray-800 font-medium">
            {user.email}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Restaurantcard;
