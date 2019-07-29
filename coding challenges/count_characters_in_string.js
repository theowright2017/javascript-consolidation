// ******** see further down for more very useful counting characters code

function charCount(str){
  var result = {};

  for (var i = 0; i < str.length; i++){
    var char = str[i].toLowerCase();
    if (result[char] > 0 ) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}




// really easy method to count characters to object
// result[char]++ is saying get the key of result that matches char, and increase its value by one

//   SCROLL DOWN    \\

// the for loop can be refactored to a 'for of', and also if statement can use regular expression

//
// function charCount(str) {
//   var obj = {};
//   for (var char of str){
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       obj[char] = ++obj[char] || 1;
//     }
//   }
//     console.log(obj);
//   return obj;
//
// }
//
// charCount("HellO WORld !!!");

//if it is just alphanumeric numbers we are looking for, we could refactor further
// sometimes regular expressions are poor performance
//below is higher performance method

//
// function charCount(str) {
//   var obj = {};
//   for (var char of str){
//     char = char.toLowerCase();
//     if (isAlphaNumeric(char)) {
//       obj[char] = ++obj[char] || 1;
//     }
//   }
//     console.log(obj);
//   return obj;
//
// }
//
// function isAlphaNumeric(char){
//   var code = char.charCodeAt(0);
//   if (!(code > 47 && code < 58) &&  // numeric (0-9)
//       !(code > 64 && code < 91) &&  // upper alpha (A-Z)
//       !(code > 96 && code < 123)) { // lower alpha (a-z)
//         return false;
//       }
//       return true;
// }
//
// charCount("HellO WORld !!!");
