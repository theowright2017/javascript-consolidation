// IIFE

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();


// to write this as 'iife'

(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();


// console.log(score);


(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);


// can only call iife once as it is not assigned to variable

// the goal of iife is for data privacy because the variable within the iife will not affect global context










//
