import Usercontext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = ({
  id,
  name,
  cloudinaryImageId,
  avgRating,
  cuisines,
  locality,
  areaName,
  costForTwo,
}) => {
    const {user}=useContext(Usercontext);
  return (
    <div className="w-60 h-90  p-4 bg--300">
      <img
        className="w-52 h-60 sm:justify-center  rounded-lg  "
        alt="card"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2 className=" font-bold text-xl">{name}</h2>
      <h3>{avgRating} Stars</h3>
      <h4>{cuisines.join(", ")}</h4>
      <p>{locality}</p>
      <p>{areaName}</p>
      <h3>{costForTwo}</h3>
      <h3 className="font-bold">
        {user.name}-{user.email}
      </h3>
    </div>
  );
};
export default RestaurantCard;
