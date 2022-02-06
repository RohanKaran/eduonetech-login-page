import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {AuthProvider} from "./contexts/AuthContext";

ReactDOM.render(
  <AuthProvider>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} exact element={<App />}/>
              <Route path={'/login'} exact element={<Login />}/>
              <Route path={'/signup'} exact element={<Signup />}/>
          </Routes>
      </BrowserRouter>
  </AuthProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
