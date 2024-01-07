import Restaurantcard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_CDN_URL } from "../config";

//Filtered data function to search restaurants list
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component
const Body = () => {
  //Hooks is called here for defining state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  //Fetching the Api and passing it to useEffect so that it will fetch api for us once
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
        console.log(restaurantList)
    setAllRestaurants(restaurantList);  //setting the value of all the restaurant
    setfilteredRestaurants(restaurantList);//setting the value of filtered restaurants
  }

  //Onchange function that will update the value of searchtext in real time
  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  // Search function that will get filtered Data from filterdata function and update the value of the
  //filtered restaurant using setFilteredRestaurants function provided by useState...
  const onSearch = () => {
    const filteredData = filterData(searchText, allRestaurants);
    setfilteredRestaurants(filteredData);
  };
  
  //if restaurants are empty
  if(!allRestaurants) return <div className="noRestaurants">No Restaurants to Display</div>

  // Main function of our body we write jsx here that will displayed on page
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchBox-container">
        <div className="searchBox">
          <input
            type="text"
            className="search-input"
            placeholder="search"
            value={searchText}
            onChange={onChange}
          />
          <button
          type="submit"
            className="search-button"
            style={{ marginLeft: "5px" }}
            onSubmit={onSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurantList">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant found with this name Nearby</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Restaurantcard key={restaurant.info.id} {...restaurant.info} />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
