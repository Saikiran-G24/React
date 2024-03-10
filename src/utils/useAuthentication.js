import { useEffect, useState } from "react"

const useAuthentication=()=>{
    const[LoggedinUser,setLoggedInUser]=useState(true)
    useEffect(()=>{
        // const handleLoggedinuser=() => {
        //     setLoggedInUser(true);
        //   };
          const handleLoggedoutuser=() => {
            setLoggedInUser(false);
          };
        // window.addEventListener("onclick",handleLoggedinuser );
        window.addEventListener("onclick",handleLoggedoutuser);
        //cleanup things for eventListener
        return ()=>{
            // window.removeEventListener('onclick',handleLoggedinuser)
            window.removeEventListener('onclick',handleLoggedoutuser)
    
        }

    },[])
    return setLoggedInUser;
}
export default useAuthentication;