import './App.css';
import React, { useState } from 'react';
import MainSizeSelector from './components/MainSizeSelector';
import UberdachungSelector from './components/ÜberdachungSelector';
import CustomSelector from './components/CustomSelector';

function App() {
  const [test,setTest] = useState(1)

  const increaseTest = () => {
  setTest(test + 1)
  }

  const uberdachungen = [
    'Polycarbon',
    'Glas',
    'Milchglas',
  ];

  return (
    <div>
      <div className="Main-Container">
      <CustomSelector value={uberdachungen} title='Test' />
      </div>
    </div>
  );
}

export const TitleStyle = {
  color: "#000",
}

export default App;
