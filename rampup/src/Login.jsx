/**
 * Login component
 * @returns {JSX}
 */
// const Login = () => {
//     return <div> HERE GOES THE LOGIN </div>;
//   };
  

  // LoginForm.js

  import React, { useState } from 'react';

  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [authMessage, setAuthMessage] = useState('');
  
    // Credenciales válidas del usuario registrado (modifica estas según tus necesidades)
    const validUsername = 'usuario_registrado';
    const validPassword = 'contraseña_registrada';
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Verificar si las credenciales ingresadas coinciden con las credenciales válidas
      if (username === validUsername && password === validPassword) {
        setIsLoggedIn(true);
        setAuthMessage('You are logged in!'); // Mostrar mensaje de inicio de sesión exitoso
      } else {
        setIsLoggedIn(false);
        setAuthMessage('You are not registered.'); // Mostrar mensaje de no registrado
      }
    };
  
    return (
      <div>
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
          </div>
          <div className="send-button">
            <button type="submit" style={{ fontSize: '10px', backgroundColor: 'lightpink', fontFamily: 'Poppins' }}>
              Send
            </button>
          </div>
          <div className="create-button">
            <button
              type="submit"
              style={{ fontSize: '10px', backgroundColor: 'lightpink', fontFamily: 'Poppins' }}
            >
              Create a New Account
            </button>
          </div>
        </form>
  
        {authMessage && <p>{authMessage}</p>} {/* Mostrar el mensaje de autenticación */}
      </div>
    );
  };
  
  export { Login };
  