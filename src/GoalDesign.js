import {TextBoxInput, ButtonInput, CheckboxInput} from './BasicInputs.js';
import {GoalUpdate, GoalUpdateComparator, FinancialGoal, FinancialInputs}
    from './Definitions.js';
import React from 'react';

function GoalLevelRow({ amountInput, goalAmount, idx, goalName }) {
    let contributionID=goalName+"Contribution"+idx;
    let goalID=goalName+"Milestone"+idx;
    let buttonID="button"+idx;
    return (
        <tr>
            <th colSpan="2">
                <TextBoxInput
                    label="Contribution Amount:"
                    defaultText={amountInput}
                    textID={contributionID}/>
            </th>
            <th colSpan="2">
                <TextBoxInput
                    label="Milestone:"
                    defaultText={goalAmount}
                    textID={goalID}/>
            </th>
            <th colSpan="1">
                <ButtonInput buttonText="Delete Level" buttonID={buttonID}/>
            </th>
        </tr>
    );
}

export function GoalCreation({ goal }) {
    let goalLevelRows = [];
    // let goalLevels = [];
    let goalLevel = goal.getGoalLevels();
    let i = 0;

    // Define goal levels
    // goalLevels.foreach((goalLevel) => {
        goalLevelRows.push(
            <GoalLevelRow
                amountInput={goalLevel.getContribution()}
                goalAmount={goalLevel.getGoal()}
                idx={i}
                goalName="GoalName"
                 />
        );
        i++;
    // });

    return (
        <div>
        <TextBoxInput
            label="Goal Name:"
            defaultText="DefaultGoal"
            textID="goalName"
            onTextChange={ goal.setGoalName }/><br />
        <TextBoxInput
            label="Starting Amount:"
            defaultText={ goal.getStartValue() }
            textID="goalStartingAmount"
            onTextChange={ goal.setStartingAmount } /><br />
        <TextBoxInput
            label="Goal Amount:"
            defaultText="1000"
            textID="goalAmount"
            onTextChange={ goal.updateGoal }/><br />
        <CheckboxInput
            label="Annual Goal?"
            boxID="goalIsAnnual" /><br />
        <table>
            <tbody>
                {goalLevelRows}
            </tbody>
        </table>
        </div>
    );
}
