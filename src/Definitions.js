import React, {useState} from 'react';

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

/**
 * This is the Goal Update class, which defines whether 
 */
export class GoalUpdate {
    #amount;
    #isPercentage = true;
    #contributeAmount = 0;

    constructor(newAmount) {
        this.#amount = newAmount;
    }

    valueOf() {
        return this.#amount;
    }

    // Getters
    getGoal() {
        return this.#amount;
    }

    getContribution() {
        return this.#contributeAmount;
    }

    // Setters
    updateGoal(newAmount) {
        this.#amount = newAmount;
    }

    setContribution(contribution) {
        this.#contributeAmount = contribution;
    }

    setPercentage(isValuePercentage) {
        this.#isPercentage = isValuePercentage;
    }

}

/**
 * Comparator for two GoalUpdate items
 * 
 * @param   {GoalUpdate} a The first GoalUpdate to be compared to
 * @param   {GoalUpdate} b The second GoalUpdate to compare to a
 * @returns Int to indicate whether they're equal, a should 
 */
export function GoalUpdateComparator(a, b) {
    // Ensure both of proper type
    if (typeof a !== "GoalUpdate") {
        throw new Error("ERROR: 'a' should of the type GoalUpdate!")
    }
    if (typeof b !== "GoalUpdate") {
        throw new Error("ERROR: 'b' should of the type GoalUpdate!")
    }

    // If a amount is less than b amount, then a should come first (neg amount)
    if (a.getGoal() < b.getGoal()) {
        return -1;
    }

    // If b amount is less than a amount, then b should come first 
    if (b.getGoal() < a.getGoal()) {
        return 1;
    }

    // If both are equal, then check percentages
    if (a.getContribution() < b.getContribution()) {
        return -1;
    }

    if (b.getContribution() < a.getContribution()) {
        return 1;
    }

    return 0;
}

/**
 * This is the class for the Financial Goals. They each contain a goal amount, a
 * definition of whether or not it is an annual goal, whether or not it uses
 * percentages to contribute, and an array of the individual goal levels.
 */
export class FinancialGoal {
    // Variables
    #amount = useState(0);
    #isAnnual = useState(true);
    #usesPercentages = useState(true);
    #goalUpdates = new Array();
    // [goalName, setGoalName];// = useState('DefaultGoal');
    goalName;
    setGoalName;
    #startingValue = useState(0);

    // Constructor
    constructor() {
        // this.#amount = 0;
        this.#goalUpdates.push(new GoalUpdate(0))
        [goalName, setGoalName] = useState('DefaultGoal');
    }

    // Getters
    /**
     * Get the total amount that this goal is working towards
     * @returns Monetary goal amount
     */
    getGoal() {
        return this.#amount;
    }

    /**
     * Gets whether or not this is an annual goal. If the goal is annual, then
     * when calculations are happening, it should "reset" to 0 at the start of
     * the year.
     * @returns Boolean True if happens annually, false if once
     */
    getIsAnnual() {
        return this.#isAnnual;
    }

    /**
     * Gets whether or not this uses a percentage of income - as opposed to raw
     * monetary values - to contribute to the goal. An example might be that
     * this would be True if someone is contributing 10% of their salary to a
     * 401K, but False if someone is contributing $25/month to a rainy day fund.
     * @returns Boolean True if uses percentage of income
     */
    getUsesPercentages() {
        return this.#usesPercentages;
    }

    // getName() {
    //     return this.#goalName;
    // }

    getIndex() {
        return 0;
    }

    getStartValue() {
        return this.#startingValue;
    }

    /**
     * 
     * @returns 
     */
    getGoalLevels() {
        return this.#goalUpdates[0];
    }

    getGoalLevelsLength() {
        return this.#goalUpdates.length;
    }

    getStartLevel() {
        return this.#startingValue;
    }

    // Setters
    /**
     * Updates the total goal amount for this.
     * @param {Integer} newAmount Updated amount for goal.
     */
    updateGoal(newAmount) {
        this.#amount = newAmount;
        let maxGoalIdx = this.#goalUpdates.length - 1;
        this.#goalUpdates[maxGoalIdx].updateGoal(newAmount);
    }

    /**
     * Add a new goal update level. These are defined as the levels at which
     * one's goals will be met. For example, a $5,000 goal may have two levels,
     * where one is contributing $250/month until $4,000 is reached, then only
     * $100/month until the final value of $5,000 is reached.
     */
    addGoalUpdate() {
        this.#goalUpdates.push(new GoalUpdate(0));
        this.#goalUpdates.sort(GoalUpdateComparator);
    }

    /**
     * Remove the specified goal update.
     * @param {Integer} goalIndex Index to remove
     */
    removeGoalUpdate(goalIndex) {
        this.#goalUpdates.splice(goalIndex, 1);
    }

    /**
     * Define if this is an annual goal. An annual goal will reset on January 1,
     * while a non-annual goal will continue, irregardless of date, until the
     * final goal level is reached.
     * @param {Boolean} isAnnualGoal 
     */
    setAnnual(isAnnualGoal) {
        this.#isAnnual = isAnnualGoal;
    }

    /**
     * Define whether or not this goal uses percentages of income, as opposed to
     * raw monetary amounts.
     * @param {Boolean} usesPercentages 
     */
    setUsesPercentages(usesPercentages) {
        this.#usesPercentages = usesPercentages;
    }

    // setName(name) {
    //     console.log(typeof(name));
    //     console.log(typeof(this.#goalName));
    //     this.#goalName = name;
    // }

    setStartingAmount(startAmount) {
        this.#startingValue = startAmount;
    }
}

export class FinancialInput {
    // Variables
    #payFrequency = PayFrequencies.Biweekly;
    #startDate;
    #payAmount = 0;

    // Constructor
    constructor(startDate) {
        this.#startDate = startDate;
    }

    // Getters
    /**
     * 
     * @returns startDate
     */
    getStartDate() {
        return this.#startDate;
    }

    getPayAmount() {
        return this.#payAmount;
    }

    // Setters
    /**
     * Sets the frequency of pay
     * @param {PayFrequencies} payFrequency 
     */
    setPayFrequency(payFrequency) {
        this.#payFrequency = payFrequency;
    }

    setPayAmount(payAmount) {
        this.#payAmount = payAmount;
    }

    setStartDate(startDate) {
        this.#startDate = startDate;
    }
}