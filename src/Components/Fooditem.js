import { Img_CDN_URL } from "./config";

const Fooditem = ({ ...cartItems}) => {
  return (
    <>
{  console.log("cartItems",cartItems)
}
      <div className="Menu">
        <img className="w-56 h-40 "
          alt="cartitems"
          src={Img_CDN_URL + cartItems?.info?.cloudinaryImageId}
        />

        {/* <h3>{cartItems?.info?.cuisines.join(" , ")}</h3> */}
        <h3 className=" font-bold">{cartItems?.info?.name}</h3>
        <h3>Id {cartItems?.info?.id}</h3>
        <h3>avgRating {cartItems?.info?.avgRating}⭐</h3>

        <h3>{cartItems?.info?.costForTwo}</h3>
        {/* <h3>{cartItems?.info?.cloudinaryImageId}</h3> */}

      </div>
    </>
  );
};
export default Fooditem;
