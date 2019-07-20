//bills: 124, 48, 268, 180, 42
// 20% < 50,
//15% 50->200,
//10% 201+


var john = {
  bills: [124, 48, 268, 180, 42],
  finalAmounts: [],
  tips: [],
  calcTip: function() {
    for (var i = 0; i < this.bills.length; i++){
    if (this.bills[i] < 50){
      this.tip = 0.2;
    } else if (this.bills[i] >= 50 && this.bills[i] <= 200){
      this.tip = 0.15;
    } else {
      this.tip = 0.1;
    }
    //
    this.tips.push(this.tip * this.bills[i]);
    this.finalAmounts.push(this.bills[i] + this.tips[i]);
  }
}
}

//need to call object method for it to be ran
john.calcTip()
console.log(john.finalAmounts);



//EXTENSION//
//mark has different bills and tipping amounts
// 77, 375, 110, 45
// 20% < 100,
// 10% 100->300,
// 25% > 300


var mark = {
  bills: [77, 375, 110, 45],
  finalAmounts: [],
  tips: [],
  calcTip: function() {
    for (var i = 0; i < this.bills.length; i++){
    if (this.bills[i] < 100){
      this.tip = 0.2;
    } else if (this.bills[i] >= 100 && this.bills[i] <= 300){
      this.tip = 0.1;
    } else {
      this.tip = 0.25;
    }
    //
    this.tips.push(this.tip * this.bills[i]);
    this.finalAmounts.push(this.bills[i] + this.tips[i]);
  }
}
}

mark.calcTip()
console.log(mark.finalAmounts);
console.log(mark.tips);


//calculate average of tips 
var average = function(tips){
  var total = 0;
  for ( var i = 0; i < tips.length; i++){
    total += tips[i];
  }
  return total / tips.length
}

console.log(average(mark.tips));









//
