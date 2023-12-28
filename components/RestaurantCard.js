import { CONTENT_IMG_URL } from "../config";
const Restaurantcard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <>
      <div className="card">
        <img src={CONTENT_IMG_URL + cloudinaryImageId} alt="icon" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>

        <h4>{avgRating}</h4>
      </div>
    </>
  );
};

export default Restaurantcard;
