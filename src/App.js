import React, { Component } from "react";
import Clock from "./components/Clock";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div>
        <Clock locale="bn-BD" />
        <Form />
      </div>
    );
  }
}

export default App;
