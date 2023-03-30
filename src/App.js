import { useState } from 'react';
import './App.css';
import Surprise from './Surprise';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  return (
    <div >
      <button onClick={()=> setShowSurprise(true)}>Mostrar Sorpresa</button>
      { showSurprise && <Surprise /> }
    </div>
  );
}

export default App;
