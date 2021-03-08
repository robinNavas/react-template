import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <div>Welcome to my-webpack-react-starter</div>
    </div>
  );
};

import TestComponent from "./components/CompoName.jsx";

ReactDOM.render(
  <div>
    <App />
    <TestComponent />
  </div>,
  document.querySelector("#root")
);
