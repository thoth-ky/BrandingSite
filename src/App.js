import React from 'react';
import './App.css';
import NavigationBar from './components/Navigation';

function App() {
  return (
    <div className="App">
      <h1 class="site-heading text-center text-white d-none d-lg-block">
        <span class="site-heading">Martha's Counselling Clinic</span>
      </h1>
      <NavigationBar/>
    </div>
  );
}

export default App;
