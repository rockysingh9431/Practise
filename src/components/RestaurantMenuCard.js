import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_IMG_URL } from "../config";

const RestuarantMenuCard = ({ menu }) => {
  const menuDetails = menu?.card?.card?.itemCards;
  const title = menu?.card?.card?.title;
  const dispatch = useDispatch();
  const addToCart = (menuItem) => {
    dispatch(addItem(menuItem));
  };
  if (!menuDetails) return null;
  return (
    <div className="shadow-xl p-4 mb-6">
      <h1 className=" font-bold text-xl mb-10 ">{title}</h1>
      {menuDetails.map((Items) => {
        return (
          <div
            key={Items.card.info.id}
            className="divide-y-10 divide-gray-700 font-medium text-sm h-auto mb-5 flex justify-between"
          >
            <div className="mr-10">
              <li className="mb-2" data-testid="menu-items">
                {Items.card.info.name}
              </li>
              <li className="mb-2 text-neutral-500">
                ₹ {Items.card.info.price / 100}
              </li>
              <li className="text-neutral-500">
                {Items.card.info.description}
              </li>
            </div>
            <div className="relative">
              <img
                src={CDN_IMG_URL + Items.card.info.imageId}
                className="min-h-24 min-w-28 max-h-20 max-w-24 rounded-lg"
              />
              <button
                data-testid="add-btn"
                className="absolute -bottom-2 right-4 opacity-9 w-20 bg-green-100 rounded-md text-green-700-600 p-1"
                onClick={() => addToCart(Items.card.info)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RestuarantMenuCard;

//
