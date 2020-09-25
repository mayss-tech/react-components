import React from 'react';
import './App.css';
import Adress from './profil/adress';
import Fullname from './profil/fullname';
import Photoprofile from './profil/photoprofil';

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
