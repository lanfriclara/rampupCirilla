import React, { useState } from 'react'; // Agrega esta línea para importar useState
import { Login } from './Login';
import { Register } from './Register';
import { App } from './App';

const Hello = ({ currentUser, }) => {
  return (
    <div>
      <h1> Hello {currentUser.username} ! </h1>
    </div>
  );
};

const Lists = ({ currentUser }) => {
  const [dataList, setDataList] = useState([]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [dni, setDni] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteTerm, setDeleteTerm] = useState('');

  const handleSave = () => {
    if (name && lastName && age && dni) {
      const newData = {
        name: name,
        lastName: lastName,
        age: age,
        dni: dni,
      };
      setDataList([...dataList, newData]);
      setName('');
      setLastName('');
      setAge('');
      setDni('');
    }
  };

  const handleDelete = () => {
    const updatedList = dataList.filter(
      (data) =>
        data.name !== deleteTerm &&
        data.lastName !== deleteTerm &&
        data.age.toString() !== deleteTerm &&
        data.dni !== deleteTerm
    );
    setDataList(updatedList);
    setDeleteTerm('');
  };

  const filteredList = dataList.filter(
    (data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.age.toString().includes(searchTerm) ||
      data.dni.includes(searchTerm)
  );

  const handleDeleteUserByDni = (dniToDelete) => {
    const updatedList = dataList.filter((data) => data.dni !== dniToDelete);
    setDataList(updatedList);
  };

  const handleSearch = () => {
    const userToDelete = dataList.find(
      (data) =>
        data.name.toLowerCase() === deleteTerm.toLowerCase() ||
        data.lastName.toLowerCase() === deleteTerm.toLowerCase() ||
        data.age.toString() === deleteTerm ||
        data.dni === deleteTerm
    );

    if (userToDelete) {
      handleDeleteUserByDni(userToDelete.dni);
    }
    setDeleteTerm('');
  };

  return (
    <div>
      <h2> Hello {currentUser.username} !</h2>
      <div>
        <input
          type="text"
          placeholder="Search by Name, Lastname, Age or DNI"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <input
          type="text"
          placeholder="Delete by DNI, Name, Lastname, or Age"
          value={deleteTerm}
          onChange={(e) => setDeleteTerm(e.target.value)}
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
      <div>
        <h3>Add Person:</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
        />
        <button onClick={handleSave}>Add</button>
      </div>
      <div>
        <h3>People Lists:</h3>
        <ul>
          {filteredList.map((data, index) => (
            <li key={index}>
              Name: {data.name}, Lastname: {data.lastName}, Age: {data.age}, DNI: {data.dni}
              <button onClick={() => handleDeleteUserByDni(data.dni)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
     
    </div>
  );
};

export { Lists };
