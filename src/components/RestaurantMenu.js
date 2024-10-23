import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RecommendList from "./RecommendList";

const Restaurant = () => {
  const { resId } = useParams();

  const restaurantList = useRestaurantMenu(resId);
  // Conditional rendering after ensuring data is available
  if (!restaurantList) {
    return <Shimmer />;
  }

  // Ensure the data structure exists before accessing it
  const restaurantData = restaurantList?.data?.cards?.[2]?.card?.card?.info;

  if (!restaurantData) {
    return <div>No restaurant data available</div>;
  }

  // Destructuring after ensuring restaurantData is available
  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    areaName,
    cuisines,
  } = restaurantData;

  const itemCards  =
    restaurantList?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.[3]?.card?.card?.itemCards;

  const recommendCards = restaurantList?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
  ?.cards?.find(item=> item.card.card.title==='Recommended') 
      console.log("recommendCards**",recommendCards.card.card)
      
  return (
    <div >
      <h1 className="font-bold">{name}</h1>
      <p>{`${avgRating} (${totalRatingsString} ratings) . ${costForTwoMessage}`}</p>
      <p>{cuisines.join()}</p>
      <p>{`Outlet  ${areaName}`}</p>
      <p>{sla?.slaString}</p>
      <h2>Menu</h2>

      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
        ))}
      </ul>

      {recommendCards?.card?.card && (
        <div className="text-center">
              <h1>{recommendCards?.card?.card?.title}</h1>
              <RecommendList cards={recommendCards?.card?.card?.itemCards}/>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
