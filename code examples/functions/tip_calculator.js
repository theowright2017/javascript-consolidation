//bills: 124, 48, 268

var tips = [];
var totalPayments = [];
var tip = 0;

var calculateTip = function(bill){
  if (bill < 50){
    tip = bill * 0.2;
  } else if (bill >= 50 && bill <= 200){
    tip = bill * 0.15;
  } else {
    tip = bill * 0.1;
  }
  tips.push(tip);
  totalPayments.push(bill + tip);

  console.log(tips);
  console.log(totalPayments);
}

console.log(calculateTip(45))
console.log(calculateTip(70))
console.log(calculateTip(150))


//the above is how i first answered, however below is much better solution

//important note for functions is single responsibility

// ******break functions down to lowest and simplest parts, use seperate function for each step of process******

//** also note how tips is calculated, by using index of array


function tipCalculator(bill) {
  var tip;
  if (bill < 50){
    tip = 0.2;
  } else if (bill >= 50 && bill <= 200){
    tip = 0.15;
  } else {
    tip = 0.1;
  }
  return tip * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])]
var totalPayments =
        [tips[0] + bills[0],
         tips[1] + bills[1],
         tips[2] + bills[2]]

console.log(bills);
console.log(tips);
console.log(totalPayments);






//
