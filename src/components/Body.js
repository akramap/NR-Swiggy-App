import  RestaurantCard, {  withLableComponent } from "./RestaurantCard";
import { resData } from "../utils/mockData";
import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const WithLableComponent = withLableComponent(RestaurantCard);
  // const fetchSwiggyContent = async () => {
  //   try {
  //     const response = await fetch(
  //       `/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
  //     );
  //     // Log the response text
  //     let responseJson = await response.json();

  //     // Try to parse JSON if content type is correct
  //     const contentType = response.headers.get("content-type");
  //     if (contentType && contentType.indexOf("application/json") !== -1) {
  //       let result = JSON.parse(responseJson); // Manually parse JSON
  //       console.log("swiggyContent", result.data);

  //       // setRestaurants(result.data); // Adjust according to the response structure
  //     } else {
  //       throw new Error("Expected JSON response");
  //     }
  //   } catch (error) {
  //     console.error("error", error);
  //   }
  // };

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus){
    return <h1>looks like u r offline</h1>
  }
  
  setTimeout(() => setRestaurantList(resData?.data?.restaurants), 1000);
  // fetchSwiggyContent();
  return (
    <div className="body">
      <div className="flex items-center m-2 p-2 bg-gray-100">
        <button className="py-2"
          onClick={() => {
            setRestaurantList(
              restaurantList?.filter((res) => res?.info?.avgRating > 4.5)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        { (
          restaurantList?.map((restaurant) => {
            return (
              <Link key={restaurant?.info?.id} to={`restaurant/${restaurant.info.id}`}>
                {restaurant?.info?.promoted?<WithLableComponent resData={restaurant?.info} /> : <RestaurantCard resData={restaurant?.info}/>}
                
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
