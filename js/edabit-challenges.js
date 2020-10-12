//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function addition(num) {
    return num +1;
}


//Write a function that takes the base and height of a triangle and return its area.
function triArea(base, height) {
    return base * height / 2;
}

// Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
    if(num1 === num2){
        return true
    }else{
        return false;
    }
}

// Create a function that takes the age and return the age in days.

function calcAge(age) {
    var days = 365;
    return age * days;
}

// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(a, b) {
    if(a + b < 100){
        return true;
    }else{
        return false;
    }
}
