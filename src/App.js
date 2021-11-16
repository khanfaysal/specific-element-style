import React from 'react';
import Clock from "./components/Clock";
import CountDown from './components/CountDown';
import Form from "./components/Form";

const App = () => {
  return (
    <main>
      <Clock locale="bn-BD" />
      <Form />
      <CountDown />
    </main>
  );
};

export default App;

