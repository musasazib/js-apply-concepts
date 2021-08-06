// Even Number (Function) ------------

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 3451;
const myEvenNumber = isEven(myNumber);
console.log('Is my number even', myEvenNumber);

const herNumber = 4678;
const herEvenNumber = isEven(herNumber);
console.log('Is her number even', herEvenNumber);


// Odd number (Function) ------------
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const myOddNumber = isOdd(myNumber);
console.log('Is my number odd', myOddNumber);

const herOddNumber = isOdd(herNumber);
console.log('Is her number odd', herOddNumber);