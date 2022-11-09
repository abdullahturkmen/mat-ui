import Buttons from './screans/Buttons'
import Input from './screans/Inputs'
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react';

function App() {
  return (
    <Routes>
      <Route exact path='/'
        element={<Buttons />} />
      <Route  path='/Input'
        element={<Input />} />
    </Routes>
  );
}

export default App;
