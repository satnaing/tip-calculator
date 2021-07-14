import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Input icon="bxs-user" />
      <Button>10%</Button>
    </div>
  );
}

export default App;
