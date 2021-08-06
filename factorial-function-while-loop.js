function getFactorial(number) {
    let factorial = 1;
    let i = 1;
    while (i <= number) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}

let firstFactorial = getFactorial(6);
console.log('Factorial of 7 is', firstFactorial);

let secondFactorial = getFactorial(9);
console.log('Factorial of 9 is', secondFactorial);


function isFactorial(num) {
    let factorial = 1;
    let i = num;
    while (i >= 1) {
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

const thirdFactorial = isFactorial(7);
console.log('Factorial of 7 is', thirdFactorial);

const fourthFactorial = isFactorial(10);
console.log('Factorial of 9 is', fourthFactorial);