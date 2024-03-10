import { useContext } from "react";
import Usercontext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(Usercontext);
  return <div className="my-10 p-1">Footer
   <h1 className="p-10 m-10 "> This site is developed by {user.name}-{user.email}</h1></div>    ;
};
export default Footer;
