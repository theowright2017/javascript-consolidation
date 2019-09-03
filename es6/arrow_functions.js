// arrow functions

// arrow function allows to set argument, if more than one, extra parenthesis needed.  then the arrow acts as the function itself, and anything afterwards is the return statement.  if more than one return line, then curly brackets are required

const years = [1990, 1965, 1982, 1937];


//ES5
var ages5 = years.map(function(el) {
  return 2016 - el;
});

console.log(ages5);


//ES6
// (argument, operator =>, return)
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`)
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
















//
