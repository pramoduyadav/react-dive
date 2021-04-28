import React from "react";
import ReactDOM from "react-dom";

import App from "./playground/redux-101.js";
//import App from "./App";

class ControlApp extends React.Component {
  handleAlert() {
    alert("you clicked me...");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAlert}> Click me!!!! </button>
      </div>
    );
  }
}

ReactDOM.render(<ControlApp />, document.getElementById("root"));
