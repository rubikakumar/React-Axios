import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import SingleUserProfile from "./components/SingleUserProfile";
import EditUser from "./components/EditUser";
import UserProfile from "./components/UserProfile"; 
import React, { createContext, useState } from 'react';
export const UserContext = createContext();

function App() {
  const [users, setUsers] = useState([]); 
  
  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, { ...newUser, id: Date.now() }]); 
  };

  const updateUser = (id, updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    );
  };

  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editUser/:id" element={<EditUser />} />
          <Route path="/addUser" element={<AddUserForm />} />
          <Route path="/editUserForm/:id" element={<EditUserForm />} />
          <Route path="/userProfile/:id" element={<SingleUserProfile />} />
          <Route path="/userProfiles" element={<UserProfile />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
