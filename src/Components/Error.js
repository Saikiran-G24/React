
import {useRouteError} from "react-router-dom";
const Error=()=>{
    const err=useRouteError()
    const{status,statusText}=err    //De-Structing
    console.log(err)
    return(
        <div>
            <h1>Ooops!!</h1>
            <h2> Something went wrong</h2>
            <h1>{status+":"+statusText}</h1>         {/*<h1>{err.status+":"+err.statusText}</h1> */}




        </div>
    )
}
export default Error;