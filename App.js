import React from "react";
import ReactDOM from "react-dom/client";
// const heading1 = React.createElement("h1", { id: "title",key:"2014" }, "heading1");
// const heading2 = React.createElement("h1", { id: "title",key:"2015" }, "heading2");
// const heading3 = React.createElement("h1", {id:"heading",key:"2016"}, "My name is rocky Singh Hello");

///Video 4

// JSX => React.createElement()=>Object=>HTML
// Babel read JSX and convert it into readable code for JS Engine

//This is JSX
const heading = (
  <div id="Container">
    <h1 id="title">Heading 1</h1>
    <h1 id="title2">Heading 2</h1>
    <h1 id="title3">Heading 3</h1>
  </div>
);

//components
/*
Functional Component
Class Based Component
*/

// Functional Component

const HeadingComponent= () => {
  return (
    <div id="Container">
      {heading}
      <h1 id="title">Heading 4</h1>
      <h1 id="title2">Heading 5</h1>
      <h1 id="title3">Heading 6</h1>
    </div>
  );
};
console.log("Rocky Singh");
// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
//   heading3,
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);//==root.render(HeadingComponent()) same
