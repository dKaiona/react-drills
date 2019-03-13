import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArrayList from './components/ArrayList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <ArrayList></ArrayList>
      </div>
    );
  }
}

export default App;
