import {TextField, Checkbox, FormControlLabel, MenuItem, Select, FormControl} from '@mui/material';
// import {Checkbox} from '@mui/material/Checkbox';
import React, {useState} from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {
    Unstable_NumberInput as NumberInput,
    NumberInputProps,
    numberInputClasses,
  } from '@mui/base/Unstable_NumberInput';

/**
 * A simple enum to define how often one is paid.
 */
export const PayFrequencies = {
    Once:       "once",
    Daily:      "daily",
    Weekly:     "weekly",
    Biweekly:   "biweekly",
    Monthly:    "monthly",
    Quarterly:  "quarterly",
    Annually:   "annually"
}


export function FinancialGoal() {
    const [goalValue, updateGoalValue] = useState(0);
    const [isAnnual, updateIsAnnual] = useState(true);
    const [usesPercentages, updateUsePercentages] = useState(true);
    const [name, setName] = useState(null);
    const [startValue, updateStartValue] = useState(0);

    return (
        <div>
            <TextField 
                value={name}
                label="Goal"
                onChange={(e) => { 
                    setName(e.target.value); 
                }} 
                margin="normal"
            /><br/>
            <TextField 
                value={goalValue} 
                label="Total goal amount"
                onChange={(e) => { 
                    updateGoalValue(e.target.value); 
                }} 
                margin="normal"
            /><br/>
            <TextField 
                value={startValue} 
                label="Base value first time running goal"
                onChange={(e) => { 
                    updateStartValue(e.target.value); 
                }} 
                margin="normal"
            /><br/>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={usesPercentages}
                        onChange={(e) => {
                            updateUsePercentages(e.target.checked);
                        }}
                    />}
                label="Use Percentage of Income"
            />
            <br/>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isAnnual}
                        onChange={(e) => {
                            updateIsAnnual(e.target.checked);
                        }}
                    />}
                label="Is an annual goal; i.e. resets on Jan 1"
            />
        </div>
    );
}

function PayFrequencyMenu() {
    return (
    <>
    <MenuItem value={PayFrequencies.Once}>{PayFrequencies.Once}</MenuItem>
    <MenuItem value={PayFrequencies.Daily}>{PayFrequencies.Daily}</MenuItem>
    <MenuItem value={PayFrequencies.Weekly}>{PayFrequencies.Weekly}</MenuItem>
    <MenuItem value={PayFrequencies.Biweekly}>{PayFrequencies.Biweekly}</MenuItem>
    <MenuItem value={PayFrequencies.Monthly}>{PayFrequencies.Monthly}</MenuItem>
    <MenuItem value={PayFrequencies.Quarterly}>{PayFrequencies.Quarterly}</MenuItem>
    <MenuItem value={PayFrequencies.Annually}>{PayFrequencies.Annually}</MenuItem>
    </>
);
    // return (
    //     <>
    //     <MenuItem value={PayFrequencies.Once}>{PayFrequencies.Once}</MenuItem>
    //     <MenuItem value={PayFrequencies.Daily}>{PayFrequencies.Daily}</MenuItem>
    //     <MenuItem value={PayFrequencies.Weekly}>{PayFrequencies.Weekly}</MenuItem>
    //     <MenuItem value={PayFrequencies.Biweekly}>{PayFrequencies.Biweekly}</MenuItem>
    //     <MenuItem value={PayFrequencies.Monthly}>{PayFrequencies.Monthly}</MenuItem>
    //     <MenuItem value={PayFrequencies.Quarterly}>{PayFrequencies.Quarterly}</MenuItem>
    //     <MenuItem value={PayFrequencies.Annually}>{PayFrequencies.Annually}</MenuItem>
    //     </>
    // );
}

/*
<DatePicker value={startDate} onChange={(e) => {
                setStartDate(e.target.value);}
            } />
            <DatePicker value={endDate} onChange={(e) => {
                setEndDate(e.target.value);}
            }/>
            <DatePicker value={firstPayday} onChange={(e) => {
                setFirstPayday(e.target.value);}
            }/>
            <Select
                labelId="SalaryFrequency"
                label="Pay Frequency"
                value={payFrequency}
                onChange={(e) => {
                    setPayFrequency(e.target.value);}
                }
            >
                <PayFrequencyMenu />
            </Select>*/

/*

            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e);}
                    }
                />
            </DemoContainer>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    value={endDate}
                    onChange={(e) => {
                        setEndDate(e);}
                    }
                />
            </DemoContainer>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    value={firstPayday}
                    onChange={(e) => {
                        setFirstPayday(e);}
                    }
                />
            </DemoContainer>

*/

export function OverallDateInput() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [firstPayday, setFirstPayday] = useState(null);
    const [payFrequency, setPayFrequency] = useState(PayFrequencies.Biweekly);

    return (
        <div>
                <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={(e) => {
                        setStartDate(e);}
                    }
                />
                <DatePicker
                    label="End Date"
                    value={endDate}
                    onChange={(e) => {
                        setEndDate(e);}
                    }
                />
                <DatePicker
                    label="First Payday"
                    value={firstPayday}
                    onChange={(e) => {
                        setFirstPayday(e);}
                    }
                />
        <FormControl>
            <Select
                labelId="SalaryFrequency"
                label="Pay Frequency"
                value={payFrequency}
                onChange={(e) => {
                    setPayFrequency(e.target.value);}
                }
            >
                <MenuItem value={PayFrequencies.Once}>{PayFrequencies.Once}</MenuItem>
                <MenuItem value={PayFrequencies.Daily}>{PayFrequencies.Daily}</MenuItem>
                <MenuItem value={PayFrequencies.Weekly}>{PayFrequencies.Weekly}</MenuItem>
                <MenuItem value={PayFrequencies.Biweekly}>{PayFrequencies.Biweekly}</MenuItem>
                <MenuItem value={PayFrequencies.Monthly}>{PayFrequencies.Monthly}</MenuItem>
                <MenuItem value={PayFrequencies.Quarterly}>{PayFrequencies.Quarterly}</MenuItem>
                <MenuItem value={PayFrequencies.Annually}>{PayFrequencies.Annually}</MenuItem>
            </Select>
        </FormControl>
        </div>
    );
}
// export class FinancialInput {
//     // Variables
//     #payFrequency = PayFrequencies.Biweekly;
//     #startDate;
//     #payAmount = 0;

//     // Constructor
//     constructor(startDate) {
//         this.#startDate = startDate;
//     }

//     // Getters
//     /**
//      * 
//      * @returns startDate
//      */
//     getStartDate() {
//         return this.#startDate;
//     }

//     getPayAmount() {
//         return this.#payAmount;
//     }

//     // Setters
//     /**
//      * Sets the frequency of pay
//      * @param {PayFrequencies} payFrequency 
//      */
//     setPayFrequency(payFrequency) {
//         this.#payFrequency = payFrequency;
//     }

//     setPayAmount(payAmount) {
//         this.#payAmount = payAmount;
//     }

//     setStartDate(startDate) {
//         this.#startDate = startDate;
//     }
// }