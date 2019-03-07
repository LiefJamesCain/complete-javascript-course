///////////////////////////////////////
// Lecture: Hoisting
/*
1. code is scanned for function declarations:
    - for each function, a property is created in the Variable Object, pointing to the function.
2. code is scanned for variable declarations:
    - for each variable, a property is created in the Variable Object, and set to undefined.
    */

// functions 
function calcAge(year) {
    console.log(2018 - year);
}

var retire = function(year) {
    console.log(65 - (2018 - year));
}

// variables
var age = 34; 
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









