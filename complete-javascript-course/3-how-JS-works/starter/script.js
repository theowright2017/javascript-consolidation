///////////////////////////////////////
// Lecture: Hoisting

////////// function hoisting
calculateAge(1987);
// retirement(1990);
function calculateAge(year){
  console.log(2019 - year);
}

var retirement = function(year){
  console.log(65 - (2019 - year));
}


///////// variable hoisting

console.log(age);
var age = 23;

function foo() {
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
foo();
// console.log(age);

// 65
// 23

////// the first log executes age from within foo(), because that is stored in global context, in creation phase
///// second log uses variable object from execution phase, which contains variables

//**** therefore, foo() age, outside of the function, has now been overwritten with global age.  however the age within foo() is still 65, and cann still be called by calling the foo() function.

// bigges takeaway from hoising:
// we can use function declarations before we actually declare them in code....








///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
// Hello!Hi!Hey!

//Local scope is not available to parent or global scope, but parent scope is available to child scope.



// Example to show the differece between execution stack and scope chain

//
var d = 'Hello!';
firstNew();

function firstNew() {
    var e = 'Hi!';
    second();

    function second() {
        var f = 'Hey!';
        third()
    }
}

function third() {
    var g = 'John';
    console.log(d + g);
}

//only d & g are within the scope of function third()


///////////////////////////////////////
// Lecture: The this keyword
