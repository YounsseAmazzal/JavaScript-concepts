
console.log("exportlern.js module has been loaded.");

//  Named Export  
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

//  Default Export   
function multiply(a, b) {
    return a * b;
}

export default multiply;