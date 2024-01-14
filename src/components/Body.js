import Restaurantcard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useGetRestaurant from "../utils/useGetRestaurant";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import SearchBox from "./searchBox";
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, allRestaurant, onSearch] =
    useGetRestaurant(searchText);
  const isOnline = useOnline();
  if (!isOnline)
    return (
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        It seems like you are offline....
      </h1>
    );

  if (!allRestaurant) return <h1>No restaurants to Display</h1>;
  return allRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <SearchBox
        onSearch={onSearch}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <div data-testid="res-list" className="flex flex-wrap justify-center">
        {filteredRestaurants?.length === 0 ? (
          <h1>No Restaurant found with this name Nearby</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              // We are running map on Link not on Restaurantcard component so we move key to Link//
              <Link
                to={"restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <Restaurantcard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
