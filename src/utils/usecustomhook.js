import { useState,useEffect } from "react";

const usecustomhook=(allrestaurants)=>{
    let [allrestaurants, setAllRestaurants] = useState("");
    let [filteredallrestaurants, setfilteredAllRestaurants] = useState("");
    useEffect(() => {
        getrestaurants();
      }, []);
    
      async function getrestaurants() {
        const data = await fetch(
          "https://www.swiggy.com/mapi/homepage/getCards?lat=17.34766216348099&lng=78.54476273059845"
        );
        const res = await data.json();
        setAllRestaurants(
          res?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setfilteredAllRestaurants(
          res?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    return allrestaurants;
}
export default usecustomhook;