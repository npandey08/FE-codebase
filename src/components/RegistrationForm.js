import React, { useState } from 'react';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [basicDetails, setBasicDetails] = useState('');
  const [showCriteria, setShowCriteria] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleBasicDetailsChange = (event) => {
    setBasicDetails(event.target.value);
  };

  const handlePasswordClick = () => {
    setShowCriteria(!showCriteria);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
    } else if (!/\d/.test(password)) {
      alert('Password must contain at least one number.');
    } else if (!/[A-Z]/.test(password)) {
      alert('Password must contain at least one uppercase letter.');
    } else if (!/[a-z]/.test(password)) {
      alert('Password must contain at least one lowercase letter.');
    } else {
      setIsFormValid(true);
      setFormSubmitted(true);
    }
  };

  if (formSubmitted) {
    return <p>Account created successfully!</p>
  }

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
          onClick={handlePasswordClick}
        />
        {showCriteria && (
          <p>
            Password must be at least 8 characters long and contain at least
            one number, one uppercase letter, and one lowercase letter.
          </p>
        )}
      </label>
      <br />
      <label>
        Basic Details:
        <textarea value={basicDetails} onChange={handleBasicDetailsChange} />
      </label>
      <br />
      <input type="submit" value="Submit" disabled={!isFormValid} />
    </form>
  );
}

export default RegistrationForm;
