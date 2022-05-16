import React from 'react';
import './App.css';
import MainSection from './Components/MainSection';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <MainSection />
    </div>
  );
}

export default App;
