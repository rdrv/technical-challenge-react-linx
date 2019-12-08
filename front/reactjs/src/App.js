import React from 'react';
import './index.css';
import Overlay from './assets/components/Overlay';
import Details from './assets/components/Details';
import Btn from './assets/components/Btn';

function App() {
  return (
    <main className="main-bg-color cellphone">
      <Overlay />
      <Details />
      <Btn />
    </main>
  );
}

export default App;
