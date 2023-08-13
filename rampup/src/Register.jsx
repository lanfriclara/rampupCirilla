import React, { useState } from 'react';
import { Login } from './Login';


const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí podrías realizar alguna validación de los datos ingresados antes de registrar al usuario
    // Por simplicidad, omitimos la validación en este ejemplo.

    // Crear un nuevo objeto de usuario con los datos ingresados
    const newUser = { username, password };

    // Llamar a la función "onRegister" pasándole el nuevo usuario
    onRegister(newUser);

    // Mostrar un mensaje de registro exitoso
    setRegistrationMessage('Registro exitoso. Ahora puedes iniciar sesión.');
  };

  return (
    <div>
      <h2>Crear nueva cuenta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit" style={{ fontSize: '10px', backgroundColor: 'lightpink', fontFamily: 'Poppins' }}>
            Registrar
          </button>
        </div>
      </form>
      {registrationMessage && <p>{registrationMessage}</p>}
    </div>
  );
};

export default Register;