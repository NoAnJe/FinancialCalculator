import React, {Component, useState} from 'react';
import DatePicker from 'react-datepicker';
import {GoalUpdate, GoalUpdateComparator, FinancialGoal, FinancialInputs}
    from './Definitions.js';
// import React from 'react';

//import "react-datepicker/dist/react-datepicker-cssmodules.css";

// Basic Functions

/**
 * dateInput creates a generic date input with the provided ID and text.
 * 
 * @param {*} param0 
 * @returns 
 */
export function dateInput(dateID, dateText) {
    //dateID, dateText
    // TODO : Create DateInput
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
            />
        </>
    );
}







// // Project-Specific Functions
// export function createFinancialGoal(financialGoal, index) {
//   let goalIdx = "goal"+index;
//   let textID = "goal"+financialGoal.getIndex();
//   let percentageID = "goal"+financialGoal.getIndex()+"UsesPercentages";
// //  let numGoalLevels = financialGoal.getGoalLevelsLength();
// //  let lGoalUpdates = financialGoal.getGoalLevels();
// //{for(var i=0; i<numGoalLevels; i++) {createFinancialGoal(lGoalUpdates[i])} }
//   return (
//     <div>
//       {buttonInput(goalIdx, "Update Goal")}
//       {textInput("Amount:", textID)}
//       {checkboxInput("Uses Percentages:", percentageID)}

//     </div>
//   );
// }