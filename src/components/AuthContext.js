// Import necessary hooks and functions from React
import React, { createContext, useContext, useState } from "react";

// Create a Context object. This will be used to provide and consume the authentication state and functions throughout the app.
const AuthContext = createContext();

// Custom hook to use the auth context. This simplifies the process of accessing the auth context from any component.
export const useAuth = () => useContext(AuthContext);

// AuthProvider component that will wrap around parts of the app that need access to the authentication context.
export const AuthProvider = ({ children }) => {
  // State to keep track of whether the user is authenticated or not. Default is false (not authenticated).
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login. It takes a password as an argument.
  const login = (password) => {
    // Check if the password provided matches the one stored in the environment variable REACT_APP_ADMIN_PASSWORD.
    if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
      // If the passwords match, update the isAuthenticated state to true.
      setIsAuthenticated(true);
      // Return true to indicate the login was successful.
      return true;
    }
    // If the passwords do not match, return false to indicate the login failed.
    return false;
  };

  // Function to handle logout. It doesn't take any arguments.
  const logout = () => {
    // Update the isAuthenticated state to false to indicate the user is no longer authenticated.
    setIsAuthenticated(false);
  };

  // Render the AuthContext.Provider component. This component allows any child components to access the context's value.
  // The value provided to the context includes the isAuthenticated state and the login and logout functions.
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {/* Render children components. This allows any component wrapped by AuthProvider to access the authentication context. */}
      {children}
    </AuthContext.Provider>
  );
};
