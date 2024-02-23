import React from "react";
import "../styles/App.css";

const Home = () => {
  return (
    <div className="home-background">
      <div className="welcome-div">
        <h1 className="home-header">Drain</h1>
        <p className="welcome-paragraph">
          This is the home of my digital art portfolio. Explore the gallery,
          check out the store, or get in touch!
        </p>

        <div className="image-footer"></div>
      </div>
    </div>
  );
};

export default Home;
