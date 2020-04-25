import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
