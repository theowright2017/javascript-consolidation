// let & const

//ES5
// function scoped
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);



//ES6
// block scoped
const name6 = 'Jane Smith';
let age6 = 23;
// name6 = 'Jane Miller';

console.log(name6);

///////////////////////////////////////////////////
///////////////////////////////////////////////////











//ES5
function driversLicense(passedTest) {

  if (passedTest) {
    var firstName = "John";
    var yearOfBirth = 1990;


  }
      console.log(firstName + ', born in ' + yearOfBirth + ' can now officially drive a car');
}

driversLicense(true);


//ES6
function driversLicense(passedTest) {
  // console.log(firstName);
  let firstName;
  const yearOfBirth = 1990;

  if (passedTest) {

    firstName = "John";
    yearOfBirth;

  }
  console.log(firstName + ', born in ' + yearOfBirth + ' can now officially drive a car');
}

driversLicense(true);

//with let and const, variables are not function scoped,
// they are block scoped i.e only accessible within same block (within this if statement)
// above works now as let and const are pre defined.
// only way to use const outside of block is to define its actual value first,



//ES5
var i = 23;

for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
// 0 1 2 3 4 5


//ES6
let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
// 0  1  2  3  4  23

///// using var, the variable with the same name becomes the same variable as it is global scoped
// whereas using let, it becomes two seperate variables because it is block scoped









//
