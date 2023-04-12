import './App.css';
import React from 'react';
function App() {
  const [clicks, setClicks] = React.useState(() => {
    if (localStorage.getItem("clicks") === null || localStorage.getItem("clicks") === undefined) {
      return 0
    } else {
      return parseInt(localStorage.getItem("clicks"));
    }
  })
  const onButtonClick = () => {
    setClicks(clicks + 1);
    localStorage.setItem("clicks", clicks + 1);
  }
  return (
    <div className="App">
      <>
        <title>Challenge 1</title>
        <meta charSet="UTF-8" />
        <meta name="author" content="Paul Tuccinardi" />
        <link rel="stylesheet" href="style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <br />
        <h1> Lightfall Super League Challenge 1</h1>
        <h2> By: Paul Tuccinardi</h2>
        <button id="button" onClick={() => onButtonClick()} >Counter</button>
        <p id="click-counter">Button clicked:{clicks} </p>

      </>

    </div>
  );
}

export default App;
