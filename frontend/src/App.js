import './App.css';
import { Routes } from './Routes/Routes';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    alanBtn({
        key: '500c7abed765bf2647370ddf1e8b76742e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        },
        rootEl: document.getElementById("alan-btn"),
        bottom: '80px',
    });
  }, []);
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
