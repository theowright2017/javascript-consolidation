///////////////////////////////////////
// Lecture: Hoisting

////////// function hoisting
calculateAge(1987);
// retirement(1990);
function calculateAge(year){
  console.log(2019 - year);
}

var retirement = function(year){
  console.log(65 - (2019 - year));
}


///////// variable hoisting

console.log(age);
var age = 23;

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
foo();
// console.log(age);

// 65
// 23

////// the first log executes age from within foo(), because that is stored in global context, in creation phase
///// second log uses variable object from execution phase, which contains variables

//**** therefore, foo() age, outside of the function, has now been overwritten with global age.  however the age within foo() is still 65, and cann still be called by calling the foo() function.

// bigges takeaway from hoising:
// we can use function declarations before we actually declare them in code....
