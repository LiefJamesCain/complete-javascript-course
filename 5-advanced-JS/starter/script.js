/* ///////////////////////////////////////////////////////////
//////////////////////////// NOTES ///////////////////////////

in javascript everything is an object (except primitives)

- primitives
    - numbers
    - strings
    - boolean
    - undefined
    - null

- everything else is an object!
    - arrays
    - function
    - objects
    - dates
    - wrappers
        - numbers, strings, boolean, etc

- object oriented programming
    - objects interact with each other through methods/properties
    - used to store data, structure applications into modules, and keep code clean

- constructors and instances
    - constructor
        Person = {
            name:
            yearOfBirth:
            job:
            calcAge()
        }

    - instances
        var jane = {John, 1990, teacher, calcAge()};
        var mark = {Mark, 1984, driver, calcAge()};
        var john = {John, 1970, actor, calcAge()};

- inheritance:
    - when one object gets attributes from parent object

    Athlete = {
        ALL PERSON ATTRIBUTES
        olympics:
        olympicMedals:
        allowedOlympics()
    }

- prototypes
    - Object
        - Prototype
            - hasOwnProperty()
            - isPrototypeOf()
            - constructor()
            - toString()
            - valueOf()
            - etc...

    - null is the only object that has NO prototype, and is thus the end of the Prototype Chain

    - every js object has a prototype property, which makes inheritance possible

    - prototype property of an object is where we put methods and properties that we want other objects to inherit

    - Constructor's prototype property is NOT the prototype of the Constructor itself, but the prototype of ALL instances that are created through it

    - when a certain method/property is called, the search starts in the object itself.
        - if it cannot be found, the search moves UP to the object's prototype
            - this continues until the object is found (prototype chain)

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////*/

/*
// function constructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// essentially adds another this property on the fly .. super powerful
Person.prototype.calcAge = function() {
        console.log(this.name + " is " + (2018 - this.yearOfBirth) + " years old.");
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1984, 'driver');
var jane = new Person('Jane', 1986, 'teacher');
var mike = new Person('Mike', 1950, 'driver');

john.calcAge();
jane.calcAge();
mike.calcAge();
*/


// creating objects
/*
var personProto = {
    calcAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1984;
john.job = 'driver';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1986},
    job: { value: 'designer'}
})
*/

// primitives vs objects

// primitives 
// var a = 22;
// var b = 33;
// a = 44;
// console.log(a);
// console.log(b);

// //objects 
// var o1 = {
//   name: 'James',
//   age: 34
// };

// var o2 = o1;
// o1.age = 55;
// console.log(o1.age);
// console.log(o2.age);


// // functions 
// var age = 33;
// var obj = {
//   Name: 'Mike',
//   City: 'Portland'
// };

// function change(a, b) {
//   a = 30; 
//   b = 'Seattle'
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);


// passing functions as arguments
/*
var years = [1984, 1986, 1990, 2000, 2009];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2019 - el;
}

function fullAge(el) {
  return el >= 18;
}

function hRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, fullAge);
console.log(fullAges);

var rates = arrayCalc(ages, hRate);
console.log(rates);

console.log("A person born in " + years[0] + " has a max heart rate of " + ages[0] + " bpm.");
console.log("A person born in " + years[1] + " has a max heart rate of " + ages[1] + " bpm.");
console.log("A person born in " + years[2] + " has a max heart rate of " + ages[2] + " bpm.");
*/


// functions returning functions
/*
function iQuestion(job) {
  if (job === 'designer') {
    return function(name) {
      console.log(name + ', can you please explain what UX design is?');
    }
  } else if (job === 'teacher') {
    return function(name) {
      console.log('What subject do you teach, ' + name + "?");
    }
  } else {
    return function(name) {
      console.log(name + ', what do you do?');
    }
  }
}

var designerQ = iQuestion('designer');
var teacherQ = iQuestion('teacher');

teacherQ('Mike');
designerQ('Thomas');
*/

// immediately invoked function expressions (iife)