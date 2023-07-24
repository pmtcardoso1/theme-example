import React from 'react';
import useTheme from "./themes/hooks";

function App() {
  const {theme} = useTheme()
  const HomePage = theme.components.Home

  return (
    <HomePage/>
  );
}

export default App;
