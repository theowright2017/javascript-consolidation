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
