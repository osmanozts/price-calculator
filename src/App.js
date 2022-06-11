import './App.css';
import React, { useState } from 'react';
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

  const dimensions = [
    {width:'3.00', depth:'2.50', price: 1.900},
    {width:'3.00', depth:'3.00', price: 2.100},
    {width:'3.00', depth:'3.50', price: 2.300},
    {width:'3.00', depth:'4.00', price: 2.500},
    {width:'3.00', depth:'4.50', price: 2.700},
    {width:'4.00', depth:'2.50', price: 2.250},
    {width:'4.00', depth:'3.00', price: 2.400},
    {width:'4.00', depth:'3.50', price: 2.550},
    {width:'4.00', depth:'4.00', price: 2.750},
    {width:'4.00', depth:'4.50', price: 2.900},
    {width:'5.00', depth:'2.50', price: 2.550},
    {width:'5.00', depth:'3.00', price: 2.700},
    {width:'5.00', depth:'3.50', price: 2.950},
    {width:'5.00', depth:'4.00', price: 3.300},
    {width:'5.00', depth:'4.50', price: 3.500},
    {width:'5.00', depth:'5.00', price: 3.750},
    {width:'6.00', depth:'2.50', price: 3000},
    {width:'6.00', depth:'3.00', price: 3150},
    {width:'6.00', depth:'3.50', price: 3.500},
    {width:'6.00', depth:'4.00', price: 3.700},
    {width:'6.00', depth:'4.50', price: 3.900},
    {width:'6.00', depth: '5.00', price: 4050},
    {width:'7.00', depth:'2.50', price: 3.450},
    {width:'7.00', depth:'3.00', price: 3.650},
    {width:'7.00', depth:'3.50', price: 3.850},
    {width:'7.00', depth:'4.00', price: 4.150},
    {width:'7.00', depth:'4.50', price: 4.450},
    {width:'7.00', depth:'5.00', price: 4.700},
    {width:'8.00', depth:'2.50', price: 3.750},
    {width:'8.00', depth:'3.00', price: 4.100},
    {width:'8.00', depth:'3.50', price: 4.650},
    {width:'8.00', depth:'4.00', price: 5.200},
    {width:'8.00', depth:'4.50', price: 5.500},
    {width:'8.00', depth:'5.00', price: 6000}
  ]

  return (
    <div>
      <div className="Main-Container">
      <CustomSelector value={dimensions.map((item) => item.width)} title='Breite' />
      <CustomSelector value={uberdachungen} title='Überdachung' />
      </div>
    </div>
  );
}


export default App;
