// src/App.js
import './App.css';
import React from 'react';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import iconOne from './images/icon1.png';
import iconTwo from './images/icon2.png';
import iconThree from './images/icon3.png';
import iconFour from './images/icon4.png';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#0e0e0e', padding: '65px', width: '100%', height: '100vh' }}>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <img src={ironhackLogo} alt="Ironhack Logo" style={{ position: 'absolute', top: '65px', left: '65px' }} />
        <img src={menuTop} alt="menu" style={{ position: 'absolute', top: '65px', right: '65px' }} />
        <h1 style={{ color: 'white', textAlign: 'left', fontSize: '128px' }}>Say hello to <br />ReactJs</h1>
        <h2 style={{ color: 'white', textAlign: 'left', fontSize: '45px' }}>
          You will learn how to use<br /> the most popular frontend library,<br /> and become a super Ninja developer.
        </h2>
        <button style={{ marginTop: '20px', fontSize: '16px',padding: '12px 20px' }}>Awesome!</button> {/* Add the button */}
        <div className="grid-container">
          <div className="column">
          <img src={iconOne} alt="icon"/>
          <h4 style={{textAlign: 'left', fontSize: '33px', color:'#2e2e2e'}} >Declarative</h4>
          <h5 style={{textAlign: 'left', fontSize: '23px', color:'#5e5e5e'}}>React makes it painless to create interactive UIs.</h5></div>
          <div className="column">
          <img src={iconTwo} alt="icon"/>
          <h4 style={{textAlign: 'left', fontSize: '33px', color:'#2e2e2e'}}>Components</h4>
          <h5 style={{textAlign: 'left', fontSize: '23px', color:'#5e5e5e'}}>Build encapsulated components thet manage their site.</h5>
          </div>
          <div className="column">
          <img src={iconThree} alt="icon"/>
          <h4 style={{textAlign: 'left', fontSize: '33px', color:'#2e2e2e'}}>Single-Way</h4>
          <h5 style={{textAlign: 'left', fontSize: '23px', color:'#5e5e5e'}}>A set of immutable values are passed to the component's.</h5>
          </div>
          <div className="column">
          <img src={iconFour} alt="icon"/>
          <h4 style={{textAlign: 'left', fontSize: '33px', color:'#2e2e2e'}}>JSX</h4>
          <h5 style={{textAlign: 'left', fontSize: '23px', color:'#5e5e5e'}}>Stytically-typed designed to run on modern browsers.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
