import React from 'react';
import './App.css';
import Adress from './Component/Profile/adress';
import Fullname from './Component/Profile/fullname';
import Photoprofile from './Component/Profile/photoprofil';

function App() {
  return (
    <div className="App">
    <Photoprofile/>
    <Fullname/>
    <Adress/>
    </div>
  );
}
export default App;
