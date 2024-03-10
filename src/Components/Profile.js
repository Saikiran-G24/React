import { useEffect, useState } from "react";
const Profile = (props) => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  const[userInfo,setuserInfo]=useState('')
  useEffect(() => {
    getuserInfo();
    // const timer = setInterval(() => {
    //   console.log("Namaste react Op functional");
    // }, 1000);
    console.log("useEffect");
    async function getuserInfo(){
      const data=await fetch('https://api.github.com/users/Saikiran-G24');
      const json=await data.json();
setuserInfo(json)
    }
    return () => {
      // clearInterval(timer);
      console.log("clearing setInterval");
    };
  }, []);
  console.log("render");

  return (
    <div>
      <h1>Profile is a FUNCTIONAL component</h1>
      <h2> Childrean of about component </h2>
      <h1>parent component must contain "outlet" for childrean</h1>
      <h1>Name:{props.name + ", " + "xyz:" + props.xyz}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
          setcount2(count2 + 1);
        }}
      >
        click
      </button>
      <h1>count:{count}</h1>
      <h1>count2:{count2}</h1>
      <h1>id:{userInfo?.id}</h1>
      <img src={userInfo?.avatar_url}/>


    </div>
  );
};
export default Profile;
