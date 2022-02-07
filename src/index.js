import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {AuthProvider} from "./contexts/AuthContext";

ReactDOM.render(
  <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path={'/'} element={<App />}/>
          <Route path={'/*'} element={<Navigate to={'/'} />}/>
          <Route path={'/login'} element={<Login />}/>
          <Route path={'/signup'} element={<Signup />}/>
          <Route key={'index'} element={<Navigate from={'*'} to={'/'}/>}/>
        </Routes>
      </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
