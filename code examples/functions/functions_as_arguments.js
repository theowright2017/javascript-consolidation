//passing functions as arguments

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

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
  return Math.round(206.9 - (0.67 * el));
} else {
  return -1;
}
}

//callback function as we want it to run later when we have other information, use other info as 'el'
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxHeartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(maxHeartRates);

///////////////////






















//
