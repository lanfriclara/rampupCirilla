 import React from 'react';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import { Login } from './Login';
 import Register from './Register';
 
 /**
  * Functional component - ALT + J to activate this snippet to document the code
  * @returns {void}
  */
 const App = () => {
 
   return (
       <Router>
         <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/about" element={<Register />} />
         </Routes>
       </Router>
     );
   };
     
   
   // Html code goes here
 
 
 export { App };
