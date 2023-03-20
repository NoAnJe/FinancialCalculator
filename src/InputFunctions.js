import React, {Component, useState} from 'react';
import DatePicker from 'react-datepicker';

//import "react-datepicker/dist/react-datepicker-cssmodules.css";


/**
 * dateInput creates a generic date input with the provided ID and text.
 * 
 * @param {*} param0 
 * @returns 
 */
export function dateInput({dateID, dateText}) {
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


/**
 * buttonInput creates a generic button using the provided text and callback
 * function. The function callback allows for any sort of function to be called
 * using the onClick property of buttons.
 * 
 * @param {*} param0 
 * @returns 
 */
export function buttonInput({buttonID, buttonText/*, callbackFunction*/}) {
    // TODO : Create Button
    return (
        <button
        buttonID={buttonID}
        onClick={callbackFunction}
        >
            {buttonText}
        </button>
    );
}

/**
 * removeGoalInput deletes the given goal from the user input area.
 * 
 * @param {*} param0 
 */
export function removeGoalInput({goalID}) {
    // TODO
}

/**
 * This 
 * @param {*} param0 
 */
export function removeGoalLevel({goalLevelID}) {
    // TODO
}

/**
 * goalLevel adds a new Goal Level to a given goal. This allows users to define
 * multiple levels of payments towards a goal.
 * 
 * @param {*} param0 
 * @returns 
 */
export function goalLevel({goalLevelID, levelNum}) {
    // TODO
    return (
        <div>
            
            <buttonInput buttonID={"remove"+goalID+"Level"+levelNum} buttonText="Remove Level" callbackFunction={removeGoalLevel} />
            <buttonInput buttonID={"add"+goalID+"Level"+levelNum} buttonText="Add Level" callbackFunction={goalLevel} />
        </div>
    );
}

/**
 * This is the function called whenever someone wishes to add a goal. The
 * fields for these goals are as follows:
 * 
 *  Goal Value      The monetary goal to reach (such as $1000). Should be 0 for
 *                  a loan.
 *  Starting Value  The value that the goal is currently at.
 *  Is Loan         True if this is a loan
 *  Interest Rate   If a loan or a savings account, the APR
 *  Is Annual Goal  True if this goal resets annually, such as a Roth IRA
 *  Goal Levels     These are how much of any generic payment to dedicate to
 *                  this goal. Multiple levels are allowed, such as 70% of
 *                  payments while less than 50% of the goal has been reached,
 *                  then after that only 50% of payments.
 *                  // TODO : Also allow a blanket amount, such as $100/payment
 *  Remove Goal     As it says, this button removes your goal
 */
export function goalInput({goalID, goalTitle}) {
    // TODO : Create Goal Fields thingy
    return (
        <div>
            <text>"{goalTitle}"</text>
            {/* TextField - Goal Value */}
            {/* TextField - Starting Value */}
            {/* Checkbox - is loan */}
            {/* TextField - Interest Rate */}
            {/* Checkbox - Is Annual Goal */}
            {/* GoalLevel - set the Level(s) of the goal - Need more design here*/}

            <buttonInput buttonID={"remove"+goalID} buttonText="Remove Goal" callbackFunction={removeGoalInput} />
        </div>
    );
}


export function removeFinancialInput({financialID}) {
    // TODO
}

/**
 * This allows for the creation of a new financial input, of which there are
 * multiple options. The following fields are created with this input.
 * 
 *  Amount          How much money is put towards savings with this
 *  Start Date      What the start date is for this. This will apply towards
 *                  all dates in the future if this is a paycheck, or only
 *                  on the given date if a bonus.
 *  Is Bonus        True if this is a one-time payment
 *  Towards Goal    Only visible if Is Bonus is true, this dropdown allows a
 *                  goal to be selected to put 100% of this money towards.
 *                  // TODO : Should this do comparison checking - if goal is reached, split towards rest of goals?
 *                  // TODO : This should dynamically update as goals are added and removed with more fields.
 * 
 * @param {*} param0 
 */
export function financialInput({financialID}) {
    // TODO
    return (
        <div>
            {/*TODO*/}
        </div>
    );
}


