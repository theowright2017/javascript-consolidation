//closures

// closure means the inner function stores the variables of the parent function, to use even after the parent function has already been returned

function retirement(retirementAge) {
  var a = ' years left to retirement.';
  return function(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log((retirementAge - age) + a);
  }
}

// as this returns a function, by storing it to a variable, the variable turns into a function


var retirementUS = retirement(66);
retirementUS(1990);

retirement(66)(1990);


//////////////////

// after function returns and execution context has gone, the inner function remains in execution stack and scope chain remains intact


///////////////////

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

///rewrite interview function

console.log("//////////");


// function retirement(retirementAge) {
//   var a = ' years left to retirement.';
//   return function(yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }


function interviewQuestion(job) {
  var b = ' you work as a ';
  return function(name) {
    console.log(name + b + job);
  }
}

var teacher = interviewQuestion('teacher')("John");



console.log("//////////////////");
//good example using BIND

var years = [1999, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);










//
