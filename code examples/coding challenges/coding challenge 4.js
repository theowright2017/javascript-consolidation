var mark = {
  fullName: "Mark Simms",
  mass: 150,
  height: 1.75,
  calcBMI: function(){
      this.BMI = parseInt((this.mass / (this.height * this.height)).toFixed(2))
  }
}

var john = {
  fullName: "John Smith",
  mass: 135,
  height: 1.86,
  calcBMI: function(){
    return this.BMI = parseInt((this.mass /
    (this.height * this.height)).toFixed(2))
  }
}

mark.calcBMI();
john.calcBMI();
console.log(john, mark);






//
