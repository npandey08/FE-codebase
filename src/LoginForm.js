import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const history = useHistory();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      alert("You have entered an invalid email address!");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
    } else if (!role) {
      alert("Please select your role.");
    } else {
      // This is where you would check the email, password and role against the actual data
      // You may use mock API calls here or use the same logic 
      // that you used for registration form to check for valid data
      setIsFormValid(true);
      alert("Login Successful!");
      history.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <br />
      <label>
        Role:
        <select value={role} onChange={handleRoleChange}>
          <option value="">Select</option>
          <option value="customer">Customer</option>
          <option value="restaurant">Restaurant</option>
        </select>
      </label>
      <br />
      <input type="submit" value="Submit" disabled={!isFormValid} />
    </form>
  );
}

export default LoginForm;
