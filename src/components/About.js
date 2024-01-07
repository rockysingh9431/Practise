import React from "react";
import Profile from "./Profile";
import Profile1 from "./Profile1";
// const About=()=>{
//     return (
//       <>
//         <div className="About">
//           <h1>About us</h1>
//           <h2>This is FoodVilla App</h2>
//         </div>
//         <Profile />
//       </>
//     );
// }
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      count:0
    }
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }
  ComponentDidUpdate() {
    console.log("Parent COmponentDid Update");
  }
  componentWillUnmount() {
    console.log("Parent ComponentWillUnmount");
  }
  render() {
    console.log("parent render");
    return (
      
      <>
        <div className="About">
          <h1>About us</h1>
          <h2>This is FoodVilla App</h2>
          <button onClick={()=>this.setState({
            count:1
          })}>count</button>
        </div>
        <Profile1 />
      </>
    );
  }
}
export default About;
