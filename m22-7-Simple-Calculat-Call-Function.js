                                          //  Modiul --- 22.7 
                                            

// Concept ===>   Simple Calculator To Call Function Inside A Function



function add( num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply( num1, num2){
    return num1 * num2;
}

function divide( num1, num2){
    return num1 / num2;
}


function Calculator( a, b, operation){
    if (operation === 'add') {
        const result = add(a,b);
        return result;
    }

    else if(operation === 'subtract'){
        const result = subtract(a, b);
        return result;
    }

    else if(operation === 'multiply'){
        const result = multiply(a, b);
        return result;
    }

    else if(operation === 'divide'){
        const result = divide(a, b);
        return result;
    }

    else {
        return "Only 'add', 'subtract', 'multiply', 'divide', operation is allowed."
    }
}

// const result = Calculator( 5, 7, 'add');
// const result = Calculator( 5, 7, 'multiply');
// const result = Calculator( 5, 7, 'subtract');
const result = Calculator( 5, 7, 'divide');
console.log(result);