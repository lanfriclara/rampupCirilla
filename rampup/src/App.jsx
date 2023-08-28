import React, { useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { Lists } from './Lists';
import './App.css';

const App = () => {
  const [registerOpened, setRegisterOpened] = useState(false);
  const [listsOpened, setListsOpened] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleUserRegistration = (newUser) => {
    setRegisteredUsers([...registeredUsers, newUser]);
    setRegisterOpened(false); // Cerrar la página de registro

  };

  const handleUserLogin = (credentials) => {
    const user = registeredUsers.find(
      (user) =>
        user.username === credentials.username && user.password === credentials.password
    );

    if (user) {
      setCurrentUser(user);
      setListsOpened(true);
      console.log('listsOpened:', listsOpened); // Agrega esta línea

      return true; // Usuario encontrado
    }
  
    return false; // Usuario no encontrado
  };

  return (
    <>
      {!registerOpened && !listsOpened && (
        <Login
          handleUserLogin={handleUserLogin}
          setRegisterOpened={setRegisterOpened}
          setListsOpened={setListsOpened}
        />
      )}
      {registerOpened && !listsOpened && <Register onRegister={handleUserRegistration} />}
      {listsOpened && <Lists currentUser={currentUser} />}
    </>
  );
};


export { App };