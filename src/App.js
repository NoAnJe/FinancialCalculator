import logo from './logo.svg';
import './App.css';
import React from 'react';
import {dateInput, buttonInput, goalInput} from './InputFunctions';

// // 
// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>


// </header>

function App() {
  return (
    <div className="App">
      <dateInput />
      <buttonInput buttonID="addGoal" buttonText="Add a new goal" />
      {/* <buttonInput buttonID="addGoal" buttonText="Add a new goal" callbackFunction={dummyFunction} /> */}
    </div>
  );


  /*
  return (
    // Set up initial outline of starting dates
    <dateInput dateID="startDate" dateText="Starting Date" />
    <dateInput dateID="endDate" dateText="End Date of Calculations" />
    <dateInput dateID="firstPayday" dateText="First Date of Paycheck" />

    <buttonInput
  )
  */
}

export default App;
