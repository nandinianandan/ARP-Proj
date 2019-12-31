import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./routes";
import "./App.css";
import LoginComponent from "./components/LoginComponent/LoginComponent";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}
export default App;
