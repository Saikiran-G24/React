import { useEffect, useState,useContext } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Usercontext from "../utils/UserContext";
const Header = ({...cartItems}) => {
  const [LoggedinUser, setLoggedInUser] = useState(true);
  let [title, setTitle] = useState("Food Villa");
  const {user}=useContext(Usercontext)
  const isOnline = useOnline(true);
  return (
    <div className="  justify-between flex  bg-gray-200 shadow-lg ">
      <Title />
      <h1 className=" font-bold text-3xl ml-20 py-10"> {title}</h1>
      <button className=" mr-12 p-12  bg-gray-200 border-solid  border-indigo-600 rounded-lg	  font-bold  text-center"
        onClick={() => {
          if (title === "Food Villa") {
            setTitle("New Title");
          } else {
            setTitle("Food Villa");
          }
        }}
      >
        Change Title
      </button>
      <ul>
        <h1 className="py-8 mr-10 font-bold text-2xl">{isOnline ? "🟢Online" : "🔴offline "}</h1>
      </ul>
      <div className="">
        <ul className="flex mt-20 pt-20 space-x-5 mr-40">
          <li>
            <h1 className="font-medium">
              <Link to="/">Home</Link>
            </h1>
          </li>
          <li>
            <h1 className="font-medium">
              <Link to="/about">About</Link>
            </h1>
          </li>
          <li>
            <h1 className="font-medium">
              <Link to="/contact">Contact</Link>
            </h1>
          </li>
          <li>
            <h1 className="font-medium">
              <Link to="/instamart">Instamart</Link>
            </h1>
          </li>
          <li>
            <h1 className="font-medium " > <Link to ='/cart'>cart {cartItems.length} items</Link></h1>
          </li>
        </ul>
      </div>
      {
        //Js Expression & Statements
        //    ((a=10),console.log('A value is ',a))
      }

<p className=" pr-5 text-right font-bold">{user.name}-
{user.email}</p>

      {LoggedinUser ? (
        <button onClick={() => setLoggedInUser(false)}>
          <h5 className=" mr-2  font-medium   text-2xl">Login</h5>
        </button>
      ) : (
        <button onClick={() => setLoggedInUser(true)}>
          <h5 className="px-10  font-medium  text-2xl  text-center">Logout</h5>
        </button>
      )}
    </div>



  );
};
export default Header;
