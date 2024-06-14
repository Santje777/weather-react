import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Container from "./Container.js";
import ContainerTwo from "./ContainerTwo.js";
import Footer from "./Footer.js";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1><b>Welcome to my React Weather App 🤗</b></h1>
        <Container />
        <ContainerTwo />
        <footer>
          <Footer />
        </footer>
      </header>
    </div>
  );
}
