function isLeapYear(year) {
    if (year % 4 == 0) {
        return true;
    }
    return false;
}

const myYear = 2024;
const myLeapYear = isLeapYear(myYear);
console.log('Is my year, Leap Year:', myLeapYear);