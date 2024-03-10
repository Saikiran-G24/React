import { useEffect, useState } from "react";



const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleisOnline=() => {
      console.log("called handleisOnline")
        setIsOnline(true);
      };
      const handleisOffline=() => {
        console.log("called handleisOffline")
        setIsOnline(false);
      };
    window.addEventListener("online",handleisOnline );
    window.addEventListener("offline",handleisOffline);
    //cleanup things for eventListener
    return ()=>{
        window.removeEventListener('online',handleisOnline)
        window.removeEventListener('offline',handleisOffline)

    }
  }, []);

  return isOnline;
};
export default useOnline;
