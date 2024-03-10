import { useParams } from "react-router-dom";
import RestaurantMenucard from "./Restaurantmenucard";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Restaurantmenu = () => {
  //How to read a dynamic URL Params
  const param = useParams(); //destructing on the fly  const {id}=useParams();
  const { resid } = param;
  // const [restaurant, setRestaurant] = useState({});
  //Creating OWN HOOk
  const restaurant = useRestaurant(resid);
  console.log("RESTAURANT", restaurant);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="w-52 m-4">
      {!restaurant ? (
        <Shimmer />
      ) : (
        restaurant.map((item) => {
          if (item.info.id === resid) {
            return (
              <div key={item.id}>
                <RestaurantMenucard restaurant={item} />

                <button className="p-2 m-2 bg-green-400 rounded-xl" onClick={() => addFoodItem(item)}>
                  AddItem
                </button>
              </div>
              //RestaurantMenucard({restaurant:item})
            );
          }
        })
      )}
    </div>
  );
};
export default Restaurantmenu;
