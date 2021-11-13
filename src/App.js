import React, { Component } from "react";
import "tailwindcss/tailwind.css";
import Clock from "./components/Clock";
import { userSchema } from "../src/Validations/UserValidations";
import * as yup from "yup";
class App extends Component {
  render() {
    const createUser = (e) => {
      e.preventDefault();
    };
    return (
      <div>
        <Clock locale="bn-BD" />
        <form onSubmit={createUser}>
          <input type="text" placeholder="Name"></input>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Password"></input>
        </form>
      </div>
    );
  }
}

export default App;
