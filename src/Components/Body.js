//Props-Properties
import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useOnline from "../utils/useOnline.js";
import Usercontext from "../utils/UserContext.js";

const Body = () => {
  let [allrestaurants, setAllRestaurants] = useState("");
  let [filteredallrestaurants, setfilteredAllRestaurants] = useState("");
  let [searchText, setsearchText] = useState("");
  const { user, setUser } = useContext(Usercontext);
  useEffect(() => {
    getrestaurants();
  }, []);

  async function getrestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=17.34766216348099&lng=78.54476273059845"
      // "// https://www.swiggy.com/mapi/homepage/getCards?lat=17.37240&lng=78.43780"
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
    console.log(
      "allrestaurants",
      res?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  //To create local state variable in React

  // console.log('component render')

  const isOnline = useOnline(true);
  if (!isOnline) {
    return <h1>🔴Offline,Please check your internate connection</h1>;
  }

  //  To avoid rendering a component(Early returns)
  //  if(!allrestaurants) return <h1>No Reataurents Found!!!</h1>;
  //  if(filteredallrestaurants?.length===0)
  // return <h1>No Restaurent match your filter</h1>;

  return allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-2  my-2 bg-gray-200 text-xl ">
        <input
          className="p-2 m-2  rounded-md"
          type="text"
          placeholder="search"
          value={searchText}
          //e.target.value-Whatever you write in  search
          onChange={
            (e) => setsearchText(e.target.value) //setfunction Updates in the local state variable i.e searchText
          }
        />
        <button
          className="p-2 border-solid bg-gray-400 rounded-xl text-center hover:bg-green-900 cursor-pointer  "
          onClick={() => {
            //Need to filter the data
            const data = filterData(searchText, allrestaurants);
            //Update the state-restaurants
            setfilteredAllRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          className="m-2 rounded-sm"
          value={user.name}
          onChange={(e) => {
            setUser({
              ...user,
              name:e.target.value,
            });
          }}
        ></input>
        
      </div>

      <div className="flex flex-wrap bg-gray-200">
        {filteredallrestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
