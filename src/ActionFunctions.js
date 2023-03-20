/**
 * This file creates a series of functions which actually run actions - whether
 * it be something like creating a PDF or running new calculations. For adding
 * and removing inputs, the InputFunctions file should be used.
 * 
 * @author njessen
 */



export function dummyFunction() {
    return (
        <alert>
            I am a dummy function!
        </alert>
    );
}

/**
 * This function calculates the actual table of data from all the current goals
 * and financial settings.
 */
function calculateCurrentSavings() {
    // TODO
    // TODO 1: Calculate list of all dates with the money values & settings

    // TODO 2: Create list of goals in order

    // TODO 3: For each date, go through goals in order.
}

/**
 * createGraph does exactly as it advertises - it creates a graph of the
 * progression for goals.
 * 
 * @param {*} createPercentages 
 */
function createGraph(createPercentages=false) {
    // TODO : Create and return graph. If true, create based on percentage towards goal
    //        If false, create based on monetary value.

    // Using array created in calculateCurrentSavings, setup dates and points for each.
    // TODO : Find good graphing library.
}

/**
 * 
 */
function createChart() {
    // TODO
}

/**
 * CalculateSavings actually calculates the progress towards each goal. This,
 * in turn, calls other functions to calculate and display data.
 */
export function CalculateSavings() {
    // TODO
    calculateCurrentSavings();
    return (
        <div>
            {createGraph()}
            {createGraph(true)}
            {createChart()}
        </div>
    );
}

/**
 * CreatePDF creates a full PDF based on the current goals. It does this by
 * first updating the calculated data to make sure it's all aligned, then
 * exports the goals, graphs, and chart to an auto-generated PDF file.
 */
export function CreatePDF() {
    // Start by making sure that the goals and calculated data are in sync.
    calculateCurrentSavings();

    // TODO : run calculations and generate sections
}

/**
 * importData allows a user to import a saved JSON file to reload their
 * financial goals and timelines.
 */
export function importData() {
    // TODO
}

/**
 * exportData allows a user to export their current goals & financial settings
 * so that they may reload it another time.
 */
export function exportData() {
    // TODO
}