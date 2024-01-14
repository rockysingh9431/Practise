import React from "react";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";
import Profile1 from "./Profile1";

// const About=()=>{
//     return (
//       <>
//         <div className="ml-2">
//           <h1 className="font-semibold text-4xl">About us</h1>
//           <h2 className="font-bold text-xl">This is FoodVilla App</h2>
//         </div>
//         <Profile />
//       </>
//     );
// }

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <div className="About">
          <h1>About us</h1>
          <h2>This is FoodVilla App</h2>
          <UserContext.Consumer>
            {({ user }) => (
              <h1 className="font-semibold text-2xl">
                {user.name}-{user.email}
              </h1>
            )}
          </UserContext.Consumer>
        </div>
        <Profile />
      </>
    );
  }
}
export default About;
