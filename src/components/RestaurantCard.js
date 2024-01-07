import { CDN_IMG_URL } from "../config";
const Restaurantcard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <>
      <div className="card">
        <img src={CDN_IMG_URL + cloudinaryImageId} alt="icon" />
        <h4>{name.length > 17 ? name.slice(0, 17) + "..." : name}</h4>
        <h4>{avgRating}</h4>
        <h4>
          {cuisines.join(", ").length>20
            ? cuisines.join(", ").slice(0,20) + "..."
            : cuisines.join(", ")}
        </h4>
      </div>
    </>
  );
};

export default Restaurantcard;
