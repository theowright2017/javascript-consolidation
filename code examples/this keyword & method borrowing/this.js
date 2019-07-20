//console.log(this)
// the default 'this' is the window variable object, or the highest level available, that doesn't actually refer to any code

// the this variable is not assigned a different value up until the point that it is actually called within a function, giving it the scope of that function itself.

// this is how we can perform many if calls in many different functions, as it is only ever assigned each time it is called

calculateAge(1987);

function calculateAge(year) {
  console.log(2019 - year);
  // console.log(this);
}

// in the terminal, 'this' is returned as it's full original object


var john = {
  name: "John",
  yearOfBirth: 1990,
  calcAge: function(){
    console.log(this);
    console.log(2019 - this.yearOfBirth);

    //this is not method, so now refers to window object
    function innerFunction(){
    console.log(this);
  }
}
}

john.calcAge();


// this returns the 'john' object

// main takeaway:
// 'this' refers to the object that it is held within,
// when it is called as a method, not a function

// so when saying this.yearOfBirth within the john object, it is identical to calling john.yearOfBirth outside of the object

// this is the whole object



//// METHOD BORROWING

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};

mike.calcAge = john.calcAge;
mike.calcAge();








//
