import './App.css';
import React, { useState } from 'react';
import MainSizeSelector from './components/MainSizeSelector';
import UberdachungSelector from './components/ÜberdachungSelector';

function App() {
  const [test,setTest] = useState(1)

  const increaseTest = () => {
  setTest(test + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <MainSizeSelector />
        <UberdachungSelector />
      </header>
    </div>
  );
}

export const TitleStyle = {
  color: "#000",
}

export default App;
