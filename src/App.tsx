import { useState } from 'react';
import './App.css';
import One from './days/one/one';
import Two from './days/two/two';
import Three from './days/three/three';

function App() {

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center">
        Advent of Code
      </h1>
      <One />
      <Two />
      <Three />

    </div>
  );
}

export default App;
