// Importing necessary dependencies
import React, { useState } from "react"; 
import emailjs from "emailjs-com"; 
import "../styles/Contact.css"; 

// Contact component definition
const Contact = () => {
  // State to hold form data with initial values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuring to get name and value from the event target
    // Updating formData state with new values while preserving existing ones
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submit action

    // Sending form data using emailjs
    emailjs
      .sendForm(
        "service_4n3la4c", // Service ID
        "template_gtlxj87", // Template ID
        e.target, // Form DOM element
        "aS_0yxbGr6KGwj87E" // User ID
      )
      .then(
        (result) => {
          // Success callback
          console.log(result.text); // Logging success message
          alert("Thank you for your message. We'll get back to you soon."); // Alerting user
          // Resetting form data to initial state
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          // Error callback
          console.log(error.text); // Logging error message
        }
      );
  };

  // Rendering the contact form
  return (
    <div className="contact-background">
      <div className="contact-container">
        <h2>Contact</h2> {/* Contact form heading */}
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Name input */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {/* Email input */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Message input */}
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact; 
