import React, {Component, useState} from 'react';
import DatePicker from 'react-datepicker';
import {GoalUpdate, GoalUpdateComparator, FinancialGoal, FinancialInputs}
    from './Definitions.js';

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

export function textInput(label, textID) {
  return (
    <>
      <label for={textID}>{label}</label>
      <input type="text" id={textID} name={textID}/>
    </>
  );
}

export function checkboxInput(label, boxID) {
  return (
    <>
      <label for={boxID}>{label}</label>
      <input type="checkbox" id={boxID} name={boxID} />
    </>
  );
}

/**
 * buttonInput creates a generic button using the provided text and callback
 * function. The function callback allows for any sort of function to be called
 * using the onClick property of buttons.
 * 
 * @param {*} param0 
 * @returns 
 */
export function buttonInput(buttonID, buttonText, callbackFunction=null) {
    return (
        <button
        buttonID={buttonID}
        onClick={callbackFunction}
        >
        {buttonText}
        </button>
    );
}

// Project-Specific Functions
export function createFinancialGoal(financialGoal, index) {
  let goalIdx = "goal"+index;
  let textID = "goal"+financialGoal.getIndex();
  let percentageID = "goal"+financialGoal.getIndex()+"UsesPercentages"
  return (
    <div>
      {buttonInput(goalIdx, "Update Goal")}
      {textInput("Amount:", textID)}
      {checkboxInput("Uses Percentages:", percentageID)}
    </div>
  );
}