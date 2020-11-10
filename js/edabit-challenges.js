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

// Make a function using the && operator.

    function and(a, b) {
        if (a == true && b == true) {
            return true;
        } else {
            return false;
        }
    }

	//The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.
    function has_bugs(buggy_code) {
        if (buggy_code == true) {
            return "sad days";
        } else{
            return "it's a good day";
        }
    }

	//Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
//
// wins get 3 points
// draws get 1 point
// losses get 0 points

    function footballPoints(wins, draws, losses) {
        var winPoints = wins * 3;
        var drawPoints = draws * 1;
        var lossPoints = 0;
        return winPoints + drawPoints + lossPoints;
    }

	//Write a template string according to the following example:

//const name = John;
//`hello, my name is ${name}.` ➞ "hello, my name is John."


// modify the template variable to be a template string
    function format(a, b, c) {
// the result string must give: "Their names were: a, b and c."
        return `Their names were: ${a}, ${b} and ${c}.`
    }

	//Create a function that takes an equation (e.g. "1+1"), and returns the answer.
    function equation(s) {
        return eval(s);
    }

	//Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
    function dividesEvenly(a, b) {
        if(a % b ==0){
            return true;
        }else{
            return false;
        }
    }

	//Given two arguments, return an array which contains these two arguments.
    function makePair(num1, num2) {
        var arr=[num1, num2];
        return arr;
    }

    // Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
    function getVoteCount(votes) {
        var votes = votes.upvotes - votes.downvotes;
        return votes;
    }

    //Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.


    function sumArray(arr) {
        var sum = 0;
        for (i=0; i < arr.length; i++) {
            sum+=arr[i];
        }
        return sum;
    }

//Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

//name
//population
//continent



    function cityFacts(city) {
        var cityName = city.name;
        var cityPop = city.population;
        var cityPlace = city.continent;
        return cityName + " has a population of " + cityPop + " and is situated in " + cityPlace;
    }


//In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

//chickens = 2 legs
//cows = 4 legs
//pigs = 4 legs
//The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

    function animals(chickens, cows, pigs) {
        let totalLegs = (chickens * 2) + (cows * 4) + (pigs * 4);
        return totalLegs;
    }
