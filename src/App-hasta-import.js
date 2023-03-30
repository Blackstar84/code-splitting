import { useEffect, useState } from 'react';
import './App.css';
import Surprise from './Surprise';
//import hello from './hello';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  useEffect(()=>{
    //import('./hello').then(mod=>mod.default())
  },[]);
  return (
    <div >
      <button onClick={()=> setShowSurprise(true)}>Mostrar Sorpresa</button>
      { showSurprise && <Surprise /> }
    </div>
  );
}

export default App;
