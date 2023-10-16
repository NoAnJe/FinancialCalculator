//import logo from './logo.svg';
import './App.css';
import React from 'react';
// import {dateInput, buttonInput, createFinancialGoal} from './InputFunctions';
// //import { clickTest } from './ActionFunctions';
// import {GoalUpdate, GoalUpdateComparator, FinancialGoal, FinancialInputs}
//     from './Definitions.js';
// import {GoalCreation} from './GoalDesign';
import {OverallDateInput, FinancialGoal} from './Definitions.js';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


// let gFinancialGoals = [];
// gFinancialInputs = [];

// function declareFinancialInputs() {
//   gFinancialInputs.push(new FinancialInputs());
//   // TODO : Create Accordion Element
// }


// function DeclareFinancialGoals() {
//   let startGoal = new FinancialGoal();
//   gFinancialGoals.push(startGoal);
//   startGoal.setStartingAmount(100);
//   console.log(gFinancialGoals);
//   // TODO : Create Accordion Element
//   return (
//     <div>
//       <GoalCreation goal={gFinancialGoals[0]} />
//     </div>
//   );
// }
    //   {/* {buttonInput("addGoal", "Add a new goal")} */}
    //   {/* {declareFinancialGoals()} */}
    //   <DeclareFinancialGoals />


function App() {
  return (

    <div className="App">
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <OverallDateInput />
      <FinancialGoal />
    </LocalizationProvider>
    </div>
  );

}

export default App;
