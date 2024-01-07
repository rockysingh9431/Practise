import React from "react";

class Profile1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"",
        Bio:""
      },
    };
    console.log("Child Constructor");
  }
  async componentDidMount() {
    console.log("Child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/rockysingh9431");
    const user = await data.json();
    this.setState({
      userInfo: user,
    });
    console.log(user);
    console.log("after Api ComponentDidMount");
  }
  componentDidUpdate() {
    console.log("Child COmponentDid Update");
  }
  componentWillUnmount() {
    console.log("Child ComponentWillUnmount");
  }

  render() {
    console.log("Child Render");

    return (
      <div className="profileContainer">
        <h1>Profile Class Component</h1>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Bio:{this.state.userInfo.bio}</h2>
      </div>
    );
  }
}
export default Profile1;
