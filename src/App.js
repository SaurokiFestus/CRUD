import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Add from './components/Add';
import Edit from './components/Edit';
import Report from './components/Report';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Add/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/report" element={<Report/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
