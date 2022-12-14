import { useState } from 'react';
import './App.css';
import One from './days/one/one';

function App() {

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center">
        Advent of Code
      </h1>
      <One />

    </div>
  );
}

export default App;
