import { RES_CARD_LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, costForTwo, avgRating } = props?.resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg" alt="res-log" src={RES_CARD_LOGO_URL} />
      <h3 className="font-bold py-2">{name}</h3>
      <h4 className="break-words py-1">{cuisines.join(",")}</h4>
      <h4 className="py-1">{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export const withLableComponent = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className=" absolute bg-black text-white rounded-lg m-2 p-2">Promoted</label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
