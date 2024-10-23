import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async ()=>{
    const data = await fetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}`
        )}`
      );
      const json = await data.json();
      const parsedData = JSON.parse(json.contents);
      setResInfo(parsedData);
  }

  return resInfo;
};


export default useRestaurantMenu;