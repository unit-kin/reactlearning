import './App.css';

import React from 'react';
import Home from './Home'
import Statem from './Statem';
import Toggle from './Toggle';
import Forms from './Forms';
import Counter from './Counter';
import Weather from './Weather';
import Fruits from './Fruits';
import { TodoApp } from './TodoApp';
import { Route, Routes, } from 'react-router-dom';

function App() {
  const fruits = {
    name: 'Mango',
    colour: 'Yellow'

  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statem" element={<Statem />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/TodoApp" element={<TodoApp />} />
        <Route path="/forms" element={<Forms />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/weather' element={<Weather />} />
      </Routes>
      <Fruits fruits={fruits} />
    </>

  )
}
export default App;
