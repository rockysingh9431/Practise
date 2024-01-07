import { API_CDN_URL } from "../config";
import { useState, useEffect } from "react";
import { filterData } from "./helper";

// Search function that will get filtered Data from filterdata function and update the value of the
//filtered restaurant using setFilteredRestaurants function provided by useState...

const useGetRestaurant = (searchText) => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  //getRestaurant function that is helping to fetch the API and set the initial values
  // of filtered and all restaurants
  async function getRestaurants() {
    const api = await fetch(API_CDN_URL);
    const json = await api.json();
    const restaurantList =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setAllRestaurants(restaurantList); //setting the value of all the restaurant
    setFilteredRestaurants(restaurantList);
  }
const onSearch = () => {
    console.log("search")
    const filteredData = filterData(searchText, allRestaurants);
    setFilteredRestaurants(filteredData);
  };
  return [filteredRestaurants, allRestaurants,onSearch];
};
export default useGetRestaurant;
