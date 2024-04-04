import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login.js';

import Dashboard from './Pages/Dashboard/Dashboard.js';
import './App.css';
import UserSignUp from './Pages/SignUp/UserSignUp.js';
import DefaultPage from './Pages/DefaultPage/DefaultPage.js';
import UserBooking from './Pages/UserBooking/UserBooking.js';
import AdminLogin from './Pages/AdminLogin/AdminLogin.js';
import AdminHome from './Pages/AdminHome/AdminHome.js'


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path='/' element={<DefaultPage/>}/>
          <Route exact path="/user/login" element={<Login/>} />
          <Route path="/user/signup" element={<UserSignUp/>} />
         
          
          {/* <Layout> */}
          <Route path="/user/dashboard" element={<Dashboard/>} />
          <Route path="/user/userbooking" element={<UserBooking/>}/>
          <Route path="/admin/adminlogin" element={<AdminLogin/>}/>
          <Route path="/admin/adminhome" element={<AdminHome/>}/>
          {/* </Layout> */}
        </Routes>

      </div>
    </Router>
  );
}

export default App;
