import {createContext} from "react"

const UserContext=createContext({user:{
    name:"Dummy Name",
    email:"support@react.com1"
}});
export default UserContext;