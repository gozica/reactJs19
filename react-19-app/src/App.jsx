import React, { useState } from "react";
import "./App.css";
import Search from "./components/search";

const App = () => {
const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Smart <span className="text-gradient">Movie</span> Recommendations Made Simple</h1>
        </header>

       <Search searchTerm ={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
