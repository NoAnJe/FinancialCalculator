
import React, {useState} from 'react';

export function TextBoxInput ({label, defaultText, textID, onTextChange}) {
    return (
      <>
        <label for={textID}>{label}</label>
        <input type="text" id={textID} value={defaultText}
            onChange={(e) => onTextChange(e.target.value)} />
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
export function ButtonInput({buttonText, buttonID, callbackFunction=null}) {
    return (
        <button
        buttonID={buttonID}
        onClick={callbackFunction}
        >
        {buttonText}
        </button>
    );
}

export function CheckboxInput({label, boxID}) {
    return (
      <>
        <label for={boxID}>{label}</label>
        <input type="checkbox" id={boxID} name={boxID} />
      </>
    );
}