import * as React from 'react';
import Button from '@mui/material/Button'; // 버튼 디자인 기능
import TextField from '@mui/material/TextField'; // 입력하는 곳(input)기능과 디자인

import './App.css';
import SignIn from './SignIn.js';
import Main from './Main.js';
import Register from './Register.js';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (

    <BrowserRouter basename="/absproxy/3000">
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
