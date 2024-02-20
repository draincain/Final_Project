import React from "react";
import "./App.css";
import AppRouter from "./AppRouter.js"; // Adjust the path as necessary
import NavBar from "./components/NavBar.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRouter />
    </div>
  );
}

export default App;
