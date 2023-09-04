import logo from './logo.svg';
import './App.css';
import React from 'react';
import {dateInput, buttonInput, createFinancialGoal} from './InputFunctions';
//import { clickTest } from './ActionFunctions';
import {GoalUpdate, GoalUpdateComparator, FinancialGoal, FinancialInputs}
    from './Definitions.js';

let gFinancialGoals = [];
// gFinancialInputs = [];

// function declareFinancialInputs() {
//   gFinancialInputs.push(new FinancialInputs());
//   // TODO : Create Accordion Element
// }


function declareFinancialGoals() {
  gFinancialGoals.push(new FinancialGoal());
  // TODO : Create Accordion Element
  return (
    <>{createFinancialGoal(gFinancialGoals[0], 0)}</>
  );
}


function App() {
  return (
    <div className="App">
      <dateInput />
      {buttonInput("addGoal", "Add a new goal")}
      {declareFinancialGoals()}
    </div>
  );

}

export default App;
