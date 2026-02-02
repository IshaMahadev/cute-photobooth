import logo from './logo.svg';
import './App.css';
import React from 'react';
import Photobooth from "./components/Photobooth";
import "./styles/global.css";

const logoSrc = "assets/logo/jiggleduo-logo.png"

function App() {
  return (
    <div className="App" style = {{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
    <div style = {{
      width: "100%",
      maxWidth: 1200,
      display: "flex",
      alignItems: "center",
      padding: "20px, 32px",
      gap: 12
    }}>
      <img src={logoSrc} alt="Jiggleduo Logo" style={{width: 50}}/>
      <h1 style={{
        fontFamily: "Cantica Cute,",
        color: "#8c5b4a",
        margin: 0
      }}>Jiggle Photobooth</h1>
    </div>
    <div style = {{
      flex: 1,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "40px"
    }}>

      <Photobooth />

    </div>
    </div>
  );
}

export default App;
