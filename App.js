import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [spark, setSpark] = useState(false);

  const incrementCounter = () => {
    setCount(count + 1);
    // Trigger the spark effect
    setSpark(true);
    setTimeout(() => setSpark(false), 500); // Remove the effect after 500ms
  };

  return (
    <div className="App">
      <div className="notification">
        {count === 0
          ? "Click the button to start counting!"
          : `You have clicked ${count} ${count === 1 ? 'time' : 'times'}.`}
      </div>
      <button onClick={incrementCounter} className={`button ${spark ? 'spark' : ''}`}>
        Click Me
      </button>
    </div>
  );
}

export default App;
