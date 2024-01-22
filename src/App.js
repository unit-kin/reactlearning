import './App.css';

import React from 'react';
import Home from './Home'
import Statem from './Statem';
import Toggle from './Toggle';
import { TodoApp } from './TodoApp';
import { Route, Routes, } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/statem" element={<Statem />} />
      <Route path="/toggle" element={<Toggle />} />
      <Route path="/TodoApp" element={<TodoApp />} />
    </Routes>
  )
}
export default App;
