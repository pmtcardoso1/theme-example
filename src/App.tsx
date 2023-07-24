import React from 'react';
import logo from './logo.svg';
import './App.css';
import theme from './themes/theme'
// import useTheme from "./themes/hooks";

function App() {
  // const {theme} = useTheme();

  return (
    <div className="App" style={{backgroundColor: theme.colors.surface, color: theme.colors.onSurface}}>
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
          style={{color: theme.colors.primary}}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
