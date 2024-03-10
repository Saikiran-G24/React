import cartSlice, { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Fooditem from "./Fooditem";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitems", cartItems);
  const dispatch = useDispatch();
  // const handleAddItem = () => {
  //   dispatch(addItem("grapes"));
  // };
  const handleclearCart = () => {
    dispatch(clearCart());
  };
  const handleremoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="p-2 m-2">
      <h1 className="font-bold">Welcome to cart Page</h1>
      <h1>cart {cartItems.length} items</h1>
      <button className="p-2 m-2 bg-green-400  rounded-xl" onClick={() => handleclearCart()}>
      
        clear Cart
      </button>
      <div >
        <button className="p-2 m-2 bg-green-400 rounded-xl " onClick={() => handleremoveItem()}>
          
          Remove item
        </button>
      </div>

      <div className="m-10  flex flex-wrap ">
        {cartItems.map((item) => (
          <ul className="p-4">
            <Fooditem key={item.id} {...item} />
          </ul>
        ))}
      </div>

      {/* <button onClick={() => handleAddItem()}></button> */}
    </div>
  );
};
export default Cart;
