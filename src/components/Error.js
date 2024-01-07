import {useRouteError} from "react-router-dom";

const Error=()=>{
    const error=useRouteError();
    console.log(error)
    return(
        <div className="error-container">
            <h1>{error.status+" "+error.statusText}</h1>
        </div>
    )
}
export default Error;