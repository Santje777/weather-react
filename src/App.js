import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";

import Container from "./Container.js";
import Footer from "./Footer.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to my React Weather App</h1>
        <Container />
        <footer>
          <Footer />
        </footer>
      </header>
    </div>
  );
}
