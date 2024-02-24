import React from "react";
import { AuthProvider } from "./components/AuthContext.js";
import NavBar from "./components/NavBar.js"; 
import "./styles/App.css";
import AppRouter from "./AppRouter.js"; 
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <AuthProvider>
      <NavBar /> 
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
