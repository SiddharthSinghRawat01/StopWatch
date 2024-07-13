import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => { //use to create side effect
    let intervel;
    if (running) {
      intervel = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(intervel);
    }
    return () => clearInterval(intervel);
  }, [running])

  return (
    <>
      <h1>StopWatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!running ? 
        ( <button onClick={() => setRunning(true)}>start</button>) :
        (<button onClick={() => setRunning(false)}>stop</button>)
        }
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </>
  );
}

export default App;
