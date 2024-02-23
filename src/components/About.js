import React, { useEffect } from "react";
import "../styles/About.css";

const About = () => {
  useEffect(() => {
    // Set the background color when the component mounts
    document.body.style.backgroundColor = "rgb(154, 154, 155)";

    // Revert to the original or a different background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = ""; // Adjust as needed
    };
  }, []);

  return (
    <div className="about-container">
      <h1 className="about-header">Circling the Drain</h1>
      <p className="about-paragraph">
        Adrian Cain (Drain) is a glitch artist, residing currently in Northwest
        Arkansas. Practicing since 2015, he first became aware of glitch as a
        form of art through the FB group, Glitch Request and GAC. He first
        started glitching selfies with wordpad in 2015. Now he focuses on
        surreal portraits and abstract glitchscapes, changing once identifiable
        forms into something new. Subverted patterns and surreal figures created
        in Blender are then subject to sonification through Audacity.
        Databending any image format he can get his hands on, Drain creates
        glitch collages to highlight various techniques.
      </p>
    </div>
  );
};

export default About;
