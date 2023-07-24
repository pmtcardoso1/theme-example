import React from 'react';
import logo from './logo.svg';
import './App.css';
import useStyles from "./useStyles";

function App() {
  const styles = useStyles()

  return (
    <div className="App" style={styles.container}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
