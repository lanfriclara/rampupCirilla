import React, { useState } from 'react';
import { Login } from './Login';

const Register = ({ onRegister, }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  
    
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length >= 5) {
      setPasswordError('');
    } else {
      setPasswordError('Password must be at least 5 characters long');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.length < 5) {
      setPasswordError('*Password must be at least 5 characters long');
      return;
    }

    const newUser = { username, password };
    onRegister(newUser);
    setRegistrationMessage('Registration successful. You can now log in.');
  };

  return (
    <div>
      <h2>Create a new account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {passwordError && (
          <div className="error" style={{ fontSize: '12px', color: 'black' }}>
            {passwordError}
          </div>
        )}
        <div>
          <button
            type="submit"
            style={{
              fontSize: '10px',
              backgroundColor: 'lightpink',
              fontFamily: 'Poppins',
            }}
          >
            Back
          </button>
          <button
           type="submit"
           style={{
             fontSize: '10px',
             backgroundColor: 'lightpink',
             fontFamily: 'Poppins',
            }}
          >
            Register
          </button>
        </div>
      </form>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};

export { Register };