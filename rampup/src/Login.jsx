import React, { useState } from 'react';
import { Register } from './Register';
import { Lists } from './Lists';

const Login = ({ setRegisterOpened, handleUserLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userFound = handleUserLogin(formData);

    if (userFound) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="botonVerde" type="submit" onClick={handleLogin}>
          Send
        </button>
        <button
          className="botonVerde"
          type="submit"
          onClick={() => setRegisterOpened(true)}
        >
          Create account
        </button>
      </form>
      {showError && <p>User not registered</p>}
    </div>
  );
};

export { Login };
