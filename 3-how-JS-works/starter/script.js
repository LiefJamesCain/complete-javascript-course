///////////////////////////////////////
// Lecture: Hoisting
/*
1. code is scanned for function declarations:
    - for each function, a property is created in the Variable Object, pointing to the function.
2. code is scanned for variable declarations:
    - for each variable, a property is created in the Variable Object, and set to undefined.
    */

// functions 
/*
function calcAge(year) {
    console.log(2018 - year);
}

var retire = function(year) {
    console.log(65 - (2018 - year));
}

// variables
var age = 34; 
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping
///////////////////////////////////////

// scoping answers the question: where can we access this variable?
// each new function declares a scope
// lexical scoping = function that is lexically within another function gets access to the scope of outer (parent) function and variables 

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
// locally scoped variables are not visible to their parents



// Example: difference between execution stack & scope chain

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

// this function is obv outside the scope so it would not be able to access to b and c variables
function third() {
    var d = 'John';
    // console.log(d);
    console.log(a + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

/*
- third and last step of creation phase 
- regular function call
    - keyword points at global Object
- method call   
    - this variable points to object calling the method
- THIS variable is not assigned a value until a function where it is defined is called
*/

// calcAge(1984);

// function calcAge(year) {
//     console.log(2018 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearBorn: 1984,
    calcAge: function() {
        console.log(this);
        console.log(2018 - this.yearBorn);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

john.calcAge();

var mike = {
    name: 'Mike',
    yearBorn: 1986
};

// this borrows the function from john and uses it on mike
// works because of the 'this' keyword in the function

mike.calcAge = john.calcAge;

mike.calcAge();