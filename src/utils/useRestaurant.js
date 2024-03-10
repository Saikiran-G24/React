import { useState, useEffect } from "react";
import { RES_MENU_URL } from "./helper";

const useRestaurant = (resid) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantinfo();
  }, []);
  async function getRestaurantinfo() {
    const data = await fetch(RES_MENU_URL);
    console.log("data is", data);

    const result = await data.json();
    setRestaurant(
      result?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  return restaurant;
};
export default useRestaurant;
