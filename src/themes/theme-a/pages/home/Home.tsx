import React from 'react';
import './App.css';
import useStyles from "./useStyles";
import useTheme from "../../../hooks";

function Home() {
    const styles = useStyles()
    const {theme} = useTheme()

    const {Icon} = theme.components;

    console.log("THEME", theme)
    return (
        <div className="App" style={styles.container}>
            <header className="App-header">
                <Icon/>
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

export default Home;
