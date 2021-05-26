import React, { useState } from "react";
import "./App.css";

function App() {
  function handleChange(e) {
    console.log(e.target.id, e.target.value);    
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== rePassword) {
      alert("Password not match");
    }
    else {
    alert(`You are registered successfully as ${username}.`);
    }
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  console.log("username", username);
  console.log("password", password);
  console.log("retype password", rePassword);


  return (
  <div className="App">
    <h1>Membership Registration Form</h1>
    <div id="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="username-input">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required="required" />
        </div>
        <div className="email-input">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" 
          onChange={handleChange} 
          required="required"/>
        </div>
        <div className="password-input">
          <label htmlFor="password">Password: </label>
            <input type="password" id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required="required"/>
        </div>
        <div className="retype-password">
          <label htmlFor="rePassword">Retype Password: </label>
            <input type="password" id="rePassword" 
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required="required"/>
        </div>
        <div className="first-name-input">
          <label htmlFor="firstname">First Name: </label>
          <input type="text" id="firstName" 
          onChange={handleChange} 
          required="required"/>
        </div>
        <div className="last-name-input">
          <label htmlFor="lastname">Last Name: </label>
          <input type="text" id="lastName" 
          onChange={handleChange} 
          required="required"/>
        </div>
        <div className="dob-input">
          <label htmlFor="dob">Birthday: </label>
          <input type="date" id="dob" 
          onChange={handleChange} 
          required="required"/>
        </div>
        <div className="phone-input">
          <label htmlFor="phone">Phone Number: </label>
          <input type="tel" id="phone" 
          onChange={handleChange} 
          required="required"/>
        </div>
        <div className="address01-input">
          <label htmlFor="address01">Address First Line: </label>
          <input type="text" id="address01" 
          onChange={handleChange} 
          required="required"/>
        </div>
        <div className="address02-input">
          <label htmlFor="address02">Address Second Line: </label>
          <input type="text" id="address02" 
          onChange={handleChange} />
        </div>
        <div className="city-input">
          <label htmlFor="city">City/Town: </label>
          <input type="text" id="city" 
          onChange={handleChange} 
          required="required"/>
        </div>
        <div className="postcode-input">
          <label htmlFor="postcode">Postcode: </label>
          <input type="text" id="postcode" 
          onChange={handleChange} 
          required="required"/>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  );
}
export default App;