import logo from './logo.svg';
import './App.css';
import TopCard from './components/card';
import React, { useState } from 'react';
import BottomCard from './components/bottomcard';

function App() {
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <TopCard setInside={setInside}
                 setOutside={setOutside}
                 inside={inside}
                 outside={outside}>

        </TopCard>
        <BottomCard inside={inside} outside = {outside}></BottomCard>
      </header>
    </div>
  );
}

export default App;
