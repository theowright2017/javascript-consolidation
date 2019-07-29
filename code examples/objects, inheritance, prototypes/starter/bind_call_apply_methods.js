// bind, call apply
//CALL

var john = {
  name: "John",
  age: 26,
  job: 'teacher',
  presentation: function(style, timeOfDay) {
    if (style === 'formal'){
      console.log('good ' + timeOfDay + ' everybody! I\'m ' + this.name + ', Im a '
        + this.job + ".  I am "
        + this.age);
    } else if (style === 'friendly'){
      console.log('hey hows it going ' + timeOfDay + ' everybody! I\'m ' + this.name + ', Im a '
        + this.job + ".  I am "
        + this.age);
    }
  }
}

john.presentation('formal', 'morning');

var emily = {
  name: "Emily",
  age: 35,
  job: 'designer'
}

john.presentation.call(emily, 'friendly', 'afternoon')

// allows us to call a method from one object and use it on a different method

// john.presentation.apply(emily, ['friendly', 'afternoon']);
//


////////////////////// BIND
console.log("////////////////");


//bind returns function and stores it to johnFriendly
// it binds 'this' to a particular parameter / value
var johnFriendly = john.presentation.bind(john, 'friendly');

//style is now bound to friendly
johnFriendly('morning');
johnFriendly('night');


var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');













//
