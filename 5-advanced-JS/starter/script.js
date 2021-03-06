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
var a = 22;
var b = 33;
a = 44;
console.log(a);
console.log(b);

//objects 
var o1 = {
  name: 'James',
  age: 34
};

var o2 = o1;
o1.age = 55;
console.log(o1.age);
console.log(o2.age);


// functions 
var age = 33;
var obj = {
  Name: 'Mike',
  City: 'Portland'
};

function change(a, b) {
  a = 30; 
  b = 'Seattle'
}

change(age, obj);

console.log(age);
console.log(obj.city);
