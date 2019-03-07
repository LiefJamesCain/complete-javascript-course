// starter file for udemy js course

/*
var firstName = 'James';
var lastName = 'Cain';
var age = 34;

var fullAge = true;
var job = 'Tech Specialist';
var threeYears = 3;

console.log(firstName + " " + lastName + " is " + age + " years old, and 
he is a " + job);
*/
/*
var firstName = 'James';
var age = 34;

console.log(firstName + " is " + age + " years old.");

var job, isMarried;
job = 'Tech Specialist';
isMarried = true;
*/

// variable mutation
/*
console.log(firstName + " is a " + age + " year old " + job + ". Is he 
married? " + isMarried);

age = 'Thirty Five';
job = 'Assassin';

var lastName = prompt('What is his last name?');
console.log(firstName + " " + lastName);
*/

// operators
/*
var now, yearJames, yearJen;
now = 2018;
ageJames = 34;
ageJen = 33;
// math operators
yearJames = now - ageJames;
yearJen = now - ageJen;
console.log(yearJames, yearJen);

//logical operators
var jamesOld = ageJames > ageJen;
console.log("Is James older than Jen? " + jamesOld);

// typeof operator
console.log(typeof jamesOld);
console.log(typeof ageJames);
console.log(typeof "James is old af.");
*/

// operator precedence
/*
var now = 2019;
var yearJames = 1984;
var fullAge = 35;

//multiple operators
var isOld = now - yearJames >= fullAge;
console.log("is old? " + isOld);

// operator grouping
var ageJames = now - yearJames;
var ageMark = 35;
var average = (ageJames + ageMark) / 2;
console.log(average);

// multiple assignments
var a, b;
a = b = (3 + 5) * 4 - 6; // output = 8 * 4 - 6 = 26
console.log(a,b);

// more operators
a *= 2;
console.log(a);
a += 10;
console.log(a);
a += 1;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);


var massLief = 185; //lb
var heightLief = 6.1; //f
var massJen = 155;
var heightJen = 5.85;

var BMILief = massLief / (heightLief * heightLief);
var BMIJen = massJen / (heightJen * heightJen);

var liefHigh = BMILief > BMIJen;
console.log('Is Lief\'s BMI higher than Jen\'s? ' + liefHigh);
console.log(BMILief, BMIJen);
*/

// if else statements
/*
var firstName = 'James';
var civilStatus = 'single';

if (civilStatus === 'married') {
     console.log(firstName + " is married!");
} else {
     console.log(firstName + " is free.");
}

var isMarried = true;

if (isMarried) {
     console.log(firstName + " is married!");
} else {
     console.log(firstName + " is free.");
}

var massLief = 185; //lb
var heightLief = 6.1; //f
var massJen = 155;
var heightJen = 5.85;

var BMILief = massLief / (heightLief * heightLief);
var BMIJen = massJen / (heightJen * heightJen);

if (BMILief > BMIJen) {
     console.log('Lief\'s BMI is definitely higher than Jen\'s.');
} else {
     console.log('There is no way that Jen\'s BMI is higher.');
} console.log(BMILief, BMIJen);
*/

// boolean logic

/*
var firstName = 'John';
var age = 35;

AND (&&) => true if ALL are true
OR (||) => true if ONE is true
NOT (!) => INVERTS true/false value

age >= 20; // => false
age < 30; // => true
!(age < 30); // => false

age >= 20 && age < 30; // => false
age >= 20 || age < 30; // => true


if (age < 13) {
     console.log(firstName + ' is still a boy.');
} else if (age >= 13 && age <= 16) {
     console.log(firstName + ' is a young man.');
} else if (age > 16 && age < 18) {
     console.log(firstName + ' is a young man, most likely making stupid 
decisions and breaking hearts.');
} else if (age == 18) {
     console.log(firstName + ' is now ' + age + '. Time to join the Army 
and become a man.');
} else if (age == 21) {
     console.log(firstName + ' is ' + age + '! This will be a good year.');
} else if (age > 21 && age <= 34) {
     console.log(firstName + ' is in the prime of his life. He should 
work on learning, improving himself and the way he treats others, and 
mastering the things he loves in order to find himself.');
} else if (age >= 35) {
     console.log(firstName + ' is lucky to have made it this far and is 
now considered old. I hope he made the best of his short time on this 
planet.');
}
*/

// ternary operators and switch statements

// ternary =  basically a cleaner way of writing an if else statement
/*
var firstName = 'John';
var age = 34;
var drink = (age >= 18 ? 'beer' : 'juice');

age >= 18 ? console.log(firstName + ' drinks beer.') : 
console.log(firstName + ' drinks ' + drink);

// switch statement
var job = 'instructor';
switch (job) {
     case 'teacher':
     case 'instructor':
         console.log(firstName + ' teaches kids how to code.');
         break;
     case 'driver':
         console.log(firstName + ' drives a car for a living. Boring!');
         break;
     case 'designer':
         console.log(firstName + ' creates art, which is life! I hope 
they design websites.');
         break;
     default:
         console.log(firstName + ' probably works for the CIA, because 
we don\'t know what he does every day.');
}
*/

// falsy values: undefined, null, 0, empty strings, NaN
// truthy = !falsy
/*
var height;
height = 23;

if (height || height === 0) {
     console.log('Variable is defined.');
     console.log(height);
} else {
     console.log('Variable has not been defined.');
}

// equality operators
if (height == '23') {
     console.log('The == operator does type coercion!');
}

johnT = [89, 120, 103];
mikeT = [116, 94, 123];
maryT = [97, 134, 105];

var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
console.log(scoreJohn, scoreMike);

if (scoreJohn > scoreMike) {
    console.log('John\'s team wins with ' + scoreJohn + ' points!');
} else if (scoreJohn < scoreMike) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points!');
} else {
    console.log('There must have been a tie!');
}

*/


// functions 

function calculateAge(birthYear) {
    return 2018 - birthYear;
}
var ageJames = calculateAge(1984);
var ageChris = calculateAge(1989);
var ageKelsey = calculateAge(1988);
console.log(ageJames,ageChris, ageKelsey); 

// DRY = Dont Repeat Yourself!! 

function untilRetire(year, firstName) {
    var age = calculateAge(year);
    var retire = 65 - age;

    if (retire > 0) {
        console.log(firstName + " retires in " + retire + " years.");
    } else {
        console.log(firstName + " should already be retired!");
    }
}

untilRetire(1984, 'Lief');
untilRetire(1985, 'Tyson');
untilRetire(1986, 'Evan');
untilRetire(1987, 'Shayla');
untilRetire(1988, 'Rob');
untilRetire(1950, 'Wanda');