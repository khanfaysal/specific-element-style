import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import Clock from "./components/Clock";
class App extends Component {
  render() {
    return (
      <div>
        <Clock locale="bn-BD" />
      </div>
    );
  }
}

export default App;
