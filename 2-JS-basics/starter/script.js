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

/*
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
*/


///////////////////////////////////////////////////
// function statements and expressions
////////////////////////////////////////////////////

// function declaration
// function wdyd (job,firstName);

// function expression 
/*
var wdyd = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code. Would be fun, except kids.';
        case 'driver':
            return firstName + ' races motorcycles for a living. Dream Job!';
        case 'designer':
            return firstName + ' creates new machine languages. Too much math for me.';
        default:
            return firstName + ' needs to get a fucking job.';
    }
}

console.log(wdyd('driver', 'Lief'));
*/
// function expressions return an immediate result, while function declarations do not



///////////////////////////////////////////////////
// arrays
////////////////////////////////////////////////////
/*
// new array
var names = ['Lief', 'Chris', 'Kelsey'];
var years = new Array(1984, 1986, 1990);
console.log(names[0]);
console.log(names.length);

// mutate the array
names[3] = 'Marcus';
console.log(names);

names[5] = 'Jessica';
console.log(names);
console.log(names.length);

// different data types
var james = ['James', 'Bond', 1984, true];
console.log(james);
console.log(' ^ this is an array.');

james.push('green');
console.log(james);
console.log(' ^ push method -- adds element to the end.');

james.unshift('Mr.');
console.log(james);
console.log(' ^ unshift method -- adds element to the beginning.');

james.shift();
console.log(james);
console.log(' ^ shift method -- removes element from beginning.');

james.pop();
console.log(james);
console.log(' ^ pop method -- removes element from the end.')

console.log(james.indexOf(1984));
console.log(james.indexOf(33));

var isDesigner = james.indexOf('designer') === -1 ? 'James is NOT a designer. James is a motorcycle racer.' : 'You already know this dude has the coolest job ever.';
console.log(isDesigner);

// coding challenge 2 

function calcTip(bill) {
     var percent;
     if (bill < 50) {
          percent = 0.2;
     } else if (bill >= 50 && bill < 200) {
          percent = 0.15;
     } else {
          percent = 0.1;
     } return (percent * bill);
}

console.log(calcTip(500));


var bills = [124, 48, 268];
var tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])];
var finals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(tips, finals);
*/

///////////////////////////////////////////////////
// objects and properties 
////////////////////////////////////////////////////
// key:value pairs
// in arrays, order matters. objects, order does not matter
/*
//object literal 
var james = {
     firstName: 'James',
     lastName: 'Bond',
     birthYear: 1984,
     family: ['MoneyPenny', 'Q', 'M', 'Felix'],
     job: 'driver',
     isMarried: true
}; 
console.log(james);
console.log(james.firstName);
console.log(james.lastName);
var bY = 'birthYear';
console.log(james[bY]);

// can still mutate these properties 
james.job = 'teacher';
james['isMarried'] = false;
console.log(james);

// new Object() syntax 
var jen = new Object();
jen.name = 'Jennifer';
jen.birthYear = 1986;
jen.lastName = 'Cain';
console.log(jen);
*/

///////////////////////////////////////////////////
// objects and methods
////////////////////////////////////////////////////
// objects can hold other types of data
/*
var james = {
     firstName: 'James',
     lastName: 'Bond',
     birthYear: 1984,
     family: ['MoneyPenny', 'Q', 'M', 'Felix'],
     job: 'agent',
     isMarried: true,
     calcAge: function() {
          this.age = 2018 - this.birthYear;
     }
};
james.calcAge();
console.log(james);
*/


// coding challenge 4
/*
var james = {
     fullName: 'James Bond',
     mass: 86.2,
     height: 2.1,
     calcBMI: function() {
          this.bmi = (this.mass / (this.height * this.height));
          return this.bmi; 
     }
}

var mike = {
     fullName: 'Mike Egg',
     mass: 110,
     height: 1.75,
     calcBMI: function () {
          this.bmi = (this.mass / (this.height * this.height));
          return this.bmi;
     }
}

console.log(james,mike);

if (james.calcBMI() > mike.calcBMI()) {
     console.log(james.fullName + ' has a higher BMI of ' + james.bmi);
} else if (mike.bmi > james.bmi) {
     console.log(mike.fullName + ' has a higher BMI of ' + mike.bmi + ' and he is a fat ass.');
} else {
     console.log('These dues have the same exact BMI!');
}
*/

///////////////////////////////////////////////////
// loops and iterations
////////////////////////////////////////////////////
/*
// for loop
// for (var i = 1; i <= 10; i++) {
//      console.log(i);
// } // i = 1 ... i < 10 = true ... console log i ... i + 1 

// for (var i = 0; i <= 20; i+=2) {
//      console.log(i);
// } // i = 0 ... i <= 20 = true ... console log i ... i + 2

// var james = ['James', 'Bond', 1984, 'Agent', true, 'green'];
// for (var j = 0; j < james.length; j++) {
//      console.log(james[j]);
// }

// // while loop
// var jb = 0;
// while (jb < james.length) {
//      console.log(james[jb]);
//      jb++;
// }

// continue and break statements
// will print = string 
var james = ['James', 'Bond', 1984, 'Agent', true, 'green'];
for (var j = 0; j < james.length; j++) {
     if (typeof james[j] !== 'string') continue;
     console.log(james[j]);
}

// will print until != string
for (var j = 0; j < james.length; j++) {
     if (typeof james[j] !== 'string') break;
     console.log(james[j]);
}

// looping backwards 
for (var o = james.length - 1; o >= 0; o--) {
     console.log(james[o]);
}
*/

// coding challenge 5 
/*
var john = {
     fullName: 'John Smith',
     bills: [124, 48, 268, 180, 42],
     calcTips: function () {
          this.tips = [];
          this.finalValues = [];

          for (var i = 0; i < this.bills.length; i++) {
               // what is tip % ? 
               var percent;
               var bill = this.bills[i];

               if (bill < 50) {
                    percent = 0.2;
               } else if (bill >= 50 && bill < 200) {
                    percent = 0.15;
               } else {
                    percent = 0.1;
               }

               // add result to array
               this.tips[i] = bill * percent;
               this.finalValues[i] = bill + bill * percent;
          }
     }
}

var mark = {
     fullName: 'Mark Ruffalo',
     bills: [77, 475, 110, 45],
     calcTips: function () {
          this.tips = [];
          this.finalValues = [];

          for (var i = 0; i < this.bills.length; i++) {
               // what is tip % ? 
               var percent;
               var bill = this.bills[i];

               if (bill < 100) {
                    percent = 0.2;
               } else if (bill >= 100 && bill < 300) {
                    percent = 0.15;
               } else {
                    percent = 0.25;
               }

               // add result to array
               this.tips[i] = bill * percent;
               this.finalValues[i] = bill + bill * percent;
          }
     }
}

function calcAvg(tips) {
     var sum = 0;
     for (var i = 0; i < tips.length; i++) {
          sum = sum + tips[i];
     }
     return sum / tips.length;
}

// calculate 
john.calcTips();
mark.calcTips();

john.average = calcAvg(john.tips);
mark.average = calcAvg(mark.tips);
console.log(john,mark);

john.average > mark.average ? console.log(john.fullName + '\'s family pays higher tips with an average of ' + john.average) : console.log(mark.fullName + '\'s family pays higher tips with an average of ' + mark.average);
*/

