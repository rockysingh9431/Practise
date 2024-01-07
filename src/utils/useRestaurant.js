import { MENU_API_URL } from "../config";
import { useState, useEffect } from "react";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const api = await fetch(MENU_API_URL + resId);
    const json = await api.json();
    const restaurantDetails = json?.data;
    setRestaurant(restaurantDetails);
  }
  return restaurant;
};
export default useRestaurant;