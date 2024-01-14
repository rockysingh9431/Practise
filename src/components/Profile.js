import {useContext} from "react";
import UserContext from "../utils/UserContext";
const Profile=()=>{
  const {user}=useContext(UserContext);
    return (
      <div className="ml-2">
        <h1 className="font-light text-xl">Name: {user.name}</h1>
        <h2 className="font-light text-xl">email: {user.email}</h2>
      </div>
    );
}
export default Profile;