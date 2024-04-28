import React from "react";
import Weather from "./Weather.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SUSANNE IS HIER</h1>
        <Weather city="Groningen" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
