import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const {user}=useContext(UserContext)
  return <div className="flex justify-center self-end my-20">This site is developed by:-{user.name}-{user.email}</div>;
};
export default Footer;
