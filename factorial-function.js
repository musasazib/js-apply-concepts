function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let firstFactorial = getFactorial(7);
console.log('Factorial of 7 is', firstFactorial);

let secondFactorial = getFactorial(9);
console.log('Factorial of 9 is', secondFactorial);