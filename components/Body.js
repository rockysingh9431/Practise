import Restaurantcard from "./RestaurantCard";
import { restaurantList } from "../config";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().include(searchText.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [searchText, setSearchText] = useState("Hey Baby Write Something!!!!");
  const [restaurants,setRestaurants]=useState(restaurantList);
  const onChange = (e) => {
    setSearchText(e.target.value);
  };
  const onSearch = () => {
    const filteredData = filterData(searchText, restaurantList);
    setRestaurants(filteredData);
    console.log(filterData);
  };
  return (
    <>
      <div className="searchBox">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={onChange}
        />
        <button
          className="search-button"
          style={{ marginLeft: "5px" }}
          onClick={onSearch}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {restaurants.map((restaurant) => {
          return <Restaurantcard key={restaurant.info.id} {...restaurant.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
