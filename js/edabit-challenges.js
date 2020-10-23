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

//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
    if(num === 0 || num < 0){
        return true;
    }else{
        return false;
    }
}
//Write a function that returns the length of a string. Make your function recursive.
function length(str) {
    return str.length;

}
//Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
function comp(str1, str2) {
    if(str1.length == str2.length){
        return true;
    }else{
        return false;
    }
}
////Create a function that returns true if a string is empty and false otherwise.

function isEmpty(s) {
	if(s === ""){
		return true;
	}else{
		return false;
	}

}