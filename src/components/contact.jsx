import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          
        </div>
      </div>
      
      <div id="footer">
        <div className="container text-center">
        <div id="footer">
        <div className="container text-center">
        <p style={{ fontSize: '20px' }}>Made by krp</p>
      <a href="https://github.com/krrpacho" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px' }}>GitHub</a><br></br>
      <p style={{  fontSize: '20px' }}>For complaints and suggestions:</p>
      <a href="mailto:krrpacho@gmail.com"style={{ fontSize: '18px' }}>krrpacho@gmail.com</a>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};
