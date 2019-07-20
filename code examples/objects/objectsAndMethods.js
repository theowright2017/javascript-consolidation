//objets using functions



var me = {
  firstName: "Theo",
  lastName: "Wright",
  // age: 0,
  birthYear: 1987,
  family: ["Pete", "Amanda"],
  job: {developer: "not yet",
        years: 1},

  //function is now method of 'me'
  //this is referring to me.birthYear
  calcAge: function(){
    this.age = 2019 - this.birthYear;
  }
};

// console.log(me.calcAge());

me.calcAge();
console.log(me.age);







//
