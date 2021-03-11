import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <div>Welcome to my-webpack-react-starter</div>
    </div>
  );
};

import TestComponent from "./components/CompoName";

ReactDOM.render(
  <div>
    <App />
    <TestComponent firstProp={15}/> 
  </div>,
  document.querySelector("#root")
);
