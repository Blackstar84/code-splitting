import React, { Suspense, useEffect, useState } from 'react';
import './App.css';


const Surprise = React.lazy(()=> import('./Surprise'));

function App() {
  const [showSurprise, setShowSurprise] = useState(false);
  
  return (
    <div>
      <button onClick={()=> setShowSurprise(true)}>Mostrar Sorpresa</button>
      { 
        showSurprise && <Suspense fallback={<p>Cargando .....</p>}><Surprise /></Suspense> 
      }
    </div>
  );
}

export default App;
