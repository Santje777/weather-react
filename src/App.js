import React from "react";
import Container from "./Container.js";
import Footer from "./Footer.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my React Weather App</h1>
        <Container />
        <Footer />
      </header>
    </div>
  );
}

export default App;
