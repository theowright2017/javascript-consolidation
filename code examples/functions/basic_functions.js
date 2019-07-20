//these can be run in terminal using
//node basic_functions.js


//
function calculateAge(birthYear) {
  return 2019 - birthYear;
}
var ageMe = calculateAge(1987);
console.log(ageMe);


//uses previous function
function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var yearsUntil = 65 - age;
  console.log(`${firstName} will retire in ${yearsUntil} years`);
}

// var years = yearsUntilRetirement(1987, "Theo")
yearsUntilRetirement(1987, "Theo")


//















////
