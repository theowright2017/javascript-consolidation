////first lesson
/// objects, inheritance, prototypes
/*

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
*/

/////////////






//////second lesson
// Object.create

//difference between this and object function is object.create builds an object that inherits directly from the one that we passed into the first argument

// function constructor, newly create object inherits from constructors prototype property

// benefit of object.create, allows us to create complex inheritance structure in an easier way than function constructors, allows us to directly specify which object is prototype.
console.log("Object.create lesson");


var personProto = {
  calculateAgeNew: function(){
    console.log(2019 - this.yearOfBirthNew);
  }
}

var tony = Object.create(personProto);

tony.nameNew = "tony";
tony.yearOfBirthNew = 1990;
tony.jobNew = "teacher";


var joan = Object.create(personProto, {
  nameNew: {value: 'Joan'},
  yearOfBirthNew: {value: 1987},
  jobNew: {value: 'designer'}
});




























//
