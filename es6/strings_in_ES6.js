//strings
// startsWith
// endsWith
// includes
// repeat


let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '.  He was born in ' + yearOfBirth + '.  Today he is ' + calcAge(yearOfBirth));


//ES6
//template literals (string interpolation???)
console.log(`This is ${firstName} ${lastName}.  He was born in ${yearOfBirth}.  Today he is ${calcAge(yearOfBirth)} years old.`);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



const name1 = `${firstName} ${lastName}`;

console.log(name1.startsWith('J'));
console.log(name1.endsWith('ith'));
console.log(name1.includes(' '));

console.log(`${firstName} `.repeat(5));










//
