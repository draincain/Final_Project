import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "../styles/LoginPage.css"; 

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate("/edit-artwork"); // Redirect to the edit page or home page upon successful login
    } else {
      alert("Invalid password");
    }
  };

  return (
    <div className="login-background">
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="login-input"
      />
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
    </div>
  );
};

export default LoginPage;
