var john = {
  name: "john",
  yearOfBirth: 1990,
  job: "teacher"
};


var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function(){
    console.log(2019 - this.yearOfBirth);
    return 2019 - this.yearOfBirth
  }
}

Person.prototype.calculateYearsToRetirement =
  function() {
    console.log('Retirement: ' + (65 - this.calculateAge()));
  }

Person.prototype.lastName = "Smith";




var john = new Person("John", 1990, "teacher")


// this is instantiation, as objects are instances of constructor

// when using new operator, new is empty object, then function is called on it
// 'new' points 'this' to its variable instead of the global object


john.calculateAge();

john.calculateYearsToRetirement();
////////

var jane = new Person("Jane", 1984, "translator")

jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);







//
