import { Img_CDN_URL } from "./config";

const RestaurantMenucard = ({ restaurant }) => {
  console.log("RestaurantMenucard", restaurant);
  return (
    <>
      <div className="Menu">
        <img
          alt="Restaurentmenu Card"
          src={Img_CDN_URL + restaurant?.info?.cloudinaryImageId}
        />

        <h3>{restaurant?.info?.cuisines.join(" , ")}</h3>
        <h3>{restaurant?.info?.name}</h3>
        <h3>{restaurant?.info?.id}</h3>
        <h3>{restaurant?.info?.costForTwo}</h3>
        <h3>{restaurant?.info?.cloudinaryImageId}</h3>

      </div>
    </>
  );
};
export default RestaurantMenucard;
