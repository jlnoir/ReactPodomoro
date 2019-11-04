import React from "react";
import ReactDOM from "react-dom";
import PodomoroTimer from "./PodomoroTimer";

import "./styles.css";

class App extends React.Component {
  render() {
    return <PodomoroTimer />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
