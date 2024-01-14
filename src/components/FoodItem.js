import { CDN_IMG_URL } from "../config";
const FoodItem = ({name,price,imageId}) => {
  return (
    <div className="m-4 p-3 w-52 shadow-lg bg-pink-100 h-60">
      <img className=" h-36 " src={CDN_IMG_URL + imageId} />
      <h1>{name}</h1>
      <h1>{price / 100}</h1>
    </div>
  );
};
export default FoodItem;